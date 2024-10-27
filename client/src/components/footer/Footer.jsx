import { NavLink } from "react-router-dom";
import scrollTo from "../../utils/scrollTo";
import "./style.css";

const Footer = () => {
   return (
      <footer>
         <div className="footer_wrapper">
            <div className="top_footer">
               <section className="copyright">
                  Все права защищены © 2024
               </section>
               <a href="#ex0" onClick={scrollTo}>
                  <section className="logo_footer">MogCraft</section>
               </a>
            </div>
            <div className="down_footer">
               <ul className="documents_links">
                  <li>
                     <NavLink to="/Terms_of_use">Условия использования</NavLink>
                  </li>
                  <li>
                     <NavLink to="/License_Agreement">
                        Лицензионное соглашение
                     </NavLink>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   );
};

export default Footer;
