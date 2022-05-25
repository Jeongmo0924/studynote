import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';

import newsSlice from './slices/newsSlice';

const store = configureStore({
    reducer: {
        news: newsSlice,
    },
    middleware : [...getDefaultMiddleware({serializableCheck: false})],
    devTools: true,
});

export default store;