"use client";
import { createContext, useContext, useEffect, useState } from "react";

type Lang = "ua" | "en";

interface LangContextProps {
  lang: Lang;
  setLang: (value: Lang) => void;
}

const LangContext = createContext<LangContextProps | null>(null);

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = (localStorage.getItem("lang") as Lang) || "en";
    setLangState(saved);
  }, []);

  const setLang = (value: Lang) => {
    setLangState(value);
    localStorage.setItem("lang", value);
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside LangProvider");
  return ctx;
};
