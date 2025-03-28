import { useState } from 'react';
import { ExternalLink, Paintbrush, Monitor, Image as ImageIcon, Globe, Code, FileCode, Palette, Laptop, Smartphone, PenTool, Layers, PlaySquare, Film, Video, Youtube } from 'lucide-react';
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { projectsData, Project } from '../data/projectsData';
import { useIsMobile } from '@/hooks/use-mobile';

const Portfolio = () => {
  const isMobile = useIsMobile();
  const [activeTab, setActiveTab] = useState("ui");
  
  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-secondary/30 via-background to-background py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-gradient">My Portfolio</h2>
          
          {isMobile ? (
            <div className="w-full max-w-4xl mx-auto">
              <select 
                value={activeTab}
                onChange={(e) => setActiveTab(e.target.value)}
                className="w-full p-3 mb-5 bg-background/50 backdrop-blur-sm rounded-xl border border-primary/10 shadow-md text-foreground"
              >
                <option value="ui">UI Design</option>
                <option value="social">Social Media</option>
                <option value="logo">Logo</option>
                <option value="wordpress">WordPress</option>
                <option value="product">Product</option>
                <option value="video">Video</option>
              </select>

              <div className="mt-4">
                {activeTab === "ui" && (
                  <div className="grid grid-cols-1 gap-4">
                    {projectsData.filter(p => p.category === 'ui').map((project) => (
                      <ProjectCard 
                        key={project.id} 
                        project={project}
                      />
                    ))}
                  </div>
                )}
                
                {activeTab === "social" && (
                  <div className="grid grid-cols-1 gap-4">
                    {projectsData.filter(p => p.category === 'social').map((project) => (
                      <ProjectCard 
                        key={project.id} 
                        project={project}
                      />
                    ))}
                  </div>
                )}
                
                {activeTab === "logo" && (
                  <div className="grid grid-cols-1 gap-4">
                    {projectsData.filter(p => p.category === 'logo').map((project) => (
                      <ProjectCard 
                        key={project.id} 
                        project={project}
                      />
                    ))}
                  </div>
                )}
                
                {activeTab === "wordpress" && (
                  <div className="grid grid-cols-1 gap-4">
                    {projectsData.filter(p => p.category === 'wordpress').map((project) => (
                      <ProjectCard 
                        key={project.id} 
                        project={project}
                      />
                    ))}
                  </div>
                )}
                
                {activeTab === "product" && (
                  <div className="grid grid-cols-1 gap-4">
                    {projectsData.filter(p => p.category === 'product').map((project) => (
                      <ProjectCard 
                        key={project.id} 
                        project={project}
                      />
                    ))}
                  </div>
                )}
                
                {activeTab === "video" && (
                  <div className="grid grid-cols-1 gap-4">
                    <div className="col-span-full text-center p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/10 shadow-lg">
                      <h3 className="text-xl font-bold mb-3 text-gradient">Video Projects Coming Soon!</h3>
                      <p className="text-muted-foreground mb-4">I'm currently working on adding my video portfolio. Check back soon for AI-generated videos and edited content!</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Tabs defaultValue="ui" className="w-full max-w-4xl mx-auto">
              <TabsList className="flex flex-wrap justify-center gap-2 w-full mb-5 bg-background/50 backdrop-blur-sm p-2 rounded-xl border border-primary/10 shadow-md">
                <TabsTrigger value="ui" className="flex-grow basis-[45%] sm:basis-auto rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                  UI Design
                </TabsTrigger>
                <TabsTrigger value="social" className="flex-grow basis-[45%] sm:basis-auto rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                  Social Media
                </TabsTrigger>
                <TabsTrigger value="logo" className="flex-grow basis-[45%] sm:basis-auto rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                  Logo
                </TabsTrigger>
                <TabsTrigger value="wordpress" className="flex-grow basis-[45%] sm:basis-auto rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                  WordPress
                </TabsTrigger>
                <TabsTrigger value="product" className="flex-grow basis-[45%] sm:basis-auto rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                  Product
                </TabsTrigger>
                <TabsTrigger value="video" className="flex-grow basis-[45%] sm:basis-auto rounded-lg data-[state=active]:bg-primary data-[state=active]:text-white">
                  Video
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="ui" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {projectsData.filter(p => p.category === 'ui').map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="social" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {projectsData.filter(p => p.category === 'social').map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="logo" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {projectsData.filter(p => p.category === 'logo').map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="wordpress" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {projectsData.filter(p => p.category === 'wordpress').map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="product" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  {projectsData.filter(p => p.category === 'product').map((project) => (
                    <ProjectCard 
                      key={project.id} 
                      project={project}
                    />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="video" className="mt-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                  <div className="col-span-full text-center p-6 md:p-8 bg-gradient-to-r from-primary/5 to-primary/10 rounded-xl border border-primary/10 shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-gradient">Video Projects Coming Soon!</h3>
                    <p className="text-muted-foreground mb-4">I'm currently working on adding my video portfolio. Check back soon for AI-generated videos and edited content!</p>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
          
          <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-xl bg-gradient-to-br from-background via-primary/5 to-background border border-primary/10 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 md:mb-8 text-gradient">Tools I Use</h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
              <h4 className="col-span-full text-left text-lg font-semibold mb-2 text-foreground/80">Design Tools</h4>
              <div className="col-span-full grid grid-cols-2 sm:grid-cols-3 gap-3">
                {isMobile ? (
                  <>
                    <ToolButton icon={<Paintbrush className="w-4 h-4 mr-1" />} label="Canva" compact />
                    <ToolButton icon={<ImageIcon className="w-4 h-4 mr-1" />} label="Photoshop" compact />
                    <ToolButton icon={<PenTool className="w-4 h-4 mr-1" />} label="Illustrator" compact />
                    <ToolButton icon={<Monitor className="w-4 h-4 mr-1" />} label="Figma" compact />
                    <ToolButton icon={<Layers className="w-4 h-4 mr-1" />} label="InDesign" compact />
                    <ToolButton icon={<Palette className="w-4 h-4 mr-1" />} label="Procreate" compact />
                  </>
                ) : (
                  <>
                    <ToolButton icon={<Paintbrush className="w-4 h-4 mr-2" />} label="Canva" />
                    <ToolButton icon={<ImageIcon className="w-4 h-4 mr-2" />} label="Photoshop" />
                    <ToolButton icon={<PenTool className="w-4 h-4 mr-2" />} label="Illustrator" />
                    <ToolButton icon={<Monitor className="w-4 h-4 mr-2" />} label="Figma" />
                    <ToolButton icon={<Layers className="w-4 h-4 mr-2" />} label="InDesign" />
                    <ToolButton icon={<Palette className="w-4 h-4 mr-2" />} label="Procreate" />
                  </>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4 mb-6">
              <h4 className="col-span-full text-left text-lg font-semibold mb-2 text-foreground/80">Video Tools</h4>
              <div className="col-span-full grid grid-cols-2 sm:grid-cols-3 gap-3">
                {isMobile ? (
                  <>
                    <ToolButton icon={<PlaySquare className="w-4 h-4 mr-1" />} label="CapCut" isNew={true} compact />
                    <ToolButton icon={<Film className="w-4 h-4 mr-1" />} label="Premiere Pro" isNew={true} compact />
                    <ToolButton icon={<Video className="w-4 h-4 mr-1" />} label="DaVinci" isNew={true} compact />
                    <ToolButton icon={<Youtube className="w-4 h-4 mr-1" />} label="After Effects" isNew={true} compact />
                    <ToolButton icon={<Film className="w-4 h-4 mr-1" />} label="Midjourney" isNew={true} compact />
                    <ToolButton icon={<Video className="w-4 h-4 mr-1" />} label="RunwayML" isNew={true} compact />
                  </>
                ) : (
                  <>
                    <ToolButton icon={<PlaySquare className="w-4 h-4 mr-2" />} label="CapCut" isNew={true} />
                    <ToolButton icon={<Film className="w-4 h-4 mr-2" />} label="Premiere Pro" isNew={true} />
                    <ToolButton icon={<Video className="w-4 h-4 mr-2" />} label="DaVinci Resolve" isNew={true} />
                    <ToolButton icon={<Youtube className="w-4 h-4 mr-2" />} label="After Effects" isNew={true} />
                    <ToolButton icon={<Film className="w-4 h-4 mr-2" />} label="Midjourney" isNew={true} />
                    <ToolButton icon={<Video className="w-4 h-4 mr-2" />} label="RunwayML" isNew={true} />
                  </>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-4">
              <h4 className="col-span-full text-left text-lg font-semibold mb-2 text-foreground/80">Development Tools</h4>
              <div className="col-span-full grid grid-cols-2 sm:grid-cols-3 gap-3">
                {isMobile ? (
                  <>
                    <ToolButton icon={<Code className="w-4 h-4 mr-1" />} label="HTML/CSS" compact />
                    <ToolButton icon={<FileCode className="w-4 h-4 mr-1" />} label="VSCode" compact />
                    <ToolButton icon={<Globe className="w-4 h-4 mr-1" />} label="WordPress" compact />
                    <ToolButton icon={<Smartphone className="w-4 h-4 mr-1" />} label="Sketch" compact />
                    <ToolButton icon={<Laptop className="w-4 h-4 mr-1" />} label="Framer" compact />
                  </>
                ) : (
                  <>
                    <ToolButton icon={<Code className="w-4 h-4 mr-2" />} label="HTML/CSS" />
                    <ToolButton icon={<FileCode className="w-4 h-4 mr-2" />} label="VSCode" />
                    <ToolButton icon={<Globe className="w-4 h-4 mr-2" />} label="WordPress" />
                    <ToolButton icon={<Smartphone className="w-4 h-4 mr-2" />} label="Sketch" />
                    <ToolButton icon={<Laptop className="w-4 h-4 mr-2" />} label="Framer" />
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ToolButton = ({ 
  icon, 
  label, 
  isNew = false, 
  compact = false 
}: { 
  icon: React.ReactNode, 
  label: string, 
  isNew?: boolean,
  compact?: boolean 
}) => {
  return (
    <span className={`relative group ${isNew ? 'bg-gradient-to-r from-primary/20 to-primary/30' : 'bg-gradient-to-r from-primary/10 to-primary/20'} 
      text-primary ${compact ? 'px-2 py-1.5 text-xs' : 'px-4 py-2'} rounded-full inline-flex items-center 
      hover:from-primary hover:to-primary/80 hover:text-white transition-all duration-300 
      shadow-sm hover:shadow-md border border-primary/10 w-full justify-center`}>
      {icon} {compact ? <span className="ml-1 truncate">{label}</span> : label}
      {isNew && (
        <span className={`absolute -top-2 -right-2 bg-primary text-white ${compact ? 'text-[8px] px-1.5 py-0' : 'text-[10px] px-2 py-0.5'} rounded-full animate-pulse-slow`}>
          NEW
        </span>
      )}
    </span>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const isMobile = useIsMobile();
  
  return (
    <Card 
      className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary/10 bg-gradient-to-b from-background/90 to-background/70 backdrop-blur-sm"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <h3 className="text-lg md:text-xl font-bold text-white font-montserrat line-clamp-1">{project.title}</h3>
            <p className="text-white/90 text-xs md:text-sm line-clamp-2 mt-1">{project.description}</p>
          </div>
          <div className="flex gap-2 md:gap-3">
            <Link
              to={`/project/${project.id}`}
              className="bg-white/90 text-primary hover:text-white hover:bg-primary p-2 md:p-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-lg"
              aria-label="View project details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "16" : "20"} height={isMobile ? "16" : "20"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </Link>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/90 text-primary hover:text-white hover:bg-primary p-2 md:p-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-md hover:shadow-lg"
                style={{ transitionDelay: '0.1s' }}
                aria-label="Open link"
              >
                <ExternalLink className={isMobile ? "w-4 h-4" : "w-5 h-5"} />
              </a>
            )}
          </div>
        </div>
      </div>
      <CardContent className="p-3 md:p-4">
        <div className="flex justify-between items-center">
          <span className="text-[10px] md:text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 bg-gradient-to-r from-primary/20 to-primary/10 text-primary rounded-full uppercase tracking-wider border border-primary/10 truncate max-w-[70%]">
            {project.category === 'ui' ? 'UI Design' : 
             project.category === 'social' ? 'Social Media' : 
             project.category === 'product' ? 'Product Design' :
             project.category === 'logo' ? 'Logo Design' : 
             project.category === 'wordpress' ? 'WordPress' :
             project.category === 'video' ? 'Video' : 'Design'}
          </span>
          {project.duration && (
            <span className="text-[10px] md:text-xs text-foreground/60 font-medium truncate">
              {project.duration}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
