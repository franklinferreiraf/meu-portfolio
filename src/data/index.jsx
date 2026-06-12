import React from 'react';

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
    descricao: "Capacidade técnica para atuar em todo o ciclo de vida do produto, da concepção ao deploy.",
    icone: (
      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    )
  }
];

export const projetosLista = [
  {
    id: "ffsystem",
    titulo: "FFSystem",
    descricao: "Sistema completo de gestão comercial com controle de estoque, vendas, cadastro de clientes e relatórios financeiros.",
    descricaoLonga: "O FFSystem é um ecossistema PDV/ERP completo focado em automação comercial e gestão eficiente para pequenos e médios comércios locais. Desenvolvido para resolver a complexidade da gestão diária, o sistema oferece uma interface intuitiva com um backend robusto.",
    problema: "Comércios locais sofriam com a falta de controle centralizado de estoque e vendas, utilizando métodos manuais propensos a erros e perda de dados financeiros.",
    solucao: "Desenvolvi uma plataforma integrada que automatiza o fluxo de caixa, controla o inventário em tempo real e gera relatórios analíticos para tomada de decisão.",
    tags: ["React", "Java", "Spring Boot", "MySQL", "Tailwind CSS"],
    imagem: "/projetos/ffsystem.png",
    linkProjeto: "https://site-ffsystem.vercel.app/",
    linkCodigo: "",
    desafios: "Implementação de sincronização de estoque em tempo real e geração de relatórios complexos com alta performance.",
    aprendizados: "Aprofundamento em arquitetura Spring Boot e padrões de design para sistemas de gestão.",
    resultados: "Redução estimada de 30% no tempo gasto em tarefas administrativas pelos usuários.",
    arquitetura: "Arquitetura desacoplada com Frontend em React e Backend em micro-serviços Java Spring Boot, banco de dados relacional MySQL."
  },
  {
    id: "manutencao-industrial",
    titulo: "EJC Group Manutenção Industrial",
    descricao: "Solução digital institucional para serviços de engenharia industrial de alta complexidade.",
    descricaoLonga: "Plataforma institucional de alta performance para a EJC Group, focada em apresentar serviços de engenharia industrial complexos de forma clara e profissional.",
    problema: "A empresa precisava de uma presença digital que transmitisse a seriedade e a complexidade técnica de seus serviços para atrair grandes clientes industriais.",
    solucao: "Criação de um site moderno com UI/UX focado em conversão, destacando cases de sucesso e expertise técnica.",
    tags: ["React", "Javascript", "Tailwind CSS", "UI/UX"],
    imagem: "/projetos/manutencaoindustrial.png",
    linkProjeto: "https://site-manutencao-industria.vercel.app/", 
    linkCodigo: "",
    desafios: "Trabalhar com imagens de alta resolução mantendo um carregamento extremamente rápido.",
    aprendizados: "Otimização de assets e técnicas avançadas de estilização com Tailwind CSS.",
    resultados: "Aumento significativo no tráfego orgânico e captação de leads qualificados.",
    arquitetura: "SPA (Single Page Application) construída com React, priorizando performance e responsividade."
  },
  {
    id: "europa-pra-vc",
    titulo: "Europa Pra VC",
    descricao: "Arquitetura robusta para e-commerce internacional com integração de APIs e logística.",
    descricaoLonga: "Plataforma de e-commerce internacional especializada em facilitar compras na Europa para clientes no Brasil, com complexa integração logística e tributária.",
    problema: "A barreira logística e a complexidade de taxas internacionais dificultavam a compra de produtos europeus por brasileiros.",
    solucao: "Uma plataforma completa que integra APIs de cotação de moedas, cálculo de frete internacional e checkout seguro.",
    tags: ["React", "Javascript", ".NET", "C#", "API", "Docker"],
    imagem: "/projetos/europapravc.png",
    linkProjeto: "https://europapravc.com/",
    linkCodigo: "",
    desafios: "Gerenciamento de estado complexo para carrinhos multi-moeda e integração com múltiplos provedores logísticos.",
    aprendizados: "Experiência prática com integração de APIs de terceiros e conteinerização com Docker.",
    resultados: "Expansão da base de clientes e estabilidade operacional em escala internacional.",
    arquitetura: "Backend em .NET Core com arquitetura limpa, Frontend em React e infraestrutura Dockerizada."
  },
  {
    id: "grupo-mais-saude",
    titulo: "Grupo Mais Saúde",
    descricao: "Plataforma digital para clínica médica com foco em conversão e experiência do paciente.",
    descricaoLonga: "Portal de serviços médicos focado em agilidade no atendimento e facilidade de acesso às informações de saúde.",
    problema: "Pacientes tinham dificuldade em encontrar informações sobre especialidades e realizar pré-agendamentos de forma rápida.",
    solucao: "Interface intuitiva com foco total em acessibilidade e jornada do paciente facilitada.",
    tags: ["Javascript", "React", "CSS3"],
    imagem: "/projetos/gpmaissaude.png",
    linkProjeto: "https://gpmaisaude.com.br/",
    linkCodigo: "",
    desafios: "Garantir acessibilidade total seguindo normas de UX para saúde.",
    aprendizados: "Foco intensivo em SEO técnico e performance web (Core Web Vitals).",
    resultados: "Melhoria notável no tempo de permanência no site e taxa de cliques em agendamentos.",
    arquitetura: "Frontend modularizado em React com foco em reuso de componentes e performance."
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
    tecnologias: ["Java", "Spring Boot", ".NET Core", "C#", "APIs REST", "Integrações"]
  },
  {
    id: 3,
    categoria: "CRM & Salesforce",
    icone: (
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    tecnologias: ["Apex", "Salesforce Flows", "SOQL/SOSL", "LWC", "Process Builder Migration"]
  },
  {
    id: 4,
    categoria: "Infra & Ferramentas",
    icone: (
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tecnologias: ["Docker", "Git", "GitHub", "AWS", "Azure", "Vercel"]
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
    ano: "2026",
    cargo: "Desenvolvedor Full Stack",
    empresa: "Projeto Europa Pra VC",
    descricao: "Liderança técnica no desenvolvimento da plataforma EuropaPraVC. Responsável pela arquitetura de ponta a ponta, integração de APIs internacionais e otimização de performance para escalabilidade global."
  },
  {
    id: 2,
    ano: "2026",
    cargo: "Desenvolvedor Frontend",
    empresa: "Grupo Mais Saúde",
    descricao: "Desenvolvimento de interface de alta conversão para clínica médica, priorizando acessibilidade, performance e SEO."
  },
  {
    id: 3,
    ano: "2025 - 2026",
    cargo: "Desenvolvedor Full Stack",
    empresa: "FFSystem",
    descricao: "Concepção e desenvolvimento de um ecossistema PDV/ERP completo. Implementação de lógica de negócios complexa no backend e interface intuitiva para usuários finais."
  },
  {
    id: 4,
    ano: "2024 - 2025",
    cargo: "Desenvolvedor de Software Salesforce",
    descricao: "Desenvolvedor focado em automação de processos na plataforma Salesforce. Desenvolvimento de soluções robustas com Apex e Flows, focando em redução de churn e eficiência operacional."
  }
];

export const metricas = [
  { id: 1, valor: "10+", label: "Projetos Publicados" },
  { id: 2, valor: "15+", label: "Tecnologias Utilizadas" },
  { id: 3, valor: "20+", label: "Salesforce Flows" },
  { id: 4, valor: "100+", label: "Commits GitHub" }
];

export const salesforceSkills = [
  { id: 1, nome: "Apex (Classes, Triggers)", nivel: "Avançado" },
  { id: 2, nome: "Salesforce Flows", nivel: "Avançado" },
  { id: 3, nome: "LWC (Lightning Web Components)", nivel: "Avançado" },
  { id: 4, nome: "SOQL & SOSL", nivel: "Avançado" },
  { id: 5, nome: "Process Builder Migration", nivel: "Avançado" },
  { id: 6, nome: "Integrações (REST/SOAP)", nivel: "Avançado" }
];

export const certificacoes = [
  { id: 1, nome: "Salesforce Associate", emissor: "Salesforce" },
  { id: 2, nome: "Salesforce Platform Developer I (Estudo)", emissor: "Salesforce" },
  { id: 3, nome: "Java Programming", emissor: "Oracle / Alura" },
  { id: 4, nome: "Desenvolvimento Web Full Stack", emissor: "DNC" },
  { id: 5, nome: "React Advanced", emissor: "Rocketseat" }
];
