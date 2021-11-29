import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {authUser} from "./LoginActions";
import {Header} from "./Header";
import {Button, TextInput} from "../../components";

const LoginPage = () =>{
    const dispatch = useDispatch();
    const [nameInput,setNameInput] = useState('');

    const nameOnChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNameInput(e.target.value);
    }

    const signInOnClickHandler = () => {
        dispatch(authUser(nameInput));
    }

    return (
        <div className='login-page'>
            <div className='form-block'>
                <Header/>
                <TextInput label='Username or email address' onChange={nameOnChangeHandler}/>
                <Button buttonText='Sign in' onClick={signInOnClickHandler}
                />
            </div>
        </div>
    )
}

export default LoginPage;