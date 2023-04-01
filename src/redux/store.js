import { createStore , applyMiddleware , combineReducers } from 'redux';
import thunk  from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { authReducer } from './reducers/authReducer';


const reducers = combineReducers({
    auth : authReducer
});

const initialState = {
    auth : {
        user : localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []
    }
};

const store = createStore(reducers , initialState , composeWithDevTools(applyMiddleware(thunk)));
export default store;