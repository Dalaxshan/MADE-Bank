import HeroSection from '../components/HeroSection';
import TestimonialsSection from '../components/TestimonialsSection';
import ExportNetwork from '@/components/ExportNetwork';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      {/* <StatsDashboard /> */}
      <ExportNetwork/>
      {/* <CompleteSupportSystem /> */}
      <TestimonialsSection />
      {/* <NewsEvents /> */}
    </>
  );
}
