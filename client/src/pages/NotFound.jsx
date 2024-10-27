import { useEffect } from "react";
import { NavLink } from "react-router-dom";

import "../css/not_found.css";

const NotFound = () => {
    useEffect(() => {
        document.title = "MogCraft | 404 Error";
    });
    return (
        <>
            <main className='section'>
                <div className='main-wrapper'>
                    <section className='not_found'>
                        <h1>По указанному адресу ничего не найдено</h1>
                        <NavLink to='/'>
                            <button className='classic_button'>
                                На главную
                            </button>
                        </NavLink>
                    </section>
                </div>
            </main>
        </>
    );
};

export default NotFound;
