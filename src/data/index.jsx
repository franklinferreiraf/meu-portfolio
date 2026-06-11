export const sobreCards = [
  {
    id: 1,
    titulo: "Arquitetura & Código Limpo",
    descricao: "Desenvolvimento de sistemas escaláveis e de fácil manutenção, seguindo os melhores padrões de mercado.",
    icone: (
      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 2,
    titulo: "Performance & Otimização",
    descricao: "Foco em aplicações de alta performance, com carregamento rápido e otimização de recursos.",
    icone: (
      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 3,
    titulo: "Soluções de Ponta a Ponta",
    descricao: "Capacidade técnica para atuar em todo o ciclo de vida do product, da concepção ao deploy.",
    icone: (
      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

export const projetosLista = [
  {
    id: 1,
    titulo: "FFSystem",
    descricao: "Ecosistema PDV/ERP completo focado em automação comercial e gestão eficiente.",
    tags: ["React", "Javascript", "Java", "MySQL"],
    imagem: "/projetos/ffsystem.png",
    linkProjeto: "https://site-ffsystem.vercel.app/",
    linkCodigo: "",
  },
  {
    id: 2,
    titulo: "EJC Group Manutenção Industrial",
    descricao: "Solução digital institucional para serviços de engenharia industrial de alta complexidade.",
    tags: ["React", "Javascript", "UI/UX"],
    imagem: "/projetos/manutencaoindustrial.png",
    linkProjeto: "https://site-manutencao-industria.vercel.app/", 
    linkCodigo: "",
  },
  {
    id: 3,
    titulo: "Europa Pra VC",
    descricao: "Arquitetura robusta para e-commerce internacional com integração de APIs e logística.",
    tags: ["React", "Javascript", ".NET", "C#", "API", "Docker"],
    imagem: "/projetos/europapravc.png",
    linkProjeto: "https://europapravc.com/",
    linkCodigo: "",
  },
  {
    id: 4,
    titulo: "Grupo Mais Saúde",
    descricao: "Plataforma digital para clínica médica com foco em conversão e experiência do paciente.",  
    tags: ["Javascript", "React"],
    imagem: "/projetos/gpmaissaude.png",
    linkProjeto: "https://gpmaisaude.com.br/",
    linkCodigo: "",
  }
];

export const habilidades = [
  {
    id: 1,
    categoria: "Front-end",
    icone: (
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    tecnologias: ["React", "JavaScript", "Tailwind CSS", "HTML5", "CSS3", "Flutter"]
  },
  {
    id: 2,
    categoria: "Back-end",
    icone: (
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    tecnologias: ["Java", ".NET", "C#", "Apex", "APIs REST", "Integrações"]
  },
  {
    id: 3,
    categoria: "Cloud & DevOps",
    icone: (
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    tecnologias: ["AWS", "Azure", "Docker", "Git", "GitHub", "Vercel"]
  },
  {
    id: 4,
    categoria: "Especialidades",
    icone: (
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tecnologias: ["Salesforce (Apex/Flows)", "Arquitetura de Software", "Clean Code", "Design Patterns"]
  },
  {
    id: 5,
    categoria: "Banco de Dados",
    icone: (
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
      </svg>
    ),
    tecnologias: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"]
  }
];

export const experiencias = [
  {
    id: 1,
    ano: "2026 - Presente",
    cargo: "Engenheiro Full Stack",
    empresa: "Projeto Europa Pra VC",
    descricao: "Liderança técnica no desenvolvimento da plataforma EuropaPraVC. Responsável pela arquitetura de ponta a ponta, integração de APIs internacionais e otimização de performance para escalabilidade global."
  },
  {
    id: 2,
    ano: "2026",
    cargo: "Engenheiro Frontend",
    empresa: "Grupo Mais Saúde",
    descricao: "Desenvolvimento de interface de alta conversão para clínica médica, priorizando acessibilidade, performance e SEO."
  },
  {
    id: 3,
    ano: "2025 - 2026",
    cargo: "Engenheiro Full Stack",
    empresa: "FFSystem",
    descricao: "Concepção e desenvolvimento de um ecossistema PDV/ERP completo. Implementação de lógica de negócios complexa no backend e interface intuitiva para usuários finais."
  },
  {
    id: 4,
    ano: "2024 - 2025",
    cargo: "Engenheiro de Software Salesforce",
    descricao: "Especialista em automação de processos na plataforma Salesforce. Desenvolvimento de soluções robustas com Apex e Flows, focando em redução de churn e eficiência operacional."
  }
];