import { useEffect, useState } from "react";

import apiService from "../modules/apiService";

import tgLogo from "../assets/img/icons/tg_logo.svg";
import vkLogo from "../assets/img/icons/vk_logo.svg";

import "../css/contacts.css";

const Contacts = () => {
   const [vkName, setVkName] = useState("");
   const [telegramName, setTelegramName] = useState("");
   const [vkGroupName, setVkGroupName] = useState("");
   const [telegramGroupName, setTelegramGroupName] = useState("");

   useEffect(() => {
      document.title = "MogCraft | Контакты";

      fetchVkResourses();
      fetchTelegramResourses();
   }, []);

   const fetchVkResourses = async () => {
      const response = apiService.getRequest("/third-party/vk/get_data");
      setVkName(response.data ? response.data.ownerName : "Vk");
      setVkGroupName(response.data ? response.groupName : "VK");
   };

   const fetchTelegramResourses = async () => {
      const response = apiService.getRequest("/third-party/telegram/get_data");
      setTelegramName(response.data ? response.data[0] : "Telegram");
      setTelegramGroupName(response.data ? response.data[1] : "Telegram");
   };

   return (
      <>
         <main>
            <div className="main-wrapper">
               <div className="contacts-section">
                  <section className="social links">
                     <h2>Контакты проекта</h2>
                     <ul>
                        <li>
                           <a href={process.env.REACT_APP_VK_GROUP_URL}>
                              <img src={vkLogo} alt="Vk Logo" />
                           </a>
                           <strong>{vkGroupName}</strong>
                        </li>
                        <li>
                           <a href={process.env.REACT_APP_TG_GROUP_URL}>
                              <img src={tgLogo} alt="Telegram Logo" />
                           </a>
                           <strong>{telegramGroupName}</strong>
                        </li>
                     </ul>
                  </section>
                  <section className="owner-social links">
                     <h2>Контакты владельца проекта</h2>
                     <ul>
                        <li>
                           <a href={process.env.REACT_APP_VK_OWNER_URL}>
                              <img src={vkLogo} alt="Vk Logo" />
                           </a>
                           <strong>{vkName}</strong>
                        </li>
                        <li>
                           <a href="https://t.me/free3err">
                              <img src={tgLogo} alt="Telegram Logo" />
                           </a>
                           <strong>{telegramName}</strong>
                        </li>
                     </ul>
                  </section>
               </div>
            </div>
         </main>
         
      </>
   );
};

export default Contacts;
