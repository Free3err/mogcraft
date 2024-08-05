import { useEffect, useState } from "react";

import SmoothTransform from "../utils/smoothTransform/smoothTransform";

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

        const fetchOwnerName = async (urlPage, setName) => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/parse_owner/get_name",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ url: urlPage }),
                    }
                );
    
                const data = await response.json();
                setName(data.owner_name);
            } catch (error) {
                console.error("Ошибка:", error);
            }
        };

        const fetchGroupName = async (urlChannel, setGroupName) => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/parse_group/get_name",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ url: urlChannel }),
                    }
                );
    
                const data = await response.json();
                setGroupName(data.group_name);
            } catch (error) {
                console.error("Ошибка:", error);
            }
        };

        fetchOwnerName("https://vk.com/keckmeme", setVkName);
        fetchOwnerName("tg://user?id=1180308963", setTelegramName);

        fetchGroupName("https://t.me/mogcraft", setTelegramGroupName);
        fetchGroupName("https://vk.com/mogcraft_project", setVkGroupName);
    }, []);


    return (
        <>
        <SmoothTransform>
        <main>
            <div className='main_wrapper'>
                    <div className='contacts_sections'>
                        <section className='social links'>
                            <h2>Контакты проекта</h2>
                            <ul>
                                <li>
                                    <a href='https://vk.com/mogcraft_project'>
                                        <img src={vkLogo} alt='Vk Logo' />
                                    </a>
                                    <strong>{vkGroupName}</strong>
                                </li>
                                <li>
                                    <a href='https://t.me/mogcraft'>
                                        <img src={tgLogo} alt='Telegram Logo' />
                                    </a>
                                    <strong>{telegramGroupName}</strong>
                                </li>
                            </ul>
                        </section>
                        <section className='owner_social links'>
                            <h2>Контакты владельца проекта</h2>
                            <ul>
                                <li>
                                    <a href='https://vk.com/keckmeme'>
                                        <img src={vkLogo} alt='Vk Logo' />
                                    </a>
                                    <strong>{vkName}</strong>
                                </li>
                                <li>
                                    <a href='https://t.me/free3err'>
                                        <img src={tgLogo} alt='Telegram Logo' />
                                    </a>
                                    <strong>{telegramName}</strong>
                                </li>
                            </ul>
                        </section>
                    </div>
            </div>
        </main>
        </SmoothTransform>
        </>
    );
};

export default Contacts;
