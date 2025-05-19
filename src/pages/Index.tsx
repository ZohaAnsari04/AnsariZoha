
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col relative">
      {/* 3D Background Elements */}
      <div className="fixed inset-0 -z-20">
        {/* Large blurred gradients for 3D depth effect */}
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-primary/5 via-transparent to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-tl from-primary/5 via-transparent to-transparent blur-3xl"></div>
        
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTExMTEiIGZpbGwtb3BhY2l0eT0iMC4wMiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utb3BhY2l0eT0iMC4wMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-40"></div>
        
        {/* Floating 3D elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/5 rounded-full animate-spin-very-slow opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border border-primary/5 rounded-full animate-spin-reverse-slow opacity-30"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-primary/5 rounded-full animate-pulse opacity-20"></div>
      </div>

      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
