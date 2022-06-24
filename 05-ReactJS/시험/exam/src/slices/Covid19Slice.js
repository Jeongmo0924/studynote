/**
 * @filename: Covid19Slice.js
 * @description: json서버와 통신하는 비동기함수 + slice(Action함수 + Reducers)
 * @author: 박정모(oooperbjm@gmail.com)
 */

import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

/** 비동기 처리 함수 구현 */
export const covidGet = createAsyncThunk("covid19/getList", async (payload, {rejectWithValue}) => {
    let result = null;

    try {
        result = await axios.get('http://localhost:3001/covid19', {
            params: {
                date_gte: payload ? payload.date_gte : null,
                date_lte: payload ? payload.date_lte : null,
            }
        });
    } catch (e) {
        result = rejectWithValue(e.response);
    }

    return result;
});

/** Slice 정의 */
const Covid19Slice = createSlice({
    name: 'covid19',
    initialState: {
        data: null,      
        loading: false,   
        error: null,   
    },
    reducers: {},
    extraReducers: {
        [covidGet.pending]: (state, {payload}) => {
            return { ...state, loading: true };
        },
        [covidGet.fulfilled]: (state, {payload}) => {
            return {
                data: payload?.data,
                loading: false,
                error: null,
            }
        },
        [covidGet.rejected]: (state, {payload}) => {
            return {
                data: payload?.data,
                loading: false,
                error: {
                    code: payload?.status ? payload.status : 500,
                    message: payload?.statusText ? payload.statusText : 'Server Error',
                }
            }
        }
    }
});

// 리듀서 객체 내보내기
export default Covid19Slice.reducer;