
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
      </div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTExMTEiIGZpbGwtb3BhY2l0eT0iMC4wNCIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utb3BhY2l0eT0iMC4wMiI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')]"></div>

      <div className="text-center max-w-3xl mx-auto z-10 backdrop-blur-sm p-8 rounded-2xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">
          Hello, I'm <span className="relative inline-block">
            <span className="relative z-10">Jane Doe</span>
            <span className="absolute -bottom-1 left-0 w-full h-3 bg-primary/10 rounded-full -z-10"></span>
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          A passionate full-stack developer building the future of web.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button 
            asChild 
            className="rounded-full bg-gradient-to-r from-primary/80 to-primary hover:from-primary hover:to-primary/80 transition-all duration-300 px-8 py-6 text-lg"
          >
            <a href="#projects">View My Work</a>
          </Button>
          <Button 
            asChild 
            variant="outline" 
            className="rounded-full border-primary/20 bg-background/50 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/40 transition-all duration-300 px-8 py-6 text-lg"
          >
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
