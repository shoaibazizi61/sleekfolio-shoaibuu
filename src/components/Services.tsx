
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
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob h-64 w-64 bg-purple-500/10 -top-32 left-20 animate-float" style={{animationDelay: "1.5s"}}></div>
        <div className="blob h-72 w-72 bg-blue-500/10 -bottom-32 right-10 animate-float" style={{animationDelay: "0.5s"}}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCgyNzAgNTAlIDYwJSAvIDAuMDMpIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiPjwvcmVjdD48L3N2Zz4=')]" style={{ opacity: "0.3" }}></div>
      </div>
    
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-3 py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary">SERVICES</span>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Specialized design services tailored to help your business succeed in the digital landscape.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-purple-500/40 mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-background/50 backdrop-blur-md rounded-xl p-8 shadow-md border border-primary/5 hover:border-primary/20 card-hover opacity-0 animate-fade-in"
              style={{ animationDelay: service.delay }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-primary/10 to-primary/20 text-primary group-hover:from-primary group-hover:to-primary/90 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-primary/20">
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 font-montserrat group-hover:text-primary transition-colors">{service.title}</h3>
              <p className="text-center text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
