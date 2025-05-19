
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
          Hello, I'm <span className="text-primary">Jane Doe</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          A passionate full-stack developer who loves creating elegant solutions.
        </p>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <Button asChild className="rounded-full">
            <a href="#projects">View My Work</a>
          </Button>
          <Button asChild variant="outline" className="rounded-full">
            <a href="#contact">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
