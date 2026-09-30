import { useEffect } from 'react';

function setMeta(atributo: 'name' | 'property', chave: string, conteudo: string) {
  const el = document.head.querySelector<HTMLMetaElement>(`meta[${atributo}="${chave}"]`);
  if (el) el.content = conteudo;
}

/**
 * Atualiza <title>, meta description e as tags Open Graph/Twitter da página atual.
 * Os valores iniciais (para crawlers que não executam JS) ficam no index.html.
 */
export function useDocumentMeta(titulo: string, descricao: string, locale: string) {
  useEffect(() => {
    document.title = titulo;
    setMeta('name', 'description', descricao);
    setMeta('property', 'og:title', titulo);
    setMeta('property', 'og:description', descricao);
    setMeta('property', 'og:locale', locale);
    setMeta('property', 'og:url', window.location.href);
    setMeta('name', 'twitter:title', titulo);
    setMeta('name', 'twitter:description', descricao);
  }, [titulo, descricao, locale]);
}
