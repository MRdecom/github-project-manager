import React, {useEffect, useState} from 'react';
import Header from "../components/Header";
import SideBar from "./SideBar";
import {useSelector} from "react-redux";
import {RootState} from "../rootReducer";

type LayoutProp = {
    children: React.ReactNode
}

const loginUserData = {
    name:'Serkan',
    role:'admin'
}

const Layout = ({children}: LayoutProp) =>{
    const {authData} = useSelector((state: RootState) => state.login);
    const [userName,setUserName] = useState('');

    useEffect(()=>{
        if(authData.user?.displayName){
            setUserName(authData.user.displayName)
        }
    },[authData])

    return (
        <div className='layout'>
            <Header pageTitle='GitHub Project Manager' userName={userName} userRole={loginUserData.role}/>
            <div className='layout-items'>
                <SideBar/>
                <div className='content-block'>
                    {children}
                </div>
            </div>

        </div>
    )
}

export default Layout;