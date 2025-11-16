import { useState, useEffect } from "react";
import { translations } from "../mocks/translations";

export function useTranslations(lang: "ua" | "en") {
  const [t, setT] = useState(translations[lang]);

  useEffect(() => {
    setT(translations[lang]);
  }, [lang]);

  return t;
}
