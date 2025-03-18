
import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

type Project = {
  id: number;
  title: string;
  category: 'ui' | 'social' | 'logo' | 'wordpress';
  image: string;
  description: string;
  link?: string;
};

const projects: Project[] = [
  {
    id: 1,
    title: "Finance App Dashboard",
    category: "ui",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    description: "A modern finance dashboard with intuitive data visualization and clean user interface design for improved user experience.",
  },
  {
    id: 2,
    title: "E-commerce Website UI",
    category: "ui",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    description: "Clean and intuitive user interface design for an e-commerce platform focusing on user experience and conversion optimization.",
  },
  {
    id: 3,
    title: "Mother's Day Campaign",
    category: "social",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=2070&auto=format&fit=crop",
    description: "Eye-catching Pinterest pins and Facebook ad creatives for a special Mother's Day promotional campaign.",
  },
  {
    id: 4,
    title: "Summer Giveaway",
    category: "social",
    image: "https://images.unsplash.com/photo-1561069934-eee225952461?q=80&w=2070&auto=format&fit=crop",
    description: "Engaging giveaway poster designs and sweepstakes visuals for a summer promotion campaign.",
  },
  {
    id: 5,
    title: "Product Brand Logo",
    category: "logo",
    image: "https://images.unsplash.com/photo-1617096199297-08adbec8ed23?q=80&w=2063&auto=format&fit=crop",
    description: "Modern and memorable logo design for a lifestyle brand, including typography and brand guidelines.",
  },
  {
    id: 6,
    title: "Tech Startup Identity",
    category: "logo",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2080&auto=format&fit=crop",
    description: "Distinctive brand identity for a tech startup, featuring a contemporary logo design and comprehensive brand guidelines.",
  },
  {
    id: 7,
    title: "Health Blog Theme",
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?q=80&w=2074&auto=format&fit=crop",
    description: "Custom WordPress theme design for a health and wellness blog with responsive layouts and optimized user experience.",
  },
  {
    id: 8,
    title: "E-commerce Store",
    category: "wordpress",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1974&auto=format&fit=crop",
    description: "WordPress e-commerce website design with WooCommerce integration, featuring custom product pages and checkout experience.",
  },
];

const Portfolio = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="section-padding bg-secondary/50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto mb-8">
            As a Graphic Designer at Mamas Uncut LLC, I was responsible for creating engaging and visually compelling content across various digital platforms. My work included designing eye-catching Pinterest pins, Facebook ad creatives, giveaway posters, sweepstakes visuals, product designs, and Instagram posts. Additionally, I contributed to UI design improvements, ensuring a seamless and user-friendly experience for the brand's digital presence.
          </p>
          
          <Tabs defaultValue="all" className="w-full max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8">
              <TabsTrigger value="all">All Work</TabsTrigger>
              <TabsTrigger value="ui">UI Design</TabsTrigger>
              <TabsTrigger value="social">Social Media</TabsTrigger>
              <TabsTrigger value="logo">Logo Design</TabsTrigger>
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
          </Tabs>
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
                     activeProject.category === 'logo' ? 'Logo Design' : 'WordPress'}
                  </span>
                  <button 
                    onClick={() => setActiveProject(null)}
                    className="text-sm font-medium hover:text-primary transition-colors"
                  >
                    Close
                  </button>
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
           project.category === 'logo' ? 'Logo Design' : 'WordPress'}
        </span>
        <h3 className="text-xl font-bold mt-1 font-montserrat">{project.title}</h3>
      </div>
    </div>
  );
};

export default Portfolio;
