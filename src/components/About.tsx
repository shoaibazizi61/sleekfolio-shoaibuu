
import { Figma, Code, PenTool, ShoppingCart, CheckCircle, Bot, Cloud, Leaf, Stars, Mountain, Bird, Rabbit } from 'lucide-react';

const skills = [
  { name: "Figma", icon: <Figma className="w-5 h-5" /> },
  { name: "Adobe Suite", icon: <PenTool className="w-5 h-5" /> },
  { name: "Webflow & WordPress", icon: <Code className="w-5 h-5" /> },
  { name: "Shopify", icon: <ShoppingCart className="w-5 h-5" /> },
  { name: "AI Tools", icon: <Bot className="w-5 h-5" /> }
];

const About = () => {
  return (
    <section id="about" className="section-padding relative bg-secondary/50 overflow-hidden">
      {/* Ghibli-inspired decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative background blobs */}
        <div className="blob h-96 w-96 bg-[#fef7cd]/30 -top-48 -right-32 animate-float rounded-[40%_60%_70%_30%/40%_50%_60%_50%]" style={{animationDelay: "1.5s"}}></div>
        <div className="blob h-72 w-72 bg-[#d3e4fd]/30 bottom-0 left-10 animate-float rounded-[30%_70%_60%_40%/50%_60%_40%_50%]" style={{animationDelay: "1s"}}></div>
        
        {/* Ghibli-style nature elements */}
        <div className="absolute top-20 right-[15%] w-20 h-14 text-[#6eada8]/60 animate-float" style={{animationDelay: "0.7s"}}>
          <Cloud className="w-full h-full" />
        </div>
        <div className="absolute bottom-32 right-[20%] w-16 h-16 text-[#86bb6b]/60 animate-float-slow" style={{animationDelay: "2.1s"}}>
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute top-24 left-[10%] w-10 h-10 text-[#c9a95b]/70 animate-twinkle" style={{animationDelay: "1.2s"}}>
          <Stars className="w-full h-full" />
        </div>
        <div className="absolute bottom-40 left-[40%] w-14 h-14 text-[#627967]/50 animate-float" style={{animationDelay: "1.8s"}}>
          <Mountain className="w-full h-full" />
        </div>
        <div className="absolute top-1/3 right-[30%] w-12 h-12 text-[#e17f95]/60 animate-bird-flight" style={{animationDelay: "0.5s"}}>
          <Bird className="w-full h-full" />
        </div>
        <div className="absolute bottom-16 right-[25%] w-12 h-12 text-[#c6bf5e]/60 animate-hop" style={{animationDelay: "1.4s"}}>
          <Rabbit className="w-full h-full" />
        </div>
        
        {/* Ghibli-style forest silhouette at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-24 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,50 L20,45 L40,55 L60,40 L80,60 L100,35 L120,55 L140,40 L160,50 L180,35 L200,55 L220,45 L240,60 L260,50 L280,65 L300,45 L320,60 L340,50 L360,40 L380,55 L400,35 L420,55 L440,45 L460,65 L480,50 L500,60 L520,40 L540,50 L560,35 L580,55 L600,45 L620,60 L640,50 L660,40 L680,55 L700,45 L720,65 L740,40 L760,55 L780,35 L800,55 L820,45 L840,60 L860,50 L880,35 L900,55 L920,45 L940,60 L960,35 L980,55 L1000,50 L1020,60 L1040,45 L1060,65 L1080,35 L1100,55 L1120,45 L1140,60 L1160,50 L1180,40 L1200,50 L1200,100 L0,100 Z" fill="currentColor" className="text-nature-forest/20"></path>
          </svg>
        </div>
        
        {/* Ghibli-style grass pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30">
          <svg className="w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,60 C100,30 200,60 300,30 C400,0 500,30 600,15 C700,0 800,30 900,15 C1000,0 1100,30 1200,10 L1200,60 L0,60 Z" fill="currentColor" className="text-nature-leaf/30"></path>
          </svg>
        </div>
        
        {/* Dust particles animation already enhanced in index.css */}
      </div>
        
      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block mb-2 py-1 px-3 rounded-full text-xs font-medium bg-primary/20 text-primary">
              ABOUT ME
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mt-4 mb-6">I design digital experiences that people love</h2>
            <p className="text-foreground/90 mb-6">
              I'm a passionate UI/UX and graphic designer with over 5 years of experience creating beautiful, functional designs for clients across various industries. I believe that great design is not just about aesthetics, but about solving problems and creating meaningful experiences.
            </p>
            <p className="text-foreground/90 mb-8">
              My approach combines creative thinking with a strategic mindset, ensuring that every design decision supports both user needs and business goals. I'm constantly learning and exploring new design trends and technologies to bring fresh and innovative solutions to my clients.
            </p>
            
            <div className="space-y-4 mb-8">
              <h3 className="font-montserrat font-semibold text-xl">My Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground/90 bg-white/40 dark:bg-background/40 p-3 rounded-lg backdrop-blur-sm shadow-sm border border-primary/10 hover:border-primary/20 transition-all hover:transform hover:scale-105">
                    <div className="text-primary p-2 bg-primary/10 rounded-full">{skill.icon}</div>
                    <span className="font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg shadow-lg hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-1">
                View My Work
              </a>
              <a href="#contact" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-secondary text-foreground rounded-lg border border-primary/20 shadow-sm hover:shadow-lg hover:border-primary/40 transition-all duration-300 transform hover:-translate-y-1">
                Get In Touch
              </a>
            </div>
            
            {/* Ghibli-style decorative divider */}
            <div className="w-48 h-6 mt-12 opacity-60">
              <svg viewBox="0 0 100 20" className="w-full h-full">
                <path d="M0,10 Q25,0 50,10 T100,10" fill="none" stroke="#6eada8" strokeWidth="1" />
                <path d="M0,10 Q25,20 50,10 T100,10" fill="none" stroke="#6eada8" strokeWidth="1" />
                <circle cx="25" cy="10" r="2" fill="#6eada8" />
                <circle cx="75" cy="10" r="2" fill="#6eada8" />
              </svg>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-[280px] md:w-[350px] aspect-[3/4] overflow-hidden rounded-xl shadow-xl ring-2 ring-primary/20 transition-all duration-500 hover:ring-primary/40 hover:shadow-2xl">
                <img
                  src="http://res.cloudinary.com/doabonfpj/image/upload/v1742379151/opdzjmapwr45h9jrjmkm.jpg"
                  alt="Shoaibuu - UI/UX Designer"
                  className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
                />
                
                {/* Ghibli-style frame decoration */}
                <div className="absolute inset-0 pointer-events-none border-4 border-white/20 rounded-xl"></div>
                <div className="absolute top-4 left-4 w-12 h-12 rounded-full border-4 border-white/30 blur-[1px]"></div>
                <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full border-4 border-white/30 blur-[1px]"></div>
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass px-5 py-4 rounded-lg backdrop-blur-lg animate-float bg-white/20 border border-white/30 dark:bg-black/20 dark:border-white/10">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="font-medium">Experience</span>
                </div>
                <p className="text-sm text-foreground/80">5+ years in design</p>
              </div>
              
              <div className="absolute -top-6 -left-6 glass px-5 py-4 rounded-lg backdrop-blur-lg animate-float bg-white/20 border border-white/30 dark:bg-black/20 dark:border-white/10" style={{animationDelay: "1s"}}>
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="font-medium">Projects</span>
                </div>
                <p className="text-sm text-foreground/80">100+ completed</p>
              </div>
              
              {/* Ghibli-style totoro-like small creatures */}
              <div className="absolute -bottom-2 left-10 w-6 h-10 opacity-60 animate-hop" style={{animationDelay: "1.5s"}}>
                <div className="w-full h-1/2 bg-nature-forest/40 rounded-full"></div>
                <div className="w-full h-1/2 bg-nature-forest/40 rounded-b-lg"></div>
                <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
              </div>
              
              <div className="absolute -top-3 right-12 w-5 h-8 opacity-60 animate-hop" style={{animationDelay: "2.5s"}}>
                <div className="w-full h-1/2 bg-nature-forest/40 rounded-full"></div>
                <div className="w-full h-1/2 bg-nature-forest/40 rounded-b-lg"></div>
                <div className="absolute top-1 left-1 w-0.5 h-0.5 bg-white rounded-full"></div>
                <div className="absolute top-1 right-1 w-0.5 h-0.5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
