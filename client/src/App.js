import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";

import ScrollToTop from "./utils/scrollToTop";

import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import TermsOfUse from "./pages/TermsOfUse";
import LicenseAgreement from "./pages/LicenseAgreement";
import NotFound from "./pages/NotFound";

import "./css/main.css";
import "./assets/fonts/Gilroy/style.css";
import SmoothTransform from "./utils/smoothTransform/smoothTransform";

function App() {
    return (
        <div className='App'>
            <Router>
                <ScrollToTop />
                <Header />
                <SmoothTransform>
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/contacts' element={<Contacts />} />
                    <Route path='/about' element={<About />} />
                    <Route
                        path='/license_agreement'
                        element={<LicenseAgreement />}
                    />
                    <Route path='/terms_of_use' element={<TermsOfUse />} />
                    <Route path='/*' element={<NotFound />} />
                </Routes>
                </SmoothTransform>
            </Router>
        </div>
    );
}

export default App;
