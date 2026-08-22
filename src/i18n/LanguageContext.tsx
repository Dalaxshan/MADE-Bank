import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import en from "./en";
import tm from "./tm";
import si from "./si";

const translations = { si,en, tm } as const;
export type Lang = keyof typeof translations;

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof si;
}

const LanguageContext = createContext<LangCtx>({
  lang: "si",
  setLang: () => {},
  t: si,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("si");

  const fontMap: Record<Lang, string> = {
    // en: "'Fira Sans', sans-serif",
    en: "'Inter', system-ui, sans-serif",
    si: "'Noto Sans Sinhala', sans-serif",
    tm: "'Noto Sans Tamil', sans-serif",
  };

  useEffect(() => {
    document.body.style.fontFamily = fontMap["si"];
  }, []);

  const handleSetLang = (l: Lang) => {
    setLang(l);
    document.documentElement.lang = l;
    document.body.style.fontFamily = fontMap[l];
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
