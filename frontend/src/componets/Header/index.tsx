import icon from '../../assets/img/logo.png'
import './style.css'

function Header() {
    return (
        <header>
            <div className="logo-container">
                <img src={icon} alt="DSMeta"/>
                    <h1>RGEnvio</h1>
                    <p>Desenvolvido por
                        <a href="https://www.instagram.com/reh.galdino/">@reh.galdino</a>
                    </p>
            </div>
        </header>
    )
}

export default Header