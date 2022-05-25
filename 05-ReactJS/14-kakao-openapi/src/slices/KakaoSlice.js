import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = {
    web: 'https://dapi.kakao.com/v2/search/web',
    blog: 'https://dapi.kakao.com/v2/search/blog',
    cafe: 'https://dapi.kakao.com/v2/search/cafe',
    book: 'https://dapi.kakao.com/v3/search/book',
    image: 'https://dapi.kakao.com/v2/search/image',
};

const API_KEY = 'a2c94e649a4c25ea4ee592b869a04a12';

/** 비동기 처리 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터
// const 'action함수명' // createAsyncThunk('함수별칭', ... )
export const getKakaoSearch = createAsyncThunk("KakaoSlice/getKakaoSearch", async (payload, {rejectWithValue}) => {
    let result = null;

    try {
        // get('URL)
        result = await axios.get(API_URL[payload.api ? payload.api : 'web'], {
            params: {
                query: payload.query,
                sort: payload.sort ? payload.sort : null,
                page: payload.page ? payload.page : 1,
                size: payload.size ? payload.size : 20
            },
            headers: {Authorization: `KakaoAK ${API_KEY}`}
        });
    } catch (e) {
        // 에러 발생시 `rejectWithValue()` 함수에 에러 데이터를 전달하면 extraReducers의 rejected 함수가 호출된다.
        result = rejectWithValue(e.response);
    }

    return result;
});

/** Slice 정의(Action함수 + Reducers의 개념) */
const KakaoSlice = createSlice({
    // name: 상태값 별칭
    name: 'kakao',
    initialState: {
        meta: null,
        documents: null,
        loading: false,
        error: null,
    },
    // 내부 action 및 동기 action
    reducers: {},
    // 외부 action 및 비동기 action(Ajax용)
    extraReducers: {
        [getKakaoSearch.pending]: (state, {payload}) => {
            return { ...state, loading: true };
        },
        [getKakaoSearch.fulfilled]: (state, {payload}) => {
            return {
                meta: payload?.data?.meta,
                documents: payload?.data?.documents,
                loading: false,
                error: null,
            }
        },
        [getKakaoSearch.rejected]: (state, {payload}) => {
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
export default KakaoSlice.reducer;