import './styles.css';
import '../../styles/mediaStyles.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { useEffect } from 'react';
import closeIcon from '../../assets/images/icon_x.png';
import cardImg from '../../assets/images/bitmap.png';
import logoGroup from '../../assets/images/onboarding_group.png';

const DiscountCard = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleInsuranceChange = (e) =>{

    }
    const [selectIcon, setSelectIcon] = useState(true);
    const navigate = useNavigate();

    const orderCart =()=>{
        navigate('/ask_card');
    }
    const [howCashCardModal, setHowCashCardModal] =useState();
    return (
        <div className='discountCardForm'>
            <div className='discountCardSub'>
                <div className='discountCardTxt'><p>Como descontar o meu cartão?</p></div>
            </div>
            <div className='discountCardDesc'>
                <div className='descTxt'>
                    <p>
                        A partir de agora já podes <span>descontar o teu crédito</span>&nbsp; em uma das <span>lojas parceiras,</span>&nbsp; para isso basta usar o <span>cartão Rewire</span>&nbsp; que te iremos envia <span>sem quaquer custo adicional,</span>&nbsp; para a tua morada. Toca em <span>“próximo“</span>&nbsp; para efetuares o teu pedido.
                    </p>    
                </div>
                
            </div>
            <div className='discountCard'>
                <img className='discountCardImg' src = {cardImg} alt = "cardImg" />
            </div>
            <div className='descUTxt'>
                <p>*Só poderá descontar o seu cartão com montante superior a  25 €</p>
            </div>
            <div className='midSubTxt'><p>Lojas parceiras</p></div>
            <div className='discountCard'>
                <img className='discountCardImg' src = {logoGroup} alt = "logoGroup" />
            </div>
            <div className='howCashCard_closeBtn' onClick={() => setHowCashCardModal(false)}>
                <img className='closeIcon' src={closeIcon} alt="CloseIcon" />
            </div>
            <div className='discountBtn'>
                <button type="button" className='btn-primary w-full signUpBtn' onClick={orderCart}>PEDIR CARTÃO</button>
            </div>
        </div>
    )
}

export default DiscountCard;