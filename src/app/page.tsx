import HeroSection from '@/components/HeroSection';
import PromoSection from '@/components/PromoSection';
import VideoSection from '@/components/VideoSection';
import TourSection from '@/components/TourSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero / Main Intro Section */}
      <HeroSection />

      {/* 2. Latest Release Promo Section */}
      <PromoSection />

      {/* 3. Embedded Video Section */}
      <VideoSection />

      {/* 4. Tour Dates List Section */}
      <TourSection />

      {/* Note: The global Navbar from layout.tsx will sit above all of this content. */}
    </div>
  );
}