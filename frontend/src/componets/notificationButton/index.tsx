import axios from 'axios';
import { toast } from 'react-toastify';
import icon from '../../assets/img/icons-lembrete.png'
import { BASE_URL } from '../../utils/request';
import './style.css'


type Props = {
    clientId: number;
}

function handleClick(clientId :number){
    axios(`${BASE_URL}/client/${clientId}/notification`) 
        .then(reponse => {
            toast.info("Mensagem enviada com sucesso!");
        })
}

function NotificationButton({clientId} : Props) {
    return (
        <div className="red-btn" onClick={() => handleClick(clientId)}>
            <img src={icon} alt="Notificar"/>
        </div>
    )
}

export default NotificationButton;
