import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/header/Header';

import Home from './pages/Home';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Donate from './pages/Donate';
import TermsOfUse from './pages/TermsOfUse';
import LicenseAgreement from './pages/LicenseAgreement';
import NotFound from './pages/NotFound';

import ScrollToTop from './utils/scrollToTop';

import './css/main.css';
import './assets/fonts/Gilroy/style.css';

function App() {
    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contacts" element={<Contacts />} />
                    <Route path="/donate" element={<Donate />} />
                    <Route path="/about" element={<About />} />
                    <Route path='/terms_of_use' element={<TermsOfUse />} />
                    <Route path='/license_agreement' element={<LicenseAgreement />} />
                    <Route path="/*" element={<NotFound />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
