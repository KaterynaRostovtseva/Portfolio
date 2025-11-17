import { Link } from "react-router";
import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import BurgerMenu from "./BurgerMenu";
import LanguageToggle from "./LanguageToggle";
import { useLang } from "../context/LanguageContext";
import { useTranslations } from "../hooks/useTranslations";


export default function Header() {
  const { lang, setLang } = useLang();
  const t = useTranslations(lang);

  const links = [
    { to: "/#about", label: t.about, id: "about" },
    { to: "/#skills", label: t.skills, id: "skills" },
    { to: "/#services", label: t.services, id: "services" },
    { to: "/#projects", label: t.projects, id: "projects" },
    { to: "/#contacts", label: t.contacts, id: "contacts" },
  ];

  const [activeId, setActiveId] = useState("about");

  useEffect(() => {
    if (typeof window === "undefined") return;

    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <header className="w-full bg-white dark:bg-gray-800 shadow-md fixed top-0 z-50">
      <nav className="max-w-7xl mx-auto flex justify-between items-center px-6 py-3 ">
        <Link to="/">
          <img src="/logo.svg" alt="KR" className="w-15 sm:w-20 " />
        </Link>

        <ul className="hidden md:flex gap-6 flex-1 justify-center ml-40">
          {links.map((l) => (
            <li key={l.to}>
              <Link to={l.to} className={`${activeId === l.id ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-gray-300 hover:text-blue-500"} transition`}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4 ml-8">
          <a href="https://github.com/KaterynaRostovtseva" target="_blank">
            <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="https://www.linkedin.com/in/kateryna-rostovtseva-123a58171/" target="_blank">
            <img src="/icons/linkedin.svg" alt="linkedin" className="w-6 h-6 hover:opacity-80" />
          </a>
          <a href="https://t.me/katjarost" target="_blank">
            <img src="/icons/telegram.svg" alt="telegram" className="w-6 h-6 hover:opacity-80" />
          </a>

          <div className="hidden md:flex items-center gap-4 ml-8">
            {/* <div className="flex items-center gap-3 ml-8"> */}
            <ThemeToggle />
            <LanguageToggle lang={lang} setLang={setLang} />
          </div>

          <BurgerMenu />
        </div>
      </nav>
    </header>
  );
}



