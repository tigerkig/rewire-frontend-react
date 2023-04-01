import './style.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RegisterLeft from '../../../components/auth/registerLeft';
import { BeatLoader } from 'react-spinners';
import { useEffect } from 'react';
import { ReactComponent as Eye } from "../../../assets/images/icon_eye.svg";
import { FaEyeSlash } from 'react-icons/fa';
import logoImg from '../../../assets/images/logo_horizontal.svg';
import { toast } from 'react-toastify';
import axios from 'axios';

const baseUrl = process.env.REACT_APP_API_URL;

const ForgotAccount = () => {
    const currentUrl = window.location;
    const returnToken = currentUrl.href.substring(currentUrl.href.lastIndexOf('/') + 1);

    const navigate = useNavigate();

    const [search , setSearch] = useState('');
    const [showpassword, setshowpassword] = useState(true);
    const [showConfirmPassword, setshowConfirmPassword] = useState(true);

    const [password1, setPassword1] = useState();
    const [password2, setPassword2] = useState();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password1 === password2){
            const user_email = localStorage.getItem("email");
            const formData = new FormData();
            formData.append('user_email', user_email);
            formData.append('user_newPassword', password1);
            formData.append('returnToken', returnToken);

            axios({
                method : "post",
                url : baseUrl + "/reset_password",
                data : formData,
                headers : {"Content-Type": "application/json"},
            })
            .then((response) => {
                let returnData = response.data;
                if(returnData.result === "updated"){
                    toast.success('Password reset success.');
                    navigate('/login');
                }else{
                    toast.error('Reset password failed');
                    navigate('/reset_password');
                }
            })
        }else {
            toast.error('Insert same password.');
        }
        
    }

    return (
        <div className='forgotPassForm'>
            <div className='loginForm'>
                <div className='mobileHeaderCard'>
                    <div className='mobileHeaderLogo'>
                        {/* <img className='logoImg' src = {logoImg} alt = "Logo" /> */}
                    </div>
                </div>
                <div className='signRight'>
                    <div className="form-container p-4 flex flex-col gap-4 bg-pure dark:bg-dark_secondary rounded-md">
                        <div className='text-center font-semibold text-secondary dark:text-light    '>
                            <p className='signAccSub'>Alterar palavra-passe</p>
                        </div>
                        <form className="form mt-4" onSubmit={handleSubmit}>
                            <div className="form-control passwordForm">
                                <input 
                                type={showpassword ? "password" : "text"} 
                                placeholder="none"
                                className="form-input"
                                value={password1}
                                name='password'
                                onChange={(e)=>setPassword1(e.target.value)}
                                />
                                <label className="form-label">Nova palavra-passe</label>
                            
                                <div className='passwordEyeIcon'>
                                    {
                                        showpassword ?

                                        <FaEyeSlash onClick={()=>setshowpassword(false)} className='closeEyeIcon' />
                                        :
                                        <Eye onClick={()=>setshowpassword(true)}/>
                                    }
                                    
                                </div>
                            </div>
                            <div className="form-control passwordForm">
                                <input 
                                type={showConfirmPassword ? "password" : "text"} 
                                placeholder="none"
                                className="form-input"
                                value={password2}
                                name='password'
                                onChange={(e)=>setPassword2(e.target.value)}
                                />
                                <label className="form-label">Confirmar nova palavra-passe</label>
                            
                                <div className='passwordEyeIcon'>
                                    {
                                        showConfirmPassword ?

                                        <FaEyeSlash onClick={()=>setshowConfirmPassword(false)} className='closeEyeIcon' />
                                        :
                                        <Eye onClick={()=>setshowConfirmPassword(true)}/>
                                    }
                                    
                                </div>
                            </div>
                            <div className='my-4'>
                                <button type="submit" className='btn-primary w-full forgotSendMailBtn'>Continuar</button>
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