import axios from 'axios';
import icon from '../../assets/img/icons-lembrete.png'
import { BASE_URL } from '../../utils/request';
import './style.css'


type Props = {
    clientId: number;
}

function handleClick(clientId :number){
    axios(`${BASE_URL}/client/${clientId}/notification`) 
        .then(reponse => {
            console.log("Teste")
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
