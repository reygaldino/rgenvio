import icon from '../../assets/img/icons-lembrete.png'
import './style.css'

function NotificationButton() {
    return (
        <div className="red-btn">
            <img src={icon} alt="Notificar"/>
        </div>
    )
}

export default NotificationButton;
