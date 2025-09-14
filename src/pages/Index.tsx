import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedGameSection } from '@/components/sections/FeaturedGameSection';
import { LiveStatsSection } from '@/components/sections/LiveStatsSection';
import { TeamSection } from '@/components/sections/TeamSection';
import { AboutSection } from '@/components/sections/AboutSection';
import { ContactSection } from '@/components/sections/ContactSection';
import { FooterSection } from '@/components/sections/FooterSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedGameSection />
      <LiveStatsSection />
      <TeamSection />
      <AboutSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
