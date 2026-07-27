import type { ReactNode } from 'react';

/** Cartão de destaque da seção "Sobre Mim". */
export interface SobreCard {
  id: number;
  titulo: string;
  descricao: string;
  icone: ReactNode;
}

/** Projeto exibido no portfólio (listagem + página de detalhe). */
export interface Projeto {
  id: string;
  titulo: string;
  descricao: string;
  descricaoLonga: string;
  problema: string;
  solucao: string;
  tags: string[];
  funcionalidades: string[];
  imagem: string;
  /** URL do site publicado (Demo). Vazio quando não houver. */
  linkProjeto: string;
  /** URL do repositório no GitHub. Vazio quando não houver. */
  linkCodigo: string;
  desafios: string;
  aprendizados: string;
  resultados: string;
  arquitetura: string;
}

/** Categoria de habilidades técnicas (agrupada em card). */
export interface HabilidadeCategoria {
  id: number;
  categoria: string;
  icone: ReactNode;
  tecnologias: string[];
}

/** Item da timeline de experiência profissional. */
export interface Experiencia {
  id: number;
  periodo: string;
  cargo: string;
  empresa?: string;
  atividades: string[];
}

/** Estatística exibida na seção de métricas. */
export interface Metrica {
  id: number;
  valor: string;
  label: string;
}

/** Certificação ou curso. */
export interface Certificacao {
  id: number;
  nome: string;
  emissor: string;
  /** Marca um card de "vaga" para certificações futuras. */
  placeholder?: boolean;
}

/** Formação acadêmica. */
export interface Formacao {
  id: number;
  curso: string;
  instituicao: string;
  periodo: string;
}

/** Idioma e nível de proficiência. */
export interface Idioma {
  id: number;
  idioma: string;
  nivel: string;
}
