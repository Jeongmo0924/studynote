import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

/** 비동기 처리 함수 구현 */
// payload는 이 함수를 호출할 때 전달되는 파라미터
// const 'action함수명' // createAsyncThunk('함수별칭', ... )
export const userList = createAsyncThunk("mecall/userlist", async (payload, {rejectWithValue}) => {
    let result = null;

    try {
        // get('URL)
        result = await axios.get('https://www.mecallapi.com/api/users', {
            params: {
                search: payload
            }
        })
    } catch (e) {
        // 에러 발생시 `rejectWithValue()` 함수에 에러 데이터를 전달하면 extraReducers의 rejected 함수가 호출된다.
        result = rejectWithValue(e.response);
    }

    return result;
});

/** Slice 정의(Action함수 + Reducers의 개념) */
const UserSlice = createSlice({
    // name: 상태값 별칭
    name: 'users',
    initialState: {
        data: null,
        // id: null,
        // fname: null,
        // lname: null,
        // username: null,
        // avatar: null,
        loading: false,
        error: null,
    },
    // 내부 action 및 동기 action
    reducers: {},
    // 외부 action 및 비동기 action(Ajax용)
    extraReducers: {
        [userList.pending]: (state, {payload}) => {
            return { ...state, loading: true };
        },
        [userList.fulfilled]: (state, {payload}) => {
            return {
                data: payload?.data,
                // id: payload?.data?.id,
                // fname:  payload?.fname,
                // lname:  payload?.lname,
                // username:  payload?.username,
                // avatar:  payload?.avatar,
                loading: false,
                error: null,
            }
        },
        [userList.rejected]: (state, {payload}) => {
            return {
                id: null,
                fname: null,
                lname: null,
                username: null,
                avatar: null,
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
export default UserSlice.reducer;