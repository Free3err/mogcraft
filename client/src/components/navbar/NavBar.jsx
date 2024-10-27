import { NavLink } from "react-router-dom";
import "./style.css";

const NavBar = () => {
   return (
      <nav className="navbar_wrapper">
         <ul className="navbar">
            <NavLink to="/" className="navbar-link">
               <li>Главная</li>
            </NavLink>
            <NavLink to="/about" className="navbar-link">
               <li>О проекте</li>
            </NavLink>
            <NavLink to="/contacts" className="navbar-link">
               <li>Контакты</li>
            </NavLink>
            <a
               href="https://donatty.com/mogcraft_project"
               className="navbar-link"
            >
               <li>Пожертвовать</li>
            </a>
         </ul>
      </nav>
   );
};

export default NavBar;
