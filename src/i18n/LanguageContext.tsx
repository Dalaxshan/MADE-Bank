import { createContext, useContext, useState, ReactNode } from "react";
import en from "./en";
import tm from "./tm";
import si from "./si";

const translations = { en, tm, si } as const;
export type Lang = keyof typeof translations;

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: typeof en;
}

const LanguageContext = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const handleSetLang = (l: Lang) => {
    setLang(l);
    document.documentElement.lang = l;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLang = () => useContext(LanguageContext);
