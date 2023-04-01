import './style.css';
import { useState } from 'react';
import LoginForm from '../../../components/auth/login'
import RegisterLeft from '../../../components/auth/registerLeft';

const Login = () => {
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    return (
        <div className='login__container'>
            <LoginForm 
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
            />
            <RegisterLeft />
            
        </div>
    )
}

export default Login