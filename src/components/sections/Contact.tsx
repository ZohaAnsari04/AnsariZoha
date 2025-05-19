
import { useEffect, useRef } from "react";
import { Mail, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export function Contact() {
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
    <section id="contact" ref={sectionRef} className="section-container opacity-0">
      <div className="max-w-4xl mx-auto relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse-slow"></div>
        </div>

        <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70 mb-12">Let's Connect</h2>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side: Contact info */}
          <div className="backdrop-blur-sm bg-background/30 p-8 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Get in Touch</h3>
            <p className="text-lg mb-8 text-foreground/80">
              Looking for a passionate frontend developer to bring your vision to life? Let's create something amazing together!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:zoha101204@gmail.com" 
                className="flex items-center gap-4 p-4 rounded-xl bg-background/50 hover:bg-primary/5 transition-all duration-300 group">
                <div className="bg-primary/10 text-primary rounded-full p-3 backdrop-blur-sm border border-primary/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="group-hover:text-primary transition-colors">Contact Me</span>
              </a>
              
              <div className="flex items-center gap-4 p-4 rounded-xl bg-background/50">
                <div className="bg-primary/10 text-primary rounded-full p-3 backdrop-blur-sm border border-primary/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <span>Mumbai, India</span>
              </div>
            </div>
          </div>

          {/* Right side: Social links */}
          <div className="backdrop-blur-sm bg-background/30 p-8 rounded-2xl border border-primary/10 hover:border-primary/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">Follow Me</h3>
            <p className="text-lg mb-8 text-foreground/80">
              Connect with me on social media to see my latest projects and updates.
            </p>

            <div className="grid grid-cols-3 gap-4">
              <a href="https://github.com/ZohaAnsari04" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-primary/5 transition-all duration-300 group">
                <div className="bg-primary/10 text-primary rounded-full p-4 backdrop-blur-sm border border-primary/20 group-hover:scale-110 transition-transform">
                  <Github className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">GitHub</span>
              </a>

              <a href="https://www.linkedin.com/in/ansari-zoha-najmul-kalam-819610238/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-primary/5 transition-all duration-300 group">
                <div className="bg-primary/10 text-primary rounded-full p-4 backdrop-blur-sm border border-primary/20 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">LinkedIn</span>
              </a>

              <a href="mailto:zoha101204@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-3 p-4 rounded-xl bg-background/50 hover:bg-primary/5 transition-all duration-300 group">
                <div className="bg-primary/10 text-primary rounded-full p-4 backdrop-blur-sm border border-primary/20 group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="text-sm font-medium group-hover:text-primary transition-colors">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
