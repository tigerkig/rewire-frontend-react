import React, { useEffect, useState } from 'react'
import HelloSign from 'hellosign-embedded';
import Logo from "../../assets/images/Logo_Psst.svg";
import GroupImage from "../../assets/images/onboarding_group.png";
import UploadFile from "../../assets/images/icon_add.png";
import Saúde from "../../assets/images/Saúde.png";
import Carro from "../../assets/images/Carro.png";
import Dental from "../../assets/images/Dental.png";
import Animal from "../../assets/images/Animal.png";
import Equipamento from "../../assets/images/Equipamento.png";
import Viagem from "../../assets/images/Viagem.png";
import Mobilidade from "../../assets/images/Mobilidade.png";
import Joias from "../../assets/images/Joias.png";
import Óculos from "../../assets/images/Óculos.png";
import Eletrodomésticos from "../../assets/images/Eletrodomésticos.png";
import Trabalho from "../../assets/images/Trabalho.png";
import Habitação from "../../assets/images/Habitação.png";
import Saúde_a from "../../assets/images/Saúde_a.png";
import Carro_a from "../../assets/images/Carro_a.png";
import Dental_a from "../../assets/images/Dental_a.png";
import Animal_a from "../../assets/images/Animal_a.png";
import Equipamento_a from "../../assets/images/Equipamento_a.png";
import Viagem_a from "../../assets/images/Viagem_a.png";
import Mobilidade_a from "../../assets/images/Mobilidade_a.png";
import Joias_a from "../../assets/images/Joias_a.png";
import Óculos_a from "../../assets/images/Óculos_a.png";
import Eletrodomésticos_a from "../../assets/images/Eletrodomésticos_a.png";
import Trabalho_a from "../../assets/images/Trabalho_a.png";
import Habitação_a from "../../assets/images/Habitação_a.png";
import closeIcon from '../../assets/images/icon_x.png';
import dropIcon from '../../assets/images/icon_down.png';
import dropIcon_u from '../../assets/images/icon_up.png';
import Info_2Icon from "../../assets/images/fill_1.png";
import policyIcon from '../../assets/images/icon_info_2.png';
import decFalseIcon from '../../assets/images/icon_info_2_a.png';
import ErrorIcon from "../../assets/images/icon_alert.png";
import WarningIcon from "../../assets/images/icon_attention.png";
import InfoIcon from "../../assets/images/icon_info_2.png";
import { IoIosClose } from "react-icons/io";
import AlertComponent from '../../components/alert';
import datePicIcon from '../../assets/images/group_3.png';
import '../../styles/global.css';
import "./style.css";
import { REGISTER_SUCCESS } from '../../redux/constants/authConstants';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import _ from "lodash";
import cardImg from '../../assets/images/bitmap.png';
import logoGroup from '../../assets/images/onboarding_group.png';
import { FaRegCaretSquareDown } from 'react-icons/fa';
import moment from "moment";
import LoadingBar from '../../components/LoadingBar/index';

const baseUrl = process.env.REACT_APP_API_URL;
const signClientId = process.env.REACT_APP_API_CLIENTID;

const insurStatus_detail = [
     { color: "#ffdc7b", title: "Estamos a verificar o teu seguro de saúde, prometemos ser breves, obrigado!" },
     { color: "#1bd0fe", title: "O teu seguro de Saúde foi adicionado com sucesso!" },
     { color: "#ffbeca", title: "Infelizmente este seguro não foi validado, tenta adicionar outro seguro!" },
];

const Onboarding = () => {
     const [selectedItem, setSelectedItem] = useState();
     const [closeModal, setCloseModal] = useState(false);
     const [detailModal, setDetailModal] = useState(false);
     const [inputModal, setInputModal] = useState(false);
     const [termsConditionModal, setTermsConditionModal] = useState(false);
     const [selectIcon, setSelectIcon] = useState(true);
     const [decIcon, setDecIcon] = useState(false);
     const [insuranceNextActive, setInsuranceNextActive] = useState(false);
     const [signVal, setSignVal] = useState(false);
     const [closeProfileModal, setCloseProfileModal] = useState(false);
     const userData = JSON.parse(localStorage.getItem("user"));
     const userId = userData.id.id || userData.id;
     const name = userData.name.username || userData.name;
     const user_email = userData.email;
     const user_nif = userData.nif.nif || userData.nif;
     const profileIconName = name.charAt(0);
     const [insuranceFormData, setInsuranceFormData] = useState({
          insurer: '',
          nif: user_nif,
          award: '',
          date: '',
          idUp: {},
          idBack: {},
     });

     const [orderCardFormData, setOrderCardFormData] = useState({
          phoneNumber: '',
          address: '',
          postalCode: '',
          locality: '',
          pickupTime: '',
     })

     const [getAllInsuranceData, setAllInsuranceData] = useState([[], []])
     const [alertModal, serAltertModal] = useState(false);
     const [alertModalStatus, serAltertModalStatus] = useState(0);
     const [howCashCardModal, setHowCashCardModal] = useState(false);
     const [showValueCard, setShowValueCard] = useState(false);
     const [currentUserApproveStarus, setCurrentUserApproveStarus] = useState();
     const [currentUserInsuranceType, setCurrentUserInsuranceType] = useState();
     const [currentUserCitizenCardNum, setCurrentUserCitizenCardNum] = useState();
     const [currentUserCitizenCardValidity, setCurrentUserCitizenCardValidity] = useState();
     const [currentUserInsuraceSaveId, setCurrentUserInsuraceSaveId] = useState();
     const [currentUserIdCardBackScreen, setCurrentUserIdCardBackScreen] = useState();
     const [currentUserIdCardUpScreen, setCurrentUserIdCardUpScreen] = useState();
     const [currentUserInsurer, setCurrentUserInsurer] = useState();
     const [currentUser, setCurrentUser] = useState();
     const [currentUserNIF, setCurrentUserNIF] = useState();
     const [selectedImage1, setSelectedImage1] = useState();
     const [selectedImage2, setSelectedImage2] = useState();
     const [mobileFooterInsurancePrice, setMobileFooterInsurancePrice] = useState(true);
     const [mobileKNowMoresection, setMobileKNowMoresection] = useState(false);
     const [showOrderCardForm, setShowOrderCardForm] = useState(false);
     const [selectID, setSelectID] = useState(0);
     const [isChange, setIsChange] = useState(false);
     const [logocard, setLogocard] = useState(false);
     const navigate = useNavigate();
     const dispatch = useDispatch();
     const [seeMoreCardIsShow, showSeeMoreCardIsShow] = useState(false);
     const [idCardUp, setIdcardUp] = useState(false);
     const [loading, setLoading] = useState(false);

     const handleSubmit = (e) => {
          e.preventDefault();
     }

     const changeSelectedItem = (e) => {
          setSelectedItem(e);
     }

     const Logout = () => {
          dispatch({ type: REGISTER_SUCCESS, payload: '' });
          localStorage.setItem('user', '');
          navigate('/login');
          toast.warning('Sair da conta !');
     }

     const insurance = (e) => {
          const { name, value } = e.target;
          setInsuranceFormData({ ...insuranceFormData, [name]: value });
     };
     const orderCartData = (e) => {
          const { name, value } = e.target;
          setOrderCardFormData({ ...orderCardFormData, [name]: value });
     };

     const previewInsurance = () => {
          setInputModal(false);
          setCloseModal(true);
     }

     const insureSelected = () => {
          setCloseModal(false)
          setInputModal(true);
     }


     const enableSpinner = () => {
          setLoading(true);
     }
        
     const disableSpinner = () => {
          setLoading(false);
     }
     const termsConditionForm = () => {
          enableSpinner();
          axios({
               method: "post",
               url: baseUrl + "/hellosign_request",
               headers: { "Content-Type": "multipart/form-data" },
          })
               .then((response) => {
                    if (response.data.result === 'success') {
                         disableSpinner();
                         try {
                              const client = new HelloSign({ clientId: signClientId });
                              client.open(response.data.sign_url, {
                                   debug: true,
                                   allowCancel: true,
                                   uxVersion: 2,
                                   skipDomainVerification: true
                              });

                              setSignVal(true);
                              setInputModal(false);
                              setTermsConditionModal(true);
                         }
                         catch (e) {
                              console.log(e)
                         }

                    } else {
                         disableSpinner();
                         toast.error("Hellosign request failed.")
                    }
               })
     }

     const setTermsConditionForm = () => {
          setTermsConditionModal(false);
     }

     const previewTermsConditionForm = () => {
          setInputModal(true);
          setTermsConditionModal(false);
     }

     const insuranceDataSave = () => {
          const formData = new FormData();
          formData.append('user_id', userId);
          formData.append('insuranceType', selectedItem);
          formData.append('insurer', insuranceFormData.insurer);
          formData.append('nif', insuranceFormData.nif);
          formData.append('citizenCardNum', insuranceFormData.award);
          formData.append('citizenCardValidity', insuranceFormData.date);
          formData.append('imgUp', insuranceFormData.idUp);
          formData.append('imgBack', insuranceFormData.idBack);

          try {
               axios({
                    method: "post",
                    url: baseUrl + "/insurance_data",
                    data: formData,
                    headers: { "Content-Type": "multipart/form-data" },
               })
                    .then((response) => {
                         let returnData = response.data;
                         if (returnData.result === "existData") {
                              toast.error('Your insurance data is exist already.');
                         } else {
                              let returnData = response.data;
                              var returnData_1 = JSON.parse(returnData[0]);
                              var returnData_2 = JSON.parse(returnData[1]);
                              returnData_1.map((item, index) => {
                                   let end = moment(item.insurance_end_date);
                                   let start = moment().format('YYYY-MM-DD');
                                   let date = end.diff(start, "day");
                                   var calDays = 0;
                                   if (date > 0) {
                                        calDays = date;
                                   }
                                   returnData_1[index].price = returnData_2[index].perDayPrice * calDays;
                                   returnData_1[index].betweenDate = calDays;
                              })

                              getAllInsuranceData[0] = returnData_1;
                              getAllInsuranceData[1] = returnData_2;
                              setAllInsuranceData(getAllInsuranceData);
                              toast.success('Os dados introduzidos foram salvos com sucesso.');
                              setTermsConditionModal(false);

                              var insure_status = returnData_1[returnData_1.length - 1].approveStatus;
                              switch (insure_status) {
                                   case "pending":
                                        serAltertModalStatus(0);
                                        break;
                                   case "approve":
                                        serAltertModalStatus(1);
                                        break;
                                   case "decline":
                                        serAltertModalStatus(2);
                                        break;
                              }
                              serAltertModal(true);

                              setInsuranceFormData({
                                   insurer: '',
                                   nif: user_nif,
                                   award: insuranceFormData.award,
                                   date: insuranceFormData.date,
                                   idUp: insuranceFormData.idUp,
                                   idBack: insuranceFormData.idBack,
                              });
                              setIsChange(!isChange);
                              changeSelectedItem('');

                         }
                    })
          } catch (error) {
               console.log('HeloSign and Save insurance Data Error', error);
          }
     }

     const CashCardMethod = () => {
          setHowCashCardModal(true);
          setMobileKNowMoresection(false);
     }

     const closeHowCashCardModal = () => {
          setHowCashCardModal(false);
     }
     const get_InsuranceData = () => {
          const formData = new FormData();
          formData.append('user_id', userId);
          axios({
               method: "post",
               url: baseUrl + "/getInsuranceData",
               data: formData,
               headers: { "Content-Type": "application/json" },
          })
               .then((response) => {
                    let returnData = response.data;
                    var returnData_1 = JSON.parse(returnData[0]);
                    var returnData_2 = JSON.parse(returnData[1]);
                    if (returnData_1 && returnData_2) {

                         if (returnData_1[0].insuranceType) {
                              serAltertModal(true);
                         }

                         returnData_1.map((item, index) => {
                              let end = moment(item.insurance_end_date);
                              let start = moment().format('YYYY-MM-DD');
                              let date = end.diff(start, "day");
                              var calDays = 0;
                              if (date > 0) {
                                   calDays = date;
                              }
                              returnData_1[index].price = returnData_2[index].perDayPrice * calDays;
                              returnData_1[index].betweenDate = calDays;
                         })
                         getAllInsuranceData[0] = returnData_1;
                         getAllInsuranceData[1] = returnData_2;
                         setAllInsuranceData(getAllInsuranceData);
                         setIsChange(!isChange);

                         var insure_status = returnData_1[returnData_1.length - 1].approveStatus;
                         switch (insure_status) {
                              case "pending":
                                   serAltertModalStatus(0);
                                   break;
                              case "approve":
                                   serAltertModalStatus(1);
                                   break;
                              case "decline":
                                   serAltertModalStatus(2);
                                   break;
                         }
                         serAltertModal(true);
                    }
               })
     }
     useEffect(() => {

          get_InsuranceData();
          setInterval(() => {
               get_InsuranceData();
          }, 60000)
     }, [])

     useEffect(() => {
          if (selectedImage1 && selectedImage2 && insuranceFormData.insurer && insuranceFormData.award && insuranceFormData.date && insuranceFormData.nif) {
               setInsuranceNextActive(true);
          } else {
               setInsuranceNextActive(false);
          }
     }, [insuranceFormData])

     const styles = {
          container: {
               display: "flex",
               flexDirection: "column",
               justifyContent: "center",
               alignItems: "center",
               paddingTop: 50,
          },
          preview: {
               // marginTop: 21,
               display: "flex",
               flexDirection: "column",
          },
          image: { maxWidth: "100%", maxHeight: 180 },
     };

     const orderCart = () => {
          setShowOrderCardForm(true);
     }

     const imageChange1 = (e) => {
          if (e.target.files && e.target.files.length > 0) {
               setSelectedImage1(e.target.files[0]);
               const { name } = e.target;
               setIdcardUp(true);
               setInsuranceFormData({ ...insuranceFormData, [name]: e.target.files[0] });
          }
     };

     const removeSelectedImage1 = () => {
          setSelectedImage1();
     };

     const imageChange2 = (e) => {
          if (e.target.files && e.target.files.length > 0) {
               setSelectedImage2(e.target.files[0]);
               const { name } = e.target;
               setInsuranceFormData({ ...insuranceFormData, [name]: e.target.files[0] });
          }
     };
     const removeSelectedImage2 = () => {
          setSelectedImage2();
     };

     const showValueCardF = () => {
          setShowValueCard(true);
     }

     const closeValueCardF = () => {
          setShowValueCard(false);
     }

     const setDetailModalVal = (i) => {
          setDetailModal(true);
          setSelectID(i)
          setCurrentUserApproveStarus(getAllInsuranceData[0][i].approveStatus);
          setCurrentUserInsuranceType(getAllInsuranceData[0][i].insuranceType);
          setCurrentUserCitizenCardNum(getAllInsuranceData[0][i].citizenCardNum);
          setCurrentUserCitizenCardValidity(getAllInsuranceData[0][i].citizenCardValidity);
          setCurrentUserInsuraceSaveId(getAllInsuranceData[0][i].id);
          setCurrentUserIdCardBackScreen(getAllInsuranceData[0][i].idCardBackScreen);
          setCurrentUserIdCardUpScreen(getAllInsuranceData[0][i].idCardUpScreen);
          setCurrentUserInsurer(getAllInsuranceData[0][i].insurer);
          setCurrentUser(getAllInsuranceData[0][i].user_id);
          setCurrentUserNIF(getAllInsuranceData[0][i].nif);

     }
     const setInsurancePrice = () => {
          setMobileFooterInsurancePrice(false);
          setMobileKNowMoresection(true);
     }
     const orderCardClose = () => {
          setShowOrderCardForm(false);
     }
     const insuranceModalClose = () => {
          setCloseModal(false);
          changeSelectedItem('');
     }
     const saveOderCard = () => {
          var phoneNumber = orderCardFormData.phoneNumber;
          var address = orderCardFormData.address;
          var postalCode = orderCardFormData.postalCode;
          var locality = orderCardFormData.locality;
          var pickupTime = orderCardFormData.pickupTime;

          if (phoneNumber == '') {
               toast.error("Por favor, insere o teu número de telefone")
          } else if (address == '') {
               toast.error("Por favor, insere o tua morada")
          } else if (postalCode == '') {
               toast.error("Por favor, insere o teu código postal ")
          } else if (locality == '') {
               toast.error("Por favor, insere a tua localização")
          } else if (pickupTime == '') {
               toast.error("Por favor, insere o período de recolha")
          } else {
               const formData = new FormData();
               formData.append('user_id', userId);
               formData.append('phoneNumber', phoneNumber);
               formData.append('address', address);
               formData.append('postalCode', postalCode);
               formData.append('locality', locality);
               formData.append('pickupTime', pickupTime);

               axios({
                    method: "post",
                    url: baseUrl + "/orderCardData",
                    data: formData,
                    headers: { "Content-Type": "application/json" },
               })
                    .then((response) => {
                         let returnData = response.data;
                         if (returnData === 'updated') {
                              toast.success('Os nossos dados foram atualizados com sucesso.');

                              navigate('/request_card_result');
                         } else {
                              toast.success(' Os dados introduzidos foram salvos com sucesso.');
                              navigate('/request_card_result');
                         }
                    })
          }
     }
     const logocard_isShow = () => {
          setLogocard(!logocard);
     }

     const seeMore = (e) => {
          if (e === false) {
               showSeeMoreCardIsShow(true);
          }
     }

     const showIdCardUpAlert = () => {
          toast.error("Faça upload da primeira imagem.");
     }
     return (
          <div className='section'>
               <div className='T-header'>
                    <div>
                         <img src={Logo} />
                    </div>
                    <div className='personalDetailIcon'>
                         <div className='T-clock' onClick={() => setCloseProfileModal(true)}>
                              <div>{profileIconName}</div>
                         </div>
                    </div>
               </div>
               <div className='T-content'>
                    <div className='left-content'>
                         <div className='left-content-header'>
                              <div>Olá {name}</div>
                              {
                                   !getAllInsuranceData[0].length && <div>Adiciona já o teu primeiro seguro e começa a ganhar com ele.</div>
                              }

                              <AlertComponent color={insurStatus_detail[alertModalStatus].color} title={insurStatus_detail[alertModalStatus].title} isShow={alertModal} seeMore={seeMore} />
                         </div>
                         <div className='cards'>
                              {_.times(12, (i) => {
                                   if (i < getAllInsuranceData[0].length)
                                        return (
                                             <div key={i} className='item selected' onClick={() => setDetailModalVal(i)}>
                                                  {isChange}
                                                  <div className='itemImageGroup'>
                                                       <img
                                                            src={getAllInsuranceData[0][i].insuranceType === "Saúde" ? (getAllInsuranceData[0][i].approveStatus === "pending" ? "img/icons_d/Saude_d.svg" : "img/icons_d/Saude.png")
                                                                 : getAllInsuranceData[0][i].insuranceType === "Carro" ? (getAllInsuranceData[0][i].approveStatus === "pending" ? "img/icons_d/Carro_d.svg" : "img/icons_d/Carro.png")
                                                                      : getAllInsuranceData[0][i].insuranceType === "Habitação" ? (getAllInsuranceData[0][i].approveStatus === "pending" ? "img/icons_d/Habita_d.svg" : "img/icons_d/Habita.png")
                                                                           : getAllInsuranceData[0][i].insuranceType === "Óculos" ? (getAllInsuranceData[0][i].approveStatus === "pending" ? "img/icons_d/Oculos_d.svg" : "img/icons_d/Oculos.png")
                                                                                : getAllInsuranceData[0][i].insuranceType === "Dental" ? (getAllInsuranceData[0][i].approveStatus === "pending" ? "img/icons_d/Dental_d.svg" : "img/icons_d/Dental.png")
                                                                                     : getAllInsuranceData[0][i].insuranceType === "Animal" ? (getAllInsuranceData[0][i].approveStatus === "pending" ? "img/icons_d/Animal_d.svg" : "img/icons_d/Animal.png")
                                                                                          : getAllInsuranceData[0][i].insuranceType === "Equipamento" ? (getAllInsuranceData[0][i].approveStatus === "pending" ? "img/icons_d/Equipamento_d.svg" : "img/icons_d/Equipamento.png")
                                                                                               : getAllInsuranceData[0][i].insuranceType === "Eletrodomésticos" ? (getAllInsuranceData[0][i].approveStatus === "pending" ? "img/icons_d/Eletrodo_d.svg" : "img/icons_d/Eletrodo.png")
                                                                                                    : getAllInsuranceData[0][i].insuranceType === "Viagem" ? (getAllInsuranceData[0][i].approveStatus === "pending" ? "img/icons_d/Viagem_d.svg" : "img/icons_d/Viagem.png")
                                                                                                         : getAllInsuranceData[0][i].insuranceType === "Mobilidade" ? (getAllInsuranceData[0][i].approveStatus === "pending" ? "img/icons_d/Mobilidade_d.svg" : "img/icons_d/Mobilidade.png")
                                                                                                              : getAllInsuranceData[0][i].insuranceType === "Joias" ? (getAllInsuranceData[0][i].approveStatus === "pending" ? "img/icons_d/Joias_d.svg" : "img/icons_d/Joias.png")
                                                                                                                   : (getAllInsuranceData[0][i].approveStatus === "pending" ? "img/icons_d/Trabalho_d.svg" : "img/icons_d/Trabalho.png")
                                                            }
                                                       />
                                                       <img src={getAllInsuranceData[0][i].approveStatus === "pending" ? WarningIcon : getAllInsuranceData[0][i].approveStatus === "approve" ? Info_2Icon : ErrorIcon} />
                                                  </div>
                                                  <div className='itemTitle'>
                                                       {getAllInsuranceData[0][i].insuranceType}
                                                  </div>
                                                  <div className='itemFootTitle'>
                                                       {getAllInsuranceData[0][i].insurer}
                                                  </div>
                                             </div>
                                        )
                                   else if (i === getAllInsuranceData[0].length)
                                        return (
                                             <div key={i} className='item insuranceImg_1 active'>
                                                  <div>
                                                       <div className='acitveImage' onClick={() => setCloseModal(true)}><img src={UploadFile} /></div>
                                                       <div className='item-letter'>Adicionar Seguro</div>
                                                  </div>
                                             </div>
                                        )
                                   else
                                        return (
                                             <div key={i} className='item insuranceImg_2'></div>
                                        )

                              })}

                         </div>
                    </div>
                    <div className='right-content'>
                         <div className='right-content-font-1'>Valor em Cartão</div>
                         <div className='right-content-price'>{alertModalStatus === 1 ? getAllInsuranceData[0].length && getAllInsuranceData[0][getAllInsuranceData[0].length - 1].price : "0,00"}<span>€</span></div>
                         {!seeMoreCardIsShow &&
                              <div className='right-content-dateAndMoney'>
                                   {alertModalStatus === 1 &&
                                        <>
                                             <div className='uploadedInsuranceDetailTxt'><p>Faltam &nbsp;</p><span>{getAllInsuranceData[0].length ? getAllInsuranceData[0][getAllInsuranceData[0].length - 1].betweenDate : "0 "}Days</span><p>&nbsp; para receber</p></div>
                                             <div className='uploadedInsurancePrice' onClick={() => setInsurancePrice()}>{getAllInsuranceData[0].length ? getAllInsuranceData[0][getAllInsuranceData[0].length - 1].price : 0} €</div>
                                        </>
                                   }

                              </div>
                         }


                         {
                              seeMoreCardIsShow &&
                              <div className="alert-info">
                                   <p>Parece que Já podes descontar o valor em cartão!</p>
                                   <div className='cashCardMethodP'>
                                        <div className='dismiss' onClick={() => CashCardMethod()}>
                                             <p className="white">Saber mais</p>
                                        </div>
                                   </div>
                              </div>
                         }
                         {
                              logocard &&
                              <div className='logoCard'>
                                   <div className='right-content-font-2'>Onde descontar o meu cartão?</div>
                                   <div className='right-content-font-3'>Válido em mais de 1100 lojas, espalhadas pelo país</div>
                                   <div className="imageGroup">
                                        <img src={GroupImage} />
                                   </div>
                              </div>
                         }

                         <div className='right-content-footer'>
                              <div className='right-content-font-4 logocard_isShow' onClick={logocard_isShow}>Perguntas Mais Frequentes</div>
                         </div>
                    </div>

                    <div className='mobile-foot'>
                         <div className='mobile-showed-body'>
                              <div className='mobile-showed-zoom'>
                                   <div className='zoom-button'></div>
                              </div>
                              <div className="detail-info">
                                   <div className='mobile_footer_cardValue'>
                                        <div className='mobile-font-1'>Valor em cartão</div>
                                        <div className='mobile-font-2'>{alertModalStatus === 1 ? getAllInsuranceData[0].length && getAllInsuranceData[0][getAllInsuranceData[0].length - 1].price : "0,00"}<span>€</span></div>
                                   </div>
                                   {mobileFooterInsurancePrice &&
                                        <>
                                             {
                                                  (getAllInsuranceData[0].length > 0) &&
                                                  <>
                                                       {
                                                            getAllInsuranceData[0][getAllInsuranceData[0].length - 1].approveStatus === "approve" &&
                                                            <>
                                                                 {
                                                                      // !seeMoreCardIsShow &&
                                                                      alertModalStatus === 1 &&
                                                                      <div className="classuploadedInsuranceData">
                                                                           <img
                                                                                src={getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Saúde" ? "img/icons_d/Saude_d.svg"
                                                                                     : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Carro" ? "img/icons_d/Carro_d.svg"
                                                                                          : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Habitação" ? "img/icons_d/Habita_d.svg"
                                                                                               : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Óculos" ? "img/icons_d/Oculos_d.svg"
                                                                                                    : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Dental" ? "img/icons_d/Dental_d.svg"
                                                                                                         : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Animal" ? "img/icons_d/Animal_d.svg"
                                                                                                              : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Equipamento" ? "img/icons_d/Equipamento_d.svg"
                                                                                                                   : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Eletrodomésticos" ? "img/icons_d/Eletrodo_d.svg"
                                                                                                                        : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Viagem" ? "img/icons_d/Viagem_d.svg"
                                                                                                                             : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Mobilidade" ? "img/icons_d/Mobilidade_d.svg"
                                                                                                                                  : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Joias" ? "img/icons_d/Joias_d.svg"
                                                                                                                                       : "img/icons_d/Trabalho_d.svg"
                                                                                }
                                                                           />
                                                                           <div className='uploadedInsuranceDetailTxt'><p>Faltam &nbsp;</p><span>{getAllInsuranceData[0].length > 0 ? getAllInsuranceData[0][getAllInsuranceData[0].length - 1].betweenDate : 0} Days</span><p>&nbsp; para receber</p></div>
                                                                           <div className='uploadedInsurancePrice' onClick={() => setInsurancePrice()}>{getAllInsuranceData[0].length > 0 ? getAllInsuranceData[0][getAllInsuranceData[0].length - 1].price : 0} €</div>
                                                                      </div>
                                                                 }
                                                            </>
                                                       }
                                                  </>
                                             }
                                        </>
                                   }

                              </div>
                         </div>
                         {!seeMoreCardIsShow &&
                              <div className='mobile-showed-footer'>
                                   <div className='mobile-font-3 showValueCard' onClick={() => showValueCardF()}>Onde descontar o meu cartão?</div>
                              </div>
                         }
                         {seeMoreCardIsShow &&
                              <div className='mobileKnowMore'>
                                   <p>Parece que Já podes descontar o valor em cartão!</p>
                                   <div className='cashCardMethodP'>
                                        <div className='dismiss' onClick={() => CashCardMethod()}>
                                             <p className="white">Saber mais</p>
                                        </div>
                                   </div>
                              </div>
                         }

                    </div>
               </div>

               <div className={closeModal ? 'T-custom-modal' : "none"}>
                    <div className="T-modal-header">
                         <div><IoIosClose onClick={() => insuranceModalClose()} /></div>
                         <div>Tipo de seguro</div>
                    </div>
                    <div className='T-modal-body'>
                         <div>
                              <div className='modal-item'>
                                   <div>
                                        <div className='item-circle' onClick={() => changeSelectedItem("Saúde")}>
                                             {selectedItem == "Saúde" ? <img src={Saúde_a} /> : <img src={Saúde} />}
                                        </div>
                                        <div className='item-title'>Saúde</div>
                                   </div>
                              </div>
                              <div className='modal-item'>
                                   <div>
                                        <div className='item-circle' onClick={() => changeSelectedItem("Carro")}>
                                             {selectedItem == "Carro" ? <img src={Carro_a} /> : <img src={Carro} />}
                                        </div>
                                        <div className='item-title'>Carro</div>
                                   </div>
                              </div>
                              <div className='modal-item'>
                                   <div>
                                        <div className='item-circle' onClick={() => changeSelectedItem("Habitação")}>
                                             {selectedItem == "Habitação" ? <img src={Habitação_a} /> : <img src={Habitação} />}
                                        </div>
                                        <div className='item-title'>Habitação</div>
                                   </div>
                              </div>
                              <div className='modal-item'>
                                   <div>
                                        <div className='item-circle' onClick={() => changeSelectedItem("Óculos")}>
                                             {selectedItem == "Óculos" ? <img src={Óculos_a} /> : <img src={Óculos} />}
                                        </div>
                                        <div className='item-title'>Óculos</div>
                                   </div>
                              </div>
                              <div className='modal-item'>
                                   <div>
                                        <div className='item-circle' onClick={() => changeSelectedItem("Dental")}>
                                             {selectedItem == "Dental" ? <img src={Dental_a} /> : <img src={Dental} />}
                                        </div>
                                        <div className='item-title'>Dental</div>
                                   </div>
                              </div>
                              <div className='modal-item'>
                                   <div>
                                        <div className='item-circle' onClick={() => changeSelectedItem("Animal")}>
                                             {selectedItem == "Animal" ? <img src={Animal_a} /> : <img src={Animal} />}
                                        </div>
                                        <div className='item-title'>Animal</div>
                                   </div>
                              </div>
                              <div className='modal-item'>
                                   <div>
                                        <div className='item-circle' onClick={() => changeSelectedItem("Equipamento")}>
                                             {selectedItem == "Equipamento" ? <img src={Equipamento_a} /> : <img src={Equipamento} />}
                                        </div>
                                        <div className='item-title'>Equipamento</div>
                                   </div>
                              </div>
                              <div className='modal-item'>
                                   <div>
                                        <div className='item-circle' onClick={() => changeSelectedItem("Eletrodomésticos")}>
                                             {selectedItem == "Eletrodomésticos" ? <img src={Eletrodomésticos_a} /> : <img src={Eletrodomésticos} />}
                                        </div>
                                        <div className='item-title'>Eletrodomésticos</div>
                                   </div>
                              </div>
                              <div className='modal-item'>
                                   <div>
                                        <div className='item-circle' onClick={() => changeSelectedItem("Viagem")}>
                                             {selectedItem == "Viagem" ? <img src={Viagem_a} /> : <img src={Viagem} />}
                                        </div>
                                        <div className='item-title'>Viagem</div>
                                   </div>
                              </div>
                              <div className='modal-item'>
                                   <div>
                                        <div className='item-circle' onClick={() => changeSelectedItem("Mobilidade")}>
                                             {selectedItem == "Mobilidade" ? <img src={Mobilidade_a} /> : <img src={Mobilidade} />}
                                        </div>
                                        <div className='item-title'>Mobilidade</div>
                                   </div>
                              </div>
                              <div className='modal-item'>
                                   <div>
                                        <div className='item-circle' onClick={() => changeSelectedItem("Joias")}>
                                             {selectedItem == "Joias" ? <img src={Joias_a} /> : <img src={Joias} />}
                                        </div>
                                        <div className='item-title'>Joias</div>
                                   </div>
                              </div>
                              <div className='modal-item'>
                                   <div>
                                        <div className='item-circle' onClick={() => changeSelectedItem("Trabalho")}>
                                             {selectedItem == "Trabalho" ? <img src={Trabalho_a} /> : <img src={Trabalho} />}
                                        </div>
                                        <div className='item-title'>Trabalho</div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    {
                         selectedItem == 0 ?
                              <div className='T-modal-footer'>
                                   <div>Próximo</div>
                              </div>
                              :
                              <div className='T-modal-footer'>
                                   <button type="button" onClick={insureSelected} className='btn-primary w-full signUpBtn insuranceNextBtn'>Próximo</button>
                              </div>
                    }
               </div>

               <div className={detailModal ? 'T-custom-modal modal-detail-color' : "none"}>
                    <div className='T-detail-header'>
                         <div className='header-group'>
                              <div>
                                   {
                                        getAllInsuranceData[0].length &&
                                        <>
                                             {
                                                  getAllInsuranceData[0][getAllInsuranceData[0].length - 1].approveStatus === "approve" &&
                                                  <div className="classuploadedInsuranceData">
                                                       <img
                                                            src={currentUserInsuranceType === "Saúde" ? (currentUserApproveStarus === "pending" ? "img/icons_d/Saude_d.svg" : "img/icons_d/Saude.png")
                                                                 : currentUserInsuranceType === "Carro" ? (currentUserApproveStarus === "pending" ? "img/icons_d/Carro_d.svg" : "img/icons_d/Carro.png")
                                                                      : currentUserInsuranceType === "Habitação" ? (currentUserApproveStarus === "pending" ? "img/icons_d/Habita_d.svg" : "img/icons_d/Habita.png")
                                                                           : currentUserInsuranceType === "Óculos" ? (currentUserApproveStarus === "pending" ? "img/icons_d/Oculos_d.svg" : "img/icons_d/Oculos.png")
                                                                                : currentUserInsuranceType === "Dental" ? (currentUserApproveStarus === "pending" ? "img/icons_d/Dental_d.svg" : "img/icons_d/Dental.png")
                                                                                     : currentUserInsuranceType === "Animal" ? (currentUserApproveStarus === "pending" ? "img/icons_d/Animal_d.svg" : "img/icons_d/Animal.png")
                                                                                          : currentUserInsuranceType === "Equipamento" ? (currentUserApproveStarus === "pending" ? "img/icons_d/Equipamento_d.svg" : "img/icons_d/Equipamento.png")
                                                                                               : currentUserInsuranceType === "Eletrodomésticos" ? (currentUserApproveStarus === "pending" ? "img/icons_d/Eletrodo_d.svg" : "img/icons_d/Eletrodo.png")
                                                                                                    : currentUserInsuranceType === "Viagem" ? (currentUserApproveStarus === "pending" ? "img/icons_d/Viagem_d.svg" : "img/icons_d/Viagem.png")
                                                                                                         : currentUserInsuranceType === "Mobilidade" ? (currentUserApproveStarus === "pending" ? "img/icons_d/Mobilidade_d.svg" : "img/icons_d/Mobilidade.png")
                                                                                                              : currentUserInsuranceType === "Joias" ? (currentUserApproveStarus === "pending" ? "img/icons_d/Joias_d.svg" : "img/icons_d/Joias.png")
                                                                                                                   : (currentUserApproveStarus === "pending" ? "img/icons_d/Trabalho_d.svg" : "img/icons_d/Trabalho.png")
                                                            }
                                                       />
                                                  </div>
                                             }
                                        </>
                                   }
                              </div>
                              <p>Seguro de {getAllInsuranceData[0].length && getAllInsuranceData[0][selectID].insuranceType}</p>
                         </div>
                         <div><IoIosClose onClick={() => setDetailModal(false)} /></div>
                    </div>
                    <div className='mobile-method'>
                         <div className="T-detail-body">
                              <div>
                                   <p>Apólice</p>
                                   <h6>1206TG65</h6>
                              </div>
                              <div>
                                   <p>Valor do Prémio</p>
                                   <h6>{currentUserInsurer}</h6>
                              </div>
                         </div>
                         <div className="T-detail-body">
                              <div>
                                   <p>Faltam <span className="color-1">{getAllInsuranceData[0].length && getAllInsuranceData[0][selectID].betweenDate} Days</span> para receber</p>
                                   <h6><span className="color-2">{getAllInsuranceData[0].length && getAllInsuranceData[0][selectID].price} €</span></h6>
                              </div>
                         </div>
                    </div>
               </div>

               <div className={inputModal ? 'insuranceForm' : "none"}>
                    {loading && <LoadingBar/>}
                    <div className='insuranceData'>
                         <div className='insurance_formSection'>
                              <div className='insuranceSub'><p>Dados do seguro</p></div>
                              <div className='insuranceFromData'>
                                   <form className="form mt-4 signFormContent" onSubmit={handleSubmit}>
                                        <div className="form-group insuranceSelect">
                                             <label>SEGURADORA*</label>

                                             <div className="form-control select-box" onChange={insurance}>
                                                  <div className="select-box__current" tabIndex="1">
                                                       <div className="select-box__value">
                                                            <input className="select-box__input" type="radio" id="6" name="insurer" value="" defaultChecked={insuranceFormData.insurer == '' && "checked"} />
                                                            <p className="select-box__input-text">{insuranceFormData.insurer == "" ? "Selecione seguradora" : ""}</p>
                                                       </div>
                                                       <div className="select-box__value">
                                                            <input className="select-box__input" type="radio" id="0" value="TRANQUILIDADE" name="insurer" />
                                                            <p className="select-box__input-text">{insuranceFormData.insurer == "" ? "Selecione seguradora" : "TRANQUILIDADE"}</p>
                                                       </div>
                                                       <div className="select-box__value">
                                                            <input className="select-box__input" type="radio" id="1" value="ASISA" name="insurer" />
                                                            <p className="select-box__input-text">{insuranceFormData.insurer == "" ? "Selecione seguradora" : "ASISA"}</p>
                                                       </div>
                                                       <div className="select-box__value">
                                                            <input className="select-box__input" type="radio" id="2" value="MGEN" name="insurer" />
                                                            <p className="select-box__input-text">{insuranceFormData.insurer == "" ? "Selecione seguradora" : "MGEN"}</p>
                                                       </div>
                                                       <div className="select-box__value">
                                                            <input className="select-box__input" type="radio" id="3" value="AGEAS" name="insurer" />
                                                            <p className="select-box__input-text">{insuranceFormData.insurer == "" ? "Selecione seguradora" : "AGEAS"}</p>
                                                       </div>
                                                       <div className="select-box__value">
                                                            <input className="select-box__input" type="radio" id="4" value="GENERALI" name="insurer" />
                                                            <p className="select-box__input-text">{insuranceFormData.insurer == "" ? "Selecione seguradora" : "GENERALI"}</p>
                                                       </div>
                                                       <div className="select-box__value">
                                                            <input className="select-box__input" type="radio" id="5" value="ALLIANZ" name="insurer" />
                                                            <p className="select-box__input-text">{insuranceFormData.insurer == "" ? "Selecione seguradora" : "ALLIANZ"}</p>
                                                       </div>
                                                       <img className="select-box__icon" src={dropIcon} alt="Arrow Icon" aria-hidden="true" />
                                                  </div>
                                                  <ul className="select-box__list">
                                                       <li>
                                                            {/* <label className="select-box__option" htmlFor="6" aria-hidden="aria-hidden">Selecione seguradora</label> */}
                                                       </li>
                                                       <li>
                                                            <label className="select-box__option" htmlFor="0" aria-hidden="aria-hidden">TRANQUILIDADE</label>
                                                       </li>
                                                       <li>
                                                            <label className="select-box__option" htmlFor="1" aria-hidden="aria-hidden">ASISA</label>
                                                       </li>
                                                       <li>
                                                            <label className="select-box__option" htmlFor="2" aria-hidden="aria-hidden">MGEN</label>
                                                       </li>
                                                       <li>
                                                            <label className="select-box__option" htmlFor="3" aria-hidden="aria-hidden">AGEAS</label>
                                                       </li>
                                                       <li>
                                                            <label className="select-box__option" htmlFor="4" aria-hidden="aria-hidden">GENERALI</label>
                                                       </li>
                                                       <li>
                                                            <label className="select-box__option" htmlFor="5" aria-hidden="aria-hidden">ALLIANZ</label>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>

                                        <div className="form-group insuranceSelect">
                                             <label>NIF*</label>
                                             <input
                                                  type="text"
                                                  className="form-control insuranceEmail"
                                                  placeholder='Inserir…'
                                                  id="pwd"
                                                  value={user_nif}
                                                  readOnly
                                             />
                                        </div>

                                        <div className="form-group">
                                             <label>Nº CARTÃO DE CIDADÃO</label>
                                             <input type="number" placeholder='Inserir…' className="form-control insuranceEmail" id="awardValue" name='award' onChange={insurance} />
                                        </div>

                                        <div className="form-group">
                                             <label>VALIDADE CARTÃO DE CIDADÃO</label>
                                             <input type="date" placeholder='Inserir…' className="form-control insuranceEmail" id="renewalDate" name='date' onChange={insurance} />
                                        </div>
                                   </form>
                              </div>
                              <div className='insuranceMTxt'>Adiciona as fotografias, frente e verso do teu Cartão do Cidadão ( serve apenas de validação, não iremos guardar na nossa base de dados )</div>
                              <div className='insuranceMBtnGroup'>
                                   <form>
                                        <div className={selectedImage1 ? 'ccPhotoBtn_1' : 'ccPhotoBtn_1_e'}>
                                             {selectedImage1 && <div className='uploadImgBkColor'></div>}
                                             {selectedImage1 ?
                                                  <div className='imageUploadsection' type='button'><p>FRENTE</p><br />{selectedImage1.name}</div>
                                                  :
                                                  <div className='imageUploadsection' type='button'>ADICIONAR<br /><p>FOTO FRENTE</p></div>
                                             }
                                             {selectedImage1 && (
                                                  <div style={styles.preview} className="uploadedimg">
                                                       <img
                                                            src={URL.createObjectURL(selectedImage1)}
                                                            style={styles.image}
                                                            alt="Thumb"
                                                       />
                                                  </div>
                                             )}
                                             {
                                                  selectedImage1 &&
                                                  <div className='closePrevImg' onClick={removeSelectedImage1} style={styles.delete}>X</div>
                                             }
                                        </div>
                                        {
                                             idCardUp ?
                                                  <input type="file" className='idUp' name='idUp' accept="image/*" onChange={imageChange2} />
                                                  :
                                                  <input className='idUp' name='idUp' accept="image/*" onClick={showIdCardUpAlert} />
                                        }
                                        {/* <input type="file" className='idUp' name='idUp' accept="image/*" onChange={idCardUp ? imageChange2 : showIdCardUpAlert} /> */}
                                        <div className={selectedImage2 ? 'ccPhotoBtn_2' : 'ccPhotoBtn_2_e'}>
                                             {selectedImage2 ?
                                                  <div className='imageUploadsection' type='button'><p>ADICIONAR</p><br />{selectedImage2.name}</div>
                                                  :
                                                  <div className='imageUploadsection' type='button'>ADICIONAR<br /><p>FOTO VERSO</p></div>
                                             }
                                             {selectedImage2 && <div className='uploadImgBkColor'></div>}

                                             {selectedImage2 && (
                                                  <div style={styles.preview} className="uploadedimg">
                                                       <img
                                                            src={URL.createObjectURL(selectedImage2)}
                                                            style={styles.image}
                                                            alt="Thumb"
                                                       />
                                                  </div>
                                             )}
                                             {
                                                  selectedImage2 &&
                                                  <div className='closePrevImg' onClick={removeSelectedImage2} style={styles.delete}>X</div>
                                             }
                                        </div>
                                        <input type="file" className='idBack' name='idBack' accept="image/*" onChange={imageChange1}></input>
                                   </form>
                              </div>
                         </div>
                    </div>
                    <div className='insuranceForm_closeBtn' onClick={() => setInputModal(false)}>
                         <img className='closeIcon' src={closeIcon} alt="CloseIcon" />
                    </div>
                    <div className='insuranceBtn'>
                         <div className='insuranceBtnGroup'>
                              <div className='insurance_Btn_1'>
                                   <button type="button" className='w-full signUpBtn insuranceReturnBtn' onClick={previewInsurance}>Anterior</button>
                              </div>
                              {
                                   insuranceNextActive ?
                                        <div className='insurance_Btn_2'>
                                             <button type="button" className='btn-primary w-full signUpBtn insuranceNextBtn' onClick={termsConditionForm}>Próximo</button>
                                        </div>
                                        :
                                        <div className='insurance_Btn_3'>
                                             <button type="button" className='w-full signUpBtn insuranceReturnBtn'>Adicionar</button>
                                        </div>
                              }
                         </div>
                    </div>
               </div>

               <div className={termsConditionModal ? 'termConditionForm' : "none"}>
                    <div className='insuranceData'>
                         <div className='insurance_formSection'>
                              <div className='insuranceSub'><p></p></div>
                              <div className='insuranceFromData hellosignResult'>
                                   <form>
                                        <p>Contrato</p>
                                   </form>
                              </div>
                         </div>
                    </div>

                    <div className='insuranceForm_closeBtn' onClick={setTermsConditionForm}>
                         <img className='closeIcon' src={closeIcon} alt="CloseIcon" />
                    </div>

                    <div className='insuranceBtn'>
                         <div className='insuranceBtnGroup'>
                              <div className='insurance_Btn_1'>
                                   <button type="button" className='w-full signUpBtn insuranceReturnBtn' onClick={previewTermsConditionForm}>Anterior</button>
                              </div>
                              {
                                   signVal ?
                                        <div className='insurance_Btn_2'>
                                             <button type="button" className='btn-primary w-full signUpBtn insuranceNextBtn' onClick={insuranceDataSave}>Próximo</button>
                                        </div>
                                        :
                                        <div className='insurance_Btn_3'>
                                             <button type="button" className='w-full signUpBtn insuranceReturnBtn'>Adicionar</button>
                                        </div>
                              }
                         </div>
                    </div>
               </div>
               <div className={closeProfileModal ? 'profileForm' : 'none'}>
                    <div className='insuranceData'>
                         <div className='insurance_formSection'>
                              <div className='insuranceSub'><p>O meu perfil</p></div>
                              <div className='userAvatar'>
                                   <div>{profileIconName}</div>
                              </div>
                         </div>
                    </div>
                    <div className='insuranceForm_closeBtn' onClick={() => setCloseProfileModal(false)}>
                         <img className='closeIcon' src={closeIcon} alt="CloseIcon" />
                    </div>
                    <div className='profileUserName'>{name}</div>
                    <div className='profileUserEmail'>{user_email}</div>
                    <div className='profileLogOut'>
                         <button type='button' onClick={() => Logout()}>Sair da conta</button>
                    </div>
               </div>
               <div className={howCashCardModal ? 'discountCardForm' : 'none'}>
                    <div className='discountCardSub'>
                         <div className='discountCardTxt'><p>Como descontar o meu cartão?</p></div>
                    </div>
                    <div className='discountCardDesc'>
                         <div className='descTxt'>
                              <p>
                                   A partir de agora já podes <span>descontar o teu crédito</span>&nbsp; em uma das <span>lojas parceiras,</span>&nbsp; para isso basta usar o <span>cartão Psst</span>&nbsp; que te iremos envia <span>sem quaquer custo adicional,</span>&nbsp; para a tua morada. Toca em <span>“próximo“</span>&nbsp; para efetuares o teu pedido.
                              </p>
                         </div>
                    </div>
                    <div className='discountCard'>
                         <img className='discountCardImg' src={cardImg} alt="cardImg" />
                    </div>
                    <div className='descUTxt'>
                         <p>*Só poderá descontar o seu cartão com montante superior a  <span>25 €</span></p>
                    </div>
                    <div className='midSubTxt'><p>Lojas parceiras</p></div>
                    <div className='discountCard_2'>
                         <img className='discountCardImg' src={logoGroup} alt="logoGroup" />
                    </div>
                    <div className='howCashCard_closeBtn'>
                         <img className='closeIcon' src={closeIcon} alt="CloseIcon" onClick={() => closeHowCashCardModal()} />
                    </div>
                    <div className='discountBtn'>
                         <button type="button" className='btn-primary w-full signUpBtn' onClick={orderCart}>PEDIR CARTÃO</button>
                    </div>
               </div>
               <div className={showValueCard ? 'discountCardForm' : 'none'}>
                    <div className='discountCardSub'>
                         <div className='discountCardTxt'><p>Onde descontar o meu cartão?</p></div>
                    </div>
                    <div className='discountCardDesc'>
                         <div className='descTxt'>
                              <p>Válido em mais de 1100 lojas, espalhadas pelo país</p>
                         </div>
                    </div>
                    <div className='discountCard_2'>
                         <img className='discountCardImg' src={logoGroup} alt="logoGroup" />
                    </div>
                    <div className='howCashCard_closeBtn'>
                         <img className='closeIcon' src={closeIcon} alt="CloseIcon" onClick={() => closeValueCardF()} />
                    </div>
                    <div className='mobile-foot'>
                         <div className='mobile-showed-body'>
                              <div className='mobile-showed-zoom'>
                                   <div className='zoom-button'></div>
                              </div>
                              <div className="detail-info">
                                   <div className='mobile_footer_cardValue'>
                                        <div className='mobile-font-1'>Valor em cartão</div>
                                        <div className='mobile-font-2'>{alertModalStatus === 1 ? getAllInsuranceData[0].length && getAllInsuranceData[0][getAllInsuranceData[0].length - 1].price : "0,00"}<span>€</span></div>
                                        {/* <div className='mobile-font-2'>{getAllInsuranceData[0].length && getAllInsuranceData[0][getAllInsuranceData[0].length - 1].price}<span>€</span></div> */}
                                   </div>
                                   {
                                        getAllInsuranceData[0].length > 0 &&
                                        <>
                                             {
                                                  getAllInsuranceData[0][getAllInsuranceData[0].length - 1].approveStatus === "approve" &&
                                                  <div className="classuploadedInsuranceData">
                                                       <img
                                                            src={getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Saúde" ? "img/icons_d/Saude_d.svg"
                                                                 : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Carro" ? "img/icons_d/Carro_d.svg"
                                                                      : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Habitação" ? "img/icons_d/Habita_d.svg"
                                                                           : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Óculos" ? "img/icons_d/Oculos_d.svg"
                                                                                : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Dental" ? "img/icons_d/Dental_d.svg"
                                                                                     : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Animal" ? "img/icons_d/Animal_d.svg"
                                                                                          : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Equipamento" ? "img/icons_d/Equipamento_d.svg"
                                                                                               : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Eletrodomésticos" ? "img/icons_d/Eletrodo_d.svg"
                                                                                                    : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Viagem" ? "img/icons_d/Viagem_d.svg"
                                                                                                         : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Mobilidade" ? "img/icons_d/Mobilidade_d.svg"
                                                                                                              : getAllInsuranceData[0][getAllInsuranceData[0].length - 1].insuranceType === "Joias" ? "img/icons_d/Joias_d.svg"
                                                                                                                   : "img/icons_d/Trabalho_d.svg"
                                                            }
                                                       />
                                                       <div className='uploadedInsuranceDetailTxt'><p>Faltam &nbsp;</p><span>{getAllInsuranceData[0].length ? getAllInsuranceData[0][getAllInsuranceData[0].length - 1].betweenDate : 0} Days</span><p>&nbsp; para receber</p></div>
                                                       <div className='uploadedInsurancePrice' onClick={() => setInsurancePrice()}>{getAllInsuranceData[0].length ? getAllInsuranceData[0][getAllInsuranceData[0].length - 1].price : 0} €</div>
                                                  </div>
                                             }
                                        </>
                                   }
                              </div>
                         </div>
                         <div className='mobile-showed-footer'>
                              <div className='mobile-font-3 showValueCard' onClick={() => showValueCardF()}>Onde descontar o meu cartão?</div>
                         </div>
                    </div>
               </div>
               <div className={showOrderCardForm ? 'insuranceForm' : 'none'}>
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
                                                  name='phoneNumber'
                                                  onChange={orderCartData}
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
                                                  name='address'
                                                  required
                                                  onChange={orderCartData}
                                             />
                                        </div>

                                        <label>VALOR DO PRÉMIO* &nbsp; LOCALIDADE*</label>
                                        <div className='postalCode_locality'>
                                             <div className="form-group postalCode">
                                                  <input type="text" placeholder='0000 - 000' name='postalCode' onChange={orderCartData} className="form-control insuranceEmail" id="prizeAmount" required />
                                             </div>
                                             <div className="form-group locality">
                                                  <input type="text" placeholder='Inserir…' name='locality' onChange={orderCartData} className="form-control insuranceEmail" id="prizeAmount" required />
                                             </div>
                                        </div>


                                        <div className="form-group dateOption">
                                             <label>HORÁRIO DE RECOLHA*</label>
                                             <div className="form-control select-box">
                                                  <div className="select-box__current" tabIndex="1">
                                                       <div className="select-box__value">
                                                            <input className="select-box__input" type="radio" id="001" name="pickupTime" defaultChecked='checked' />
                                                            <p className="select-box__input-text placeholder">Please select collectioin time</p>
                                                       </div>
                                                       <div className="select-box__value">
                                                            <input className="select-box__input" onChange={orderCartData} type="radio" id="01" value="9:00 - 12:00" name="pickupTime" />
                                                            <p className="select-box__input-text">Entre as 9:00 - 12:00</p>
                                                       </div>
                                                       <div className="select-box__value">
                                                            <input className="select-box__input" onChange={orderCartData} type="radio" id="02" value="13:00 - 18:00" name="pickupTime" />
                                                            <p className="select-box__input-text">Entre as 13:00 - 18:00</p>
                                                       </div>
                                                       <div className='datePicon'>
                                                            <img src={datePicIcon} />
                                                       </div>
                                                  </div>
                                                  <ul className="select-box__list">
                                                       <li>
                                                            <label className="select-box__option" htmlFor="01" aria-hidden="aria-hidden">Entre as 9:00 - 12:00</label>
                                                       </li>
                                                       <li>
                                                            <label className="select-box__option" htmlFor="02" aria-hidden="aria-hidden">Entre as 13:00 - 18:00</label>
                                                       </li>
                                                  </ul>
                                             </div>
                                        </div>
                                   </form>
                              </div>
                         </div>
                    </div>
                    <div className='insuranceForm_closeBtn'>
                         <img className='closeIcon' src={closeIcon} alt="CloseIcon" onClick={orderCardClose} />
                    </div>
                    <div className='askCardBtn'>
                         {
                              orderCardFormData.phoneNumber && orderCardFormData.address && orderCardFormData.postalCode && orderCardFormData.locality ?
                                   <button type="button" className='btn-primary w-full submitBtn' onClick={saveOderCard}>SUBMETER PEDIDO</button>
                                   :
                                   <button type="button" className='btn-gray w-full submitBtn'>SUBMETER PEDIDO</button>
                         }
                    </div>
               </div>
          </div>
     )
}

export default Onboarding;