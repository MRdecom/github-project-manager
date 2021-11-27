import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";

const store = configureStore({
    reducer: rootReducer,
    middleware: [
        ...getDefaultMiddleware()
    ]
});

export type AppDispatch = typeof store.dispatch;
export default store;