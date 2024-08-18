import { useEffect, useState } from "react";
import axios from "axios";

import Footer from "../components/footer/Footer";

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

        fetchOwnerName("https://vk.com/keckmeme", setVkName);
        fetchOwnerName("tg://user?id=1180308963", setTelegramName);

        fetchGroupName("https://t.me/mogcraft", setTelegramGroupName);
        fetchGroupName("https://vk.com/mogcraft_project", setVkGroupName);
    }, []);

    const fetchOwnerName = async (urlPage, setName) => {
        axios
            .get(`http://localhost:5000/api/owner/get_name?url=${urlPage}`)
            .then((response) => setName(response.data.owner_name));
    };

    const fetchGroupName = (urlChannel, setGroupName) => {
        axios
            .get(
                `http://localhost:5000/api/group/get_name?url=${encodeURIComponent(
                    urlChannel
                )}`
            )
            .then((response) => setGroupName(response.data.group_name));
    };

    return (
        <>
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
                                            <img
                                                src={tgLogo}
                                                alt='Telegram Logo'
                                            />
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
                                            <img
                                                src={tgLogo}
                                                alt='Telegram Logo'
                                            />
                                        </a>
                                        <strong>{telegramName}</strong>
                                    </li>
                                </ul>
                            </section>
                        </div>
                    </div>
                </main>
                <Footer />
        </>
    );
};

export default Contacts;
