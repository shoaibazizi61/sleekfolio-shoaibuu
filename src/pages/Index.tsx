
import { useEffect, useState, useRef } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Cloud, Leaf, Feather, Stars } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const dustParticlesRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [magicDustParticles, setMagicDustParticles] = useState<Array<{ id: number; x: number; y: number; size: number; opacity: number }>>([]);
  
  useEffect(() => {
    // Update page title
    document.title = "Shoaibuu - UI/UX & Graphic Designer";

    // Add intersection observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => {
      observer.observe(el);
    });

    // Handle scroll for parallax effects
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Add mouse move handler for dynamic magic dust
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      
      // Create magic dust particles
      if (Math.random() > 0.9) { // Only create particles occasionally
        const newParticle = {
          id: Date.now(),
          x: e.clientX,
          y: e.clientY,
          size: 2 + Math.random() * 3,
          opacity: 0.3 + Math.random() * 0.4
        };
        
        setMagicDustParticles(prev => [...prev.slice(-15), newParticle]); // Keep last 15 particles
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Create dust particles
    if (dustParticlesRef.current) {
      const container = dustParticlesRef.current;
      for (let i = 0; i < 30; i++) {
        createDustParticle(container);
      }
    }

    return () => {
      // Clean up observers and event listeners
      if (observer) {
        animatedElements.forEach(el => {
          observer.unobserve(el);
        });
      }
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  // Create a dust particle
  const createDustParticle = (container: HTMLDivElement) => {
    const particle = document.createElement('div');
    particle.className = 'ghibli-dust-particle';
    
    // Random position
    const leftPos = Math.random() * window.innerWidth;
    const topPos = Math.random() * window.innerHeight;
    
    particle.style.left = `${leftPos}px`;
    particle.style.top = `${topPos}px`;
    
    // Random size
    const size = 1 + Math.random() * 3;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Random opacity
    particle.style.opacity = (0.2 + Math.random() * 0.5).toString();
    
    // Random animation duration
    const duration = 10 + Math.random() * 20;
    particle.style.animationDuration = `${duration}s`;
    
    // Random animation delay
    particle.style.animationDelay = `${Math.random() * 10}s`;
    
    container.appendChild(particle);
    
    // Remove after animation completes
    setTimeout(() => {
      container.removeChild(particle);
      createDustParticle(container);
    }, duration * 1000);
  };

  // Create floating elements for Ghibli-style magic
  const floatingElements = [
    { icon: Cloud, color: "text-[#77B1A9]/60", size: 24, top: "5%", left: "3%", delay: 0 },
    { icon: Leaf, color: "text-[#A6D0CC]/60", size: 16, top: "15%", right: "8%", delay: 1.2 },
    { icon: Feather, color: "text-[#FFDEE2]/60", size: 20, top: "50%", left: "5%", delay: 2.3 },
    { icon: Stars, color: "text-[#FEF7CD]/60", size: 18, bottom: "25%", right: "7%", delay: 0.7 },
    { icon: Cloud, color: "text-[#A6D0CC]/60", size: 14, bottom: "10%", left: "12%", delay: 1.8 },
    { icon: Leaf, color: "text-[#86bb6b]/60", size: 22, top: "35%", right: "15%", delay: 3.1 },
    { icon: Feather, color: "text-[#e17f95]/60", size: 18, bottom: "40%", left: "15%", delay: 2.5 },
    { icon: Stars, color: "text-[#c9a95b]/60", size: 15, top: "65%", right: "5%", delay: 1.3 },
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Enhanced floating Ghibli-inspired elements that stay fixed while scrolling */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-70">
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          const style: React.CSSProperties = {
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
            animationDelay: `${element.delay}s`,
            transform: `translateY(${scrollY * 0.1 * (index % 2 === 0 ? 1 : -1)}px)`,
          };
          
          return (
            <div 
              key={index}
              className={`absolute ${element.color} animate-float-slow`}
              style={style}
            >
              <Icon size={element.size} />
            </div>
          );
        })}
        
        {/* Enhanced dust particles with parallax effect */}
        <div className="absolute inset-0">
          {[...Array(25)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/30 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `translateY(${scrollY * 0.05 * (i % 2 === 0 ? 1 : -1)}px)`,
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Magic dust particles that follow the cursor */}
      {magicDustParticles.map(particle => (
        <div
          key={particle.id}
          className="magic-dust"
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
      
      {/* Container for generated dust particles */}
      <div ref={dustParticlesRef} className="ghibli-dust-particles"></div>

      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <Portfolio />
        <div className="relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>
          <Services />
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background/80 to-transparent z-10"></div>
          <About />
          <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-b from-background/80 to-transparent z-10"></div>
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
