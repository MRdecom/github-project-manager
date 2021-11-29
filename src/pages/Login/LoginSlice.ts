import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {AuthData} from "../../types/AuthUserType";

type LoginState = {
    authData: AuthData;
}

const initialState: LoginState = {
    authData: {
        user: {},
        credential: {}
    }};

const loginSlice = createSlice({
    name: "login",
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