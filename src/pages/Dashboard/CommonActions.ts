import http from "../../http";
import {AppDispatch} from "../../store";
import {getMyRepo, getRandomText, getUserRepoList} from "./CommonSlice";

export const getRandomGithubText = (): any => {
    return async (dispatch: AppDispatch) => {
        const result = await http.get('/zen')
        try{
            dispatch(getRandomText({randomText: result.data}))
        } catch(err){
            dispatch(getRandomText({randomText: 'there is nothing here.'}))
        }
    }
}

export const getUserRepos = (userName: string): any => {
    return async (dispatch: AppDispatch) => {
        const result = await http.get(`/users/${userName}/subscriptions`);
        try{
            debugger
            dispatch(getUserRepoList(result.data))
        } catch (error){
            dispatch(getUserRepoList([]))
        }
    };
}

export const getMyRepos = (): any => {
    return async (dispatch: AppDispatch) => {
        const result = await http.get(`/user/repos`);
        try{
            dispatch(getMyRepo(result.data))
        } catch (error){
            dispatch(getMyRepo([]))
            alert(JSON.stringify(error))
        }
    };
}