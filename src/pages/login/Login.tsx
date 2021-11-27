import React, {useEffect, useState} from 'react';
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import {useDispatch, useSelector} from "react-redux";
import {authUser} from "./LoginActions";
import {RootState} from "../../rootReducer";

const LoginPage = () =>{
    const dispatch = useDispatch();
    const loginData = useSelector((state: RootState) => state.login);
    const [nameInput,setNameInput] = useState('');

    useEffect(()=>{
        console.log(loginData.authData);
        debugger
    },[loginData])

    return (
        <div className='login-page'>
            <div className='form-block'>
                <div className='login-form-header'>
                    <img src="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg" alt="github-icon"/>
                    <p>Login With Github Account and Manage Your Project</p>
                </div>
                <TextInput label='Username or email address' onChange={(a)=>{
                    setNameInput(a.target.value);}}/>
                <TextInput label='Password' onChange={(a)=>{
                    console.log(a.target.value);}}
                type='password'/>
                <Button buttonText='Sign in' onClick={()=>{dispatch(authUser({name: nameInput, token: '111'}))}} />
            </div>
        </div>
    )
}

export default LoginPage;