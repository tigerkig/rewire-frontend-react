import './style.css';
import '../../../styles/mediaStyles.css';
import React from 'react'
import RegisterForm from '../../../components/auth/register';
import RegisterLeft from '../../../components/auth/registerLeft';
import { useState } from 'react';

const userInfos = {
    name : "",
    email: "",
    password: "",
  };

const Register = () => {  
    const [user, setUser] = useState(userInfos);
      
    return (
        <div className='register-container'>
            <RegisterForm className = "col-lg-5 col-xs-12" user={user} setUser={setUser} />
            <RegisterLeft />
        </div>
   
    )
}

export default Register