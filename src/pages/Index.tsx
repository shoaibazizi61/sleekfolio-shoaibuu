
import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Portfolio from '../components/Portfolio';
import Services from '../components/Services';
import About from '../components/About';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Cloud, Leaf, Stars, Bird, Fish } from 'lucide-react';

const Index = () => {
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

    return () => {
      if (observer) {
        animatedElements.forEach(el => {
          observer.unobserve(el);
        });
      }
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative overflow-x-hidden">
      {/* Ghibli-style page-wide decorative elements */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-40 overflow-hidden">
        {/* Floating Ghibli elements that move across the entire page */}
        <div className="absolute top-[10%] left-[-10%] animate-float-slow" style={{animationDuration: "120s", animationIterationCount: "infinite"}}>
          <Cloud className="w-16 h-16 text-[#a6d0cc]/30" />
        </div>
        <div className="absolute bottom-[20%] right-[-5%] animate-float-slow" style={{animationDuration: "150s", animationDirection: "reverse", animationIterationCount: "infinite"}}>
          <Cloud className="w-12 h-12 text-[#fef7cd]/30" />
        </div>
        <div className="absolute top-[40%] right-[-2%] animate-bird-flight" style={{animationDuration: "180s", animationIterationCount: "infinite"}}>
          <Bird className="w-8 h-8 text-[#ffdee2]/30" />
        </div>
        <div className="absolute top-[80%] left-[-5%] animate-float-slow" style={{animationDuration: "130s", animationIterationCount: "infinite"}}>
          <Leaf className="w-10 h-10 text-[#86bb6b]/30" />
        </div>
        <div className="absolute top-[60%] right-[10%] animate-twinkle" style={{animationDuration: "10s", animationIterationCount: "infinite"}}>
          <Stars className="w-5 h-5 text-[#fef7cd]/30" />
        </div>
        <div className="absolute bottom-[10%] left-[20%] animate-fish-swim" style={{animationDuration: "140s", animationIterationCount: "infinite"}}>
          <Fish className="w-10 h-10 text-[#a6d0cc]/30" />
        </div>
      </div>
      
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Portfolio />
        <Services />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
