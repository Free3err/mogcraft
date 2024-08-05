import { NavLink } from "react-router-dom";

import scrollTo from "../../utils/scrollTo";

import "./style.css";

const Footer = () => {
    return (
        <footer>
            <div className='footer_wrapper'>
                <div className='top_footer'>
                    <section className='copyright'>
                        Все права защищены © 2024
                    </section>
                    <a href='#ex0' onClick={(e) => scrollTo(e)}>
                        <section className='logo_footer'>MogCraft</section>
                    </a>
                </div>
                <div className='down_footer'>
                    <ul className='documents_links'>
                        <NavLink to='/Terms_of_use'>
                            <li>Условия использования</li>
                        </NavLink>
                        <NavLink to='/License_Agreement'>
                            <li>Лицензионное соглашение</li>
                        </NavLink>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
