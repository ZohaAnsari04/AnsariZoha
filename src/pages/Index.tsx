
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
        {/* Enhanced blurred gradients with purplish-pinkish colors */}
        <div className="absolute top-0 left-0 w-full h-2/3 bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-2/3 bg-gradient-to-tl from-pink-500/20 via-purple-400/10 to-transparent blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-full h-1/2 bg-gradient-to-r from-fuchsia-500/10 via-purple-500/10 to-transparent blur-3xl"></div>
        
        {/* Animated grid pattern with adjusted opacity */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxMTExMTEiIGZpbGwtb3BhY2l0eT0iMC4wMiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utb3BhY2l0eT0iMC4wMSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
        
        {/* Enhanced floating 3D elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-purple-500/10 rounded-full animate-spin-very-slow opacity-40 backdrop-blur-sm"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 border-2 border-pink-500/10 rounded-full animate-spin-reverse-slow opacity-40 backdrop-blur-sm"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border-2 border-fuchsia-500/10 rounded-full animate-pulse opacity-30 backdrop-blur-sm"></div>
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
