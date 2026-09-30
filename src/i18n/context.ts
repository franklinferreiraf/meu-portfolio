import { createContext } from 'react';
import pt from './pt.json';
import en from './en.json';

/** Estrutura do dicionário — o pt.json é a referência; o en.json precisa ter as mesmas chaves. */
export type Dicionario = typeof pt;

export type Idioma = 'pt' | 'en';

export const dicionarios: Record<Idioma, Dicionario> = { pt, en };

export const IDIOMAS: Idioma[] = ['pt', 'en'];

export const STORAGE_KEY = 'portfolio-idioma';

export interface LanguageContextValue {
  idioma: Idioma;
  setIdioma: (idioma: Idioma) => void;
  t: Dicionario;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

/** Substitui placeholders no formato {chave} pelos valores informados. */
export function fmt(texto: string, vars: Record<string, string>): string {
  return texto.replace(/\{(\w+)\}/g, (match, chave: string) => vars[chave] ?? match);
}

/** Idioma salvo pelo usuário; sem preferência salva, segue o idioma do navegador (padrão: português). */
export function idiomaInicial(): Idioma {
  try {
    const salvo = localStorage.getItem(STORAGE_KEY);
    if (salvo === 'pt' || salvo === 'en') return salvo;
  } catch {
    // localStorage indisponível (modo privado, bloqueio de cookies etc.)
  }
  return navigator.language?.toLowerCase().startsWith('en') ? 'en' : 'pt';
}
