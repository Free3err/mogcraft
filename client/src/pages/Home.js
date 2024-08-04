import React, { useState, useEffect } from "react";

import Footer from "../components/footer/Footer";
import SmoothTransform from "../utils/smoothTransform/smoothTransform";
 
import scrollTo from "../utils/scrollTo";

import arrow from "../assets/img/icons/arrow.svg";

import "../css/home.css";

const Home = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = "MogCraft | Главная";
        getNews("https://t.me/mogcraft");
    }, []);

    const getNews = (url) => {
        fetch("http://localhost:5000/api/parse_group/get_posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ url: url }),
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }})
        .then(data => {
            setPosts(data.data.slice(0, 5))
        })
        .catch(error => {
            console.log(`Ошибка: ${error}`);
        });
    };

    const renderNews = (posts) => {
        return posts.map((post, index) => (
            <div className="news" key={index}>
                <h3>{post.author}</h3>
                <p>{post.text}</p>
            </div>
        ));
    };

    return (
        <>
            <SmoothTransform>
                <main>
                    <div className='main_wrapper'>
                        <h1 className='main_title'>Твой мир looksmaxing'а</h1>
                        <div className='block_to_offer_info'>
                            <a
                                href='#ex1'
                                className='arrow_to_offer_info'
                                onClick={(e) => scrollTo(e)}
                            >
                                <img src={arrow} alt='arrow' />
                            </a>
                        </div>
                        <section className='about' id='ex1'>
                            <SmoothTransform>
                                <h2 className='section_title'>О проекте</h2>
                            </SmoothTransform>
                            <SmoothTransform>
                                <section className='desc'>
                                    <p className='desc_part'>
                                        MogCraft - это сервер Minecraft с
                                        ламповым ванильным выживанием. Никаких
                                        модов, плагинов на новые крафты или же
                                        какие-либо изменения ванильной механики
                                        Minecraft.
                                    </p>
                                    <p className='desc_part'>
                                        Сервер был создан Free3err'ом 15 июня
                                        2024 года с изначальной целью играть с
                                        друзьями, но сейчас проект развился и
                                        готов принимать и других игроков!
                                    </p>
                                    <p className='desc_part'>
                                        Играйте с нами ;)
                                    </p>
                                </section>
                            </SmoothTransform>
                        </section>
                        <section className='news_section'>
                            <SmoothTransform>
                                <h2 className='section_title'>Новости</h2>
                            </SmoothTransform>
                            <section className='list_of_news'>
                                {posts ? renderNews(posts) : <h3>"Загрузка..."</h3>}
                            </section>
                        </section>
                    </div>
                </main>
                <Footer />
            </SmoothTransform>
        </>
    );
};

export default Home;
