import type { ReactNode } from 'react';

/*
 * Tipos "Base" descrevem o que fica em src/data (dados estruturais);
 * os tipos completos já vêm com os textos no idioma atual (ver src/i18n/useContent.ts).
 */

export interface SobreCardBase {
  id: number;
  icone: ReactNode;
}

/** Cartão de destaque da seção "Sobre Mim". */
export interface SobreCard extends SobreCardBase {
  titulo: string;
  descricao: string;
}

/** Métrica de resultado de um projeto (valor fica nos dados; rótulo, nas traduções). */
export interface ProjetoMetricaBase {
  id: string;
  valor: string;
}

export interface ProjetoMetrica extends ProjetoMetricaBase {
  label: string;
}

export interface ProjetoBase {
  id: string;
  titulo: string;
  tags: string[];
  imagem: string;
  /** URL do site publicado (Demo). Vazio quando não houver. */
  linkProjeto: string;
  /** URL do repositório no GitHub. Vazio quando não houver. */
  linkCodigo: string;
  metricas: ProjetoMetricaBase[];
}

/** Projeto exibido no portfólio (listagem + página de detalhe). */
export interface Projeto extends Omit<ProjetoBase, 'metricas'> {
  descricao: string;
  descricaoLonga: string;
  problema: string;
  solucao: string;
  funcionalidades: string[];
  desafios: string;
  aprendizados: string;
  resultados: string;
  arquitetura: string;
  metricas: ProjetoMetrica[];
}

export interface HabilidadeCategoriaBase {
  id: number;
  icone: ReactNode;
  tecnologias: string[];
}

/** Categoria de habilidades técnicas (agrupada em card). */
export interface HabilidadeCategoria extends HabilidadeCategoriaBase {
  categoria: string;
}

export interface ExperienciaBase {
  id: number;
  periodo: string;
}

/** Item da timeline de experiência profissional. */
export interface Experiencia extends ExperienciaBase {
  cargo: string;
  empresa?: string;
  atividades: string[];
}

export interface MetricaBase {
  id: number;
  valor: string;
}

/** Estatística exibida na seção de métricas. */
export interface Metrica extends MetricaBase {
  label: string;
}

export interface CertificacaoBase {
  id: number;
  /** Marca um card de "vaga" para certificações futuras. */
  placeholder?: boolean;
}

/** Certificação ou curso. */
export interface Certificacao extends CertificacaoBase {
  nome: string;
  emissor: string;
}

export interface FormacaoBase {
  id: number;
  instituicao: string;
}

/** Formação acadêmica. */
export interface Formacao extends FormacaoBase {
  curso: string;
  periodo: string;
}

export interface IdiomaBase {
  id: number;
}

/** Idioma e nível de proficiência. */
export interface Idioma extends IdiomaBase {
  idioma: string;
  nivel: string;
}
