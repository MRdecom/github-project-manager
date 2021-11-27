import React from 'react';
import Header from "../components/Header";
import SideBar from "./SideBar";

type LayoutProp = {
    children: React.ReactNode
}

const loginUserData = {
    name:'Serkan',
    role:'admin'
}

const Layout = ({children}: LayoutProp) =>{
    return (
        <div className='layout'>
            <Header pageTitle='GitHub Project Manager' userName={loginUserData.name} userRole={loginUserData.role}/>
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