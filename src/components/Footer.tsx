
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-secondary/80 py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="flex items-center">
              <span className="font-montserrat font-bold text-xl">Shoaibuu.</span>
            </a>
            <p className="text-foreground/60 mt-2 text-sm">
              Crafting beautiful digital experiences
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <button
              onClick={scrollToTop}
              className="p-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors mb-4"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
            <p className="text-foreground/60 text-sm">
              © {new Date().getFullYear()} Shoaibuu. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
