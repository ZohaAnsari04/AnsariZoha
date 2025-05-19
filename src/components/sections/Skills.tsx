
import { useEffect, useRef } from "react";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: "frontend" | "backend" | "other";
}

const skills: Skill[] = [
  { name: "HTML & CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "React", level: 80, category: "frontend" },
  { name: "TypeScript", level: 75, category: "frontend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "MongoDB", level: 65, category: "backend" },
  { name: "SQL", level: 60, category: "backend" },
  { name: "Git", level: 80, category: "other" },
  { name: "UI/UX Design", level: 70, category: "other" },
];

export function Skills() {
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

  // Group skills by category
  const frontendSkills = skills.filter(skill => skill.category === "frontend");
  const backendSkills = skills.filter(skill => skill.category === "backend");
  const otherSkills = skills.filter(skill => skill.category === "other");

  return (
    <section id="skills" ref={sectionRef} className="section-container opacity-0">
      <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">My Skills</h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="space-y-6 backdrop-blur-sm bg-background/30 p-6 rounded-xl border border-primary/10 hover:border-primary/20 transition-all">
          <h3 className="text-xl font-semibold text-gradient">Frontend</h3>
          {frontendSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 bg-primary/10" 
                style={{ 
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)',
                }} 
              />
            </div>
          ))}
        </div>
        
        <div className="space-y-6 backdrop-blur-sm bg-background/30 p-6 rounded-xl border border-primary/10 hover:border-primary/20 transition-all">
          <h3 className="text-xl font-semibold text-gradient">Backend</h3>
          {backendSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 bg-primary/10" 
                style={{ 
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)',
                }} 
              />
            </div>
          ))}
        </div>
        
        <div className="space-y-6 backdrop-blur-sm bg-background/30 p-6 rounded-xl border border-primary/10 hover:border-primary/20 transition-all">
          <h3 className="text-xl font-semibold text-gradient">Other Skills</h3>
          {otherSkills.map((skill, index) => (
            <div key={index} className="space-y-2">
              <div className="flex justify-between">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 bg-primary/10" 
                style={{ 
                  background: 'linear-gradient(90deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.05) 100%)',
                }} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
