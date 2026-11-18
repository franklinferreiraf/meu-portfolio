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
  FormacaoBase,
  IdiomaBase,
} from '../types';

/** Usuário do GitHub — usado nos widgets públicos de estatísticas. */
export const githubUsername = 'franklinferreiraf';


/** Badges de stack exibidos logo abaixo da descrição do Hero. */
export const heroBadges: string[] = [
  'APIs REST',
  'Java',
  'Spring Boot',
  'C#/.NET',
  'TypeScript',
  'PostgreSQL',
  'React',
  'Docker',
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
    // Projeto da Nexor (atuação como desenvolvedor): sem print (dados reais de clientes) e repositório privado — só o estudo de caso.
    id: 'nexor-os',
    titulo: 'Nexor OS',
    tags: ['TypeScript', 'PostgreSQL', 'RLS', 'Multi-tenant', 'Webhooks', 'Azure Pipelines'],
    imagem: '',
    linkProjeto: '',
    linkCodigo: '',
    metricas: [],
  },
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
    // Card sem datas; o título traduzido fica em projects.items.salesforce-freelancer.titulo.
    id: 'salesforce-freelancer',
    titulo: 'Projetos Salesforce e Freelancer',
    tags: ['Apex', 'LWC', 'Flow', 'SOQL'],
    imagem: '',
    linkProjeto: '',
    linkCodigo: '',
    metricas: [],
  },
  {
    id: 'europa-pra-vc',
    titulo: 'Europa Pra Você',
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
    id: 'manutencao-industrial',
    titulo: 'EJC Group',
    tags: ['React', 'JavaScript', 'Tailwind'],
    imagem: '/projetos/manutencaoindustrial.webp',
    linkProjeto: 'https://site-manutencao-industria.vercel.app/',
    linkCodigo: '',
    metricas: [],
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

const iconOutros = (
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

/**
 * Habilidades agrupadas (seção única). A ordem do array é a ordem de exibição;
 * o nome de cada grupo fica nas traduções (skills.categories.<id>) e os termos
 * que mudam de idioma, em terms.
 */
export const habilidades: HabilidadeCategoriaBase[] = [
  {
    id: 1,
    icone: iconBackend,
    tecnologias: ['Java', 'Spring Boot', 'Java EE', 'C#', '.NET', 'TypeScript', 'Node.js', 'NestJS', 'PHP', 'Elixir', 'APIs REST'],
  },
  {
    id: 2,
    icone: iconDatabase,
    tecnologias: ['PostgreSQL', 'PostgreSQL com RLS', 'Oracle', 'SQL Server', 'MySQL', 'MongoDB', 'Redis'],
  },
  {
    id: 3,
    icone: iconIntegracoes,
    tecnologias: ['Kafka', 'RabbitMQ', 'Webhooks (Stripe, Pagar.me)', 'MuleSoft', 'Dynamics CRM', 'Integrações REST'],
  },
  {
    id: 4,
    icone: iconCloud,
    tecnologias: [
      'Azure',
      'Azure Functions',
      'Azure DevOps (Pipelines e Boards)',
      'AWS (CloudFront / EKS)',
      'Kubernetes',
      'OpenShift',
      'Docker',
      'GitLab CI',
      'Vercel',
      'Git',
    ],
  },
  {
    id: 5,
    icone: iconArquitetura,
    tecnologias: [
      'Clean Architecture',
      'SOLID',
      'Design Patterns',
      'Microsserviços',
      'Multi-tenancy',
      'Idempotência',
      'Auditoria',
      'Criptografia em repouso',
      'RBAC',
      'JWT',
      'Testes Unitários e de Integração',
      'Maven',
    ],
  },
  {
    id: 6,
    icone: iconFrontend,
    tecnologias: [
      'React',
      'Next.js',
      'Angular',
      'TypeScript',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Sass',
      'styled-components',
      'Ionic',
      'Flutter',
    ],
  },
  {
    id: 7,
    icone: iconOutros,
    tecnologias: ['Salesforce (Apex, LWC, Flow, SOQL)', 'WildFly', 'BPMN', 'Agentes de IA', 'Scrum', 'Kanban'],
  },
];

/** Do mais recente para o mais antigo. Período, cargo, empresa e destaques ficam nas traduções (experience.items.<id>). */
export const experiencias: ExperienciaBase[] = [
  { id: 1, stack: ['TypeScript', 'PostgreSQL', 'RLS', 'RBAC', 'Clean Architecture', 'Webhooks', 'Azure Pipelines'] },
  { id: 2, stack: ['C# / .NET', 'Java', 'React', 'Next.js', 'Angular', 'Kafka', 'RabbitMQ', 'Kubernetes', 'GitLab CI'] },
  { id: 3, stack: ['Java', 'Spring Boot', 'C# / .NET', 'Oracle', 'SQL Server', 'Redis', 'Kafka', 'RabbitMQ'] },
];

export const metricas: MetricaBase[] = [
  { id: 1, valor: '5+' },
  { id: 2, valor: '3' },
  { id: 3, valor: '3' },
  { id: 4, valor: '6' },
];

export const formacoes: FormacaoBase[] = [
  { id: 1, instituicao: 'UNEX – Centro Universitário de Excelência' },
];

export const idiomas: IdiomaBase[] = [{ id: 1 }, { id: 2 }];
