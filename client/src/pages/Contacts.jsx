import { useEffect, useState } from "react";

import apiService from "../modules/apiService";

import tgLogo from "../assets/img/icons/tg_logo.svg";
import vkLogo from "../assets/img/icons/vk_logo.svg";

import "../css/contacts.css";

const Contacts = () => {
    const [vkName, setVkName] = useState("Vk");
    const [telegramName, setTelegramName] = useState("Telegram");
    const [vkGroupName, setVkGroupName] = useState("Vk");
    const [telegramGroupName, setTelegramGroupName] = useState("Telegram");

    useEffect(() => {
        document.title = "MogCraft | Контакты";

        fetchVkResourses();
        fetchTelegramResourses();
    }, []);

    const fetchVkResourses = async () => {
        const response = await apiService.getRequest(
            "/third-party/socials/get_data",
            {
                social: "vk",
                channel_url: process.env.REACT_APP_VK_GROUP_URL,
                owner_url: process.env.REACT_APP_VK_OWNER_URL,
            }
        );
        if (response.ok) {
            setVkName(response.data.owner_name || "Vk");
            setVkGroupName(response.data.group_name || "VK");
        } else {
            throw new Error(
                response.shortError || "Ошибка при получении данных VK"
            );
        }
    };

    const fetchTelegramResourses = async () => {
        const response = await apiService.getRequest(
            "/third-party/socials/get_data",
            {
                social: "telegram",
                channel_url: process.env.REACT_APP_TG_GROUP_ID,
                owner_url: process.env.REACT_APP_TG_OWNER_ID,
            }
        );
        if (response.ok) {
            setTelegramName(response.data.owner_name);
            setTelegramGroupName(response.data.group_name);
        } else {
            throw new Error(
                response.shortError || "Ошибка при получении данных Telegram"
            );
        }
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
                                    <a
                                        href={
                                            process.env.REACT_APP_VK_GROUP_URL
                                        }
                                    >
                                        <img src={vkLogo} alt="Vk Logo" />
                                    </a>
                                    <strong>{vkGroupName}</strong>
                                </li>
                                <li>
                                    <a
                                        href={
                                            process.env.REACT_APP_TG_GROUP_URL
                                        }
                                    >
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
                                    <a
                                        href={
                                            process.env.REACT_APP_VK_OWNER_URL
                                        }
                                    >
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
