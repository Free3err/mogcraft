import { BrowserRouter, useRoutes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import ScrollToTop from "./utils/scrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import TermsOfUse from "./pages/TermsOfUse";
import LicenseAgreement from "./pages/LicenseAgreement";
import NotFound from "./pages/NotFound";

import "./css/main.css";
import "./assets/fonts/Gilroy/style.css";

const routes = {
    publicRoutes: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/contacts",
            element: <Contacts />,
        },
        {
            path: "/about",
            element: <About />,
        },
        {
            path: "/license_agreement",
            element: <LicenseAgreement />,
        },
        {
            path: "/terms_of_use",
            element: <TermsOfUse />,
        },
        {
            path: "/*",
            element: <NotFound />,
        },
    ],
};

const Routing = () => useRoutes([...routes.publicRoutes]);

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Header />
                <ScrollToTop />
                <Routing />
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
