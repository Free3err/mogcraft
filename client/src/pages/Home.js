import React, { useState, useEffect } from "react";

import Footer from "../components/footer/Footer";

import getPageData from "../utils/getPageData";

import SmoothTransform from "../utils/smoothTransform/smoothTransform";
import scrollTo from "../utils/scrollTo";

import arrow from "../assets/img/icons/arrow.svg";

import "../css/home.css";

const Home = () => {
    const [pageData, setPageData] = useState({});
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        document.title = "MogCraft | Главная";

        fetchPageData();
        getNews("https://t.me/mogcraft");
    }, []);

    const fetchPageData = async () => {
        setPageData({
            mainTitle: await getPageData("home/mainTitle"),
            desc0: await getPageData("home/desc/0"),
            desc1: await getPageData("home/desc/1"),
            desc2: await getPageData("home/desc/2"),
        });
    };

    const getNews = () => {
        fetch("http://localhost:5000/api/parse_group/get_posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then((data) => {
                setPosts(data.data.slice(0, 5));
            })
            .catch((error) => {
                console.log(`Ошибка: ${error}`);
            });
    };

    const renderNews = (posts) => {
        return posts.map((post, index) => (
            <div className='news' key={index}>
                <SmoothTransform>
                    <h3>От: {post.author}</h3>
                </SmoothTransform>
                <SmoothTransform>
                    <p>{post.text}</p>
                </SmoothTransform>
            </div>
        ));
    };

    return (
        <>
            <SmoothTransform>
                <main>
                    <div className='main_wrapper'>
                        <h1 className='main_title'>
                            {pageData.mainTitle
                                ? pageData.mainTitle
                                : "Загрузка..."}
                        </h1>
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
                                        {pageData.desc0 ? pageData.desc0 : ""}
                                    </p>
                                    <p className='desc_part'>
                                        {pageData.desc1 ? pageData.desc1 : ""}
                                    </p>
                                    <p className='desc_part'>
                                        {pageData.desc2 ? pageData.desc2 : ""}
                                    </p>
                                </section>
                            </SmoothTransform>
                        </section>
                        <section className='news_section'>
                            <SmoothTransform>
                                <h2 className='section_title'>Новости</h2>
                            </SmoothTransform>
                            <section className='list_of_news'>
                                {posts.length > 0 ? (
                                    renderNews(posts)
                                ) : (
                                    <SmoothTransform><h2 className="no_news">Новостей ещё нет!</h2></SmoothTransform>
                                )}
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
