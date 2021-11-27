import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {AuthData} from "../../types/authUserType";

type LoginState = {
    authData: AuthData;
}

const initialState: LoginState = {
    authData: {
        name: '',
        token: 'null'
    }};

const loginSlice = createSlice({
    name: "loginSlice",
    initialState,
    reducers: {
        getUserData(state, action: PayloadAction<AuthData>) {
            state.authData = action.payload ?? initialState;
        }
    }
});

export const {
    getUserData
} = loginSlice.actions;

export default loginSlice.reducer;