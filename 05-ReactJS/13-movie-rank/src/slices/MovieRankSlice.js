import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

/** 비동기 처리 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터
// const 'action함수명' // createAsyncThunk('함수별칭', ... )
export const getMovieRank = createAsyncThunk("getMovieRank/", async (payload, {rejectWithValue}) => {
    let result = null;

    const API_URL = 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json';
    const API_KEY = 'c04527651d4033799a89612c1e5b4fb1';

    try {
        // get('URL)
        result = await axios.get(API_URL, {
            params: {
                key : API_KEY,
                targetDt : payload.targetDt
            }
        });

        // 에러가 발생하더라도 HTTP 상태 코드는 200으로 응답하기 때문에 catch문 동작 X
        // 직접 에러를 감지해야 함(백엔드 싸대기부터)
        if (result.data.faultInfo !== undefined) {
            const err = new Error();
            err.response = {status: 500, statusText: result.data.faultInfo.message};
            throw err;
        }
    } catch (e) {
        // 에러 발생시 `rejectWithValue()` 함수에 에러 데이터를 전달하면 extraReducers의 rejected 함수가 호출된다.
        result = rejectWithValue(e.response);
    }

    return result;
});

/** Slice 정의(Action함수 + Reducers의 개념) */
const MovieRankSlice = createSlice({
    // name: 상태값 별칭
    name: 'movieRank',
    initialState: {
        data: null,         // Ajax 처리를 통해 수신된 데이터
        loading: false,     // 로딩 여부
        error: null,        // 에러 정보
    },
    // 내부 action 및 동기 action
    reducers: {},
    // 외부 action 및 비동기 action(Ajax용)
    extraReducers: {
        [getMovieRank.pending]: (state, {payload}) => {
            return { ...state, loading: true };
        },
        [getMovieRank.fulfilled]: (state, {payload}) => {
            return {
                data: payload?.data,
                loading: false,
                error: null,
            }
        },
        [getMovieRank.rejected]: (state, {payload}) => {
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
export default MovieRankSlice.reducer;