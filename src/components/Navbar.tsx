import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { User, FolderKanban, Code, Mail, Menu } from "lucide-react";

interface NavLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

const navLinks: NavLink[] = [
  { name: "About", href: "#about", icon: <User className="w-4 h-4" /> },
  { name: "Projects", href: "#projects", icon: <FolderKanban className="w-4 h-4" /> },
  { name: "Skills", href: "#skills", icon: <Code className="w-4 h-4" /> },
  { name: "Contact", href: "#contact", icon: <Mail className="w-4 h-4" /> },
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("");
  const [scrolled, setScrolled] = useState<boolean>(false);

  // Handle scroll event to update active section and navbar style
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200;
      
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/50 backdrop-blur-xl border-b border-primary/10" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="#" className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary via-primary/90 to-primary/70">Ansari Zoha</a>
        
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`nav-link flex items-center gap-2 ${activeSection === link.href.slice(1) ? "nav-link-active" : ""}`}
            >
              {link.icon}
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <ThemeToggle />
          
          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger className="md:hidden p-2 rounded-full bg-primary/10 text-primary border border-primary/20">
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent className="backdrop-blur-xl bg-background/80 border-primary/10">
              <nav className="flex flex-col space-y-6 mt-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-lg font-medium hover:text-primary transition-colors flex items-center gap-3"
                  >
                    {link.icon}
                    {link.name}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
