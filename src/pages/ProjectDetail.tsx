
import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Calendar, User, Wrench, Cloud, Bird, Leaf, Fish, Mountain, SunMoon, Wind, Tree, Rabbit } from 'lucide-react';
import { projectsData, Project } from '../data/projectsData';
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      <div className="flex min-h-screen items-center justify-center relative overflow-hidden">
        <div className="animate-pulse text-2xl relative z-10">Loading project...</div>
        
        {/* Ghibli-style loading animation */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Animated dust */}
          <div className="absolute inset-0 opacity-30 animate-dust-float bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0.5px,_transparent_1px)] bg-[length:20px_20px]"></div>
          
          {/* Floating totoro-like creatures */}
          <div className="absolute top-1/4 left-1/3 w-8 h-14 opacity-60 animate-float">
            <div className="w-full h-1/2 bg-nature-forest/40 rounded-full"></div>
            <div className="w-full h-1/2 bg-nature-forest/40 rounded-b-lg"></div>
            <div className="absolute top-2 left-2 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-2 right-2 w-1 h-1 bg-white rounded-full"></div>
          </div>
          
          <div className="absolute bottom-1/3 right-1/3 w-6 h-10 opacity-60 animate-float" style={{animationDelay: "1.2s"}}>
            <div className="w-full h-1/2 bg-nature-forest/40 rounded-full"></div>
            <div className="w-full h-1/2 bg-nature-forest/40 rounded-b-lg"></div>
            <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center relative overflow-hidden">
        <div className="relative z-10">
          <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
          <p className="mb-6 text-foreground/70">The project you're looking for doesn't exist or has been removed.</p>
          <Link 
            to="/" 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
        
        {/* Ghibli-style 404 animation */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 bg-ghibli-dots"></div>
          
          {/* Animated clouds */}
          <div className="absolute top-20 left-[15%] text-nature-sky/30 animate-float-slow">
            <Cloud className="w-24 h-24" />
          </div>
          <div className="absolute bottom-32 right-[20%] text-nature-sky/20 animate-float" style={{animationDelay: "1.5s"}}>
            <Cloud className="w-32 h-32" />
          </div>
          
          {/* Lost creatures */}
          <div className="absolute top-1/3 left-[40%] text-nature-blossom/40 animate-bird-flight">
            <Bird className="w-16 h-16" />
          </div>
          
          <div className="absolute bottom-1/4 left-[25%] text-nature-forest/30 animate-float">
            <Tree className="w-20 h-20" />
          </div>
          
          <div className="absolute bottom-1/4 right-[20%] text-nature-forest/30 animate-float-slow" style={{animationDelay: "0.7s"}}>
            <Tree className="w-16 h-16" />
          </div>
        </div>
      </div>
    );
  }

  const openImageModal = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Ghibli-style decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10 bg-ghibli-dots"></div>
        
        {/* Animated clouds */}
        <div className="absolute top-[15%] left-[10%] text-white/20 animate-float-slow">
          <Cloud className="w-24 h-24" />
        </div>
        <div className="absolute top-[30%] right-[5%] text-white/15 animate-float" style={{animationDelay: "1.5s"}}>
          <Cloud className="w-32 h-32" />
        </div>
        
        {/* Animated birds far in the sky */}
        <div className="absolute top-[18%] left-[30%] text-nature-blossom/20 animate-bird-flight">
          <Bird className="w-6 h-6" />
        </div>
        <div className="absolute top-[15%] right-[40%] text-nature-blossom/15 animate-bird-flight" style={{animationDelay: "2s"}}>
          <Bird className="w-5 h-5" />
        </div>
        
        {/* Distant mountains */}
        <div className="absolute top-[35%] right-[15%] text-nature-stone/15 animate-float-slow" style={{animationDelay: "0.5s"}}>
          <Mountain className="w-48 h-48" />
        </div>
        <div className="absolute top-[30%] left-[8%] text-nature-stone/10 animate-float-slow" style={{animationDelay: "1.2s"}}>
          <Mountain className="w-36 h-36" />
        </div>
        
        {/* Subtle wind effect */}
        <div className="absolute top-[25%] left-[50%] text-white/10 animate-float">
          <Wind className="w-32 h-32" />
        </div>
        
        {/* Forest floor elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
            <path d="M0,100 L0,60 C50,70 100,50 150,60 C200,70 250,50 300,60 C350,70 400,50 450,60 C500,70 550,50 600,60 C650,70 700,50 750,60 C800,70 850,50 900,60 C950,70 1000,50 1050,60 C1100,70 1150,50 1200,60 L1200,100 Z" fill="currentColor" className="text-nature-forest"></path>
          </svg>
        </div>
        
        {/* Small creatures */}
        <div className="absolute bottom-10 left-[45%] text-nature-forest/30 animate-hop" style={{animationDelay: "0.7s"}}>
          <Rabbit className="w-8 h-8" />
        </div>
        
        {/* Swimming fish */}
        <div className="absolute bottom-16 right-[30%] text-nature-water/25 animate-fish-swim">
          <Fish className="w-10 h-10" />
        </div>
        
        {/* Ghibli-style dust particles */}
        <div className="absolute inset-0 opacity-20 animate-dust-float bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0.5px,_transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      {/* Hero Section */}
      <div className="w-full relative h-[50vh] md:h-[60vh] overflow-hidden bg-black">
        <div 
          className="absolute inset-0 bg-cover bg-center blur-sm opacity-30" 
          style={{ backgroundImage: `url(${project.image})` }}
        ></div>
        
        {/* Ghibli-style hero overlay elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Floating leaves */}
          <div className="absolute top-1/4 left-1/4 text-nature-leaf/40 animate-falling" style={{animationDelay: "0.5s"}}>
            <Leaf className="w-6 h-6" />
          </div>
          <div className="absolute top-1/3 right-1/3 text-nature-leaf/30 animate-falling" style={{animationDelay: "1.5s"}}>
            <Leaf className="w-8 h-8" />
          </div>
          <div className="absolute top-1/2 left-1/2 text-nature-leaf/20 animate-falling" style={{animationDelay: "2.5s"}}>
            <Leaf className="w-5 h-5" />
          </div>
          
          {/* Light rays effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/5 opacity-30"></div>
          
          {/* Vignette effect */}
          <div className="absolute inset-0 bg-radial-gradient-vignette opacity-40"></div>
        </div>
        
        <div className="container mx-auto px-4 h-full flex flex-col items-start justify-end pb-10 relative z-10">
          <Link 
            to="/#portfolio" 
            className="mb-8 inline-flex items-center gap-2 px-4 py-3 bg-primary/80 backdrop-blur-md text-white rounded-lg hover:bg-primary transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <ArrowLeft className="w-5 h-5" />
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
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 order-2 lg:order-1">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-2xl font-bold mb-6 font-montserrat relative inline-block">
                Project Overview
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/70 to-transparent rounded-full"></div>
              </h2>
              
              <div className="relative">
                <p className="text-foreground/80 mb-8">{project.detailedDescription || project.description}</p>
                
                {/* Decorative element */}
                <div className="absolute -left-8 top-0 bottom-0 w-2 opacity-20">
                  <div className="h-full w-full bg-gradient-to-b from-transparent via-primary/50 to-transparent rounded-full"></div>
                </div>
              </div>
              
              {project.link && (
                <div className="mb-10 relative">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white rounded-lg shadow-lg hover:shadow-primary/30 hover:bg-primary/90 transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                  >
                    <span className="relative z-10">Visit Project</span> 
                    <ExternalLink className="w-4 h-4 relative z-10" />
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0.5px,_transparent_1px)] bg-[length:12px_12px] opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </a>
                  
                  {/* Ghibli-style small creatures */}
                  <div className="absolute -bottom-4 right-4 w-6 h-10 opacity-60 animate-hop" style={{animationDelay: "0.5s"}}>
                    <div className="w-full h-1/2 bg-nature-forest/40 rounded-full"></div>
                    <div className="w-full h-1/2 bg-nature-forest/40 rounded-b-lg"></div>
                    <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                    <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                  </div>
                </div>
              )}
              
              {/* Image Gallery */}
              {project.gallery && project.gallery.length > 0 && (
                <div className="mt-10">
                  <h2 className="text-2xl font-bold mb-6 font-montserrat relative inline-block">
                    Project Gallery
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary/70 to-transparent rounded-full"></div>
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.gallery.map((image, index) => (
                      <div 
                        key={index} 
                        className="overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-500 group cursor-pointer relative"
                        onClick={() => openImageModal(image)}
                      >
                        {/* Ghibli-style frame and decorations */}
                        <div className="absolute inset-0 border-4 border-white/10 rounded-xl pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        
                        <div className="absolute top-2 left-2 w-3 h-3 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        <div className="absolute bottom-2 right-2 w-3 h-3 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                        
                        <img 
                          src={image} 
                          alt={`${project.title} - Image ${index + 1}`} 
                          className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <div className="text-white bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            Click to view
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1 order-1 lg:order-2">
            <div className="glass p-6 rounded-xl sticky top-24 border border-primary/10 backdrop-blur-md bg-white/10 dark:bg-black/10 relative overflow-hidden">
              {/* Ghibli-style decorative corner elements */}
              <div className="absolute top-0 left-0 w-12 h-12 opacity-30 pointer-events-none">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path d="M0,0 C20,0 40,20 40,40" fill="none" stroke="rgba(166, 208, 204, 0.5)" strokeWidth="1" />
                  <path d="M0,10 C15,10 30,25 30,40" fill="none" stroke="rgba(166, 208, 204, 0.3)" strokeWidth="1" />
                  <path d="M10,0 C10,15 25,30 40,30" fill="none" stroke="rgba(166, 208, 204, 0.3)" strokeWidth="1" />
                </svg>
              </div>
              
              <div className="absolute bottom-0 right-0 w-12 h-12 opacity-30 pointer-events-none transform rotate-180">
                <svg viewBox="0 0 40 40" className="w-full h-full">
                  <path d="M0,0 C20,0 40,20 40,40" fill="none" stroke="rgba(166, 208, 204, 0.5)" strokeWidth="1" />
                  <path d="M0,10 C15,10 30,25 30,40" fill="none" stroke="rgba(166, 208, 204, 0.3)" strokeWidth="1" />
                  <path d="M10,0 C10,15 25,30 40,30" fill="none" stroke="rgba(166, 208, 204, 0.3)" strokeWidth="1" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold mb-6 font-montserrat relative inline-block">
                Project Details
                <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/70 to-transparent rounded-full"></div>
              </h3>
              
              <div className="space-y-6 relative">
                {project.client && (
                  <div className="flex gap-3 relative hover:transform hover:translate-x-1 transition-transform duration-300">
                    <div className="text-primary p-2 bg-primary/10 rounded-full">
                      <User className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Client</h4>
                      <p className="text-foreground/70">{project.client}</p>
                    </div>
                  </div>
                )}
                
                {project.duration && (
                  <div className="flex gap-3 relative hover:transform hover:translate-x-1 transition-transform duration-300">
                    <div className="text-primary p-2 bg-primary/10 rounded-full">
                      <Calendar className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Timeline</h4>
                      <p className="text-foreground/70">{project.duration}</p>
                    </div>
                  </div>
                )}
                
                {project.tools && project.tools.length > 0 && (
                  <div className="flex gap-3 relative hover:transform hover:translate-x-1 transition-transform duration-300">
                    <div className="text-primary p-2 bg-primary/10 rounded-full">
                      <Wrench className="w-5 h-5 flex-shrink-0" />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground mb-1">Tools Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool, index) => (
                          <span 
                            key={index}
                            className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full relative overflow-hidden group"
                          >
                            {tool}
                            <span className="absolute inset-0 bg-primary/10 transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Ghibli-style decorative divider */}
                <div className="py-2">
                  <div className="w-full h-4 opacity-40">
                    <svg viewBox="0 0 100 10" className="w-full h-full">
                      <path d="M0,5 Q25,0 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <path d="M0,5 Q25,10 50,5 T100,5" fill="none" stroke="currentColor" strokeWidth="0.5" />
                      <circle cx="0" cy="5" r="1" fill="currentColor" />
                      <circle cx="25" cy="2.5" r="1" fill="currentColor" />
                      <circle cx="50" cy="5" r="1" fill="currentColor" />
                      <circle cx="75" cy="2.5" r="1" fill="currentColor" />
                      <circle cx="100" cy="5" r="1" fill="currentColor" />
                    </svg>
                  </div>
                </div>
                
                {/* Ghibli-style small creature */}
                <div className="absolute -bottom-4 -right-3 w-6 h-10 opacity-70 animate-hop" style={{animationDelay: "1.2s"}}>
                  <div className="w-full h-1/2 bg-nature-forest/60 rounded-full"></div>
                  <div className="w-full h-1/2 bg-nature-forest/60 rounded-b-lg"></div>
                  <div className="absolute top-1 left-1 w-1 h-1 bg-white rounded-full"></div>
                  <div className="absolute top-1 right-1 w-1 h-1 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={(open) => !open && setSelectedImage(null)}>
        <DialogContent className="max-w-5xl bg-background/95 backdrop-blur-sm p-1 border-none relative">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground">
            <button className="h-8 w-8 rounded-full bg-primary/20 text-white flex items-center justify-center hover:bg-primary/40 transition-colors">✕</button>
            <span className="sr-only">Close</span>
          </DialogClose>
          {selectedImage && (
            <>
              <img
                src={selectedImage}
                alt="Enlarged project image"
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Ghibli-style frame decoration */}
              <div className="absolute inset-0 border-4 border-white/10 rounded-xl pointer-events-none"></div>
              <div className="absolute top-2 left-2 w-4 h-4 bg-primary/20 rounded-full"></div>
              <div className="absolute bottom-2 right-2 w-4 h-4 bg-primary/20 rounded-full"></div>
              
              {/* Subtle dust particle animation */}
              <div className="absolute inset-0 pointer-events-none opacity-20 animate-dust-float bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.2)_0.5px,_transparent_1px)] bg-[length:20px_20px]"></div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProjectDetail;
