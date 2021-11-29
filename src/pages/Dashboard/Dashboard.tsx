import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../rootReducer";
import {getRandomGithubText, getUserDetail} from "./CommonActions";

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
            <p onClick={()=>{dispatch(getUserDetail(authData))}}><strong>Some GitHub Words : </strong>{randomText}</p>
            <div className='user-information-block'>
                <h3>User Information</h3>
                <img className='avatar' src={authData.user.photoURL} alt="User"/> <br/>
                <strong>username : </strong> {authData.user.displayName} <br/>
                <strong>email : </strong>{authData.user.email} <br/>
            </div>
        </div>

    )
}

export default DashboardPage;