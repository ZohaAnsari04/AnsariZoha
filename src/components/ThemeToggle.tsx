
import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary animate-fade-in" />
      ) : (
        <Moon className="h-5 w-5 text-primary animate-fade-in" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
