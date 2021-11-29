import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../rootReducer";
import {getMyRepos, getRandomGithubText} from "./CommonActions";
import {RandomTextBlock} from "./RandomTextBlock";
import {UserInformation} from "./UserInformation";
import {RepoInformation} from "./RepoInformation";

const DashboardPage = () =>{
    const dispatch = useDispatch();
    const {authData} = useSelector((state: RootState) => state.login);
    const {randomText} = useSelector((state: RootState) => state.common);
    const {myRepoList} = useSelector((state:RootState) => state.common);
    const [repoList, setRepoList] = useState([]);

    useEffect(()=>{
        dispatch(getRandomGithubText());
        dispatch(getMyRepos());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    useEffect(()=>{
        if(myRepoList?.length>0){
            setRepoList(myRepoList.map( (rep: any) => {
                return {
                    name : rep.full_name,
                    link : rep.html_url,
                    language: rep.language
                }
            }))
        }

    },[myRepoList])

    return (
        <div className='dashboard-page'>
            <RandomTextBlock randomText={randomText}/>
            <UserInformation authData={authData}/>
            <RepoInformation repoList={repoList} />
        </div>
    )
}

export default DashboardPage;