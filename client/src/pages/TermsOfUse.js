import { useEffect } from "react";

const TermsOfUse = () => {
    useEffect(() => {
        document.title = "MogCraft | Условия использования";
    }, []);

    return (
        <>
            <main>
                <div className='main_wrapper'></div>
            </main>
        </>
    );
};

export default TermsOfUse;
