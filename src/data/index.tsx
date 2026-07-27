import type {
  SobreCard,
  Projeto,
  HabilidadeCategoria,
  Experiencia,
  Metrica,
  Certificacao,
  Formacao,
  Idioma,
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

export const sobreCards: SobreCard[] = [
  {
    id: 1,
    titulo: 'Arquitetura & Código Limpo',
    descricao:
      'Desenvolvimento de sistemas escaláveis e de fácil manutenção, com arquitetura em camadas e as melhores práticas de mercado.',
    icone: (
      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: 2,
    titulo: 'Performance & Otimização',
    descricao: 'Foco em aplicações performáticas, com carregamento rápido, otimização de recursos e Core Web Vitals saudáveis.',
    icone: (
      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    id: 3,
    titulo: 'Soluções de Ponta a Ponta',
    descricao: 'Atuação em todo o ciclo de vida do produto — do front-end às APIs REST, integrações e automação de processos.',
    icone: (
      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export const projetosLista: Projeto[] = [
  {
    id: 'ffsystem',
    titulo: 'FFSystem',
    descricao: 'Sistema ERP/PDV completo para gestão comercial.',
    descricaoLonga:
      'O FFSystem é um ecossistema ERP/PDV completo focado em automação comercial e gestão eficiente para pequenos e médios comércios. Reúne controle de estoque, vendas, clientes e financeiro em uma interface intuitiva com um backend robusto em Spring Boot e APIs REST autenticadas por JWT.',
    problema:
      'Comércios locais sofriam com a falta de controle centralizado de estoque e vendas, utilizando métodos manuais propensos a erros e perda de dados financeiros.',
    solucao:
      'Desenvolvi uma plataforma integrada que automatiza o fluxo de caixa, controla o inventário em tempo real e gera relatórios analíticos para tomada de decisão.',
    tags: ['Java', 'Spring Boot', 'React', 'PostgreSQL'],
    funcionalidades: [
      'Controle de estoque',
      'Gestão de clientes',
      'Financeiro',
      'Vendas',
      'Dashboard',
      'APIs REST',
      'Autenticação JWT',
    ],
    imagem: '/projetos/ffsystem.webp',
    linkProjeto: 'https://site-ffsystem.vercel.app/',
    linkCodigo: '',
    desafios: 'Sincronização de estoque em tempo real e geração de relatórios complexos com alta performance.',
    aprendizados: 'Aprofundamento em arquitetura Spring Boot, autenticação JWT e padrões de design para sistemas de gestão.',
    resultados: 'Redução estimada de 30% no tempo gasto em tarefas administrativas pelos usuários.',
    arquitetura:
      'Arquitetura em camadas com Front-end em React, Back-end em Java Spring Boot expondo APIs REST e banco de dados relacional PostgreSQL.',
  },
  {
    id: 'europa-pra-vc',
    titulo: 'Europa Pra VC',
    descricao: 'Plataforma internacional para serviços de imigração e comércio internacional.',
    descricaoLonga:
      'Plataforma internacional voltada a serviços relacionados à imigração e ao comércio internacional, com marketplace, painel administrativo e integração entre múltiplas APIs. Construída sobre uma arquitetura escalável com back-end em .NET e front-end em React.',
    problema:
      'A complexidade de serviços de imigração e comércio internacional exigia uma plataforma única, escalável e integrada a diferentes serviços externos.',
    solucao:
      'Uma plataforma completa com marketplace, sistema de pedidos, gestão de usuários e integração de APIs, sustentada por uma arquitetura escalável.',
    tags: ['React', '.NET', 'PostgreSQL', 'APIs REST'],
    funcionalidades: [
      'Integração de APIs',
      'Marketplace',
      'Painel administrativo',
      'Sistema de pedidos',
      'Gestão de usuários',
      'Arquitetura escalável',
    ],
    imagem: '/projetos/europapravc.webp',
    linkProjeto: 'https://europapravc.com/',
    linkCodigo: '',
    desafios: 'Gestão de estado complexo e integração confiável com múltiplos provedores de serviços externos.',
    aprendizados: 'Experiência prática com integração de APIs de terceiros e desenho de arquiteturas escaláveis em .NET.',
    resultados: 'Expansão da base de usuários e estabilidade operacional em escala internacional.',
    arquitetura:
      'Back-end em .NET com arquitetura limpa expondo APIs REST, front-end em React e banco de dados PostgreSQL.',
  },
  {
    id: 'grupo-mais-saude',
    titulo: 'Grupo Mais Saúde',
    descricao: 'Portal institucional para clínica médica.',
    descricaoLonga:
      'Portal institucional para clínica médica, com foco em interface responsiva, SEO, performance e componentes reutilizáveis para facilitar o acesso do paciente às informações de saúde.',
    problema:
      'Pacientes tinham dificuldade em encontrar informações sobre especialidades e serviços da clínica de forma rápida e acessível.',
    solucao: 'Interface institucional intuitiva, responsiva e otimizada para SEO e performance, com componentes reutilizáveis.',
    tags: ['React', 'JavaScript', 'CSS'],
    funcionalidades: [
      'Interface responsiva',
      'SEO',
      'Otimização de performance',
      'Componentes reutilizáveis',
    ],
    imagem: '/projetos/gpmaissaude.webp',
    linkProjeto: 'https://gpmaisaude.com.br/',
    linkCodigo: '',
    desafios: 'Garantir acessibilidade e ótima performance web (Core Web Vitals) em um portal rico em conteúdo.',
    aprendizados: 'Foco intensivo em SEO técnico, performance e reuso de componentes.',
    resultados: 'Melhoria no tempo de permanência e na experiência de navegação dos pacientes.',
    arquitetura: 'Front-end modularizado em React com foco em reuso de componentes, SEO e performance.',
  },
  {
    id: 'manutencao-industrial',
    titulo: 'EJC Group',
    descricao: 'Website institucional para empresa de engenharia industrial.',
    descricaoLonga:
      'Website institucional de alta performance para a EJC Group, empresa de engenharia industrial. Construído com React e Tailwind, com foco em SEO, responsividade, performance e landing pages de conversão.',
    problema:
      'A empresa precisava de uma presença digital que transmitisse a seriedade e a complexidade técnica de seus serviços para atrair clientes industriais.',
    solucao: 'Site moderno com landing pages focadas em conversão, destacando serviços e expertise técnica.',
    tags: ['React', 'JavaScript', 'Tailwind'],
    funcionalidades: ['SEO', 'Responsividade', 'Performance', 'Landing pages'],
    imagem: '/projetos/manutencaoindustrial.webp',
    linkProjeto: 'https://site-manutencao-industria.vercel.app/',
    linkCodigo: '',
    desafios: 'Trabalhar com imagens de alta resolução mantendo um carregamento extremamente rápido.',
    aprendizados: 'Otimização de assets e técnicas avançadas de estilização com Tailwind CSS.',
    resultados: 'Aumento no tráfego orgânico e na captação de leads qualificados.',
    arquitetura: 'SPA construída com React e Tailwind CSS, priorizando SEO, performance e responsividade.',
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

export const habilidades: HabilidadeCategoria[] = [
  {
    id: 1,
    categoria: 'Front-end',
    icone: iconFrontend,
    tecnologias: ['React', 'Angular', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'Flutter'],
  },
  {
    id: 2,
    categoria: 'Back-end',
    icone: iconBackend,
    tecnologias: ['Java', 'Spring Boot', 'C#', '.NET', 'NestJS', 'Node.js', 'APIs REST'],
  },
  {
    id: 3,
    categoria: 'Banco de Dados',
    icone: iconDatabase,
    tecnologias: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'],
  },
  {
    id: 4,
    categoria: 'Cloud',
    icone: iconCloud,
    tecnologias: ['AWS', 'Azure', 'Vercel', 'Docker'],
  },
  {
    id: 5,
    categoria: 'Salesforce',
    icone: iconSalesforce,
    tecnologias: ['Apex', 'Lightning Web Components', 'Salesforce Flow', 'SOQL', 'SOSL', 'Integrações REST', 'Process Builder Migration'],
  },
];

export const experiencias: Experiencia[] = [
  {
    id: 1,
    periodo: '2024 – 2026',
    cargo: 'Desenvolvedor de Soluções Internas',
    empresa: 'Nunes Invest',
    atividades: [
      'Desenvolvimento de ferramentas internas',
      'APIs REST',
      'Integração Front-end / Back-end',
      'SQL',
      'Java',
      'React',
      'C# / .NET',
      'Git',
      'Automação de processos',
    ],
  },
  {
    id: 2,
    periodo: '2023 – 2024',
    cargo: 'Desenvolvedor de Software',
    empresa: 'Freelancer',
    atividades: [
      'Desenvolvimento de aplicações web',
      'React',
      'Java',
      'Spring Boot',
      'APIs REST',
      'Bancos de dados relacionais',
      'Integrações',
      'Correção de bugs',
      'Manutenção evolutiva',
    ],
  },
  {
    id: 3,
    periodo: '2022 – 2023',
    cargo: 'Desenvolvedor Salesforce',
    atividades: [
      'Apex',
      'LWC',
      'Salesforce Flow',
      'SOQL',
      'Integrações REST',
      'Migração de Process Builder',
      'Evolução de funcionalidades',
    ],
  },
];

export const metricas: Metrica[] = [
  { id: 1, valor: '3+', label: 'Anos desenvolvendo software' },
  { id: 2, valor: '10+', label: 'Projetos desenvolvidos' },
  { id: 3, valor: '20+', label: 'Automações Salesforce' },
  { id: 4, valor: '5+', label: 'Projetos Full Stack' },
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
  'Scrum',
  'Kanban',
];

export const formacoes: Formacao[] = [
  {
    id: 1,
    curso: 'Bacharelado em Sistemas de Informação',
    instituicao: 'UNEX – Centro Universitário de Excelência',
    periodo: '2023 – 2026 (Previsão)',
  },
];

export const idiomas: Idioma[] = [
  { id: 1, idioma: 'Português', nivel: 'Nativo' },
  { id: 2, idioma: 'Inglês', nivel: 'Intermediário' },
];

export const certificacoes: Certificacao[] = [
  { id: 1, nome: 'Salesforce Associate', emissor: 'Salesforce' },
  { id: 2, nome: 'Salesforce Platform Developer I (Estudo)', emissor: 'Salesforce' },
  { id: 3, nome: 'Java Programming', emissor: 'Oracle / Alura' },
  { id: 4, nome: 'Desenvolvimento Web Full Stack', emissor: 'DNC' },
  { id: 5, nome: 'React Advanced', emissor: 'Rocketseat' },
  { id: 6, nome: 'Espaço para futuras certificações', emissor: 'Em constante evolução', placeholder: true },
];
