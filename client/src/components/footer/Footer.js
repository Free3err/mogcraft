import scrollTo from '../../utils/scrollTo';

import './style.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer_wrapper">
                <div className="top_footer">
                    <section className="copyright">
                        Все права защищены © 2024
                    </section>
                    <a href="#ex0" onClick={(e) => scrollTo(e)}>
                        <section className="logo_footer">MogCraft</section>
                    </a>
                </div>
                <div className="down_footer">
                    <ul className="documents_links">
                        <a href="terms_of_use">
                            <li>Условия использования</li>
                        </a>
                        <a href="license_agreement">
                            <li>Лицензионное соглашение</li>
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
