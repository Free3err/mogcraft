import { useEffect, useState } from "react";

import RegistrationForm from "../components/regForm/RegForm";

const SignUp = () => {
    useEffect(() => {
        document.title = "MogCraft | Регистрация";
    });


    return <>
    <main>
        <div className="main-wrapper">
            <div className="sign-up-content-block">
                <div className="sign-up-desc">
                    чозабретто
                </div>
                <RegistrationForm />
            </div>
        </div>
    </main>
    </>;
};

export default SignUp;