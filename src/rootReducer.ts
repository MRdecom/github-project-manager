import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from './pages/Login/LoginSlice';
import CommonReducer from './pages/Dashboard/CommonSlice';
const rootReducer = combineReducers({
    login: loginReducer,
    common: CommonReducer
});

export type RootState = ReturnType<any>;

export default rootReducer;