import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../rootReducer";
import {getRandomGithubText} from "./CommonActions";
import {RandomTextBlock} from "./RandomTextBlock";
import {UserInformation} from "./UserInformation";

const DashboardPage = () =>{
    const dispatch = useDispatch();
    const {authData} = useSelector((state: RootState) => state.login);
    const {randomText} = useSelector((state: RootState) => state.common);

    useEffect(()=>{
        dispatch(getRandomGithubText());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    return (
        <div className='dashboard-page'>
            <RandomTextBlock randomText={randomText}/>
            <UserInformation authData={authData}/>
        </div>
    )
}

export default DashboardPage;