
import { useEffect, useRef } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment processing and inventory management.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "Task Management App",
    description: "A productivity application for teams with real-time updates and collaboration features.",
    tags: ["React", "Firebase", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Portfolio Website",
    description: "A responsive portfolio website with dark mode and smooth animations.",
    tags: ["React", "TypeScript", "Tailwind CSS"],
    link: "#",
  },
  {
    title: "Weather Application",
    description: "A weather forecast application with location detection and daily/weekly predictions.",
    tags: ["JavaScript", "API Integration", "CSS"],
    link: "#",
  },
];

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove("opacity-0");
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="section-container opacity-0">
      <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">My Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="card-hover backdrop-blur-sm bg-background/30 border border-primary/10 hover:border-primary/30 transition-all duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader>
              <CardTitle className="text-gradient">{project.title}</CardTitle>
              <CardDescription>{project.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full backdrop-blur-sm border border-primary/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button 
                asChild 
                variant="outline" 
                size="sm" 
                className="rounded-full border border-primary/20 hover:bg-primary/10 transition-all duration-300"
              >
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
