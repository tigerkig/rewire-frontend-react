import './styles.css';
import { Link } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useDispatch , useSelector } from 'react-redux';
import { login } from '../../../redux/actions/authActions';
import { useEffect } from 'react';
import { ReactComponent as Eye } from "../../../assets/images/icon_eye.svg";
import { FaEyeSlash } from 'react-icons/fa';
import React, { useState } from "react";
import logoImg from '../../../assets/images/logo_horizontal.svg';


const LoginForm = ( { email , setEmail , password , setPassword }) => { 
    const dispatch = useDispatch();
    const { loginError , loading } = useSelector(state => state.auth);
    const navigate = useNavigate();

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('email', email);
        formData.append('password', password);

        dispatch(login(formData , toast , navigate));
    }

    useEffect(() => {
        if(loginError){
            toast.error(loginError);
            dispatch({ type : "CLEAR_ERRORS" });
        }
    }, [loginError]);
    const [showpassword, setshowpassword] = useState(true);

    return (
            <div className='loginForm'>
                <div className='mobileHeaderCard'>
                  
                </div>
                <div className='signRight'>
                <div className="form-container p-4 flex flex-col gap-4 bg-pure dark:bg-dark_secondary rounded-md">
                <div className='text-center font-semibold text-secondary dark:text-light    '>
                    <p className='signAccSub'>Olá outra vez!</p>
                </div>
                <form className="form mt-4" onSubmit={handleLoginSubmit}>
                    <div className="form-control">
                        <input 
                        type="text" 
                        placeholder="none"
                        className="form-input"
                        value={email}
                        name='email'
                        onChange={(e)=>setEmail(e.target.value)}
                        />
                        <label className="form-label">Email</label>
                    </div>
                    <div className="form-control passwordForm">
                        <input 
                        type={showpassword ? "text" : "password"} 
                        placeholder="none"
                        className="form-input"
                        value={password}
                        name='password'
                        onChange={(e)=>setPassword(e.target.value)}
                        />
                        <label className="form-label">Palavra-passe</label>
                     
                        <div className='passwordEyeIcon'>
                            {
                                showpassword ?

                                <FaEyeSlash onClick={()=>setshowpassword(false)} className='closeEyeIcon' />
                                :
                                <Eye onClick={()=>setshowpassword(true)}/>
                            }
                            
                        </div>
                    </div>
                    <div className='login_forgotPassword'>
                        <span><Link to="/forgot-account">Esqueceu-se da sua palavra-passe?</Link></span>
                    </div>
                    <div className='my-4'>
                        <button type="submit" className='btn-primary w-full loginBtn'>
                            {
                            loading 
                            ? 
                                <BeatLoader size={16} color='#fff' /> 
                            : 
                                'Entrar'
                            }
                        </button>
                    </div>
                    <div className='signformFooter'>
                        <p>Ainda não tem uma conta?&nbsp; </p><span><Link to = '/register'>Criar conta</Link></span>
                    </div>
                </form>
                
            </div>
        </div>
            </div>
            
       
    )
}

export default LoginForm;