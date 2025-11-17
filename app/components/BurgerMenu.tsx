import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router";
import ThemeToggle from "./ThemeToggle";
import LanguageToggle from "./LanguageToggle";
import { useLang } from "../context/LanguageContext";
import { useTranslations } from "../hooks/useTranslations";

export default function BurgerMenu() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");
  const { lang, setLang } = useLang();
  const t = useTranslations(lang);

  const links = [
    { to: "/#about", label: t.about, id: "about" },
    { to: "/#skills", label: t.skills, id: "skills" },
    { to: "/#services", label: t.services, id: "services" },
    { to: "/#projects", label: t.projects, id: "projects" },
    { to: "/#contacts", label: t.contacts, id: "contacts" },
  ];


  return (
    <div className="md:hidden dark:text-white">
      <button className="flex flex-col justify-center h-6 gap-1.5" onClick={() => setOpen(!open)} aria-label="Menu">
        <span className={`block h-0.5 w-6 bg-current transition ${open ? "rotate-45 translate-y-2" : ""}`} />
        <span className={`block h-0.5 w-6 bg-current transition ${open ? "opacity-0" : ""}`} />
        <span className={`block h-0.5 w-6 bg-current transition ${open ? "-rotate-45 -translate-y-2" : ""}`} />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-8 left-0 w-full bg-white dark:bg-gray-800 shadow-md rounded-b-xl z-50 mt-10">
            <ul className="flex flex-col items-center py-10 space-y-3 gap-2">
              {links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} onClick={() => { setOpen(false); setActive(l.id); }} className={`${active === l.id ? "text-blue-600 font-semibold" : "text-gray-700 dark:text-gray-200"} hover:text-blue-600`}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex flex-row justify-center gap-3 py-6 border-t border-gray-200 dark:border-gray-700">
              <ThemeToggle closeMenu={() => setOpen(false)}/>
              <LanguageToggle lang={lang} setLang={setLang} closeMenu={() => setOpen(false)}/>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
