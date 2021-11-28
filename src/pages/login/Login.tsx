import React, {useEffect, useState} from 'react';
import Button from "../../components/Button";
import TextInput from "../../components/TextInput";
import {useDispatch} from "react-redux";
import {authUser} from "./LoginActions";

const LoginPage = () =>{
    const dispatch = useDispatch();
    const [nameInput,setNameInput] = useState('');

    return (
        <div className='login-page'>
            <div className='form-block'>
                <div className='login-form-header'>
                    <img src="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg" alt="github-icon"/>
                    <p>Login With Github Account and Manage Your Project</p>
                </div>
                <TextInput label='Username or email address' onChange={(a)=>{
                    setNameInput(a.target.value);}}/>
                {/*<TextInput label='Password' onChange={(a)=>{
                    console.log(a.target.value);}}
                type='password'/>*/}
                <Button buttonText='Sign in' onClick={() => dispatch(authUser(nameInput))}
                />
            </div>
        </div>
    )
}

export default LoginPage;