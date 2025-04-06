
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';

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
            <p className="text-foreground/60 mt-2 text-sm max-w-xs text-center md:text-left">
              Crafting beautiful digital experiences with Ghibli-inspired magic and attention to detail
            </p>
            
            {/* Social links */}
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger asChild>
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Button variant="outline" size="icon" rounded="full" className="w-9 h-9">
                      <Github className="h-4 w-4" />
                    </Button>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto">
                  <p className="text-sm">Visit my GitHub</p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Button variant="outline" size="icon" rounded="full" className="w-9 h-9">
                      <Linkedin className="h-4 w-4" />
                    </Button>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto">
                  <p className="text-sm">Connect on LinkedIn</p>
                </HoverCardContent>
              </HoverCard>

              <HoverCard>
                <HoverCardTrigger asChild>
                  <a href="mailto:contact@example.com" aria-label="Email">
                    <Button variant="outline" size="icon" rounded="full" className="w-9 h-9">
                      <Mail className="h-4 w-4" />
                    </Button>
                  </a>
                </HoverCardTrigger>
                <HoverCardContent className="w-auto">
                  <p className="text-sm">Email me</p>
                </HoverCardContent>
              </HoverCard>
            </div>
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
