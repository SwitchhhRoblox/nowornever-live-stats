import { ArrowDown, Gamepad2 } from 'lucide-react';
import logoImage from '@/assets/noworneever-logo.png';

export const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/80" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo */}
        <div className="mb-8 animate-fade-in">
          <img 
            src={logoImage} 
            alt="NowOrNever Gaming Company Logo" 
            className="h-32 w-auto mx-auto glow-effect animate-float"
          />
        </div>

        {/* Main Heading */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-slide-in-left">
          <span className="text-gradient-primary">Now</span>
          <span className="text-foreground">Or</span>
          <span className="text-gradient-secondary">Never</span>
        </h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-right" style={{ animationDelay: '0.2s' }}>
          Creating the next generation of 
          <span className="text-gradient-primary font-semibold"> immersive gaming experiences</span>
        </p>

        {/* Subtitle */}
        <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.4s' }}>
          From tower defense to adventure games, we build worlds that captivate millions of players worldwide
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-scale-in" style={{ animationDelay: '0.6s' }}>
          <button 
            className="btn-gaming inline-flex items-center gap-3"
            onClick={() => document.getElementById('featured-game')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Gamepad2 className="w-6 h-6" />
            Play Our Games
          </button>
          
          <button 
            className="btn-secondary-gaming inline-flex items-center gap-3"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
          <ArrowDown 
            className="w-8 h-8 text-primary cursor-pointer hover:text-primary-glow transition-colors"
            onClick={() => document.getElementById('featured-game')?.scrollIntoView({ behavior: 'smooth' })}
          />
        </div>
      </div>
    </section>
  );
};