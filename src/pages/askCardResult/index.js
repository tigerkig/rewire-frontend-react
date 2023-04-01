import './styles.css';
import '../../styles/mediaStyles.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import successCheck from '../../assets/images/icon_success.png';

const AskCardResult = () => {
    const navigate = useNavigate();

    const completeRequest=()=>{
        navigate('/onboarding');
    }
    return (
        <div className='askCardForm'>
            <div className='askCardResult'>
                <img className='askCardResultImg' src = {successCheck} alt = "cardImg" />
            </div>
            <div className='askCardSub'>
                <div className='askCardTxt'>
                    <p>O seu pedido do cartão Rewire, foi submetido com sucesso</p>
                </div>
            </div>
            <div className='askCardDesc'>
                <div className='descTxt'>
                    <p>Iremos enviar para o seu e-mail, toda a informação necessária sobre o estado da entrega</p>    
                </div>
            </div>
            <div className='askCardComplete'>
                <p onClick={completeRequest}>COMPREENDI</p>
            </div>
        </div>
    )
}

export default AskCardResult;