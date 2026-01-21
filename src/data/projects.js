export const projects = [
  {
    id: 1,
    title: "FutureFly - Gestão de Aviação",
    description: "Sistema de gestão para aviação com backend robusto para controle de voos, manutenção e tripulação.",
    longDescription: "O FutureFly nasceu da necessidade de modernizar o controle de pequenas e médias empresas de aviação. O sistema centraliza operações que antes eram feitas em planilhas, oferecendo um dashboard em tempo real para gestores e uma interface ágil para operadores.",
    image: "https://images.unsplash.com/photo-1436491865332-7a6153217f27?auto=format&fit=crop&q=80&w=1200",
    screenshots: [
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Monitoramento de voos em tempo real",
      "Gestão de escalas de tripulação",
      "Módulo de manutenção preventiva",
      "Relatórios financeiros automatizados"
    ],
    challenge: "Garantir a performance do banco de dados com múltiplas operações simultâneas e implementar arquitetura limpa no backend .NET.",
    techs: ["C#", ".NET 8", "SQL Server", "React", "Docker"],
    repoLink: "https://github.com/franklinferreiraf/futurefly",
    demoLink: "#"
  },
  {
    id: 2,
    title: "SOS Saúde",
    description: "App mobile com instruções vitais de primeiros socorros offline-first.",
    longDescription: "Em emergências, cada segundo conta. O SOS Saúde foi projetado para ser extremamente rápido e funcionar sem internet, guiando o usuário com passos claros durante situações críticas.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&q=80&w=1200",
    screenshots: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1576091160550-217358c7e618?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Funcionamento 100% Offline",
      "Busca instantânea por sintomas",
      "Botão de discagem rápida (SAMU/Bombeiros)",
      "Interface de alto contraste"
    ],
    challenge: "Gerenciar o estado da aplicação e a persistência de dados localmente no Flutter para garantir disponibilidade total offline.",
    techs: ["Flutter", "Dart", "Mobile First", "SQLite"],
    repoLink: "#",
    demoLink: "#"
  },
  {
    id: 3,
    title: "FFSystem - Desktop App",
    description: "Sistema desktop para gestão comercial com instalador executável e controle de estoque.",
    longDescription: "O FFSystem leva a robustez do Java para o desktop. Focado em pequenos comércios que precisam de uma solução local rápida e segura.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=1200",
    screenshots: [
       "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800"
    ],
    features: [
      "Instalador nativo (.exe)",
      "Controle de Estoque e Vendas (PDV)",
      "Geração de relatórios em PDF",
      "Banco de dados local"
    ],
    challenge: "Modernizar a interface do Java Swing e criar um instalador fácil para o usuário final.",
    techs: ["Java", "Swing", "MySQL", "Maven"],
    repoLink: "https://github.com/franklinferreiraf/ffsystem",
    demoLink: "#"
  }
];