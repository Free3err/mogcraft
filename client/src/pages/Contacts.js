import { useEffect } from 'react';

const Contacts = () => {
    useEffect(() => {
        document.title = 'MogCraft | Контакты';
    }, []);
    return (
        <>
            <main>
                <div className="main_wrapper">Contacts</div>
            </main>
        </>
    );
};

export default Contacts;
