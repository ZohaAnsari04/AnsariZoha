
import { useEffect, useRef } from "react";

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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
      <h2 className="section-title">About Me</h2>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <p className="text-lg">
            I am a passionate developer with over 5 years of experience in creating
            web applications. I specialize in React, Node.js, and TypeScript, and I'm
            always eager to learn new technologies.
          </p>
          <p className="text-lg">
            When I'm not coding, you can find me hiking in the mountains or reading
            a good book. I believe in continuous learning and pushing the boundaries
            of what's possible with code.
          </p>
          <p className="text-lg">
            I'm currently looking for new opportunities where I can contribute my
            skills and grow as a developer.
          </p>
        </div>
        <div className="bg-muted rounded-lg p-6 h-64 flex items-center justify-center">
          <p className="text-lg font-medium">Profile Image Placeholder</p>
        </div>
      </div>
    </section>
  );
}
