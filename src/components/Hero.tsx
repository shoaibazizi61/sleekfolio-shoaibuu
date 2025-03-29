
import { useEffect, useRef } from 'react';
import { ChevronDown, ExternalLink, Cloud, Bird, Feather, Leaf, Stars, Flower2, Mountain } from 'lucide-react';
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
        {/* Enhanced floating blobs with better visibility */}
        <div className="blob h-64 w-64 bg-primary/30 top-20 -left-32 animate-float"></div>
        <div className="blob h-80 w-80 bg-blue-500/30 bottom-20 -right-20 animate-float" style={{animationDelay: "2s"}}></div>
        <div className="blob h-48 w-48 bg-purple-500/30 top-1/3 right-20 animate-float" style={{animationDelay: "1s"}}></div>
        <div className="blob h-56 w-56 bg-[#ffdee2]/40 bottom-40 left-40 animate-float" style={{animationDelay: "3s"}}></div>
        <div className="blob h-40 w-40 bg-[#f2fce2]/40 top-1/4 left-1/4 animate-float" style={{animationDelay: "1.5s"}}></div>
        <div className="blob h-72 w-72 bg-[#fef7cd]/40 bottom-1/4 right-1/4 animate-float" style={{animationDelay: "2.7s"}}></div>
        
        {/* Totoro-inspired forest silhouette with better visibility */}
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-40 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,100 L50,95 L60,100 L80,90 L100,100 L120,95 L140,100 L160,95 L180,100 L200,95 L220,100 L240,95 L260,100 L280,95 L300,100 L320,95 L340,100 L360,95 L380,100 L400,95 L420,100 L440,95 L460,100 L480,95 L500,100 L520,95 L540,100 L560,95 L580,100 L600,95 L620,100 L640,95 L660,100 L680,95 L700,100 L720,95 L740,100 L760,95 L780,100 L800,95 L820,100 L840,95 L860,100 L880,95 L900,100 L920,95 L940,100 L960,95 L980,100 L1000,95 L1020,100 L1040,95 L1060,100 L1080,95 L1100,100 L1120,95 L1140,100 L1160,95 L1180,100 L1200,95 L1200,120 L0,120 Z" fill="currentColor" className="text-foreground"></path>
          </svg>
        </div>
        
        {/* Ghibli-inspired floating elements with improved visibility */}
        <div className="absolute top-20 left-1/4 w-16 h-16 text-[#6eada8]/70 animate-float" style={{animationDelay: "0.5s"}}>
          <Cloud className="w-full h-full" />
        </div>
        <div className="absolute top-40 right-1/3 w-12 h-12 text-[#c6bf5e]/70 animate-float" style={{animationDelay: "1.2s"}}>
          <Cloud className="w-full h-full" />
        </div>
        <div className="absolute bottom-40 right-1/4 w-10 h-10 text-[#e1857f]/70 animate-float" style={{animationDelay: "2.3s"}}>
          <Bird className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 left-1/5 w-8 h-8 text-[#86bb6b]/70 animate-spin-slow" style={{animationDelay: "1.8s"}}>
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/3 left-1/3 w-9 h-9 text-[#e17f95]/70 animate-float" style={{animationDelay: "3.1s"}}>
          <Feather className="w-full h-full" />
        </div>
        <div className="absolute top-32 right-1/5 w-7 h-7 text-[#c9a95b]/80 animate-twinkle" style={{animationDelay: "1.4s"}}>
          <Stars className="w-full h-full" />
        </div>
        <div className="absolute bottom-24 left-1/4 w-10 h-10 text-[#7ab363]/70 animate-sway" style={{animationDelay: "2.6s"}}>
          <Flower2 className="w-full h-full" />
        </div>
        <div className="absolute -bottom-5 right-0 w-64 h-32 text-[#627967]/40 animate-rise" style={{animationDelay: "0.8s"}}>
          <Mountain className="w-full h-full" />
        </div>
        
        {/* Ghibli-style fluffy clouds with better visibility */}
        <div className="absolute top-10 right-10 opacity-40">
          <svg className="w-40 h-24 text-nature-leaf fill-current" viewBox="0 0 200 100">
            <circle cx="65" cy="30" r="20" />
            <circle cx="45" cy="40" r="15" />
            <circle cx="85" cy="40" r="15" />
            <circle cx="65" cy="50" r="15" />
            <circle cx="35" cy="60" r="10" />
            <circle cx="95" cy="60" r="10" />
          </svg>
        </div>
        
        <div className="absolute bottom-40 left-10 opacity-30">
          <svg className="w-36 h-20 text-nature-soil fill-current" viewBox="0 0 200 100">
            <circle cx="65" cy="30" r="20" />
            <circle cx="45" cy="40" r="15" />
            <circle cx="85" cy="40" r="15" />
            <circle cx="65" cy="50" r="15" />
            <circle cx="35" cy="60" r="10" />
            <circle cx="95" cy="60" r="10" />
          </svg>
        </div>
        
        {/* Dust particles animation enhanced in index.css */}
        
        {/* Ghibli-inspired grid pattern with better visibility */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCgyNzAgNTAlIDYwJSAvIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiPjwvcmVjdD48L3N2Zz4=')]" style={{ opacity: "0.5" }}></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-fade-in opacity-0" style={{animationDelay: "0.2s"}}>
          <span className="inline-block mb-2 py-1.5 px-4 rounded-full text-xs font-medium bg-primary/20 text-primary backdrop-blur-sm border border-primary/30">
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
        
        {/* Ghibli-inspired decorative divider with better visibility */}
        <div className="w-40 h-5 mx-auto my-4 opacity-70 animate-fade-in" style={{animationDelay: "0.5s"}}>
          <svg viewBox="0 0 100 20" className="w-full h-full">
            <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" />
            <circle cx="25" cy="10" r="2" fill="hsl(var(--primary))" />
            <circle cx="75" cy="10" r="2" fill="hsl(var(--primary))" />
          </svg>
        </div>
        
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/90 mb-10 animate-fade-in opacity-0" style={{animationDelay: "0.6s"}}>
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
        
        {/* Ghibli-inspired magical sparkles with better visibility */}
        <div className="relative h-10 mt-8">
          <div className="absolute left-1/4 w-4 h-4 bg-[#fef7cd]/60 rounded-full animate-twinkle" style={{animationDelay: "0.5s"}}></div>
          <div className="absolute left-1/3 w-3 h-3 bg-[#ffdee2]/60 rounded-full animate-twinkle" style={{animationDelay: "1.2s"}}></div>
          <div className="absolute left-1/2 w-5 h-5 bg-[#a6d0cc]/60 rounded-full animate-twinkle" style={{animationDelay: "0.8s"}}></div>
          <div className="absolute left-2/3 w-3 h-3 bg-[#fef7cd]/60 rounded-full animate-twinkle" style={{animationDelay: "1.5s"}}></div>
          <div className="absolute left-3/4 w-4 h-4 bg-[#ffdee2]/60 rounded-full animate-twinkle" style={{animationDelay: "0.3s"}}></div>
        </div>
      </div>
      
      <button 
        onClick={scrollToPortfolio}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-all hover:border-primary/50 group"
        aria-label="Scroll to portfolio"
      >
        <ChevronDown className="w-5 h-5 animate-bounce group-hover:text-primary" />
      </button>
      
      {/* Ghibli-style waves at the bottom with better visibility */}
      <div className="absolute bottom-0 left-0 right-0 h-12 opacity-60">
        <svg className="w-full h-full" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,60 350,0 500,60 C650,120 850,60 1000,30 C1050,15 1150,0 1200,0 V120 H0 Z" className="fill-current text-nature-forest/40"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
