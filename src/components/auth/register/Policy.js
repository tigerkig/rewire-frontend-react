import { Link } from "react-router-dom"

const Policy = () => {
    return (
        <div className='flex flex-col gap-4 text-xs text-grays dark:text-gray-300'>
            <div className="signConfirm">
                <div className="signconfirmP">
                    <div><input className="signConfirmCheckBox" type="checkbox" /></div>&nbsp;&nbsp; 
                    <div className="confirmCheckTxt">Confirmo que aceito a cedência dos meus dados pessoais à Rewire, cuja Política de <span>Privacidade e Proteção de Dados Pessoas</span> aqui disponível declaro conhecer e aceitar.</div> 
                </div>
            </div>
        </div>
    )
}

export default Policy