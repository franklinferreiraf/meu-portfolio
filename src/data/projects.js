export const projects = [
  {
    id: 1,
    title: "FutureFly - Gestão de Aviação",
    description: "Sistema de gestão para aviação com backend robusto para controle de voos, manutenção e tripulação.",
    longDescription: `
      O FutureFly é uma solução completa desenvolvida para modernizar a gestão de companhias aéreas e centros de aviação. 
      
      O sistema centraliza o controle de escalas de voo, gerenciamento de tripulação, registros de manutenção de aeronaves e controle de estoque de peças. Focado em segurança e eficiência, o backend garante integridade de dados críticos enquanto o frontend oferece uma experiência fluida para os operadores.
    `,
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1000&auto=format&fit=crop",
    techs: ["C#", ".NET 8", "SQL Server", "React", "Docker"],
    features: [
      "Controle de escalas de voo em tempo real",
      "Gestão de manutenção preventiva e corretiva",
      "Módulo de tripulação e horas de voo",
      "Relatórios gerenciais exportáveis",
      "Autenticação segura com JWT"
    ],
    repoLink: "#",
    demoLink: "#",
    status: "Concluído"
  },
  {
    id: 2,
    title: "EJC Group - Manutenção Industrial",
    description: "Sistema completo de PCM (Planejamento e Controle de Manutenção) para gestão de ativos e ordens de serviço.",
    longDescription: `
      Este projeto foi desenvolvido para otimizar o setor de manutenção industrial, eliminando o uso de planilhas e centralizando o controle de máquinas e equipamentos.
      
      O sistema permite a abertura e acompanhamento de Ordens de Serviço (OS), gestão de planos de manutenção preventiva e controle de estoque de peças de reposição, gerando indicadores (KPIs) de disponibilidade e confiabilidade dos ativos.
    `,
    image: "/ejc.jpg",
    techs: ["TypeScript", "React", "JavaScript", "Tailwind"],
    features: [
      "Gestão de Ordens de Serviço (Corretiva/Preventiva)",
      "Cadastro de Ativos e Árvore de Equipamentos",
      "Cronograma de Manutenções Preventivas",
      "Controle de Estoque de Peças",
      "Dashboard com KPIs (MTBF, MTTR)"
    ],
    repoLink: "https://github.com/franklinferreiraf/site-manutencao-industria",
    demoLink: "#",
    status: "Concluído"
  },
  {
    id: 3,
    title: "FFSystem - Sistemas de Vendas PDV",
    description: "Sistema de Vendas PDV para gestão comercial com instalador executável e controle de estoque.",
    longDescription: `
      O FFSystem é uma aplicação desktop robusta desenvolvida para pequenos e médios comércios. Ele oferece um PDV (Ponto de Venda) completo, controle rigoroso de estoque e gestão financeira.
      
      O diferencial deste projeto é a sua eficiência em hardware modesto e a facilidade de instalação, contando com um instalador executável (.exe) personalizado e banco de dados local otimizado.
    `,
    image: "/ffsystem.jpg",
    techs: ["Java", "React", "MySQL", "Maven", "Tailwind"],
    features: [
      "Ponto de Venda (PDV) rápido",
      "Controle de estoque com alertas de nível baixo",
      "Geração de notas fiscais e relatórios PDF",
      "Backup automático do banco de dados",
      "Instalador nativo Windows"
    ],
    repoLink: "https://github.com/franklinferreiraf/sistema-vendas",
    demoLink: "#",
    status: "Concluído"
  }
];