
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
      className="relative min-h-screen flex items-center justify-center section-padding overflow-hidden"
      style={{
        background: `radial-gradient(
          circle at calc(var(--mouse-x, 0.5) * 100%) calc(var(--mouse-y, 0.5) * 100%), 
          hsl(var(--primary) / 0.15), 
          transparent 40%
        )`
      }}
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob h-64 w-64 bg-primary/20 top-20 -left-32 animate-float"></div>
        <div className="blob h-80 w-80 bg-blue-500/20 bottom-20 -right-20 animate-float" style={{animationDelay: "2s"}}></div>
        <div className="blob h-48 w-48 bg-purple-500/20 top-1/3 right-20 animate-float" style={{animationDelay: "1s"}}></div>
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCgyNzAgNTAlIDYwJSAvIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiPjwvcmVjdD48L3N2Zz4=')]" opacity="0.4"></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in opacity-0" style={{animationDelay: "0.2s"}}>
          <span className="inline-block mb-2 py-1.5 px-4 rounded-full text-xs font-medium bg-primary/10 text-primary backdrop-blur-sm border border-primary/20">
            UI/UX & GRAPHIC DESIGNER
          </span>
        </div>
        <h1 className="font-montserrat text-4xl md:text-6xl lg:text-7xl font-bold mt-4 mb-6 animate-fade-in opacity-0" style={{animationDelay: "0.4s"}}>
          <span className="block">Innovative Designs,</span>
          <span className="text-gradient relative">
            Seamless Experiences.
            <span className="absolute -bottom-2 left-0 right-0 h-[3px] bg-gradient-to-r from-primary/40 via-primary to-blue-500/40"></span>
          </span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-10 animate-fade-in opacity-0" style={{animationDelay: "0.6s"}}>
          I create beautiful, functional designs that help businesses connect with their audience and achieve their goals.
        </p>
        <div className="flex flex-wrap justify-center gap-5 animate-fade-in opacity-0" style={{animationDelay: "0.8s"}}>
          <Button 
            onClick={scrollToPortfolio}
            className="btn-primary glow-effect group"
          >
            View My Work
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            variant="secondary"
            asChild
            className="btn-secondary"
          >
            <a href="#contact">Get In Touch</a>
          </Button>
        </div>
      </div>
      
      <button 
        onClick={scrollToPortfolio}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all hover:border-primary/50 group"
        aria-label="Scroll to portfolio"
      >
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-primary" />
      </button>
    </section>
  );
};

export default Hero;
