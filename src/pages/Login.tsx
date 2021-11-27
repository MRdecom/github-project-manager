import React from 'react';
import Button from "../components/Button";
import TextInput from "../components/TextInput";
const LoginPage = () =>{
    // TODO: use a context for login information or use redux

    return (
        <div className='login-page'>
            <div className='form-block'>
                <div className='login-form-header'>
                    <img src="https://pbs.twimg.com/profile_images/1414990564408262661/r6YemvF9_400x400.jpg" alt="github-icon"/>
                    <p>Login With Github Account and Manage Your Project</p>
                </div>

                <TextInput label='Username or email address' onChange={(a)=>{
                    console.log(a.target.value);}}/>
                <TextInput label='Password' onChange={(a)=>{
                    console.log(a.target.value);}}
                type='password'/>
                <Button buttonText='Sign in' onClick={()=>{console.log('hgellloooo')}} />
            </div>
        </div>
    )
}

export default LoginPage;