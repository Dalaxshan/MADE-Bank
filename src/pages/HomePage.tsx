import HeroSection from "../components/HeroSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ExportNetwork from "@/components/ExportNetwork";
import FarmerJourneySection from "@/components/FarmerJourneySection";
import FeatureGridSection from "@/components/FeatureGridSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureGridSection/>
      <FarmerJourneySection />
      <ExportNetwork />
      <TestimonialsSection />
    </>
  );
}
