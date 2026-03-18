// src/sections/Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="pt-40 pb-20 md:pt-48 md:pb-32 flex flex-col items-center text-center min-h-screen justify-center relative">
      
      {/* Badge de Status */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-cardBorder text-xs text-gray-300 mb-8 shadow-sm">
        <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
        Disponível para novos projetos
      </div>

      {/* Títulos Principais */}
      <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
        Desenvolvedor <span className="text-gradient">Full Stack</span>
      </h1>
      <h2 className="text-2xl md:text-3xl text-gray-300 font-medium mb-6">
        Criador de Soluções Digitais
      </h2>

      {/* Parágrafo de Apresentação */}
      <p className="max-w-2xl text-muted text-base md:text-lg mb-10 leading-relaxed">
        Transformando ideias em produtos digitais de alto impacto. Código limpo,
        performance e design focado em construir a melhor experiência para os usuários.
      </p>

      {/* Botões de Ação */}
      <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
        <a href="#projetos" className="px-8 py-3 rounded-xl bg-card border border-cardBorder text-white font-medium hover:border-primary/50 hover:shadow-[0_0_15px_rgba(79,70,229,0.2)] transition-all flex items-center justify-center gap-2">
          Ver Projetos
        </a>
        <a href="#contato" className="px-8 py-3 rounded-xl bg-transparent text-muted font-medium hover:text-white transition-colors flex items-center justify-center">
          Entrar em Contato
        </a>
      </div>

      {/* Ícone de Mouse Animado (Mouse Inteiro Pulando) */}
      <div 
        className="absolute bottom-10 flex flex-col items-center justify-center opacity-70 hover:opacity-100 transition-opacity animate-bounce"
        style={{ animationDuration: '2s' }}
      >
        <a href="#sobre" className="flex flex-col items-center gap-2">
          {/* Corpo do Mouse */}
          <div className="w-7 h-11 border-2 border-muted rounded-full flex justify-center pt-2">
            {/* Rodinha do Mouse (Fixa no lugar) */}
            <div className="w-1.5 h-2.5 bg-muted rounded-full"></div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;