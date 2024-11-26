import logo from '../../Images/Logo.png';
import './Welcome.css'

const Welcome = () => {
    return (
        <div className="Welcome-Background">
            <a href='/projects'>
                <img src={logo} className="HypmndLogo" alt="logo" />
            </a>
        </div>
    )
}

export default Welcome