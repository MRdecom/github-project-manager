import { combineReducers } from "@reduxjs/toolkit";
import loginReducer from './pages/login/loginSlice';
const rootReducer = combineReducers({
    login: loginReducer
});

export type RootState = ReturnType<any>;

export default rootReducer;