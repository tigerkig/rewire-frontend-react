import './styles.css';
// import '../../styles/mediaStyles.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BeatLoader } from 'react-spinners';
import { useEffect } from 'react';
import closeIcon from '../../assets/images/icon_x.png';
import datePicIcon from '../../assets/images/group_3.png';


const AskCard = () => {
    const handleSubmit = (e) => {
        e.preventDefault();

    }

    const handleInsuranceChange = (e) => {

    }
    const [selectIcon, setSelectIcon] = useState(true);
    const [decIcon, setDecIcon] = useState(false);
    const [insuranceNextActive, setInsuranceNextActive] = useState(false);


    return (
        <div className='insuranceForm'>
            <div className='insuranceData'>
                <div className='insurance_formSection'>
                    <div className='insuranceSub'><p>Pedir cartão</p></div>
                    <div className='insuranceFromData'>
                        <form className="form mt-4 signFormContent" onSubmit={handleSubmit}>
                            <div className="form-group insuranceSelect">
                                <label>NÚMERO DE TELEFONE*</label>
                                <input
                                    type="number"
                                    className="form-control insuranceEmail"
                                    placeholder='Inserir…'
                                    id="reception_address"
                                    required
                                />
                            </div>
                            <div className='receiveCardAddress'>Morada de receção do cartão</div>
                            <div className="form-group insuranceSelect">
                                <label>ENDEREÇO*</label>
                                <input
                                    type="text"
                                    className="form-control insuranceEmail"
                                    placeholder='Inserir…'
                                    id="phone_num"
                                    required
                                />
                            </div>

                            <label>VALOR DO PRÉMIO* &nbsp; LOCALIDADE*</label>
                            <div className='postalCode_locality'>
                                <div className="form-group postalCode">
                                    <input type="text" placeholder='0000 - 000' className="form-control insuranceEmail" id="prizeAmount" required/>
                                </div>
                                <div className="form-group locality">
                                    <input type="text" placeholder='Inserir…' className="form-control insuranceEmail" id="prizeAmount" required/>
                                </div>
                            </div>


                            <div className="form-group dateOption">
                                <label>HORÁRIO DE RECOLHA*</label>
                                <div className="form-control select-box">
                                    <div className="select-box__current" tabIndex="1">
                                        <div className="select-box__value">
                                            <input className="select-box__input" type="radio" id="0" value="1" name="Ben" defaultChecked="checked" required/>
                                            <p className="select-box__input-text">Entre as 9:00 - 12:00</p>
                                        </div>
                                        <div className="select-box__value">
                                            <input className="select-box__input" type="radio" id="1" value="2" name="Ben"/>
                                            <p className="select-box__input-text">Entre as 13:00 - 18:00</p>
                                        </div>
                                        <div className='datePicon'>
                                            <img src={datePicIcon} />
                                        </div>
                                    </div>
                                    <ul className="select-box__list">
                                        <li>
                                            <label className="select-box__option" htmlFor="0" aria-hidden="aria-hidden">Entre as 9:00 - 12:00</label>
                                        </li>
                                        <li>
                                            <label className="select-box__option" htmlFor="1" aria-hidden="aria-hidden">Entre as 13:00 - 18:00</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                        </form>
                    </div>

                </div>
            </div>

            <div className='insuranceForm_closeBtn'>
                <img className='closeIcon' src={closeIcon} alt="CloseIcon" />
            </div>
            <div className='askCardBtn'>
                <button type="button" className='btn-primary w-full submitBtn'>SUBMETER PEDIDO</button>
            </div>
        </div>
    )
}

export default AskCard;