
export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-background/30 backdrop-blur-lg py-8 border-t border-primary/10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-10 right-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center gap-8 mb-6">
          {/* Social Media Icons */}
          <a href="https://www.linkedin.com/in/ansari-zoha-najmul-kalam-819610238/" className="text-foreground/60 hover:text-primary transition-colors p-2 bg-background/30 backdrop-blur-sm rounded-full border border-primary/10 hover:border-primary/30 hover:scale-110 transform transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
            <span className="sr-only">LinkedIn</span>
          </a>
          
          <a href="https://github.com/ZohaAnsari04" className="text-foreground/60 hover:text-primary transition-colors p-2 bg-background/30 backdrop-blur-sm rounded-full border border-primary/10 hover:border-primary/30 hover:scale-110 transform transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
            <span className="sr-only">GitHub</span>
          </a>
        </div>
        
        <p className="text-foreground/60">
          © {currentYear} <span className="text-primary">Portfolio</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
