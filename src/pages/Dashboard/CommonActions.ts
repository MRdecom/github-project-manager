import axios from "axios";
import { Octokit } from "@octokit/core";
import http from "../../http";
import {AppDispatch} from "../../store";
import {getRandomText} from "./CommonSlice";

export const getRandomGithubText = (): any => {
    return (dispatch: AppDispatch) => {
        http.get('/zen').then(resp=> {
                dispatch(getRandomText({randomText: resp.data}))
            }).catch(()=>{
            dispatch(getRandomText({randomText: 'there is nothing here.'}))
        })
    }
}

// TODO: repo listesi hazırlancak.
export const getUserDetail = (userName: string): any => {
    return async (dispatch: AppDispatch) => {
        const result = await http.get(`/users/${userName}/subscriptions`);
        try{
            console.log(result);
        } catch (error){
            console.log(error);
        }
    };
}

// TODO: repo listesi hazırlancak.
export const getMyRepos = (): any => {
    return async (dispatch: AppDispatch) => {
        const result = await http.get(`/user/repos`);
        try{
            console.log(result);
        } catch (error){
            console.log(error);
        }
    };
}

// onClick={()=>{dispatch(getMyRepos())}}


// UPDATE: /repos/{owner}/{repo}
// DELETE: /repos/{owner}/{repo}