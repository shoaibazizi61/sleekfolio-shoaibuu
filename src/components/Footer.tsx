
import { ArrowUp, Heart } from 'lucide-react';
import { Button } from './ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/80 py-12 relative overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute -top-16 -left-16 w-32 h-32 rounded-full bg-primary/10 blur-3xl"></div>
      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full bg-primary/10 blur-2xl"></div>
      
      {/* Dust particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full bg-primary/40 animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" className="flex items-center">
              <span className="font-montserrat font-bold text-2xl text-gradient">Shoaibuu.</span>
            </a>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <Button
              variant="ghibli"
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4" />
            </Button>
            
            <div className="flex flex-col items-center md:items-end gap-2 mt-2">
              <p className="text-foreground/60 text-sm flex items-center gap-1.5">
                Made with <Heart className="w-3.5 h-3.5 text-accent animate-pulse-slow" fill="currentColor" /> in 2024
              </p>
              <p className="text-foreground/60 text-sm">
                © {currentYear} Shoaibuu. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
