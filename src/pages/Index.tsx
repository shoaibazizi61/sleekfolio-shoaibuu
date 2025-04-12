
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

    // Handle scroll for parallax effects - significantly reduced effect
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Completely disabled magic dust particles
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      // Dust particle creation removed
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Significantly reduced dust particles
    if (dustParticlesRef.current) {
      const container = dustParticlesRef.current;
      // Reduced from 30 to 5 particles
      for (let i = 0; i < 5; i++) {
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
  
  // Create a dust particle with reduced movement
  const createDustParticle = (container: HTMLDivElement) => {
    const particle = document.createElement('div');
    particle.className = 'ghibli-dust-particle-static'; // Changed to static version
    
    // Random position
    const leftPos = Math.random() * window.innerWidth;
    const topPos = Math.random() * window.innerHeight;
    
    particle.style.left = `${leftPos}px`;
    particle.style.top = `${topPos}px`;
    
    // Random size
    const size = 1 + Math.random() * 2;
    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    
    // Reduced opacity
    particle.style.opacity = (0.1 + Math.random() * 0.2).toString();
    
    container.appendChild(particle);
    
    // Remove after a longer time
    setTimeout(() => {
      container.removeChild(particle);
      createDustParticle(container);
    }, 20000); // Much longer duration to reduce frequent updates
  };

  // Reduced floating elements for Ghibli-style magic - fewer elements
  const floatingElements = [
    { icon: Cloud, color: "text-[#77B1A9]/30", size: 24, top: "5%", left: "3%", delay: 0 },
    { icon: Leaf, color: "text-[#A6D0CC]/30", size: 16, top: "15%", right: "8%", delay: 1.2 },
    { icon: Stars, color: "text-[#FEF7CD]/30", size: 18, bottom: "25%", right: "7%", delay: 0.7 },
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Significantly reduced movement of floating elements */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40">
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          const style: React.CSSProperties = {
            top: element.top,
            left: element.left,
            right: element.right,
            bottom: element.bottom,
            animationDelay: `${element.delay}s`,
            // Parallax effect reduced by 90%
            transform: `translateY(${scrollY * 0.01 * (index % 2 === 0 ? 1 : -1)}px)`,
          };
          
          return (
            <div 
              key={index}
              className={`absolute ${element.color} animate-float-very-slow`}
              style={style}
            >
              <Icon size={element.size} />
            </div>
          );
        })}
        
        {/* Significantly reduced dust particles */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => ( // Reduced from 25 to 10
            <div 
              key={i}
              className="absolute w-2 h-2 rounded-full bg-primary/20 animate-twinkle-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                // Removed parallax effect entirely
              }}
            />
          ))}
        </div>
      </div>
      
      {/* Magic dust particles that follow cursor - completely removed */}
      
      {/* Container for generated dust particles - opacity reduced */}
      <div ref={dustParticlesRef} className="ghibli-dust-particles opacity-30"></div>

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
