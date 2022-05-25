import {configureStore} from '@reduxjs/toolkit';
import UserSlice from './slices/UserSlice';

const store = configureStore({
    reducer: {
        // 개발자가 직접 작성한 reducer들이 명시되어야 한다.
        users: UserSlice
    },
    // 미들웨어를 사용하지 않을 경우 이 라인 생략 가능 (redux-thunk 사용시 필수)
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true,
});

export default store;