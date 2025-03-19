
import { useState } from 'react';
import { ExternalLink, Paintbrush, Monitor, Image as ImageIcon, Globe } from 'lucide-react';
import { Link } from "react-router-dom";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { projectsData, Project } from '../data/projectsData';

const Portfolio = () => {
  return (
    <section id="portfolio" className="section-padding bg-gradient-to-b from-secondary/30 to-background py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat text-3xl md:text-4xl font-bold mb-6 text-gradient">My Portfolio</h2>
          
          <Tabs defaultValue="ui" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full mb-8 bg-background/50 backdrop-blur-sm p-1 rounded-xl">
              <TabsTrigger value="ui" className="rounded-lg">UI Design</TabsTrigger>
              <TabsTrigger value="social" className="rounded-lg">Social Media</TabsTrigger>
              <TabsTrigger value="logo" className="rounded-lg">Logo</TabsTrigger>
              <TabsTrigger value="wordpress" className="rounded-lg">WordPress</TabsTrigger>
              <TabsTrigger value="product" className="rounded-lg">Product</TabsTrigger>
            </TabsList>
            
            <TabsContent value="ui" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.filter(p => p.category === 'ui').map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="social" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.filter(p => p.category === 'social').map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="logo" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.filter(p => p.category === 'logo').map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="wordpress" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.filter(p => p.category === 'wordpress').map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project}
                  />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="product" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.filter(p => p.category === 'product').map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project}
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
      </div>
    </section>
  );
};

// ProjectCard component extracted for cleaner code
const ProjectCard = ({ project }: { project: Project }) => {
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
            <Link
              to={`/project/${project.id}`}
              className="bg-white text-black p-3 rounded-full transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-white"
              aria-label="View project details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-eye"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
            </Link>
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
