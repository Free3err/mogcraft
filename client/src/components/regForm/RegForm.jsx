import { useState } from "react";

import auth from "../../modules/auth";

import "./style.css";

const RegistrationForm = () => {
    const [regFormData, setRegFormData] = useState({
        username: "",
        email: "",
        password: "",
        retryPassword: "",
    });

    const regUser = async (e) => {
        e.preventDefault();
        if (regFormData.password !== regFormData.retryPassword) {
            alert("Пароли не совпадают!");
            return;
        } else if (regFormData.length < 8) {
            alert("Длина пароля меньше 8 символов!");
            return;
        }
        const response = await auth.regUser(regFormData);
        if (response.keyError === 1) {
            alert("Пользователь существует")
        } else if (response.keyError === 2) {
            alert("Почта уже используется!")
        }
    };

    const handleChange = (e) => {
        e.preventDefault();

        const { id, value } = e.target;
        setRegFormData({
            ...regFormData,
            [id]: value,
        });
    };

    return (
        <>
            <div className="sign-up-form">
                <form onSubmit={regUser}>
                    <input
                        type="text"
                        id="username"
                        className="input-sign-up"
                        placeholder="Никнейм"
                        value={regFormData.username}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        id="email"
                        className="input-sign-up"
                        placeholder="Email"
                        value={regFormData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        id="password"
                        className="input-sign-up"
                        placeholder="Пароль"
                        value={regFormData.password}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        id="retryPassword"
                        className="input-sign-up"
                        placeholder="Повторите пароль"
                        value={regFormData.retryPassword}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit">Зарегистрироваться</button>
                </form>
            </div>
        </>
    );
};

export default RegistrationForm;
