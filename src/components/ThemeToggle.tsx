import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  const [light, setLight] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "light";
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (light) {
      root.classList.add("light");
      localStorage.setItem("theme", "light");
    } else {
      root.classList.remove("light");
      localStorage.setItem("theme", "dark");
    }
  }, [light]);

  return (
    <button
      onClick={() => setLight(!light)}
      className="p-2 rounded-md text-muted-foreground hover:text-primary transition-colors"
      aria-label="Alternar tema"
    >
      {light ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
    </button>
  );
};

export default ThemeToggle;
