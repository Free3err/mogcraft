import React, { useState, useEffect } from "react";
import axios from "axios";

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
        getNews(setPosts);
    }, []);

    const fetchPageData = async () => {
        setPageData({
            mainTitle: await getPageData("home/mainTitle"),
            desc0: await getPageData("home/desc/0"),
            desc1: await getPageData("home/desc/1"),
            desc2: await getPageData("home/desc/2"),
        });
    };

    const getNews = (setPosts) => {
        axios
            .get("https://mogcraft.ru:8000/api/group/get_posts")
            .then((response) => {
                setPosts(response.data.data);
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
                                <SmoothTransform>
                                    <h2 className='no_news'>
                                        Новостей ещё нет!
                                    </h2>
                                </SmoothTransform>
                            )}
                        </section>
                    </section>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Home;
