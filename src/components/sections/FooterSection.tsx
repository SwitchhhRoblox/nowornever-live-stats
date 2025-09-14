import { Heart, ArrowUp } from 'lucide-react';
import logoImage from '@/assets/noworneever-logo.png';

export const FooterSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-t from-muted/30 to-background border-t border-border">
      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-4">
              <img 
                src={logoImage} 
                alt="NowOrNever Logo" 
                className="h-12 w-auto glow-effect"
              />
              <div>
                <h3 className="text-2xl font-bold text-gradient-primary">
                  NowOrNever
                </h3>
                <p className="text-muted-foreground">Gaming Company</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Creating immersive gaming experiences that bring communities together. 
              Join millions of players in our ever-expanding universe of games.
            </p>
            
            {/* Social Links Placeholder */}
            <div className="flex gap-4">
              {['Twitter', 'Discord', 'YouTube', 'TikTok'].map((platform) => (
                <button 
                  key={platform}
                  className="p-3 bg-card hover:bg-card-hover border border-border rounded-full transition-all duration-300 hover:border-primary/50 hover:scale-110"
                  aria-label={`Follow us on ${platform}`}
                >
                  <div className="w-5 h-5 bg-muted-foreground rounded-sm" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Our Games', href: '#featured-game' },
                { label: 'About Us', href: '#about' },
                { label: 'Team', href: '#team' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-foreground">Support</h4>
            <ul className="space-y-3">
              {[
                { label: 'Play on Roblox', href: 'https://www.roblox.com/games/79021943931147/NEW-Brainrot-Tower-Defense' },
                { label: 'Game Updates', href: '#' },
                { label: 'Report Issues', href: '#contact' },
                { label: 'Career Opportunities', href: '#team' }
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('http') ? (
                    <a 
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <button 
                      onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })}
                      className="text-muted-foreground hover:text-secondary transition-colors duration-300"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © 2024 NowOrNever Gaming Company. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Made with <Heart className="w-4 h-4 text-destructive mx-1 inline" /> for gamers worldwide
            </p>
          </div>
          
          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop}
            className="p-3 bg-primary/10 hover:bg-primary/20 border border-primary/30 rounded-full transition-all duration-300 hover:scale-110 group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-primary group-hover:text-primary-glow" />
          </button>
        </div>

        {/* Live Status Indicator */}
        <div className="flex justify-center mt-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full">
            <div className="w-2 h-2 bg-success rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};