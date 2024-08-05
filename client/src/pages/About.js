import { useEffect, useState } from "react";

import Footer from "../components/footer/Footer";

import getPageData from "../utils/getPageData";
import SmoothTransform from "../utils/smoothTransform/smoothTransform";
import scrollTo from "../utils/scrollTo";

import arrow from '../assets/img/icons/arrow.svg' 

import "../css/about.css";

const About = () => {
    useEffect(() => {
        document.title = "MogCraft | О проекте";

        const fetchPageData = async () => {
            const main_desc = await getPageData("about/main_desc");

            const question_1 = await getPageData("about/questions/0");
            const question_2 = await getPageData("about/questions/1");
            const question_3 = await getPageData("about/questions/2");
            const question_4 = await getPageData("about/questions/3");

            const answer_1 = await getPageData("about/answers/0");
            const answer_2 = await getPageData("about/answers/1");
            const answer_3 = await getPageData("about/answers/2");
            const answer_4 = await getPageData("about/answers/3");

            setPageData({
                main_desc,
            });

            setFAQ([
                [question_1, answer_1],
                [question_2, answer_2],
                [question_3, answer_3],
                [question_4, answer_4],
            ]);
        };

        fetchPageData();
    }, []);

    const [FAQ, setFAQ] = useState([]);
    const [pageData, setPageData] = useState({});

    const renderFAQ = (FAQ_array) => {
        return FAQ_array.map((item, index) => (
                <section className='aq_section' key={index}>
                    <SmoothTransform >
                    <h1 className='question'>{item[0]}</h1>
                    </SmoothTransform>
                    <SmoothTransform>
                    <p className='answer'>{item[1]}</p>
                    </SmoothTransform>
                </section>
        ));
    };

    return (
        <>
            <SmoothTransform>
                <main>
                    <div className='main_wrapper'>
                        <div className='about_wrapper'>
                            <h1 className="title_about">О проекте</h1>
                            <section className='main_section'>
                                <div className='main_desc'>
                                    <p className='part_main_desc'>
                                        {pageData.main_desc
                                            ? pageData.main_desc[0]
                                            : ""}
                                    </p>
                                    <p className='part_main_desc'>
                                        {pageData.main_desc
                                            ? pageData.main_desc[1]
                                            : ""}
                                    </p>
                                </div>
                            </section>
                            <div className='block_to_FAQ'>
                            <a
                                href='#ex1'
                                className='arrow_to_FAQ'
                                onClick={(e) => scrollTo(e)}
                            >
                                <img src={arrow} alt='arrow' />
                            </a>
                        </div>
                            <section className='answer-question_section' id='ex1'>
                                {FAQ ? renderFAQ(FAQ) : ""}
                            </section>
                        </div>
                    </div>
                </main>
                <Footer />
            </SmoothTransform>
        </>
    );
};

export default About;
