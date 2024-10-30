import { useEffect, useState } from "react";



import apiService from "../modules/apiService";

import SmoothTransform from "../utils/smoothTransform/smoothTransform";
import scrollTo from "../utils/scrollTo";

import arrow from "../assets/img/icons/arrow.svg";

import "../css/about.css";

const About = () => {
   const [faqData, setFaqData] = useState([]);

   useEffect(() => {
      document.title = "MogCraft | О проекте";
      fetchFaqData();
   }, []);

   const fetchFaqData = async () => {
      const response = await apiService.getRequest("/database/get_data", {
         table: "faq",
      });
      setFaqData(response.data || [{question: "Не удалось загрузить контент", ans: ""}]);
   };

   const renderFAQ = () => {
      return faqData.map((aQ, index) => (
         <section className="faq-section" key={index}>
            <SmoothTransform>
               <h1 className="faq-question">{aQ.question}</h1>
            </SmoothTransform>
            <SmoothTransform>
               <p className="faq-answer">{aQ.ans}</p>
            </SmoothTransform>
         </section>
      ));
   };

   return (
      <>
         <main>
            <div className="main-wrapper">
               <div className="about-container">
                  <h1 className="about-title">О проекте</h1>
                  <section className="main-section">
                     <div className="description-container">
                        <p className="description-part">
                           MogCraft - ванильный сервер Майнкрафт, возможно даже
                           то, что ты искал! Никаких модов, никакого грифа.
                           Только ванильная игра.
                        </p>
                        <p className="description-part">
                           Комьюнити MogCraft - это простые ребята с различных
                           стран, регионов, городов. Но все они объединены. Где?
                           На MogCraft.
                        </p>
                     </div>
                  </section>
                  <div className="faq-block">
                     <a
                        href="#ex1"
                        className="faq-arrow"
                        onClick={(e) => scrollTo(e)}
                     >
                        <img src={arrow} alt="arrow" />
                     </a>
                  </div>
                  <section className="answer-question-section" id="ex1">
                     {faqData.length ? renderFAQ() : ""}
                  </section>
               </div>
            </div>
         </main>
         
      </>
   );
};

export default About;
