import { useState, useEffect } from "react";



import apiService from "../modules/apiService";

import SmoothTransform from "../utils/smoothTransform/smoothTransform";
import scrollTo from "../utils/scrollTo";

import arrow from "../assets/img/icons/arrow.svg";

import "../css/home.css";

const Home = () => {
   const [newsData, setNewsData] = useState([]);

   useEffect(() => {
      document.title = "MogCraft | Главная";
      fetchNewsData();
   }, []);

   const fetchNewsData = async () => {
      const response = await apiService.getRequest("/pages/get_data", {
         type: "news",
      });
      setNewsData(response || []);
   };

   const renderNews = (posts) => {
      return posts.map((post, index) => (
         <div className="news" key={index}>
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
            <div className="main-wrapper">
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
                           MogCraft - это сервер Minecraft с ламповым ванильным
                           выживанием. Никаких модов, плагинов на новые крафты
                           или же какие-либо изменения ванильной механики
                           Minecraft.
                        </p>
                        <p className="desc_part">
                           Сервер был создан Free3err'ом 15 июня 2024 года с
                           изначальной целью играть с друзьями, но проект
                           развился и стал готов принимать и других игроков!
                        </p>
                        <p className="desc_part">Присоединяйся :)</p>
                     </section>
                  </SmoothTransform>
               </section>
               <section className="news_section">
                  <SmoothTransform>
                     <h2 className="section_title">Новости</h2>
                  </SmoothTransform>
                  <section className="list_of_news">
                     {newsData.length ? (
                        renderNews(newsData)
                     ) : (
                        <SmoothTransform>
                           <h2 className="no_news">Новостей ещё нет!</h2>
                        </SmoothTransform>
                     )}
                  </section>
               </section>
            </div>
         </main>
         
      </>
   );
};

export default Home;
