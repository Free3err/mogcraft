import { useEffect } from 'react';

const About = () => {
    useEffect(() => {
        document.title = 'MogCraft | О проекте';
    }, []);
    return (
        <>
            <main>
                <div className="main_wrapper">About</div>
            </main>
        </>
    );
};

export default About;
