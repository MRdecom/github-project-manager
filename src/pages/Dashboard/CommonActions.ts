import axios from "axios";
import { Octokit } from "@octokit/core";
import http from "../../http";
import {AppDispatch} from "../../store";
import {getRandomText} from "./CommonSlice";

export const getRandomGithubText = (): any => {
    return (dispatch: AppDispatch) => {
        http.get('/zen').then(resp=> {
                dispatch(getRandomText({randomText: resp.data}))
            }).catch((err)=>{
            dispatch(getRandomText({randomText: 'there is nothing here.'}))
        })
    }
}

// TODO: repo listesi hazırlancak.
export const getUserDetail = (authData: any): any => {
    return (dispatch: (arg0: { payload: { randomText: string; }; type: string; }) => void) => {
        console.log(authData.credential);

        const octokit = new Octokit({ auth: authData.credential.accessToken });

        octokit.request('GET /users/{username}/subscriptions', {
            username: 'MRdecom'
        }).then(r => {
            debugger
            console.log(r);
        });
    }
}


// UPDATE: /repos/{owner}/{repo}
// DELETE: /repos/{owner}/{repo}