// src/data/index.jsx

export const sobreCards = [
  {
    id: 1,
    titulo: "Código Limpo",
    descricao: "Arquitetura organizada e escalável.",
    icone: (
      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    id: 2,
    titulo: "Performance",
    descricao: "Aplicações rápidas e otimizadas.",
    icone: (
      <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    id: 3,
    titulo: "Resultados",
    descricao: "Soluções focadas em resolver problemas e converter clientes.",
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
    descricao: "Sistema completo com integração fluida entre front-end e back-end.",
    tags: ["React", "Node.js", "Integração"],
    imagem: "/projetos/ffsystem.png",
  },
  {
    id: 2,
    titulo: "EJC Group Manutenção Industrial",
    descricao: "Site para manutenção industrial de Alta Performace.",
    tags: ["React", "Javascript", "UI/UX"],
    imagem: "/projetos/manutencaoindustrial.png",
  },
  {
    id: 3,
    titulo: "Europa Pra VC",
    descricao: "Plataforma de produtos vindo da Europa para o Brasil.",
    tags: ["Backend", "Frontend", "API", "Docker"],
    imagem: "/projetos/europapravc.png",
  },
  {
    id: 4,
    titulo: "Futurefly - Mannet Aviation",
    descricao: "Solução digital voltada para o setor de aviação e integração de sistemas.",
    tags: ["Web", "Sistema", "Aviação"],
    imagem: "/projetos/futurefly.png",
  },
  {
    id: 5,
    titulo: "Grupo Mais Saúde",
    descricao: "Site para uma Clínica.",  
    tags: ["Javascript", "React"],
    imagem: "/projetos/gpmaissaude.png",
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
    tecnologias: ["Node.js", "APIs REST", "Integrações"]
  },
  {
    id: 3,
    categoria: "Ferramentas",
    icone: (
      <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tecnologias: ["Git", "GitHub", "VS Code", "Figma", "Vite"]
  },
  {
    id: 4,
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
    ano: "2025 - Presente",
    cargo: "Desenvolvedor Full Stack",
    empresa: "Projetos Freelance & Autoria Própria",
    descricao: "Desenvolvimento de sistemas completos, incluindo o projeto FFSystem (front-end e back-end) e a criação de websites com foco em UI/UX para clientes do setor de Manutenção Industrial."
  },
  {
    id: 2,
    ano: "2025",
    cargo: "Desenvolvedor Mobile & Back-end",
    empresa: "Projetos de Software",
    descricao: "Criação do aplicativo mobile 'SOS Saúde' utilizando Flutter para instruções de primeiros socorros. Desenvolvimento do back-end para a plataforma de entregas 'Tia Lu Delivery'."
  },
  {
    id: 3,
    ano: "2025",
    cargo: "Desenvolvedor de Software",
    empresa: "Mannet-Aviation (Projeto Futurefly)",
    descricao: "Atuação no desenvolvimento e estruturação do projeto 'futurefly', focado em soluções digitais e integração de sistemas."
  }
];