import {getUserData} from "./loginSlice";
import {signInWithPopup, GithubAuthProvider, signOut} from 'firebase/auth';
import {auth} from "../../firebase-config";
import { AuthData } from "../../types/authUserType";

const provider = new GithubAuthProvider();

export const authUser = (user: string): any => {
    return (dispatch: (arg0: { payload: AuthData; type: string; }) => void) => {
        provider.setCustomParameters({
            'login': user
        });

        signInWithPopup(
            auth,
            provider
        ).then((result)=>{
            const credential = GithubAuthProvider.credentialFromResult(result) ?? {};
            const userData = result.user;
            dispatch(getUserData( {user:userData, credential}));

        }).catch((error) => {
            const credential = GithubAuthProvider.credentialFromError(error) ?? {};
            dispatch(getUserData( {error:{
                    errorCode : error.code,
                    errorMessage : error.message,
                    email : error.email
                }, credential:credential}));

        });
    }
}

export const logOutAuth = () => {
    return async (dispatch: (arg0: { payload: AuthData; type: string; }) => void) => {
        dispatch(getUserData( {user:{}, credential:{}}));
        await signOut(auth);
    }
}