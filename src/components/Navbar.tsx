
import { useState, useEffect } from 'react';
import { Menu, X, Leaf, Cloud, Flower2, Bird, Fish, Mountain, Feather, Sparkles } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { useIsMobile } from '../hooks/use-mobile';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = ['home', 'portfolio', 'services', 'about', 'contact'];
      
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  // Enhanced Ghibli-style decorative elements
  const ghibliDecorations = [
    <Leaf key="leaf1" className="w-3 h-3 text-primary animate-sway opacity-70" style={{animationDelay: "1.2s"}} />,
    <Cloud key="cloud1" className="w-4 h-4 text-primary animate-float-slow opacity-70" style={{animationDelay: "0.8s"}} />,
    <Flower2 key="flower1" className="w-3 h-3 text-nature-blossom animate-float-slow opacity-70" style={{animationDelay: "1.5s"}} />,
    <Bird key="bird1" className="w-4 h-4 text-nature-sunlight animate-bird-flight opacity-70" style={{animationDelay: "2.3s"}} />,
    <Fish key="fish1" className="w-3 h-3 text-nature-water animate-fish-swim opacity-70" style={{animationDelay: "1.8s"}} />,
    <Mountain key="mountain1" className="w-5 h-5 text-nature-stone animate-float-slow opacity-50" style={{animationDelay: "3.2s"}} />,
    <Feather key="feather1" className="w-3 h-3 text-nature-blossom animate-falling opacity-70" style={{animationDelay: "0.5s"}} />,
    <Sparkles key="sparkles1" className="w-3 h-3 text-nature-sunlight animate-twinkle opacity-70" style={{animationDelay: "1.1s"}} />
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 backdrop-blur-xl bg-background/80 border-b border-primary/20 shadow-sm' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between relative">
        {/* Ghibli-style decorative elements in the background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-2 left-5 opacity-70">
            <div className="w-2 h-2 rounded-full bg-primary/40 animate-twinkle" style={{animationDelay: "0.7s"}}></div>
          </div>
          <div className="absolute top-6 right-12 opacity-70">
            <div className="w-3 h-3 rounded-full bg-nature-blossom/40 animate-twinkle" style={{animationDelay: "1.3s"}}></div>
          </div>
          <div className="absolute bottom-2 left-1/3 opacity-70">
            <div className="w-2 h-2 rounded-full bg-nature-sunlight/40 animate-twinkle" style={{animationDelay: "2.1s"}}></div>
          </div>
          <div className="absolute bottom-5 right-1/4 opacity-70">
            <div className="w-3 h-3 rounded-full bg-nature-leaf/40 animate-twinkle" style={{animationDelay: "1.7s"}}></div>
          </div>
        </div>

        <a href="#home" className="flex items-center">
          <span className="font-montserrat font-bold text-xl relative z-10 group">
            Shoaibuu
            <span className="text-primary">.</span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
          </span>
          {/* Ghibli decorative element */}
          <span className="relative">
            <span className="absolute -top-2 -right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-primary/70">
              <Leaf className="w-3 h-3 animate-sway" />
            </span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8 relative">
          {/* Decorative Ghibli elements */}
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-60">
            <Leaf className="w-4 h-4 text-primary animate-sway" style={{animationDelay: "1.2s"}} />
          </div>
          {navLinks.map((link, index) => (
            <a 
              key={link.name} 
              href={link.href}
              className={`nav-link ${activeSection === link.href.substring(1) ? 'active' : ''} relative`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href.substring(1));
              }}
            >
              {link.name}
              {activeSection === link.href.substring(1) && (
                <span className="absolute -right-2.5 -top-1.5 text-primary/70 animate-float-slow" style={{animationDelay: "0.5s"}}>
                  {ghibliDecorations[index % ghibliDecorations.length]}
                </span>
              )}
            </a>
          ))}
          <ThemeToggle />
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-60">
            <Cloud className="w-4 h-4 text-primary animate-float-slow" style={{animationDelay: "0.8s"}} />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2 text-foreground p-2 rounded-full hover:bg-primary/10 transition-colors relative"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            <span className="absolute -top-1 -right-1 opacity-70">
              {isMenuOpen ? 
                <Bird className="w-3 h-3 text-primary animate-bird-flight" /> : 
                <Leaf className="w-3 h-3 text-primary animate-sway" />
              }
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Improved with Ghibli styling */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ top: '60px' }}
      >
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Add subtle patterns */}
          <div className="absolute inset-0 bg-ghibli-dots opacity-30"></div>
          
          {/* Floating elements */}
          <div className="absolute top-10 left-5 opacity-60">
            <Cloud className="w-8 h-8 text-primary/70 animate-float-slow" style={{animationDelay: "1.2s"}} />
          </div>
          <div className="absolute bottom-20 right-10 opacity-60">
            <Mountain className="w-12 h-12 text-nature-forest/70 animate-float-slow" style={{animationDelay: "0.8s"}} />
          </div>
          <div className="absolute top-1/3 right-5 opacity-60">
            <Bird className="w-6 h-6 text-nature-blossom/70 animate-bird-flight" style={{animationDelay: "2.5s"}} />
          </div>
          <div className="absolute bottom-1/3 left-10 opacity-60">
            <Fish className="w-7 h-7 text-nature-water/70 animate-fish-swim" style={{animationDelay: "1.5s"}} />
          </div>
          <div className="absolute top-2/3 right-1/4 opacity-60">
            <Flower2 className="w-6 h-6 text-primary/70 animate-sway" style={{animationDelay: "0.5s"}} />
          </div>
          
          {/* Sparkle effects */}
          <div className="absolute top-20 left-1/4 opacity-70">
            <div className="w-3 h-3 rounded-full bg-nature-sunlight/60 animate-twinkle" style={{animationDelay: "0.7s"}}></div>
          </div>
          <div className="absolute bottom-40 right-1/3 opacity-70">
            <div className="w-4 h-4 rounded-full bg-nature-leaf/60 animate-twinkle" style={{animationDelay: "1.3s"}}></div>
          </div>
          <div className="absolute top-1/2 left-10 opacity-70">
            <div className="w-3 h-3 rounded-full bg-nature-blossom/60 animate-twinkle" style={{animationDelay: "2.1s"}}></div>
          </div>
        </div>
        
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4 relative">
          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="py-3 px-8 text-xl font-medium text-center w-full max-w-xs rounded-lg hover:bg-primary/10 transition-colors relative group overflow-hidden"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href.substring(1));
              }}
            >
              <span className="relative z-10">{link.name}</span>
              
              {/* Enhanced hover effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary transform transition-all duration-300 ${activeSection === link.href.substring(1) ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}></span>
              
              {activeSection === link.href.substring(1) && (
                <span className="absolute -right-2 -top-2 text-primary/70">
                  {ghibliDecorations[(index + 2) % ghibliDecorations.length]}
                </span>
              )}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
