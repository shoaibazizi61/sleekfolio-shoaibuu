
import { useState } from 'react';
import { ExternalLink, Eye } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: 'ui' | 'branding' | 'web';
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
    description: "A modern finance dashboard with intuitive data visualization and clean user interface.",
  },
  {
    id: 2,
    title: "eCommerce Website Redesign",
    category: "web",
    image: "https://images.unsplash.com/photo-1523206489230-c012c64b2b48?q=80&w=1974&auto=format&fit=crop",
    description: "Complete redesign of an eCommerce platform focusing on user experience and conversion optimization.",
  },
  {
    id: 3,
    title: "Luxury Brand Identity",
    category: "branding",
    image: "https://images.unsplash.com/photo-1617096199297-08adbec8ed23?q=80&w=2063&auto=format&fit=crop",
    description: "Comprehensive brand identity for a luxury lifestyle brand, including logo, typography, and brand guidelines.",
  },
  {
    id: 4,
    title: "Travel App UI Design",
    category: "ui",
    image: "https://images.unsplash.com/photo-1494783367193-149034c05e8f?q=80&w=2070&auto=format&fit=crop",
    description: "Mobile app design for a travel platform with focus on beautiful imagery and intuitive booking process.",
  },
  {
    id: 5,
    title: "Health & Wellness Website",
    category: "web",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop",
    description: "Clean and calming website design for a health and wellness brand with smooth animations.",
  },
  {
    id: 6,
    title: "Tech Startup Branding",
    category: "branding",
    image: "https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?q=80&w=2080&auto=format&fit=crop",
    description: "Modern and bold brand identity for a tech startup, including logo design and brand guidelines.",
  },
];

const Portfolio = () => {
  const [filter, setFilter] = useState<'all' | 'ui' | 'branding' | 'web'>('all');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="portfolio" className="section-padding bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-4">My Portfolio</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            A showcase of my recent design work across UI/UX, web design, and branding projects.
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <button 
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'all' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-background hover:bg-background/80 text-foreground/70'
              }`}
            >
              All Projects
            </button>
            <button 
              onClick={() => setFilter('ui')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'ui' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-background hover:bg-background/80 text-foreground/70'
              }`}
            >
              UI/UX Design
            </button>
            <button 
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'web' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-background hover:bg-background/80 text-foreground/70'
              }`}
            >
              Web Design
            </button>
            <button 
              onClick={() => setFilter('branding')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === 'branding' 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-background hover:bg-background/80 text-foreground/70'
              }`}
            >
              Branding
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
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
                  {project.category === 'ui' ? 'UI/UX Design' : project.category === 'web' ? 'Web Design' : 'Branding'}
                </span>
                <h3 className="text-xl font-bold mt-1 font-montserrat">{project.title}</h3>
              </div>
            </div>
          ))}
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
                    {activeProject.category === 'ui' ? 'UI/UX Design' : activeProject.category === 'web' ? 'Web Design' : 'Branding'}
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

export default Portfolio;
