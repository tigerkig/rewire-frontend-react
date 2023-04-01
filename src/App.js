import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Login from './pages/auth/login';
import Register from './pages/auth/register';
import ForgotAccount from './pages/auth/forgotAccount';
import Verify from './pages/auth/forgotAccount/Verify';
import DiscountCard from './pages/discountCard';
import AskCard from './pages/askCard';
import AskCardResult from './pages/askCardResult'; 
import Onboarding from './pages/onboarding';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './styles/utility.css';
import axios from 'axios';
import $ from 'jquery'; 
import DjangoCSRFToken from 'django-react-csrftoken'

const baseUrl = process.env.REACT_APP_API_URL;


function RequireAuth({ children }) {
    const isAuthenticated = localStorage.getItem('user') ? true : false;
    return isAuthenticated ? children : <Navigate to="/login" replace />;
}

function App() {
    return (
        <div className='font-poppins'>
            <ToastContainer
                style={{ fontSize: 15 }}
                position="top-center"
                autoClose={3000}
                hideProgressBar
                closeOnClick
                pauseOnHover
            />
            <Router>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/forgot-account' element={<ForgotAccount />} />
                    <Route path='/reset_password/:id' element={<Verify />} />
                    <Route path='/onboarding' element={<RequireAuth> <Onboarding /> </RequireAuth>} />
                    <Route path='/discount_card' element = {<RequireAuth> <DiscountCard /> </RequireAuth>} />
                    <Route path='/request_card_result' element = {<RequireAuth><AskCardResult /></RequireAuth>} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
