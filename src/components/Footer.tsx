
import { ArrowUp, Cloud, Leaf, Bird, Fish, Mountain, SunMoon } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary/80 py-10 relative overflow-hidden">
      {/* Ghibli-style decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-ghibli-dots"></div>
        
        {/* Animated clouds */}
        <div className="absolute top-10 left-[10%] text-white/40 animate-float-slow">
          <Cloud className="w-16 h-16" />
        </div>
        <div className="absolute top-5 right-[15%] text-white/30 animate-float" style={{animationDelay: "1.5s"}}>
          <Cloud className="w-12 h-12" />
        </div>
        
        {/* Animated nature elements */}
        <div className="absolute bottom-12 left-[20%] text-nature-leaf/40 animate-sway" style={{animationDelay: "0.8s"}}>
          <Leaf className="w-8 h-8" />
        </div>
        <div className="absolute bottom-24 right-[22%] text-nature-leaf/30 animate-sway" style={{animationDelay: "1.3s"}}>
          <Leaf className="w-10 h-10" />
        </div>
        
        {/* Animated birds */}
        <div className="absolute top-1/3 left-[30%] text-nature-blossom/40 animate-bird-flight">
          <Bird className="w-8 h-8" />
        </div>
        <div className="absolute top-1/4 right-[35%] text-nature-blossom/30 animate-bird-flight" style={{animationDelay: "1.7s"}}>
          <Bird className="w-6 h-6" />
        </div>
        
        {/* Animated fish */}
        <div className="absolute bottom-5 left-[40%] text-nature-water/40 animate-fish-swim">
          <Fish className="w-8 h-8" />
        </div>
        
        {/* Background mountains */}
        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,60 L60,45 L100,55 L160,30 L220,50 L280,20 L340,40 L400,10 L460,45 L520,25 L580,55 L640,30 L700,50 L760,20 L820,40 L880,15 L940,35 L1000,5 L1060,30 L1120,15 L1200,40 L1200,60 Z" fill="currentColor" className="text-nature-forest"></path>
          </svg>
        </div>
        
        {/* Subtle sun/moon */}
        <div className="absolute top-6 right-6 text-nature-sunlight/30 animate-spin-slow">
          <SunMoon className="w-20 h-20" />
        </div>
        
        {/* Ghibli-style dust particles */}
        <div className="absolute inset-0 opacity-30 animate-dust-float bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0.5px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center group">
              <span className="font-montserrat font-bold text-xl relative">
                Shoaibuu
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </span>
              <span className="ml-1 text-lg font-light opacity-80">.</span>
            </Link>
            <p className="text-foreground/60 mt-2 text-sm">
              Crafting beautiful digital experiences
            </p>
            
            {/* Ghibli-style divider */}
            <div className="mt-4 w-32 h-4 opacity-60">
              <svg viewBox="0 0 100 10" className="w-full h-full">
                <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <path d="M0,5 Q25,10 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                <circle cx="0" cy="5" r="1" fill="currentColor" />
                <circle cx="25" cy="2.5" r="1" fill="currentColor" />
                <circle cx="50" cy="5" r="1" fill="currentColor" />
                <circle cx="75" cy="2.5" r="1" fill="currentColor" />
                <circle cx="100" cy="5" r="1" fill="currentColor" />
              </svg>
            </div>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary/20 hover:bg-primary/30 text-primary rounded-full transition-colors mb-4 shadow-md hover:shadow-lg relative overflow-hidden group"
              aria-label="Scroll to top"
            >
              <span className="absolute inset-0 bg-primary/10 transform scale-0 rounded-full group-hover:scale-100 transition-transform duration-300"></span>
              <ArrowUp className="w-5 h-5 relative z-10" />
            </button>
            
            <div className="relative glass rounded-lg px-4 py-2 backdrop-blur-sm bg-white/10 border border-white/20 shadow-sm">
              <p className="text-foreground/80 text-sm">
                © {currentYear} <span className="text-primary">Shoaibuu</span>. All rights reserved.
              </p>
              
              {/* Ghibli-style totoro-like small creature */}
              <div className="absolute -top-3 -right-3 w-6 h-10 opacity-70 animate-hop" style={{animationDelay: "1.5s"}}>
                <div className="w-full h-1/2 bg-nature-forest/60 rounded-full"></div>
                <div className="w-full h-1/2 bg-nature-forest/60 rounded-b-lg"></div>
                <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
