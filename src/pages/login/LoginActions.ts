import {getUserData} from "./loginSlice";
import {AuthData} from "../../types/authUserType";

export const authUser = (userData: AuthData) => {
    return async (dispatch:any) => {
        dispatch(getUserData( {...userData}));
    }
}