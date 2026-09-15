import HeroSection from "@/components/guest/HeroSection";
import AboutSection from "@/components/guest/AboutSection";
import TestimonySection from "@/components/guest/TestimonySection";
import FaqSection from "@/components/guest/FaqSection";
import FooterSection from "@/components/guest/FooterSection";

export default function Home() {
  return (
    <div className="space-y-10 mx-auto p-4 max-w-6xl">
      <HeroSection />
      <AboutSection />
      <TestimonySection />
      <FaqSection />
      <FooterSection />
    </div>
  );
}
