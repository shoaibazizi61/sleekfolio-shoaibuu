
import { useState, useEffect } from 'react';
import { Menu, X, Leaf, Cloud } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

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

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3 backdrop-blur-xl bg-background/80 border-b border-primary/20 shadow-sm' : 'py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
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
          <div className="absolute -left-6 top-1/2 -translate-y-1/2 opacity-30">
            <Leaf className="w-4 h-4 text-primary animate-sway" style={{animationDelay: "1.2s"}} />
          </div>
          {navLinks.map((link) => (
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
                  <Cloud className="w-2.5 h-2.5" />
                </span>
              )}
            </a>
          ))}
          <ThemeToggle />
          <div className="absolute -right-6 top-1/2 -translate-y-1/2 opacity-30">
            <Cloud className="w-4 h-4 text-primary animate-float-slow" style={{animationDelay: "0.8s"}} />
          </div>
        </nav>

        {/* Mobile Navigation */}
        <div className="flex items-center md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="ml-2 text-foreground p-2 rounded-full hover:bg-primary/10 transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-background/95 backdrop-blur-lg z-40 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ top: '60px' }}
      >
        <nav className="flex flex-col items-center justify-center h-full space-y-8 p-4 relative">
          {/* Decorative elements for mobile menu */}
          <div className="absolute top-10 left-10 opacity-30">
            <Leaf className="w-6 h-6 text-primary animate-sway" />
          </div>
          <div className="absolute bottom-10 right-10 opacity-30">
            <Cloud className="w-8 h-8 text-primary animate-float-slow" />
          </div>
          
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="py-3 px-8 text-xl font-medium text-center w-full max-w-xs rounded-lg hover:bg-primary/10 transition-colors relative group"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href.substring(1));
              }}
            >
              {link.name}
              <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-primary transform transition-all duration-300 ${activeSection === link.href.substring(1) ? 'opacity-100' : 'opacity-0 group-hover:opacity-70'}`}></span>
              {activeSection === link.href.substring(1) && (
                <span className="absolute -right-2 -top-2 text-primary/70">
                  <Cloud className="w-3 h-3 animate-float-slow" />
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
