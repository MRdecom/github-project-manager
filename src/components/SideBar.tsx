import React from 'react';
import {Link} from 'react-router-dom'

const SideBar = () =>{
    const signOutUser = () => {
        // TODO: add signOut method
        console.log('signOut!!')
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