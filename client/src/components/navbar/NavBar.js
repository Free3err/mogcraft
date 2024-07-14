import { NavLink } from 'react-router-dom';
import './style.css';

const NavBar = () => {
    return (
        <>
            <nav className="navbar_wrapper">
                <ul className="navbar">
                    <NavLink to="/">
                        <li>Главная</li>
                    </NavLink>
                    <NavLink to="about">
                        <li>О проекте</li>
                    </NavLink>
                    <NavLink to="contacts">
                        <li>Контакты</li>
                    </NavLink>
                    <NavLink to="donate">
                        <li>Пожертвовать</li>
                    </NavLink>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
