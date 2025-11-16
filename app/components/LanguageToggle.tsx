interface Props {
  lang: "ua" | "en";
  setLang: (lang: "ua" | "en") => void;
}

export default function LanguageToggle({ lang, setLang }: Props) {
  const toggleLang = () => {
    const next = lang === "ua" ? "en" : "ua";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <button
      onClick={toggleLang}
      className="flex items-center justify-center w-7 h-7 text-xs rounded-full bg-blue-600 text-white font-semibold active:scale-95 transition"
    >
      {lang === "ua" ? "UA" : "EN"}
    </button>
  );
}

