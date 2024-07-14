import { useEffect } from 'react';

import SmoothTransform from '../utils/smoothTransform/smoothTransform';
import scrollTo from '../utils/scrollTo';

import arrow from '../assets/img/icons/arrow.svg';

import '../css/home.css';

const Home = () => {
    useEffect(() => {
        document.title = 'MogCraft | Главная';
    }, []);

    return (
        <>
            <main>
                <div className="main_wrapper">
                    <h1 className="main_title">Твой мир looksmaxing'а</h1>
                    <div className="block_to_offer_info">
                        <a
                            href="#ex1"
                            className="arrow_to_offer_info"
                            onClick={(e) => scrollTo(e)}
                        >
                            <img src={arrow} alt="arrow" />
                        </a>
                    </div>
                    <section className="about" id="ex1">
                        <SmoothTransform>
                            <h2 className="section_title">О проекте</h2>
                        </SmoothTransform>
                        <SmoothTransform>
                            <section className="desc">
                                <p className="desc_part">
                                    MogCraft - это сервер Minecraft с ламповым
                                    ванильным выживанием. Никаких модов,
                                    плагинов на новые крафты или же какие-либо
                                    изменения ванильной механики Minecraft.
                                </p>
                                <p className="desc_part">
                                    Сервер был создан Free3err'ом 15 июня 2024
                                    года с изначальной целью играть с друзьями,
                                    но сейчас проект развился и готов принимать
                                    и других игроков!
                                </p>
                                <p className="desc_part">Играйте с нами ;)</p>
                            </section>
                        </SmoothTransform>
                    </section>
                    <section className="News">
                        <SmoothTransform>
                            <h2 className="section_title">Новости</h2>
                        </SmoothTransform>
                        <SmoothTransform>
                            <section className="desc">
                                <p className="desc_part">
                                    В разработке, ожидайте!)
                                </p>
                            </section>
                        </SmoothTransform>
                    </section>
                </div>
            </main>
        </>
    );
};

export default Home;
