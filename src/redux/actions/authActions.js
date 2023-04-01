import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
    REGISTER_FAIL
} from '../constants/authConstants';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';

const baseUrl = process.env.REACT_APP_API_URL;

export const login = (userData, toast, navigate) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });
        axios({
            method : "post",
            url : baseUrl + "/login",
            data:  userData,
            headers : {"Content-Type": "application/json"},
        })
        .then((response) => {
            let returnData = response.data;
            if(returnData.result === "loginFailed"){
                dispatch({ type: REGISTER_SUCCESS, payload: returnData });
                toast.error('Por favor, insere os dados corretamente');
            }else{
                let returnData = response.data;
                dispatch({ type: REGISTER_SUCCESS, payload: returnData });
                localStorage.setItem('user', JSON.stringify(returnData));
                // toast.success('Login Success.');
                navigate('/onboarding');
            }
        })
    } catch (error) {
        console.log('login Error', error);
        dispatch({ type: LOGIN_FAIL, payload: error?.response?.data?.message || "Something went wrong." });
    }
}

export const register = (userData, toast, navigate) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_REQUEST });
        axios({
            method : "post",
            url : baseUrl + "/signup",
            data:  userData,
            headers : {"Content-Type": "application/json"},
        })
        .then((response) => {
            let returnData = response.data;
            if(returnData.result === "registered"){
                console.log("registered already");
                dispatch({ type: REGISTER_SUCCESS, payload: returnData });
                toast.warning('You are already login.');
            }else{
                let returnData = response.data;
                dispatch({ type: REGISTER_SUCCESS, payload: returnData });
                localStorage.setItem('user', JSON.stringify(returnData));
                // toast.success('Registeration successful.');
                navigate('/onboarding');
            }
            
        })

    } catch (error) {
        console.log('Register Error', error);
        dispatch({ type: REGISTER_FAIL, payload: error?.response?.data?.message || "Something went wrong." })
    }
}