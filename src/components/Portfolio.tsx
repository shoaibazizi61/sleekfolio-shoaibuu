
import { useState } from 'react';
import { ExternalLink, Paintbrush, Monitor, Image as ImageIcon, Globe, Code, FileCode, Palette, Laptop, Smartphone, PenTool, Layers, PlaySquare, Film, Video, Youtube, Bird, Cloud, Leaf, Stars, Fish } from 'lucide-react';
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
    <section id="portfolio" className="section-padding relative bg-gradient-to-b from-secondary/30 via-background to-background py-16 md:py-20 overflow-hidden">
      {/* Ghibli-inspired decorative background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Decorative blobs */}
        <div className="blob h-64 w-64 bg-[#fef7cd]/30 top-20 -left-20 animate-float rounded-[60%_40%_70%_30%/40%_50%_60%_50%]" style={{animationDelay: "0.7s"}}></div>
        <div className="blob h-80 w-80 bg-[#ffdee2]/30 bottom-40 -right-20 animate-float rounded-[50%_50%_30%_70%/40%_60%_60%_40%]" style={{animationDelay: "1.3s"}}></div>
        
        {/* Enhanced Ghibli floating elements */}
        <div className="absolute top-32 right-[15%] w-14 h-14 text-[#6eada8]/60 animate-float" style={{animationDelay: "0.5s"}}>
          <Cloud className="w-full h-full" />
        </div>
        <div className="absolute bottom-40 left-[20%] w-12 h-12 text-[#86bb6b]/60 animate-sway" style={{animationDelay: "1.8s"}}>
          <Leaf className="w-full h-full" />
        </div>
        <div className="absolute top-1/2 right-[10%] w-10 h-10 text-[#c9a95b]/70 animate-twinkle" style={{animationDelay: "1.2s"}}>
          <Stars className="w-full h-full" />
        </div>
        <div className="absolute bottom-1/4 left-[15%] w-12 h-12 text-[#e17f95]/60 animate-bird-flight" style={{animationDelay: "2.3s"}}>
          <Bird className="w-full h-full" />
        </div>
        
        {/* New: Ghibli-style dust particles */}
        <div className="absolute inset-0 opacity-40">
          {[...Array(30)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1.5 h-1.5 rounded-full bg-primary/30 animate-float-slow"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${8 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
        
        {/* New: Ghibli-style rice field pattern */}
        <div className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(161, 216, 207, 0.3) 40px, rgba(161, 216, 207, 0.3) 41px), 
                             repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(254, 247, 205, 0.2) 40px, rgba(254, 247, 205, 0.2) 41px)`
          }}>
        </div>
        
        {/* Ghibli-style flowing water at bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-16 opacity-40">
          <svg className="w-full h-full" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,30 C200,10 400,50 600,30 C800,10 1000,40 1200,20 L1200,60 L0,60 Z" className="fill-current text-nature-water/40"></path>
            <path d="M0,40 C150,20 350,60 550,40 C750,20 950,50 1200,30 L1200,60 L0,60 Z" className="fill-current text-nature-water/30"></path>
          </svg>
        </div>
      </div>
    
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-gradient relative inline-block">
            My Portfolio
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-primary/30 via-primary to-primary/30"></span>
          </h2>
          
          {/* Enhanced Ghibli-style description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 relative">
            Explore my creative works across different design categories
            <span className="absolute -right-6 -top-4 text-primary/60 animate-sway" style={{animationDelay: "0.7s"}}>
              <Leaf className="w-4 h-4" />
            </span>
            <span className="absolute -left-6 bottom-0 text-[#ffdee2]/60 animate-float-slow" style={{animationDelay: "1.2s"}}>
              <Cloud className="w-4 h-4" />
            </span>
          </p>
          
          {isMobile ? (
            <div className="w-full max-w-4xl mx-auto">
              <div className="relative">
                {/* Ghibli-style decorative elements around select */}
                <div className="absolute -left-2 top-1/2 -translate-y-1/2 text-primary/70 animate-float-slow" style={{animationDelay: "0.5s"}}>
                  <Leaf className="w-4 h-4" />
                </div>
                <div className="absolute -right-2 top-1/2 -translate-y-1/2 text-nature-water/70 animate-sway" style={{animationDelay: "1.2s"}}>
                  <Cloud className="w-4 h-4" />
                </div>
                
                <select 
                  value={activeTab}
                  onChange={(e) => setActiveTab(e.target.value)}
                  className="w-full p-3 mb-5 bg-gradient-to-r from-[#fef7cd]/40 via-[#a6d0cc]/20 to-[#fef7cd]/40 backdrop-blur-sm rounded-xl border border-primary/30 shadow-md text-foreground font-medium relative z-10"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(254, 247, 205, 0.4), rgba(166, 208, 204, 0.2), rgba(254, 247, 205, 0.4)), url("data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='10' cy='10' r='10' fill='%23a6d0cc' fill-opacity='0.05'/%3E%3C/svg%3E")`,
                    backgroundSize: "cover, 20px 20px",
                    backgroundRepeat: "no-repeat, repeat",
                  }}
                >
                  <option value="ui" className="text-foreground font-medium bg-background">UI Design</option>
                  <option value="social" className="text-foreground font-medium bg-background">Social Media</option>
                  <option value="logo" className="text-foreground font-medium bg-background">Logo</option>
                  <option value="wordpress" className="text-foreground font-medium bg-background">WordPress</option>
                  <option value="product" className="text-foreground font-medium bg-background">Product</option>
                  <option value="video" className="text-foreground font-medium bg-background">Video</option>
                </select>
              </div>

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
                    <div className="col-span-full text-center p-6 bg-gradient-to-r from-[#fef7cd]/30 to-[#ffdee2]/30 rounded-xl border border-primary/10 shadow-lg">
                      <h3 className="text-xl font-bold mb-3 text-gradient">Video Projects Coming Soon!</h3>
                      <p className="text-foreground/80 mb-4">I'm currently working on adding my video portfolio. Check back soon for AI-generated videos and edited content!</p>
                      <div className="flex justify-center mt-2">
                        <div className="relative">
                          <Film className="w-10 h-10 text-primary/70 animate-pulse-slow" />
                          <div className="absolute -top-3 -right-3">
                            <Stars className="w-5 h-5 text-[#fef7cd] animate-twinkle" style={{animationDelay: "1s"}} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <Tabs defaultValue="ui" className="w-full max-w-4xl mx-auto">
              <div className="relative">
                {/* Enhanced decorative elements around tabs */}
                <div className="absolute -left-8 top-1/2 -translate-y-1/2 text-primary/60 animate-sway hidden md:block" style={{animationDelay: "1.5s"}}>
                  <Leaf className="w-6 h-6" />
                </div>
                <div className="absolute -right-8 top-1/2 -translate-y-1/2 text-[#ffdee2]/60 animate-float-slow hidden md:block" style={{animationDelay: "0.8s"}}>
                  <Cloud className="w-6 h-6" />
                </div>
                
                <TabsList className="flex flex-wrap justify-center gap-2 w-full mb-5 px-4 py-3 bg-gradient-to-r from-[#fef7cd]/20 via-[#a6d0cc]/10 to-[#fef7cd]/20 border border-primary/10">
                  <TabsTrigger value="ui" className="flex-grow basis-[45%] sm:basis-auto data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-primary/10 data-[state=active]:text-primary">
                    UI Design
                  </TabsTrigger>
                  <TabsTrigger value="social" className="flex-grow basis-[45%] sm:basis-auto data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-primary/10 data-[state=active]:text-primary">
                    Social Media
                  </TabsTrigger>
                  <TabsTrigger value="logo" className="flex-grow basis-[45%] sm:basis-auto data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-primary/10 data-[state=active]:text-primary">
                    Logo
                  </TabsTrigger>
                  <TabsTrigger value="wordpress" className="flex-grow basis-[45%] sm:basis-auto data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-primary/10 data-[state=active]:text-primary">
                    WordPress
                  </TabsTrigger>
                  <TabsTrigger value="product" className="flex-grow basis-[45%] sm:basis-auto data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-primary/10 data-[state=active]:text-primary">
                    Product
                  </TabsTrigger>
                  <TabsTrigger value="video" className="flex-grow basis-[45%] sm:basis-auto data-[state=active]:bg-gradient-to-r data-[state=active]:from-primary/20 data-[state=active]:to-primary/10 data-[state=active]:text-primary">
                    Video
                  </TabsTrigger>
                </TabsList>
              </div>
              
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
                  <div className="col-span-full text-center p-6 md:p-8 bg-gradient-to-r from-[#fef7cd]/30 to-[#ffdee2]/30 rounded-xl border border-primary/10 shadow-lg">
                    <h3 className="text-xl font-bold mb-3 text-gradient">Video Projects Coming Soon!</h3>
                    <p className="text-foreground/80 mb-4">I'm currently working on adding my video portfolio. Check back soon for AI-generated videos and edited content!</p>
                    {/* Enhanced Ghibli-style "coming soon" illustration */}
                    <div className="flex justify-center mt-2">
                      <div className="relative">
                        <Film className="w-10 h-10 text-primary/70 animate-pulse-slow" />
                        <div className="absolute -top-3 -right-3">
                          <Stars className="w-5 h-5 text-[#fef7cd] animate-twinkle" style={{animationDelay: "1s"}} />
                        </div>
                        <div className="absolute -bottom-2 -left-3">
                          <Leaf className="w-4 h-4 text-[#86bb6b]/70 animate-sway" style={{animationDelay: "1.5s"}} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          )}
          
          <div className="mt-12 md:mt-16 p-6 md:p-8 rounded-xl bg-gradient-to-br from-background via-[#fef7cd]/10 to-background border border-primary/10 shadow-lg max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 md:mb-8 text-gradient relative inline-block">
              Tools I Use
              <span className="absolute -right-6 -top-4">
                <Stars className="w-5 h-5 text-[#fef7cd]/70 animate-twinkle" style={{animationDelay: "0.7s"}} />
              </span>
            </h3>
            
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
    <span className={`relative group ${isNew ? 'bg-gradient-to-r from-[#fef7cd]/40 to-[#ffdee2]/40' : 'bg-gradient-to-r from-[#fef7cd]/20 to-[#ffdee2]/20'} 
      text-foreground ${compact ? 'px-2 py-1.5 text-xs' : 'px-4 py-2'} rounded-full inline-flex items-center 
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
      className="group relative overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-primary/10 bg-gradient-to-b from-background/90 to-background/70 backdrop-blur-sm"
    >
      {/* Enhanced Ghibli-inspired decorative corner elements */}
      <div className="absolute top-0 left-0 w-12 h-12 opacity-60 pointer-events-none">
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <path d="M0,0 C20,0 40,20 40,40" fill="none" stroke="rgba(166, 208, 204, 0.7)" strokeWidth="1" />
          <path d="M0,10 C15,10 30,25 30,40" fill="none" stroke="rgba(166, 208, 204, 0.5)" strokeWidth="1" />
          <path d="M10,0 C10,15 25,30 40,30" fill="none" stroke="rgba(166, 208, 204, 0.5)" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="absolute top-0 right-0 w-12 h-12 opacity-60 pointer-events-none transform rotate-90">
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <path d="M0,0 C20,0 40,20 40,40" fill="none" stroke="rgba(255, 222, 226, 0.7)" strokeWidth="1" />
          <path d="M0,10 C15,10 30,25 30,40" fill="none" stroke="rgba(255, 222, 226, 0.5)" strokeWidth="1" />
          <path d="M10,0 C10,15 25,30 40,30" fill="none" stroke="rgba(255, 222, 226, 0.5)" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 right-0 w-12 h-12 opacity-60 pointer-events-none transform rotate-180">
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <path d="M0,0 C20,0 40,20 40,40" fill="none" stroke="rgba(254, 247, 205, 0.7)" strokeWidth="1" />
          <path d="M0,10 C15,10 30,25 30,40" fill="none" stroke="rgba(254, 247, 205, 0.5)" strokeWidth="1" />
          <path d="M10,0 C10,15 25,30 40,30" fill="none" stroke="rgba(254, 247, 205, 0.5)" strokeWidth="1" />
        </svg>
      </div>
      
      <div className="absolute bottom-0 left-0 w-12 h-12 opacity-60 pointer-events-none transform -rotate-90">
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <path d="M0,0 C20,0 40,20 40,40" fill="none" stroke="rgba(242, 252, 226, 0.7)" strokeWidth="1" />
          <path d="M0,10 C15,10 30,25 30,40" fill="none" stroke="rgba(242, 252, 226, 0.5)" strokeWidth="1" />
          <path d="M10,0 C10,15 25,30 40,30" fill="none" stroke="rgba(242, 252, 226, 0.5)" strokeWidth="1" />
        </svg>
      </div>
    
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Fixed overlay to ensure buttons are always visible on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end justify-center p-4 group-hover:opacity-100 md:opacity-0 transition-opacity duration-300">
          <div className="w-full text-center">
            <h3 className="text-lg md:text-xl font-bold text-white font-montserrat line-clamp-1 mb-1">{project.title}</h3>
            <p className="text-white/90 text-xs md:text-sm line-clamp-2 mb-2">{project.description}</p>
            
            <div className="flex justify-center gap-2 md:gap-3 mt-2">
              <Link
                to={`/project/${project.id}`}
                className="bg-white/90 text-primary hover:text-white hover:bg-primary py-1.5 px-3 rounded-full shadow-md hover:shadow-lg flex items-center gap-1 text-sm z-10"
                aria-label={`View details for ${project.title}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width={isMobile ? "14" : "16"} height={isMobile ? "14" : "16"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                <span>View More</span>
              </Link>
              
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 text-primary hover:text-white hover:bg-primary py-1.5 px-3 rounded-full shadow-md hover:shadow-lg flex items-center gap-1 text-sm z-10"
                  aria-label={`Visit external link for ${project.title}`}
                >
                  <ExternalLink className={isMobile ? "w-3 h-3" : "w-4 h-4"} />
                  <span>Full Access</span>
                </a>
              )}
            </div>
          </div>
        </div>
        
        {/* Ghibli-style spirits floating across the card on hover */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute top-1/4 right-0 animate-float-slow" style={{animationDuration: "6s", animationDelay: "0.5s"}}>
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" fill="rgba(255,255,255,0.3)" />
              <circle cx="50" cy="50" r="30" fill="rgba(255,255,255,0.2)" />
              <circle cx="50" cy="50" r="20" fill="rgba(255,255,255,0.1)" />
            </svg>
          </div>
          <div className="absolute bottom-1/3 left-1/4 animate-float-slow" style={{animationDuration: "7s", animationDelay: "1s"}}>
            <Stars className="w-4 h-4 text-white/40" />
          </div>
          
          {/* Add more Ghibli-style elements */}
          <div className="absolute bottom-1/4 right-1/4 animate-float-slow" style={{animationDuration: "8s", animationDelay: "2s"}}>
            <Fish className="w-5 h-5 text-white/40" />
          </div>
        </div>
        
        {/* Enhanced Ghibli-style frame decoration */}
        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 border-2 border-white/30"></div>
      </div>
      
      <CardContent className="p-3 md:p-4">
        <div className="flex justify-between items-center">
          <span className="text-[10px] md:text-xs font-semibold px-2 md:px-3 py-0.5 md:py-1 bg-gradient-to-r from-[#fef7cd]/40 to-[#ffdee2]/30 text-primary rounded-full uppercase tracking-wider border border-primary/20 truncate max-w-[70%]">
            {project.category === 'ui' ? 'UI Design' : 
             project.category === 'social' ? 'Social Media' : 
             project.category === 'product' ? 'Product Design' :
             project.category === 'logo' ? 'Logo Design' : 
             project.category === 'wordpress' ? 'WordPress' :
             project.category === 'video' ? 'Video' : 'Design'}
          </span>
          {project.duration && (
            <span className="text-[10px] md:text-xs text-foreground/70 font-medium truncate">
              {project.duration}
            </span>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default Portfolio;
