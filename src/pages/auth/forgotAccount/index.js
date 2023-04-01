import './style.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterLeft from '../../../components/auth/registerLeft';
// import { BeatLoader } from 'react-spinners';
// import logoImg from '../../../assets/images/logo_horizontal.svg';
import axios from 'axios';
// import {
//     LOGIN_REQUEST,
//     LOGIN_SUCCESS,
//     LOGIN_FAIL,
//     REGISTER_REQUEST,
//     REGISTER_SUCCESS,
//     REGISTER_FAIL
// } from '../../../redux/constants/authConstants';
import { toast } from 'react-toastify';
// import DjangoCSRFToken from 'django-react-csrftoken';
// import DjangoCSRFToken from '../../../components/csrfToken/CsrfToken';

// import cookie from 'react-cookie';



const baseUrl = process.env.REACT_APP_API_URL;

const ForgotAccount = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const setForgotEmail=(e)=>{
        setEmail(e.target.value);
    }

    const forgotPassword = (e) => {
        e.preventDefault();
        const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        
        if(!email || regex.test(email) === false){
            toast.error('Insira seu e-mail correto.')
        } else {
            const formData = new FormData();
            formData.append('user_email', email);
            localStorage.setItem("email", email);
            axios({
                method : "post",
                url : baseUrl + "/forgot_password",
                data : formData,
                headers : {"Content-Type": "application/json"},
            })
            .then((response) => {
                let returnData = response.data;
                if(returnData.result === "mailSendingError"){
                    toast.error('Email sending Error.');
                }else if (returnData.result === 'emailError'){
                    toast.error('Pedimos desculpa. Não conseguimos confirmar a tua identidade com o email fornecido.');
                }else{
                    toast.success('Por favor, verifica o teu email.');
                    // navigate('/forgot-account/verify');
                }
            })
        }
    }
    return (
        <div className='forgotPassForm'>
            <div className='loginForm'>
                <div className='mobileHeaderCard'></div>
                <div className='signRight'>
                    <div className="form-container p-4 flex flex-col gap-4 bg-pure dark:bg-dark_secondary rounded-md">
                        <div className='text-center font-semibold text-secondary dark:text-light    '>
                            <p className='signAccSub'>Esqueceu-se da sua <br />palavra-passe?</p>
                        </div>
                        <form className="form mt-4">
                            <div className="form-control">
                                <input 
                                type="text" 
                                placeholder="none"
                                className="form-input"
                                value={email}
                                name='email'
                                onChange={setForgotEmail}
                                required
                                />
                                <label className="form-label">Email</label>
                            </div>
                            <div className='my-4'>
                                <button type="submit" onClick={forgotPassword} className='btn-primary w-full forgotSendMailBtn'>Continuar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <RegisterLeft />
        </div>
    )
}

export default ForgotAccount;