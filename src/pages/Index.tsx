
import { useEffect, useState } from 'react';
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

    return () => {
      // Clean up observers and event listeners
      if (observer) {
        animatedElements.forEach(el => {
          observer.unobserve(el);
        });
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Create floating elements for Ghibli-style magic
  const floatingElements = [
    { icon: Cloud, color: "text-[#77B1A9]/60", size: 24, top: "5%", left: "3%", delay: 0 },
    { icon: Leaf, color: "text-[#A6D0CC]/60", size: 16, top: "15%", right: "8%", delay: 1.2 },
    { icon: Feather, color: "text-[#FFDEE2]/60", size: 20, top: "50%", left: "5%", delay: 2.3 },
    { icon: Stars, color: "text-[#FEF7CD]/60", size: 18, bottom: "25%", right: "7%", delay: 0.7 },
    { icon: Cloud, color: "text-[#A6D0CC]/60", size: 14, bottom: "10%", left: "12%", delay: 1.8 },
  ];

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Floating Ghibli-inspired elements that stay fixed while scrolling */}
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
        
        {/* Dust particles with parallax effect */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
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
