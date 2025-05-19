
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" ref={sectionRef} className="section-container opacity-0">
      <h2 className="section-title bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">Get In Touch</h2>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div className="backdrop-blur-sm bg-background/30 p-6 rounded-xl border border-primary/10 hover:border-primary/20 transition-all">
          <p className="text-lg mb-6">
            I'm currently open for freelance projects and job opportunities. Feel free to reach out if you have any questions or just want to say hello!
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-3 backdrop-blur-sm border border-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
              </div>
              <span>+1 (555) 123-4567</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-3 backdrop-blur-sm border border-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
              </div>
              <span>hello@example.com</span>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-3 backdrop-blur-sm border border-primary/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <span>San Francisco, CA</span>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4 backdrop-blur-sm bg-background/30 p-6 rounded-xl border border-primary/10 hover:border-primary/20 transition-all">
          <div>
            <Input 
              type="text" 
              placeholder="Your Name" 
              required 
              className="bg-background/50 border-primary/20 focus-visible:ring-primary/30"
            />
          </div>
          <div>
            <Input 
              type="email" 
              placeholder="Your Email" 
              required 
              className="bg-background/50 border-primary/20 focus-visible:ring-primary/30"
            />
          </div>
          <div>
            <Input 
              type="text" 
              placeholder="Subject" 
              required 
              className="bg-background/50 border-primary/20 focus-visible:ring-primary/30"
            />
          </div>
          <div>
            <Textarea 
              placeholder="Your Message" 
              rows={4} 
              required 
              className="bg-background/50 border-primary/20 focus-visible:ring-primary/30"
            />
          </div>
          <Button 
            type="submit" 
            disabled={isSubmitting} 
            className="w-full bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/80 transition-all duration-300 rounded-lg"
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </div>
    </section>
  );
}
