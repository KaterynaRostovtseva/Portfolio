import { Link } from "react-router";
import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { useTranslations } from "../hooks/useTranslations";
import { useLang } from "../context/LanguageContext";

export default function Footer() {
  const { lang } = useLang();
  const t = useTranslations(lang);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setIsVisible(window.scrollY > 20);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative w-full bg-white dark:bg-gray-800 py-6 mt-20 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1),0_-2px_4px_-2px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/">
          <img src="/logo.svg" alt="KR" className="w-15 sm:w-20 " />
        </Link>

        <div className="flex items-center gap-4">
          <a href="https://github.com/KaterynaRostovtseva" target="_blank" rel="noopener noreferrer">
            <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 hover:opacity-80 transition" />
          </a>
          <a href="https://www.linkedin.com/in/kateryna-rostovtseva-123a58171/" target="_blank" rel="noopener noreferrer">
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 hover:opacity-80 transition" />
          </a>
          <a href="https://t.me/katjarost" target="_blank" rel="noopener noreferrer">
            <img src="/icons/telegram.svg" alt="Telegram" className="w-6 h-6 hover:opacity-80 transition" />
          </a>
        </div>
      </div>

      <button onClick={scrollToTop} aria-label="Scroll to top"
        className={`fixed bottom-12 right-6 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition 
                    z-50 transform duration-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"}`}>
        <ArrowUp className="w-5 h-5" />
      </button>

      <div className="mt-4 text-center text-gray-700 dark:text-gray-300 text-sm sm:text-base">
        © {new Date().getFullYear()} {t.footer_name} | {t.footer_rights}
      </div>
    </footer>
  );
}



