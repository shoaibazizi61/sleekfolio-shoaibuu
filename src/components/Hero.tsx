
import { useEffect, useRef } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { width, height, left, top } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty('--mouse-x', `${x}`);
      heroRef.current.style.setProperty('--mouse-y', `${y}`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center section-padding"
      style={{
        background: `radial-gradient(
          circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), 
          hsl(var(--primary) / 0.2), 
          transparent 50%
        )`
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute h-40 w-40 rounded-full bg-primary/20 blur-3xl top-1/4 -left-20 animate-pulse-slow" />
        <div className="absolute h-56 w-56 rounded-full bg-blue-500/10 blur-3xl bottom-1/4 -right-20 animate-pulse-slow" style={{animationDelay: "1s"}} />
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in opacity-0" style={{animationDelay: "0.3s"}}>
          <span className="inline-block mb-2 py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary">
            UI/UX & GRAPHIC DESIGNER
          </span>
        </div>
        <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 animate-fade-in opacity-0" style={{animationDelay: "0.5s"}}>
          <span className="block">Innovative Designs,</span>
          <span className="text-gradient">Seamless Experiences.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-foreground/80 mb-8 animate-fade-in opacity-0" style={{animationDelay: "0.7s"}}>
          I create beautiful, functional designs that help businesses connect with their audience and achieve their goals.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in opacity-0" style={{animationDelay: "0.9s"}}>
          <Button 
            onClick={scrollToPortfolio}
            className="px-6 py-7 bg-primary text-white rounded-lg shadow-lg hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
          >
            View My Work
            <ExternalLink className="w-4 h-4" />
          </Button>
          <Button 
            variant="secondary"
            asChild
            className="px-6 py-7 bg-secondary text-foreground rounded-lg shadow-sm hover:shadow-lg border border-primary/10 hover:border-primary/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToPortfolio}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm animate-bounce hover:bg-background/80 transition-all"
        aria-label="Scroll to portfolio"
      >
        <ChevronDown className="w-5 h-5" />
      </button>
    </section>
  );
};

export default Hero;
