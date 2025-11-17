interface Props {
  lang: "en" | "ua";
  setLang: (lang: "en" | "ua") => void;
  closeMenu?: () => void; 
}

export default function LanguageToggle({ lang, setLang, closeMenu}: Props) {
  const toggleLang = () => {
    const next = lang === "en" ? "ua" : "en";
    setLang(next);
    localStorage.setItem("lang", next);
    if (closeMenu) closeMenu(); 
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center justify-center w-7 h-7 text-xs rounded-full bg-blue-600 text-white font-semibold active:scale-95 transition"
    >
      {lang === "en" ? "EN" : "UA"}
    </button>
  );
}

