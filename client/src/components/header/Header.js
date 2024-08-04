import { NavLink } from 'react-router-dom';
import NavBar from '../navbar/NavBar';

import './style.css';

const Header = () => {
    const copyIp = () => {
        navigator.clipboard.writeText('mogcraft.ru');

        const alert = document.querySelector('.ip_copied_alert');

        alert.style.opacity = 1;
        setTimeout(function () {
            alert.style.opacity = 0;
        }, 1000);
    };

    return (
        <header id="ex0">
            <div className="header_wrapper">
                <NavLink to="/">
                    <div className="logo">
                        <snap className="first_logo">MOG</snap>
                        <snap className="second_logo">CRAFT</snap>
                    </div>
                </NavLink>
                <NavBar />
                <h2 className="ip_field">
                    IP:
                    <span onClick={copyIp}> mogcraft.ru </span>
                    (1.20.6)
                    <p className="ip_copied_alert">Айпи скопирован!</p>
                </h2>
            </div>
        </header>
    );
};

export default Header;
