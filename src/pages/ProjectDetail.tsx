
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Tool } from 'lucide-react';
import { projectsData, Project } from '../data/projectsData';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const foundProject = projectsData.find(p => p.id === parseInt(id));
      setProject(foundProject || null);
      setLoading(false);
      
      // Update document title
      if (foundProject) {
        document.title = `${foundProject.title} | Shoaibuu Portfolio`;
      }
    }
  }, [id]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="animate-pulse text-2xl">Loading project...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <p className="mb-6 text-foreground/70">The project you're looking for doesn't exist or has been removed.</p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-primary/20 transition-all"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="w-full relative h-[50vh] md:h-[60vh] overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm opacity-30" 
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        <div className="container mx-auto px-4 h-full flex flex-col items-start justify-end pb-10 relative z-10">
          <Link 
            to="/#portfolio" 
            className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-background/20 backdrop-blur-md text-white rounded-lg hover:bg-background/30 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Portfolio
          </Link>
          <span className="inline-block mb-3 py-1 px-3 rounded-full text-xs font-medium bg-primary/80 text-white">
            {project.category === 'ui' ? 'UI Design' : 
             project.category === 'social' ? 'Social Media' : 
             project.category === 'product' ? 'Product Design' :
             project.category === 'logo' ? 'Logo Design' : 
             project.category === 'wordpress' ? 'WordPress' : 'Design'}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 font-montserrat">{project.title}</h1>
          <p className="text-white/90 max-w-3xl text-lg">{project.description}</p>
        </div>
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6 font-montserrat">Project Overview</h2>
              <p className="text-foreground/80 mb-8">{project.detailedDescription || project.description}</p>
              
              {project.link && (
                <div className="mb-10">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-primary/20 transition-all"
                  >
                    Visit Project <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
              
              {/* Image Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold mb-6 font-montserrat">Project Gallery</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((image, index) => (
                      <div 
                        key={index} 
                        className="overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group"
                      >
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${index + 1}`} 
                          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="glass p-6 rounded-xl sticky top-24">
              <h3 className="text-xl font-bold mb-6 font-montserrat">Project Details</h3>
              
              <div className="space-y-6">
                {project.client && (
                  <div className="flex gap-3">
                    <User className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Client</h4>
                      <p className="text-foreground/70">{project.client}</p>
                    </div>
                  </div>
                )}
                
                {project.duration && (
                  <div className="flex gap-3">
                    <Calendar className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Timeline</h4>
                      <p className="text-foreground/70">{project.duration}</p>
                    </div>
                  </div>
                )}
                
                {project.tools && project.tools.length > 0 && (
                  <div className="flex gap-3">
                    <Tool className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, index) => (
                          <span 
                            key={index}
                            className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
