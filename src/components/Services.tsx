
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
    <section id="services" className="section-padding relative overflow-hidden py-20">
      <div className="absolute inset-0 pointer-events-none">
        {/* Ghibli-inspired soft background elements */}
        <div className="blob h-96 w-96 bg-[#fef7cd]/30 -top-48 left-20 animate-float rounded-[40%_60%_70%_30%/40%_50%_60%_50%]" style={{animationDelay: "1.5s"}}></div>
        <div className="blob h-80 w-80 bg-[#d3e4fd]/30 -bottom-40 right-10 animate-float rounded-[50%_50%_40%_60%/40%_40%_60%_50%]" style={{animationDelay: "0.5s"}}></div>
        <div className="blob h-64 w-64 bg-[#fde1d3]/30 top-1/4 -left-20 animate-float rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" style={{animationDelay: "2s"}}></div>
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCgyNzAgNTAlIDYwJSAvIDAuMDIpIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiPjwvcmVjdD48L3N2Zz4=')]" style={{ opacity: "0.2" }}></div>
      </div>
    
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-3 py-1 px-4 rounded-full text-xs font-medium bg-[#ffdee2]/30 text-[#E5667B] border border-[#ffdee2]/50">SERVICES</span>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">My Services</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Specialized design services tailored to help your business succeed in the digital landscape.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#FEC6A1] to-[#FFDEE2] mx-auto mt-6 rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group bg-white/90 dark:bg-background/50 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-[#f2fce2]/50 hover:border-[#f2fce2] card-hover opacity-0 animate-fade-in transform transition-all duration-500"
              style={{ 
                animationDelay: service.delay,
                borderRadius: "24px 12px 24px 12px"
              }}
            >
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#F2FCE2]/40 to-[#FEF7CD]/60 text-[#89918F] group-hover:from-[#F2FCE2] group-hover:to-[#FEF7CD] group-hover:text-[#5A645E] transition-all duration-500 shadow-sm group-hover:shadow-[#FEF7CD]/30"
                  style={{ 
                    borderRadius: "20px 10px 20px 10px" 
                  }}
                >
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 font-montserrat group-hover:text-[#5A645E] transition-colors">{service.title}</h3>
              <p className="text-center text-foreground/70">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
