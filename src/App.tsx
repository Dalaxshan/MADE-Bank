import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './i18n/LanguageContext';
import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DepositsPage from './pages/DepositsPage';
import ExportNetworkPage from './pages/ExportNetworkPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import LoansPage from './pages/LoansPage';

export default function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <div className="min-h-screen">
        <ScrollProgress />
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/loans" element={<LoansPage />} />
            <Route path="/deposits" element={<DepositsPage />} />
            <Route path="/export-network" element={<ExportNetworkPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
    </LanguageProvider>
  );
}
