import {
    LOGIN_REQUEST , 
    LOGIN_SUCCESS ,
    LOGIN_FAIL ,
    REGISTER_REQUEST ,
    REGISTER_SUCCESS , 
    REGISTER_FAIL ,
    RESETPASSWORD_REQUEST,
    RESETPASSWORD_SUCCESS,
    RESETPASSWORD_FAIL,
    CLEAR_ERRORS
} from '../constants/authConstants';

export const authReducer = (state = { user : null } , action ) => {
    switch (action.type) {
        case LOGIN_REQUEST:
        case REGISTER_REQUEST:
        case RESETPASSWORD_REQUEST:
            return {
                loading : true 
            }
        case LOGIN_SUCCESS: 
        case REGISTER_SUCCESS: 
        case RESETPASSWORD_SUCCESS:
            return {
                loading : false ,
                user : action.payload ,
            }
        case LOGIN_FAIL:
        case REGISTER_FAIL: 
        case RESETPASSWORD_FAIL:
            return {
                loading : false ,
                loginError : action.payload 
            }
        case CLEAR_ERRORS: 
            return {
                loading : false ,
                loginError : null
            }
        default:
            return state ;
    }
}