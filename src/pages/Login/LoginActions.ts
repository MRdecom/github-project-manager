import {getUserData} from "./LoginSlice";
import {signInWithPopup, GithubAuthProvider, signOut, signInWithCredential} from 'firebase/auth';
import {auth} from "../../firebase-config";
import history from "../../history";
import {accessToken} from "../../constants/constants";
import {AppDispatch} from "../../store";
import {pageUrls} from "../../constants/pageUrls";

const provider = new GithubAuthProvider();

export const authUser =  (user: string) => {
    return async (dispatch: AppDispatch) => {
        provider.setCustomParameters({
            'login': user
        });
        const result = await signInWithPopup(auth, provider)
        try{
            const credential = GithubAuthProvider.credentialFromResult(result);
            if(!credential || !credential.accessToken){
                throw Error('no credential');
            }
            const userData = result.user;
            dispatch(getUserData( {user:userData, credential}));
            history.push(pageUrls.home)
            localStorage.setItem(accessToken, credential.accessToken)
        } catch (error: any) {
            localStorage.removeItem(accessToken);
            dispatch(getUserData( {error:{},credential:{}}));
        }
    }
}

export const logOutAuth = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(getUserData( {user:{}, credential:{}}));
        await signOut(auth);
        localStorage.removeItem(accessToken)
    }
}

export const reLogin = (token: string) => {
    return async (dispatch: AppDispatch) => {
        try {
            const credential = GithubAuthProvider.credential(token)
            const result = await signInWithCredential(auth,credential);
            const newCredential = GithubAuthProvider.credentialFromResult(result);
            if(!newCredential || !newCredential.accessToken){
                throw Error('no credential');
            }
            const userData = result.user;
            dispatch(getUserData( {user:userData, credential:newCredential}));
            history.push(pageUrls.home)
        } catch (error: any) {
            localStorage.removeItem(accessToken);
            dispatch(getUserData( {error:{},credential:{}}));
        }
    }
}