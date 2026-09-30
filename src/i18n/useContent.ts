import { useMemo } from 'react';
import {
  sobreCards,
  projetosLista,
  habilidades,
  experiencias,
  metricas,
  competencias,
  heroBadges,
  formacoes,
  idiomas,
  certificacoes,
} from '../data';
import type {
  SobreCard,
  Projeto,
  HabilidadeCategoria,
  Experiencia,
  Metrica,
  Formacao,
  Idioma,
  Certificacao,
} from '../types';
import { dicionarios, type Dicionario } from './context';
import { useLanguage } from './useLanguage';

type ProjetoTexto = Dicionario['projects']['items']['ffsystem'];

/** Busca a tradução de um item pelo id, caindo para o português se faltar no idioma atual. */
function porId<T>(atual: object, fallback: object, id: string | number): T {
  const chave = String(id);
  const valor = (atual as Record<string, T>)[chave] ?? (fallback as Record<string, T>)[chave];
  if (valor === undefined) throw new Error(`Tradução não encontrada para o id "${chave}".`);
  return valor;
}

/** Junta os dados estruturais (src/data) com os textos do idioma selecionado. */
export function useContent() {
  const { t } = useLanguage();

  return useMemo(() => {
    const pt = dicionarios.pt;
    const termos = t.terms as Record<string, string>;
    /** Traduz nomes de tecnologia/termos que mudam entre idiomas (ex.: "APIs REST" → "REST APIs"). */
    const termo = (valor: string) => termos[valor] ?? valor;

    const projetos: Projeto[] = projetosLista.map((base) => {
      const texto = porId<ProjetoTexto>(t.projects.items, pt.projects.items, base.id);
      return {
        ...base,
        ...texto,
        tags: base.tags.map(termo),
        metricas: base.metricas.map((m) => ({
          ...m,
          label: porId<string>(texto.metricas, {}, m.id),
        })),
      };
    });

    const cards: SobreCard[] = sobreCards.map((base) => ({
      ...base,
      ...porId<{ titulo: string; descricao: string }>(t.about.cards, pt.about.cards, base.id),
    }));

    const categorias: HabilidadeCategoria[] = habilidades.map((base) => ({
      ...base,
      categoria: porId<string>(t.skills.categories, pt.skills.categories, base.id),
      tecnologias: base.tecnologias.map(termo),
    }));

    const timeline: Experiencia[] = experiencias.map((base) => ({
      ...base,
      ...porId<{ cargo: string; empresa: string; atividades: string[] }>(
        t.experience.items,
        pt.experience.items,
        base.id,
      ),
    }));

    const stats: Metrica[] = metricas.map((base) => ({
      ...base,
      label: porId<string>(t.metrics.items, pt.metrics.items, base.id),
    }));

    const cursos: Formacao[] = formacoes.map((base) => ({
      ...base,
      ...porId<{ curso: string; periodo: string }>(t.education.items, pt.education.items, base.id),
    }));

    const linguas: Idioma[] = idiomas.map((base) => ({
      ...base,
      ...porId<{ idioma: string; nivel: string }>(t.education.languageItems, pt.education.languageItems, base.id),
    }));

    const certs: Certificacao[] = certificacoes.map((base) => ({
      ...base,
      ...porId<{ nome: string; emissor: string }>(t.certifications.items, pt.certifications.items, base.id),
    }));

    return {
      heroBadges: heroBadges.map(termo),
      sobreCards: cards,
      projetos,
      habilidades: categorias,
      experiencias: timeline,
      metricas: stats,
      competencias: competencias.map(termo),
      formacoes: cursos,
      idiomas: linguas,
      certificacoes: certs,
    };
  }, [t]);
}
