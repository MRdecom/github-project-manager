import React, { useState} from 'react';
import {Link, useHistory} from 'react-router-dom'
import {logOutAuth} from "../../../pages/Login/LoginActions";
import {useDispatch} from "react-redux";

const SideBar = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    const [selectedLink, setSelectedLink] = useState(0)
    const signOutUser = async () => {
        dispatch(logOutAuth())
        history.push("/Login");
    }
    return (
        <div className='side-bar'>
            <Link onClick={()=>setSelectedLink(0)} className={`side-bar-link ${selectedLink === 0 ? 'selected':''}`} to="/">Dashboard</Link>
            <Link onClick={()=>setSelectedLink(1)} className={`side-bar-link ${selectedLink === 1 ? 'selected':''}`} to="/settings">Settings</Link>
            <span className='side-bar-link' onClick={signOutUser}>Sign Out</span>
        </div>
    )
}

export default SideBar;