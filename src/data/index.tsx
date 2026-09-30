/**
 * Dados estruturais do portfólio (ids, ícones, imagens, links e tecnologias).
 * Os textos exibidos ficam em src/i18n/pt.json e src/i18n/en.json, indexados pelos mesmos ids.
 */
import type {
  SobreCardBase,
  ProjetoBase,
  HabilidadeCategoriaBase,
  ExperienciaBase,
  MetricaBase,
  CertificacaoBase,
  FormacaoBase,
  IdiomaBase,
} from '../types';

/** Usuário do GitHub — usado nos widgets públicos de estatísticas. */
export const githubUsername = 'franklinferreiraf';


/** Badges de stack exibidos logo abaixo da descrição do Hero. */
export const heroBadges: string[] = [
  'APIs REST',
  'React',
  'Java',
  'Spring Boot',
  '.NET',
  'Salesforce',
  'Docker',
  'Git',
  'Azure',
  'AWS',
];

export const sobreCards: SobreCardBase[] = [
  {
    id: 1,
    icone: (
      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    icone: (
      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    icone: (
      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

/**
 * Projetos. `metricas` alimenta o bloco "Resultados em Números" do estudo de caso:
 * os valores entre colchetes são placeholders — troque pelos números reais.
 * O rótulo de cada métrica fica nos arquivos de tradução (projects.items.<id>.metricas.<id>).
 */
export const projetosLista: ProjetoBase[] = [
  {
    id: 'ffsystem',
    titulo: 'FFSystem',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    imagem: '/projetos/ffsystem.webp',
    linkProjeto: 'https://site-ffsystem.vercel.app/',
    linkCodigo: '',
    metricas: [
      { id: 'tempo', valor: '[X]%' },
      { id: 'usuarios', valor: '[Y]' },
      { id: 'api', valor: '[Z] ms' },
    ],
  },
  {
    id: 'europa-pra-vc',
    titulo: 'Europa Pra VC',
    tags: ['React', '.NET', 'PostgreSQL', 'APIs REST'],
    imagem: '/projetos/europapravc.webp',
    linkProjeto: 'https://europapravc.com/',
    linkCodigo: '',
    metricas: [
      { id: 'usuarios', valor: '[X]' },
      { id: 'integracoes', valor: '[Y]' },
      { id: 'pedidos', valor: '[Z]' },
    ],
  },
  {
    id: 'grupo-mais-saude',
    titulo: 'Grupo Mais Saúde',
    tags: ['React', 'JavaScript', 'CSS'],
    imagem: '/projetos/gpmaissaude.webp',
    linkProjeto: 'https://gpmaisaude.com.br/',
    linkCodigo: '',
    metricas: [
      { id: 'lighthouse', valor: '[X]/100' },
      { id: 'permanencia', valor: '[Y]%' },
      { id: 'visitas', valor: '[Z]' },
    ],
  },
  {
    id: 'marianne-soares-nutri',
    titulo: 'Marianne Soares Nutri',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
    imagem: '/projetos/mariannesoaresnutri.png',
    linkProjeto: 'https://www.mariannesoaresnutri.com.br/',
    linkCodigo: '',
    metricas: [
      { id: 'lighthouse', valor: '[X]/100' },
      { id: 'agendamentos', valor: '[Y]' },
      { id: 'visitas', valor: '[Z]' },
    ],
  },
];

const iconFrontend = (
  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const iconBackend = (
  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

const iconDatabase = (
  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
  </svg>
);

const iconCloud = (
  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
  </svg>
);

const iconSalesforce = (
  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
);

const iconIntegracoes = (
  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
  </svg>
);

const iconArquitetura = (
  <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

/** O nome de cada categoria fica nas traduções (skills.categories.<id>). */
export const habilidades: HabilidadeCategoriaBase[] = [
  {
    id: 1,
    icone: iconFrontend,
    tecnologias: ['React', 'Angular', 'Ionic', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flutter'],
  },
  {
    id: 2,
    icone: iconBackend,
    tecnologias: [
      'Java',
      'Spring Boot',
      'Java EE',
      'C#',
      '.NET',
      'NestJS',
      'Node.js',
      'PHP',
      'Elixir',
      'Dynamics CRM',
      'APIs REST',
    ],
  },
  {
    id: 3,
    icone: iconDatabase,
    tecnologias: ['PostgreSQL', 'MySQL', 'SQL Server', 'Oracle', 'MongoDB', 'Redis'],
  },
  {
    id: 4,
    icone: iconCloud,
    tecnologias: [
      'AWS',
      'AWS CloudFront / EKS',
      'Azure',
      'Azure Functions',
      'Kubernetes',
      'OpenShift',
      'Vercel',
      'Docker',
    ],
  },
  {
    id: 5,
    icone: iconIntegracoes,
    tecnologias: ['Kafka', 'RabbitMQ', 'MuleSoft', 'Webhooks (Stripe, Pagar.me)'],
  },
  {
    id: 6,
    icone: iconArquitetura,
    tecnologias: [
      'SOLID',
      'Clean Architecture',
      'Design Patterns',
      'JWT',
      'Maven',
      'Git Flow',
      'Testes Unitários e de Integração',
    ],
  },
  {
    id: 7,
    icone: iconSalesforce,
    tecnologias: ['Apex', 'Lightning Web Components', 'Salesforce Flow', 'SOQL', 'SOSL', 'Integrações REST', 'Process Builder Migration'],
  },
];

/** Cargo, empresa e atividades ficam nas traduções (experience.items.<id>). */
export const experiencias: ExperienciaBase[] = [
  { id: 1, periodo: '2024 – 2026' },
  { id: 2, periodo: '2022 – 2024' },
  { id: 3, periodo: '2021 – 2022' },
];

export const metricas: MetricaBase[] = [
  { id: 1, valor: '5+' },
  { id: 2, valor: '10+' },
  { id: 3, valor: '6+' },
  { id: 4, valor: '5+' },
];

/** Competências apresentadas como badges. */
export const competencias: string[] = [
  'Java',
  'Spring Boot',
  'React',
  'Angular',
  'JavaScript',
  'TypeScript',
  'C#',
  '.NET',
  'APIs REST',
  'PostgreSQL',
  'MySQL',
  'SQL Server',
  'MongoDB',
  'Docker',
  'Git',
  'GitHub',
  'Salesforce',
  'Apex',
  'LWC',
  'Azure',
  'AWS',
  'Oracle',
  'Redis',
  'Kafka',
  'RabbitMQ',
  'Kubernetes',
  'Dynamics CRM',
  'JWT',
  'Maven',
  'Elixir',
  'Ionic',
  'Scrum',
  'Kanban',
];

export const formacoes: FormacaoBase[] = [
  { id: 1, instituicao: 'UNEX – Centro Universitário de Excelência' },
];

export const idiomas: IdiomaBase[] = [{ id: 1 }, { id: 2 }];

export const certificacoes: CertificacaoBase[] = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6, placeholder: true },
];
