import './styles.css';
import  { Link } from 'react-router-dom';
import Policy from './Policy';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { useDispatch , useSelector } from 'react-redux';
import { register } from '../../../redux/actions/authActions';
import { ReactComponent as Eye } from "../../../assets/images/icon_eye.svg";
import { useEffect } from 'react';
import { FaEyeSlash } from 'react-icons/fa';
import React, { useState } from "react";
import logoImg from '../../../assets/images/logo_horizontal.svg';
 

const RegisterForm = ( {user , setUser}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { registerError , loading } = useSelector(state => state.auth);

    const { 
        name, nif, email, password
    } = user;
    
    const handleRegisterChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
        console.log(user)
      };

    const handleRegisterSubmit = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('nif', nif);
        formData.append('email', email);
        formData.append('password', password);

        dispatch(register(formData , toast , navigate )) 
    }

    useEffect(() => {
        if(registerError){
            toast.error(registerError);
            dispatch({ type : "CLEAR_ERRORS"})
        }
    }, [registerError])

    const [showpassword, setshowpassword] = useState(false);
    const [confirmProtectData, setconfirmProtectData] = useState(true);
      
    return (
        <div className='loginForm'>
            <div className='mobileHeaderCard'>
                {/* <div className='mobileHeaderLogo'>
                    <img className='logoImg' src = {logoImg} alt = "Logo" />
                </div> */}
            </div>
            <div className='signRight'>
                <div className="form-container p-4 flex flex-col gap-4 bg-pure dark:bg-dark_secondary rounded-md">
                    
                    <div>
                        <div className='signForm'>
                            <div className='text-center font-semibold text-secondary dark:text-light    '>
                                <p className='signAccSub'>Criar conta</p>
                            </div>
                            <form className="form mt-4 signFormContent" onSubmit={handleRegisterSubmit}>
                                <div className='form-col-2'>
                                    <div className="form-control">
                                        <input 
                                        type="text" 
                                        placeholder="none"
                                        className="form-input"
                                        value={name}
                                        name='name'
                                        onChange={handleRegisterChange}
                                         required/>
                                        <label className="form-label">Nome</label>
                                    </div>
                                </div>
                                <div className='form-col-2'>
                                    <div className="form-control">
                                        <input 
                                        type="number" 
                                        placeholder="none"
                                        className="form-input"
                                        value={nif}
                                        name='nif'
                                        onChange={handleRegisterChange}
                                         required/>
                                        <label className="form-label">NIF</label>
                                    </div>
                                </div>
                                <div className="form-control">
                                    <input 
                                    type="text" 
                                    placeholder="none"
                                    className="form-input"
                                    value={email}
                                    name='email'
                                    onChange={handleRegisterChange}
                                    required/>
                                    <label className="form-label">Email</label>
                                </div>
                                <div className="form-control passwordForm">
                                    <input 
                                    type={showpassword ? "text" : "password"} 
                                    placeholder="none"
                                    className="form-input"
                                    value={password}
                                    name='password'
                                    onChange={handleRegisterChange}
                                    required/>
                                    <label className="form-label">Palavra-passe</label>
                                    <div className='passwordEyeIcon'>
                                        {
                                            showpassword?

                                            <FaEyeSlash onClick={()=>setshowpassword(false)} className='closeEyeIcon' />
                                            :
                                            <Eye onClick={()=>setshowpassword(true)}/>
                                        }
                                        
                                    </div>
                                </div>
                                {/* <div>
                                    <Policy />
                                </div> */}
                                <div className='flex flex-col gap-4 text-xs text-grays dark:text-gray-300'>
                                    <div className="signConfirm">
                                        <div className="signconfirmP">
                                            <div><input className="signConfirmCheckBox" type="checkbox" onClick={()=>setconfirmProtectData(!confirmProtectData)}/></div>&nbsp;&nbsp; 
                                            <div className="confirmCheckTxt">Confirmo que aceito a cedência dos meus dados pessoais à Psst, cuja Política de <span><a href='https://psst.pt/privacy-notes-and-terms-and-conditions-of-use-rewire-portal-fiducia-portal/'>Privacidade e Proteção de Dados Pessoas</a></span> aqui disponível declaro conhecer e aceitar.</div> 
                                        </div>
                                    </div>
                                </div>
                                <div className='my-4'>
                                    <button type="submit" className='btn-primary w-full signUpBtn' disabled = {confirmProtectData}>
                                        {
                                        loading 
                                        ? 
                                            <BeatLoader size={16} color='#fff' /> 
                                        : 
                                            'Criar'
                                        }
                                    </button>
                                </div>
                            </form>
                            <div className='signformFooter'>
                                <p>Já tem uma conta?&nbsp; </p><span><Link to = '/login'>Entrar</Link></span>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                                    
            </div>
        </div>
        
    )
}

export default RegisterForm;