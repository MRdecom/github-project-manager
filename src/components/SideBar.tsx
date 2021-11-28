import React from 'react';
import {Link, useHistory} from 'react-router-dom'
import {logOutAuth} from "../pages/login/LoginActions";
import {useDispatch} from "react-redux";

const SideBar = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const signOutUser = async () => {
        dispatch(logOutAuth())
        history.push("/");
    }

    // TODO: add dynamic selection for sidebar
    return (
        <div className='side-bar'>
            <Link className={`side-bar-link selected`} to="/">Dashboard</Link>
            <Link className={`side-bar-link `} to="/settings">Settings</Link>
            <span className='side-bar-link' onClick={signOutUser}>Sign Out</span>
        </div>
    )
}

export default SideBar;