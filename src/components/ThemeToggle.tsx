
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
      className="rounded-full bg-primary/10 backdrop-blur-sm border border-primary/20 hover:bg-primary/20 hover:border-primary/30 transition-all duration-300 hover:scale-105 shadow-lg"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-primary animate-spin-slow" />
      ) : (
        <Moon className="h-5 w-5 text-primary animate-spin-slow" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
