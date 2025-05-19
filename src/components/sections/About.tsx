import { useEffect, useRef } from "react";
import { User, Code, Globe, Palette } from "lucide-react";

export function About() {
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
    <section id="about" ref={sectionRef} className="section-container opacity-0">
      <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6 backdrop-blur-sm bg-background/30 p-6 rounded-xl border border-primary/10 hover:border-primary/20 transition-all transform hover:-translate-y-1 hover:shadow-lg duration-300">
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <User className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <p className="text-lg">
              I am a passionate Frontend Developer with expertise in creating beautiful and responsive web applications. I specialize in React, TypeScript, and modern CSS frameworks, constantly pushing the boundaries of user interface design.
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Code className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <p className="text-lg">
              My toolkit includes React, Next.js, Tailwind CSS, and TypeScript. I'm passionate about creating performant, accessible, and visually appealing interfaces that provide exceptional user experiences.
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Globe className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <p className="text-lg">
              I stay current with the latest frontend trends and best practices, from responsive design to animation libraries and state management solutions. Always excited to learn and implement new technologies.
            </p>
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-primary/5 to-primary/10 backdrop-blur-sm rounded-xl p-8 flex flex-col items-center justify-center border border-primary/10 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-2 h-auto min-h-[300px] relative overflow-hidden group">
          {/* 3D-like floating elements in the background */}
          <div className="absolute top-10 left-10 w-20 h-20 border border-primary/20 rounded-lg transform rotate-45 group-hover:rotate-90 transition-all duration-1000"></div>
          <div className="absolute bottom-20 right-10 w-16 h-16 border border-primary/15 rounded-full transform group-hover:scale-150 transition-all duration-700"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-primary/10 rounded-full animate-ping opacity-20"></div>
          
          <div className="z-10 text-center">
            <div className="mb-4 inline-flex p-4 rounded-full bg-primary/10 border border-primary/20">
              <Palette className="h-12 w-12 text-primary" />
            </div>
            <p className="text-lg font-medium">Crafting beautiful and intuitive user interfaces with passion and precision</p>
          </div>
        </div>
      </div>
    </section>
  );
}
