import { useEffect } from 'react';

const NotFound = () => {
    useEffect(() => {
        document.title = 'MogCraft | 404 Error';
    });
    return (
        <>
            <main className="section">
                <div className="main_wrapper">Упс... Тут ничего нет((</div>
            </main>
        </>
    );
};

export default NotFound;
