
import { useState } from 'react';
import { ExternalLink, Eye, Paintbrush, Monitor, Image as ImageIcon, Globe } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "Desktop UI design for The Dopple registry platform with intuitive navigation and modern aesthetics.",
    link: "https://thedopple.com"
  },
  {
    id: 2,
    title: "The Dopple Style Guide",
    category: "ui",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    description: "Comprehensive style guide defining visual elements and interaction patterns for The Dopple brand.",
    link: "https://thedopple.com"
  },
  {
    id: 3,
    title: "The Dopple Dashboard",
    category: "ui",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop",
    description: "User-friendly dashboard design for The Dopple platform with data visualization and management tools.",
    link: "https://thedopple.com"
  },
  
  // UI Design - Mamas Uncut
  {
    id: 4,
    title: "Mamas Uncut UI",
    category: "ui",
    image: "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=2070&auto=format&fit=crop",
    description: "Core UI design and improvements for the Mamas Uncut platform focusing on user experience.",
    link: "https://mamasuncut.com"
  },
  {
    id: 5,
    title: "Baby Name Generator",
    category: "ui",
    image: "https://images.unsplash.com/photo-1617096199297-08adbec8ed23?q=80&w=2063&auto=format&fit=crop",
    description: "Interactive baby name generator tool designed for the Mamas Uncut platform.",
    link: "https://mamasuncut.com"
  },
  
  // Social Media
  {
    id: 6,
    title: "ESN CZU Prague Instagram",
    category: "social",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2080&auto=format&fit=crop",
    description: "Instagram post designs for ESN CZU Prague, featuring engaging visuals and event promotions.",
  },
  {
    id: 7,
    title: "Mamas Uncut Pinterest Pins",
    category: "social",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    description: "Pinterest pin designs for Mamas Uncut spanning a 2-year period, optimized for engagement and clicks.",
    link: "https://pinterest.com/mamasuncut"
  },
  {
    id: 8,
    title: "Freelance Pinterest Designs",
    category: "social",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1974&auto=format&fit=crop",
    description: "Collection of over 500 Pinterest pin designs created for various freelance clients.",
  },
  
  // Product Design
  {
    id: 9,
    title: "GBOrganics Shilajit Resin",
    category: "product",
    image: "https://images.unsplash.com/photo-1567721913486-6585f069b332?q=80&w=2088&auto=format&fit=crop",
    description: "Product design and packaging for GBOrganics.pk Shilajit resin product line.",
    link: "https://gborganics.pk"
  },
  {
    id: 10,
    title: "Buckwheat Product Design",
    category: "product",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=2069&auto=format&fit=crop",
    description: "Packaging and brand identity design for Buckwheat.pk products.",
    link: "https://buckwheat.pk"
  },
  {
    id: 11,
    title: "Hofo.pk Product Line",
    category: "product",
    image: "https://images.unsplash.com/photo-1481671703460-040cb8a2d909?q=80&w=2070&auto=format&fit=crop",
    description: "Design for Hofo.pk product line including Shilajit, buckwheat, and other health products.",
    link: "https://hofo.pk"
  },
  
  // WordPress
  {
    id: 12,
    title: "Cnolesbags.com",
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop",
    description: "WordPress e-commerce website design and development for Cnoles Bags.",
    link: "https://cnolesbags.com"
  },
  {
    id: 13,
    title: "Clotharlo.com",
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?q=80&w=2080&auto=format&fit=crop",
    description: "Custom WordPress theme and site design for Clotharlo fashion brand.",
    link: "https://clotharlo.com"
  },
  {
    id: 14,
    title: "La-festin.com",
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop",
    description: "WordPress development for La Festin with custom e-commerce functionality.",
    link: "https://la-festin.com"
  },
  {
    id: 15,
    title: "Buckwheat.pk",
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1612387290123-34af734b5f81?q=80&w=2071&auto=format&fit=crop",
    description: "WordPress website design and development for Buckwheat.pk.",
    link: "https://buckwheat.pk"
  },
  {
    id: 16,
    title: "GBOrganics.pk",
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1501389040983-5c22cb186487?q=80&w=2070&auto=format&fit=crop",
    description: "Custom WordPress site with e-commerce functionality for GBOrganics.pk.",
    link: "https://gborganics.pk"
  },
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6">My Portfolio</h2>
          
          <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 w-full mb-8">
              <TabsTrigger value="all">All Work</TabsTrigger>
              <TabsTrigger value="ui">UI Design</TabsTrigger>
              <TabsTrigger value="product">Product</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
              <TabsTrigger value="wordpress">WordPress</TabsTrigger>
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
          </Tabs>
          
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-3">Tools I Use</h3>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center">
                <Paintbrush className="w-4 h-4 mr-2" /> Canva
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center">
                <ImageIcon className="w-4 h-4 mr-2" /> Photoshop
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center">
                <Paintbrush className="w-4 h-4 mr-2" /> Illustrator
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center">
                <Monitor className="w-4 h-4 mr-2" /> Figma
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full inline-flex items-center">
                <ImageIcon className="w-4 h-4 mr-2" /> InDesign
              </span>
            </div>
          </div>
        </div>
        
        {activeProject && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={() => setActiveProject(null)}>
            <div 
              className="bg-background rounded-xl overflow-hidden max-w-3xl w-full max-h-[90vh] shadow-2xl animate-fade-in"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img 
                  src={activeProject.image} 
                  alt={activeProject.title} 
                  className="w-full h-full object-cover"
                  style={{objectPosition: 'center'}}
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 font-montserrat">{activeProject.title}</h3>
                <p className="text-foreground/70 mb-4">{activeProject.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block py-1 px-3 rounded-full text-xs font-medium bg-primary/10 text-primary">
                    {activeProject.category === 'ui' ? 'UI Design' : 
                     activeProject.category === 'social' ? 'Social Media' : 
                     activeProject.category === 'product' ? 'Product Design' :
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
    <div 
      className="group relative bg-background rounded-xl overflow-hidden shadow-md card-hover"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button
            onClick={() => setActiveProject(project)}
            className="bg-white text-black p-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
            aria-label="View project"
          >
            <Eye className="w-5 h-5" />
          </button>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black p-3 rounded-full ml-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"
              style={{ transitionDelay: '0.1s' }}
              aria-label="Open link"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
      <div className="p-5">
        <span className="text-xs font-medium text-primary uppercase">
          {project.category === 'ui' ? 'UI Design' : 
           project.category === 'social' ? 'Social Media' : 
           project.category === 'product' ? 'Product Design' :
           project.category === 'wordpress' ? 'WordPress' : 'Logo Design'}
        </span>
        <h3 className="text-xl font-bold mt-1 font-montserrat">{project.title}</h3>
      </div>
    </div>
  );
};

export default Portfolio;
