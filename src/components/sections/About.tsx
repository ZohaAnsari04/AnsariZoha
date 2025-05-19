
import { useEffect, useRef } from "react";
import { User, Code, Globe, Coffee } from "lucide-react";

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
              I am a passionate developer with over 5 years of experience in creating
              web applications. I specialize in React, Node.js, and TypeScript, and I'm
              always eager to learn new technologies.
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Code className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <p className="text-lg">
              When I'm not coding, you can find me hiking in the mountains or reading
              a good book. I believe in continuous learning and pushing the boundaries
              of what's possible with code.
            </p>
          </div>
          
          <div className="flex items-start gap-3">
            <div className="bg-primary/10 p-3 rounded-full">
              <Globe className="h-6 w-6 text-primary animate-pulse" />
            </div>
            <p className="text-lg">
              I'm currently looking for new opportunities where I can contribute my
              skills and grow as a developer in the exciting world of Web 3.0.
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
              <Coffee className="h-12 w-12 text-primary animate-float" />
            </div>
            <p className="text-lg font-medium">Passionate about crafting exceptional digital experiences</p>
          </div>
        </div>
      </div>
    </section>
  );
}
