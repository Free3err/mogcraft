import { useEffect } from 'react';

const Donate = () => {
    useEffect(() => {
        document.title = 'MogCraft | Пожертвовать';
    }, []);

    return (
        <>
            <main>
                <div className="main_wrapper">Donate</div>
            </main>
        </>
    );
};

export default Donate;
