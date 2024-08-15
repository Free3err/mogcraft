import { useEffect } from "react";

import Footer from "../components/footer/Footer";

import "../css/documents.css";

const TermsOfUse = () => {
    useEffect(() => {
        document.title = "MogCraft | Условия использования";
    }, []);

    return (
        <>
            <main>
                <div className='main_wrapper'>
                    <div className='terms_of_use_wrapper'>
                        <h1 className='title_section'>
                            Условия использования сайта MogCraft.ru
                        </h1>
                        <h3 className='date_of_entry'>
                            Дата последнего обновления: 06.08.2024
                        </h3>
                        <p className='desc'>
                            Добро пожаловать на MogCraft.ru! Прежде чем
                            воспользоваться нашим сайтом и услугами, пожалуйста,
                            ознакомьтесь с условиями использования. Входя на
                            сайт, вы соглашаетесь с данными условиями. Если вы
                            не согласны с ними, пожалуйста, прекратите
                            использование нашего сайта.
                        </p>
                        <h4>1. Общие положения</h4>
                        <section className='points'>
                            <p>
                                1.1. Настоящие условия использования регулируют
                                отношения между администрацией сайта MogCraft.ru
                                и пользователями данного сайта.
                            </p>
                            <p>
                                1.2. Под пользователем понимается любое лицо,
                                которое использует сайт.
                            </p>
                            <p>
                                1.3. Администрация сайта оставляет за собой
                                право вносить изменения в настоящие условия в
                                любое время без предварительного уведомления
                                пользователей. Новая версия условий вступает в
                                силу с момента ее размещения на сайте.
                            </p>
                        </section>
                        <h4>2. Права и обязанности пользователей</h4>
                        <section className='points'>
                            <p>
                                2.1. Пользователь обязуется использовать сайт
                                исключительно в законных и не нарушающих права
                                третьих лиц целях.
                            </p>
                            <p>
                                2.2. Пользователь обязуется не предпринимать
                                действия, которые могут нарушить нормальную
                                работу сайта.
                            </p>
                            <p>
                                2.3. Пользователь соглашается не размещать на
                                сайте материалы, содержащие вирусы или другие
                                вредоносные программы.
                            </p>
                            <p>
                                2.4. Пользователь обязуется не использовать
                                учетную запись другого пользователя без его
                                разрешения.
                            </p>
                        </section>
                        <h4>3. Права и обязанности администрации сайта</h4>
                        <section className='points'>
                            <p>
                                3.1. Администрация сайта обязуется предпринимать
                                все необходимые меры для обеспечения
                                бесперебойной работы сайта.
                            </p>
                            <p>
                                3.2. Администрация сайта имеет право в любое
                                время без предварительного уведомления
                                пользователей изменять содержание сайта,
                                добавлять или удалять информацию.
                            </p>
                            <p>
                                3.3. Администрация сайта не несет
                                ответственности за возможные сбои в работе
                                сайта, вызванные техническими проблемами, а
                                также за возможные убытки пользователей,
                                вызванные такими сбоями.
                            </p>
                            <p>
                                3.4. Администрация сайта имеет право при
                                нарушении пользователем настоящих условий
                                ограничить доступ к сайту или удалить учетную
                                запись пользователя.
                            </p>
                        </section>
                        <h4>4. Конфиденциальность</h4>
                        <section className='points'>
                            <p>
                                4.1. Администрация сайта обязуется не передавать
                                персональные данные пользователей третьим лицам
                                без их согласия, за исключением случаев,
                                предусмотренных законодательством.
                            </p>
                            <p>
                                4.2. Пользователь обязуется не разглашать
                                информацию о других пользователях, полученную на
                                сайте.
                            </p>
                        </section>
                        <h4>5. Контент и интеллектуальная собственность</h4>
                        <section className='points'>
                            <p>
                                5.1. Весь контент, размещенный на сайте, включая
                                текст, графику, логотипы, изображения и
                                программное обеспечение, является собственностью
                                администрации сайта или ее лицензиаров и защищен
                                авторским правом.
                            </p>
                            <p>
                                5.2. Пользователь имеет право использовать
                                контент сайта только для личного некоммерческого
                                использования.
                            </p>
                            <p>
                                5.3. Запрещено копировать, распространять,
                                изменять или использовать контент сайта в
                                коммерческих целях без предварительного
                                письменного разрешения администрации сайта.
                            </p>
                        </section>
                        <h4>6. Ограничение ответственности</h4>
                        <section className='points'>
                            <p>
                                6.1. Сайт MogCraft.ru предоставляется "как
                                есть". Администрация сайта не гарантирует, что
                                сайт будет работать без сбоев или ошибок.
                            </p>
                            <p>
                                6.2. Администрация сайта не несет
                                ответственности за содержание внешних сайтов,
                                ссылки на которые могут быть размещены на сайте
                                MogCraft.ru.
                            </p>
                            <p>
                                6.3. Пользователь соглашается использовать сайт
                                на свой страх и риск.
                            </p>
                        </section>
                        <h4>7. Разрешение споров</h4>
                        <section className='points'>
                            <p>
                                7.1. Все споры, возникающие из-за настоящих
                                условий, подлежат разрешению в соответствии с
                                действующим законодательством Российской
                                Федерации.
                            </p>
                            <p>
                                7.2. Претензии пользователей принимаются
                                администрацией сайта в письменной форме по
                                электронной почте, указанной на сайте.
                            </p>
                        </section>
                        <h4>8. Заключительные положения</h4>
                        <section className='points'>
                            <p>
                                8.1. Настоящие условия составляют полное
                                соглашение между пользователем и администрацией
                                сайта по поводу пользования сайтом.
                            </p>
                            <p>
                                8.2. Если какое-либо положение настоящих условий
                                будет признано недействительным или
                                неисполнимым, остальные положения останутся в
                                силе.
                            </p>
                        </section>
                        <section className='contact_section'>
                            <p>
                                Если у вас есть вопросы по поводу данного
                                Соглашения, пожалуйста, свяжитесь с нами по
                                адресу:{" "}
                                <a
                                    className='mailto_link'
                                    href='mailto:contact@mogcraft.ru'
                                >
                                    contact@mogcraft.ru
                                </a>
                                .
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default TermsOfUse;
