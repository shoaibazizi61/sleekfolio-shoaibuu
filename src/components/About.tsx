
import { Figma, Code, PenTool, ShoppingCart, CheckCircle, Robot } from 'lucide-react';

const skills = [
  { name: "Figma", icon: <Figma className="w-5 h-5" /> },
  { name: "Adobe Suite", icon: <PenTool className="w-5 h-5" /> },
  { name: "Webflow & WordPress", icon: <Code className="w-5 h-5" /> },
  { name: "Shopify", icon: <ShoppingCart className="w-5 h-5" /> },
  { name: "AI Tools", icon: <Robot className="w-5 h-5" /> }
];

const About = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block mb-2 py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary">
              ABOUT ME
            </span>
            <h2 className="font-montserrat text-3xl md:text-4xl font-bold mt-4 mb-6">I design digital experiences that people love</h2>
            <p className="text-foreground/80 mb-6">
              I'm a passionate UI/UX and graphic designer with over 5 years of experience creating beautiful, functional designs for clients across various industries. I believe that great design is not just about aesthetics, but about solving problems and creating meaningful experiences.
            </p>
            <p className="text-foreground/80 mb-8">
              My approach combines creative thinking with a strategic mindset, ensuring that every design decision supports both user needs and business goals. I'm constantly learning and exploring new design trends and technologies to bring fresh and innovative solutions to my clients.
            </p>
            
            <div className="space-y-4 mb-8">
              <h3 className="font-montserrat font-semibold text-xl">My Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="flex items-center gap-2 text-foreground/90">
                    <div className="text-primary">{skill.icon}</div>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a href="#portfolio" className="px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-primary/20 transition-all">
                View My Work
              </a>
              <a href="#contact" className="px-6 py-3 bg-secondary text-foreground rounded-lg shadow-sm hover:shadow-lg transition-all">
                Get In Touch
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-[280px] md:w-[350px] aspect-[3/4] overflow-hidden rounded-xl">
                <img
                  src="http://res.cloudinary.com/doabonfpj/image/upload/v1742379151/opdzjmapwr45h9jrjmkm.jpg"
                  alt="Shoaibuu - UI/UX Designer"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 glass px-5 py-4 rounded-lg backdrop-blur-lg animate-float">
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="font-medium">Experience</span>
                </div>
                <p className="text-sm text-foreground/70">5+ years in design</p>
              </div>
              
              <div className="absolute -top-6 -left-6 glass px-5 py-4 rounded-lg backdrop-blur-lg animate-float" style={{animationDelay: "1s"}}>
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="font-medium">Projects</span>
                </div>
                <p className="text-sm text-foreground/70">100+ completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
