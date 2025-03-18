
import { Figma, Globe, PenTool, ShoppingCart } from 'lucide-react';

const services = [
  {
    title: "UI/UX Design",
    description: "Create intuitive and beautiful user interfaces that enhance user experience and drive engagement.",
    icon: <Figma className="w-8 h-8" />,
    delay: "0s"
  },
  {
    title: "Web Design",
    description: "Design modern, responsive websites that represent your brand and convert visitors into customers.",
    icon: <Globe className="w-8 h-8" />,
    delay: "0.1s"
  },
  {
    title: "Branding",
    description: "Develop cohesive brand identities that communicate your values and resonate with your audience.",
    icon: <PenTool className="w-8 h-8" />,
    delay: "0.2s"
  },
  {
    title: "eCommerce Design",
    description: "Create compelling shopping experiences that showcase products and optimize the conversion funnel.",
    icon: <ShoppingCart className="w-8 h-8" />,
    delay: "0.3s"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Specialized design services tailored to help your business succeed in the digital landscape.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-background rounded-xl p-6 shadow-md card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 flex items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-3 font-montserrat">{service.title}</h3>
              <p className="text-center text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
