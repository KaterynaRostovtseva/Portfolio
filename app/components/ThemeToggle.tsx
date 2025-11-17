import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

interface Props {
  closeMenu?: () => void;
}


export default function ThemeToggle({ closeMenu }: Props) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const saved = (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(saved);
    document.documentElement.classList.toggle("dark", saved === "dark");
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
    if (closeMenu) closeMenu(); 
  };

  return (
    <button onClick={toggleTheme} className="p-1  rounded-full bg-blue-600 hover:opacity-80 transition cursor-pointer">
      {theme === "light" ? (
        <Moon className="w-5 h-5 text-white" />
      ) : (
        <Sun className="w-5 h-5 text-white" />
      )}
    </button>
  );
}

