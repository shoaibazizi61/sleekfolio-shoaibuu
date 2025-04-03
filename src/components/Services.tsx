
import { Figma, Globe, PenTool, ShoppingCart, Cloud, Leaf, Sparkles, Sunset, Wind, Feather, Droplets, Bird, Fish, Flower2, Rabbit, Mountain, Stars } from 'lucide-react';

const services = [
  {
    title: "UI/UX Design",
    description: "Create intuitive and beautiful user interfaces that enhance user experience and drive engagement.",
    icon: <Figma className="w-8 h-8" />,
    delay: "0s",
    color: "from-[#F2FCE2]/50 to-[#FEF7CD]/70",
    hoverColor: "from-[#F2FCE2] to-[#FEF7CD]",
    borderRadius: "20px 10px 20px 10px"
  },
  {
    title: "Web Design",
    description: "Design modern, responsive websites that represent your brand and convert visitors into customers.",
    icon: <Globe className="w-8 h-8" />,
    delay: "0.1s",
    color: "from-[#fde1d3]/50 to-[#ffdee2]/70",
    hoverColor: "from-[#fde1d3] to-[#ffdee2]",
    borderRadius: "10px 20px 10px 20px"
  },
  {
    title: "Branding",
    description: "Develop cohesive brand identities that communicate your values and resonate with your audience.",
    icon: <PenTool className="w-8 h-8" />,
    delay: "0.2s",
    color: "from-[#d3e4fd]/50 to-[#E5DEFF]/70",
    hoverColor: "from-[#d3e4fd] to-[#E5DEFF]",
    borderRadius: "20px 10px 20px 10px"
  },
  {
    title: "eCommerce Design",
    description: "Create compelling shopping experiences that showcase products and optimize the conversion funnel.",
    icon: <ShoppingCart className="w-8 h-8" />,
    delay: "0.3s",
    color: "from-[#FFDEE2]/50 to-[#FEC6A1]/70",
    hoverColor: "from-[#FFDEE2] to-[#FEC6A1]",
    borderRadius: "10px 20px 10px 20px"
  }
];

const decorativeElements = [
  { 
    icon: <Cloud className="w-full h-full" />, 
    position: "top-10 right-[10%]", 
    size: "w-24 h-16", 
    color: "text-[#e17f95]/60",
    animation: "animate-float",
    delay: "0s"
  },
  { 
    icon: <Cloud className="w-full h-full" />, 
    position: "top-32 left-[15%]", 
    size: "w-20 h-12", 
    color: "text-[#86bb6b]/60",
    animation: "animate-float",
    delay: "1.5s"
  },
  { 
    icon: <Leaf className="w-full h-full" />, 
    position: "bottom-20 right-[20%]", 
    size: "w-12 h-12", 
    color: "text-[#7ab363]/60",
    animation: "animate-spin-slow",
    delay: "0.7s"
  },
  { 
    icon: <Sparkles className="w-full h-full" />, 
    position: "top-60 right-[30%]", 
    size: "w-10 h-10", 
    color: "text-[#c6bf5e]/70",
    animation: "animate-pulse-slow",
    delay: "0.3s"
  },
  { 
    icon: <Sunset className="w-full h-full" />, 
    position: "bottom-40 left-[25%]", 
    size: "w-16 h-16", 
    color: "text-[#e5986a]/60",
    animation: "animate-float",
    delay: "2s"
  },
  { 
    icon: <Wind className="w-full h-full" />, 
    position: "top-14 left-[40%]", 
    size: "w-16 h-10", 
    color: "text-[#6c92ca]/60",
    animation: "animate-sway",
    delay: "1.2s"
  },
  { 
    icon: <Feather className="w-full h-full" />, 
    position: "top-80 right-[15%]", 
    size: "w-14 h-14", 
    color: "text-[#e17f95]/60",
    animation: "animate-float-slow",
    delay: "3.5s"
  },
  { 
    icon: <Droplets className="w-full h-full" />, 
    position: "bottom-28 right-[40%]", 
    size: "w-10 h-10", 
    color: "text-[#6c92ca]/70",
    animation: "animate-falling",
    delay: "0.5s"
  },
  { 
    icon: <Bird className="w-full h-full" />, 
    position: "top-24 left-[25%]", 
    size: "w-12 h-12", 
    color: "text-[#e5986a]/70",
    animation: "animate-bird-flight",
    delay: "2.5s"
  },
  { 
    icon: <Fish className="w-full h-full" />, 
    position: "bottom-60 left-[10%]", 
    size: "w-14 h-10", 
    color: "text-[#6c92ca]/60",
    animation: "animate-fish-swim",
    delay: "1.8s"
  },
  { 
    icon: <Flower2 className="w-full h-full" />, 
    position: "bottom-12 left-[30%]", 
    size: "w-11 h-11", 
    color: "text-[#e17f95]/70",
    animation: "animate-sway",
    delay: "0.9s"
  },
  { 
    icon: <Rabbit className="w-full h-full" />, 
    position: "bottom-20 left-[50%]", 
    size: "w-12 h-12", 
    color: "text-[#c6bf5e]/60",
    animation: "animate-hop",
    delay: "3.2s"
  },
  { 
    icon: <Mountain className="w-full h-full" />, 
    position: "bottom-5 right-0", 
    size: "w-32 h-20", 
    color: "text-[#627967]/50",
    animation: "animate-rise",
    delay: "0.3s"
  },
  { 
    icon: <Stars className="w-full h-full" />, 
    position: "top-16 right-[45%]", 
    size: "w-9 h-9", 
    color: "text-[#c9a95b]/80",
    animation: "animate-twinkle",
    delay: "1.3s"
  }
];

const Services = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="blob h-96 w-96 bg-[#fef7cd]/40 -top-48 left-20 animate-float rounded-[40%_60%_70%_30%/40%_50%_60%_50%]" style={{animationDelay: "1.5s"}}></div>
        <div className="blob h-80 w-80 bg-[#d3e4fd]/40 -bottom-40 right-10 animate-float rounded-[50%_50%_40%_60%/40%_40%_60%_50%]" style={{animationDelay: "0.5s"}}></div>
        <div className="blob h-64 w-64 bg-[#fde1d3]/40 top-1/4 -left-20 animate-float rounded-[60%_40%_30%_70%/60%_30%_70%_40%]" style={{animationDelay: "2s"}}></div>
        <div className="blob h-72 w-72 bg-[#e5deff]/40 bottom-1/3 right-1/4 animate-float rounded-[30%_70%_60%_40%/50%_60%_40%_50%]" style={{animationDelay: "1s"}}></div>
        <div className="blob h-56 w-56 bg-[#ffdee2]/40 top-1/2 right-1/5 animate-float rounded-[50%_30%_40%_60%/40%_50%_60%_40%]" style={{animationDelay: "3s"}}></div>
        
        <div className="blob h-44 w-44 bg-[#a6d0cc]/30 top-1/3 left-1/3 animate-float-slow rounded-[45%_55%_65%_35%/55%_45%_35%_45%]" style={{animationDelay: "2.3s"}}></div>
        <div className="blob h-60 w-60 bg-[#f9f9c5]/30 bottom-1/4 left-1/5 animate-float-slow rounded-[35%_65%_50%_50%/60%_40%_60%_40%]" style={{animationDelay: "1.7s"}}></div>
        <div className="blob h-52 w-52 bg-[#ffcaa7]/30 top-3/4 right-1/3 animate-float-slow rounded-[55%_45%_40%_60%/35%_65%_35%_65%]" style={{animationDelay: "2.9s"}}></div>
        
        {decorativeElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} ${element.size} ${element.color} ${element.animation} opacity-70`}
            style={{ animationDelay: element.delay }}
          >
            {element.icon}
          </div>
        ))}
        
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxkZWZzPjxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0gNDAgMCBMIDAgMCAwIDQwIiBmaWxsPSJub25lIiBzdHJva2U9ImhzbCgyNzAgNTAlIDYwJSAvIDAuMDUpIiBzdHJva2Utd2lkdGg9IjEiPjwvcGF0aD48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiPjwvcmVjdD48L3N2Zz4=')]" style={{ opacity: "0.3" }}></div>
      
        <div className="absolute top-5 left-1/4 w-64 h-24 opacity-60">
          <svg viewBox="0 0 200 100" className="w-full h-full text-nature-forest/40 fill-current">
            <path d="M30,40 Q40,20 50,40 T70,40 T90,40 T110,40 T130,40 T150,40 T170,40" fill="currentColor" />
            <path d="M10,50 Q40,30 70,50 T140,50" fill="currentColor" />
          </svg>
        </div>
        
        <div className="absolute bottom-10 right-1/4 w-64 h-24 opacity-50">
          <svg viewBox="0 0 200 100" className="w-full h-full text-nature-forest/40 fill-current">
            <path d="M30,40 Q40,20 50,40 T70,40 T90,40 T110,40 T130,40 T150,40 T170,40" fill="currentColor" />
            <path d="M10,50 Q40,30 70,50 T140,50" fill="currentColor" />
          </svg>
        </div>
      </div>
    
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <span className="inline-block mb-3 py-1 px-4 rounded-full text-xs font-medium bg-[#ffdee2]/40 text-[#d34757] border border-[#ffdee2]/60">SERVICES</span>
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">My Magical Services</h2>
          <p className="text-foreground/80 max-w-2xl mx-auto">
            Let me bring your ideas to life with a touch of magic and wonder.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-[#e5986a] to-[#e17f95] mx-auto mt-6 rounded-full"></div>
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
                <div className={`w-20 h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br ${service.color} text-[#4D5D57] group-hover:${service.hoverColor} group-hover:text-[#3D4D47] transition-all duration-500 shadow-sm group-hover:shadow-md`}
                  style={{ 
                    borderRadius: service.borderRadius 
                  }}
                >
                  {service.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-center mb-4 font-montserrat group-hover:text-[#3D4D47] transition-colors">{service.title}</h3>
              <p className="text-center text-foreground/80">{service.description}</p>
              
              <div className="w-full flex justify-center mt-6">
                <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent rounded-full group-hover:w-24 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 w-full flex justify-center">
          <div className="relative">
            <svg className="w-64 h-24 text-[#86bb6b]/60" viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,20 Q10,5 20,20 T40,20 T60,20 T80,20 T100,20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <path d="M0,20 Q10,35 20,20 T40,20 T60,20 T80,20 T100,20" stroke="currentColor" strokeWidth="0.5" fill="none"/>
              <g className="animate-float" style={{animationDelay: "1s"}}>
                <circle cx="30" cy="18" r="2" fill="currentColor" opacity="0.6"/>
                <circle cx="70" cy="18" r="1.5" fill="currentColor" opacity="0.4"/>
              </g>
              <g className="animate-float" style={{animationDelay: "2s"}}>
                <circle cx="50" cy="16" r="2.5" fill="currentColor" opacity="0.7"/>
                <circle cx="85" cy="19" r="1" fill="currentColor" opacity="0.5"/>
              </g>
              <path d="M20,30 Q30,25 40,28 T60,28 T80,30" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.5"/>
              <path d="M10,32 Q25,29 40,31 T60,31 T90,33" stroke="currentColor" strokeWidth="0.5" fill="none" opacity="0.3"/>
              
              <g className="animate-float" style={{animationDelay: "1.5s"}}>
                <circle cx="15" cy="22" r="1" fill="currentColor"/>
                <circle cx="17" cy="21" r="0.7" fill="currentColor"/>
                <path d="M15,22 Q16,20 17,21" stroke="currentColor" strokeWidth="0.3" fill="none"/>
              </g>
              <g className="animate-float" style={{animationDelay: "2.8s"}}>
                <circle cx="75" cy="23" r="1" fill="currentColor"/>
                <circle cx="77" cy="22" r="0.7" fill="currentColor"/>
                <path d="M75,23 Q76,21 77,22" stroke="currentColor" strokeWidth="0.3" fill="none"/>
              </g>
            </svg>
          </div>
        </div>
        
        <div className="relative w-full h-16 mt-10">
          <svg className="w-full h-full text-[#6eada8]/30 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Services;
