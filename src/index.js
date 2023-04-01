import './App.css';
import "swiper/css/bundle";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeProvider } from './context/themeContext';
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider>
        <Provider store={store}>
            <App />
        </Provider>
    </ThemeProvider>
);


