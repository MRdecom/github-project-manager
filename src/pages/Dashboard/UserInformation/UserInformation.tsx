import React, {useEffect, useState} from 'react';
import {ProfileData} from "../../../types/AuthUserType";

type Props = {
    authData: ProfileData
}

const UserInformation = (props: Props) => {
    const [name,setName] = useState('');
    const [photoURL,setPhotoUrl] = useState('');
    const [email,setEmail] = useState('');

    useEffect(()=>{
        if(props.authData?.user){
            setName(props.authData.user?.displayName || '');
            setEmail(props.authData.user?.email || '');
            setPhotoUrl(props.authData.user?.photoURL || '');
        }

    },[props.authData])

    return (
        <div className='user-information-block'>
            <h3>User Information</h3>
            <img className='avatar' src={photoURL} alt="User"/> <br/>
            <strong>Username : </strong> {name} <br/>
            <strong>Email : </strong>{email} <br/>
        </div>
    )
}

export default UserInformation;
