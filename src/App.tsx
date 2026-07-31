import ScrollProgress from './components/ScrollProgress';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import FarmerJourneySection from './components/FarmerJourneySection';
import DepositSection from './components/DepositSection';
import DepositCalculator from './components/DepositCalculator';
import GroupMortgageLoans from './components/GroupMortgageLoans';
import ExportNetwork from './components/ExportNetwork';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import StatsDashboard from './components/StatsDashboard';
import NewsEvents from './components/NewsEvents';
import FAQSection from './components/FAQSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <FarmerJourneySection />
        <DepositSection />
        <DepositCalculator />
        <GroupMortgageLoans />
        {/* <CompleteSupportSystem /> */}
        <ExportNetwork />
        <GallerySection />
        <TestimonialsSection />
        <StatsDashboard />
        <NewsEvents />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
