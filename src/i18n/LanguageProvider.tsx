import { useEffect, useMemo, useState, type ReactNode } from 'react';
import { LanguageContext, STORAGE_KEY, dicionarios, idiomaInicial, type Idioma } from './context';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>(idiomaInicial);

  useEffect(() => {
    document.documentElement.lang = dicionarios[idioma].meta.htmlLang;
    try {
      localStorage.setItem(STORAGE_KEY, idioma);
    } catch {
      // Sem persistência quando o localStorage não está disponível.
    }
  }, [idioma]);

  const value = useMemo(() => ({ idioma, setIdioma, t: dicionarios[idioma] }), [idioma]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
