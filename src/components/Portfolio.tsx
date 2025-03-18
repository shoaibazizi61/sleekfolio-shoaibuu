
import { useState } from 'react';
import { ExternalLink, Eye, Paintbrush, Monitor, Image as ImageIcon, Globe } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent } from "@/components/ui/card";

type Project = {
  id: number;
  title: string;
  category: 'ui' | 'social' | 'logo' | 'wordpress' | 'product';
  image: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  // UI Design - The Dopple
  {
    id: 1,
    title: "The Dopple Registry Desktop",
    category: "ui",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742333643/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/Dopple%20registry/qz9vq7xhsel5e193fvp6.png",
    description: "Desktop UI design for The Dopple registry platform with intuitive navigation and modern aesthetics.",
    link: "https://thedopple.com"
  },
  {
    id: 2,
    title: "The Dopple Style Guide",
    category: "ui",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742333490/The%20Dopple%20Dashboard/The%20Dopple%20registry%20desktop%20and%20phone/sbc6t0lfnnar1xqjw2hg.png",
    description: "Comprehensive style guide defining visual elements and interaction patterns for The Dopple brand.",
    link: "https://thedopple.com"
  },
  {
    id: 3,
    title: "The Dopple Dashboard",
    category: "ui",
    image: "https://res.cloudinary.com/diedxghax/image/upload/v1742333076/The%20Dopple%20Dashboard/cvz49dssanewj8inxf6m.png",
    description: "User-friendly dashboard design for The Dopple platform with data visualization and management tools.",
    link: "https://thedopple.com"
  },
  
  // UI Design - Mamas Uncut
  {
    id: 4,
    title: "Mamas Uncut UI",
    category: "ui",
    image: "https://raisingchildren.net.au/__data/assets/image/0024/47742/baby-behaviour-and-awareness.jpg",
    description: "Core UI design and improvements for the Mamas Uncut platform focusing on user experience.",
    link: "https://mamasuncut.com"
  },
  {
    id: 5,
    title: "Baby Name Generator",
    category: "ui",
    image: "https://raisingchildren.net.au/__data/assets/image/0024/47742/baby-behaviour-and-awareness.jpg",
    description: "Interactive baby name generator tool designed for the Mamas Uncut platform.",
    link: "https://mamasuncut.com"
  },
  
  // Social Media
  {
    id: 6,
    title: "ESN CZU Prague Instagram",
    category: "social",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334616/Social%20Media/i0bbtwprdr16haewhnri.png",
    description: "Instagram post designs for ESN CZU Prague, featuring engaging visuals and event promotions.",
    link: "https://www.instagram.com/esnczu/"
  },
  {
    id: 7,
    title: "Mamas Uncut Pinterest Pins",
    category: "social",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334036/Social%20Media/anhnaoo1gh94eqtpzdgj.png",
    description: "Pinterest pin designs for Mamas Uncut spanning a 2-year period, optimized for engagement and clicks.",
    link: "https://pinterest.com/mamasuncut"
  },
  {
    id: 8,
    title: "Freelance Pinterest Designs",
    category: "social",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334035/Social%20Media/obq8rxevxejvbolvysmh.png",
    description: "Collection of over 500 Pinterest pin designs created for various freelance clients.",
  },
  
  // Product Design
  {
    id: 9,
    title: "GBOrganics Shilajit Resin",
    category: "product",
    image: "https://cdn.britannica.com/74/114874-050-6E04C88C/North-Face-Mount-Everest-Tibet-Autonomous-Region.jpg",
    description: "Product design and packaging for GBOrganics.pk Shilajit resin product line.",
    link: "https://gborganics.pk"
  },
  {
    id: 10,
    title: "Buckwheat Product Design",
    category: "product",
    image: "https://drhyman.com/cdn/shop/articles/AdobeStock_299261032-scaled.jpg?v=1714795523&width=1500",
    description: "Packaging and brand identity design for Buckwheat.pk products.",
    link: "https://buckwheat.pk"
  },
  {
    id: 11,
    title: "Hofo.pk Product Line",
    category: "product",
    image: "https://cdn.britannica.com/10/94510-050-D0B814DA/Machhapuchhare-Great-Himalaya-Range-Nepal.jpg",
    description: "Design for Hofo.pk product line including Shilajit, buckwheat, and other health products.",
    link: "https://hofo.pk"
  },
  
  // Logos
  {
    id: 12,
    title: "Logo Design Collection 1",
    category: "logo",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334037/Social%20Media/ivcaj8zhwsezdwxutyia.jpg",
    description: "Custom logo design focusing on brand identity and visual communication.",
  },
  {
    id: 13,
    title: "Logo Design Collection 2",
    category: "logo",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334037/Social%20Media/at4a8ev6g7ht6ycmy4i4.jpg",
    description: "Minimalist logo design with modern typography and symbolic elements.",
  },
  {
    id: 14,
    title: "Logo Design Collection 3",
    category: "logo",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334037/Social%20Media/ueukaeollcstood5efbu.jpg",
    description: "Brand identity and logo design for corporate clients with emphasis on scalability.",
  },
  {
    id: 15,
    title: "Logo Design Collection 4",
    category: "logo",
    image: "http://res.cloudinary.com/diedxghax/image/upload/v1742334037/Social%20Media/uatrnfsvu9rebtqkwsky.jpg",
    description: "Creative logo concepts focusing on versatility and brand recognition.",
  },
  
  // WordPress
  {
    id: 16,
    title: "Cnolesbags.com",
    category: "wordpress",
    image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    description: "WordPress e-commerce website design and development for Cnoles Bags.",
    link: "https://cnolesbags.com"
  },
  {
    id: 17,
    title: "Clotharlo.com",
    category: "wordpress",
    image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    description: "Custom WordPress theme and site design for Clotharlo fashion brand.",
    link: "https://clotharlo.com"
  },
  {
    id: 18,
    title: "La-festin.com",
    category: "wordpress",
    image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    description: "WordPress development for La Festin with custom e-commerce functionality.",
    link: "https://la-festin.com"
  },
  {
    id: 19,
    title: "Buckwheat.pk",
    category: "wordpress",
    image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    description: "WordPress website design and development for Buckwheat.pk.",
    link: "https://buckwheat.pk"
  },
  {
    id: 20,
    title: "GBOrganics.pk",
    category: "wordpress",
    image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    description: "Custom WordPress site with e-commerce functionality for GBOrganics.pk.",
    link: "https://gborganics.pk"
  },
  {
    id: 21,
    title: "Giantteddy.com",
    category: "wordpress",
    image: "https://www.graffiti9.com/wp-content/uploads/2019/10/Website-Banner.jpg",
    description: "E-commerce WordPress site for Giantteddy.com with custom product showcases.",
    link: "https://giantteddy.com"
  },
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-secondary/30 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-gradient">My Portfolio</h2>
          
          <Tabs defaultValue="all" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 md:grid-cols-6 w-full mb-8 bg-background/50 backdrop-blur-sm p-1 rounded-xl">
              <TabsTrigger value="all" className="rounded-lg">All Work</TabsTrigger>
              <TabsTrigger value="ui" className="rounded-lg">UI Design</TabsTrigger>
              <TabsTrigger value="social" className="rounded-lg">Social Media</TabsTrigger>
              <TabsTrigger value="logo" className="rounded-lg">Logo</TabsTrigger>
              <TabsTrigger value="wordpress" className="rounded-lg">WordPress</TabsTrigger>
              <TabsTrigger value="product" className="rounded-lg">Product</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    setActiveProject={setActiveProject} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ui" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => p.category === 'ui').map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    setActiveProject={setActiveProject} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="social" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => p.category === 'social').map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    setActiveProject={setActiveProject} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="logo" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => p.category === 'logo').map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    setActiveProject={setActiveProject} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="wordpress" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => p.category === 'wordpress').map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    setActiveProject={setActiveProject} 
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="product" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.filter(p => p.category === 'product').map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    setActiveProject={setActiveProject} 
                  />
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          <div className="mt-16 p-6 rounded-xl bg-background/50 backdrop-blur-sm shadow-lg max-w-3xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-gradient">Tools I Use</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center hover:bg-primary/20 transition-colors">
                <Paintbrush className="w-4 h-4 mr-2" /> Canva
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center hover:bg-primary/20 transition-colors">
                <ImageIcon className="w-4 h-4 mr-2" /> Photoshop
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center hover:bg-primary/20 transition-colors">
                <Paintbrush className="w-4 h-4 mr-2" /> Illustrator
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center hover:bg-primary/20 transition-colors">
                <Monitor className="w-4 h-4 mr-2" /> Figma
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center hover:bg-primary/20 transition-colors">
                <ImageIcon className="w-4 h-4 mr-2" /> InDesign
              </span>
            </div>
          </div>
        </div>
        
        {activeProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setActiveProject(null)}>
            <div 
              className="bg-background rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <AspectRatio ratio={16/9}>
                  <img 
                    src={activeProject.image} 
                    alt={activeProject.title} 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-montserrat">{activeProject.title}</h3>
                <p className="text-foreground/70 mb-4">{activeProject.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {activeProject.category === 'ui' ? 'UI Design' : 
                     activeProject.category === 'social' ? 'Social Media' : 
                     activeProject.category === 'product' ? 'Product Design' :
                     activeProject.category === 'logo' ? 'Logo Design' : 
                     activeProject.category === 'wordpress' ? 'WordPress' : 'Logo Design'}
                  </span>
                  <div className="flex gap-2">
                    {activeProject.link && (
                      <a 
                        href={activeProject.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                      >
                        <Globe className="w-4 h-4 mr-1" /> Visit
                      </a>
                    )}
                    <button 
                      onClick={() => setActiveProject(null)}
                      className="text-sm font-medium hover:text-primary transition-colors ml-4"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// ProjectCard component extracted for cleaner code
const ProjectCard = ({ 
  project, 
  setActiveProject 
}: { 
  project: Project, 
  setActiveProject: React.Dispatch<React.SetStateAction<Project | null>> 
}) => {
  return (
    <Card 
      className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-none bg-background/80 backdrop-blur-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-xl font-bold text-white font-montserrat line-clamp-1">{project.title}</h3>
            <p className="text-white/80 text-sm line-clamp-2">{project.description}</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setActiveProject(project)}
              className="bg-white text-black p-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white"
              aria-label="View project"
            >
              <Eye className="w-5 h-5" />
            </button>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black p-3 rounded-full ml-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white"
                style={{ transitionDelay: '0.1s' }}
                aria-label="Open link"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-4">
        <span className="text-xs font-medium text-primary uppercase tracking-wider">
          {project.category === 'ui' ? 'UI Design' : 
           project.category === 'social' ? 'Social Media' : 
           project.category === 'product' ? 'Product Design' :
           project.category === 'logo' ? 'Logo Design' : 
           project.category === 'wordpress' ? 'WordPress' : 'Logo Design'}
        </span>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
