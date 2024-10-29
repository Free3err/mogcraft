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

      fetchOwnerNames();
      fetchGroupsNames();
   }, []);

   const fetchOwnerNames = async () => {
      const response = apiService.getRequest("/page/get_data", {
         tablr: "owner",
      });
      setVkName(response.data ? response.data[0] : "Telegram");
      setTelegramName(response.data ? response.data[1] : "Vk");
   };

   const fetchGroupsNames = async () => {
      const response = apiService.getRequest("/page/get_data", {
         table: "groups",
      });
      setTelegramGroupName(response.data ? response.data[0] : "Telegram");
      setVkGroupName(response.data ? response.data[1] : "Vk");
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
