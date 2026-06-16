// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-background/60 backdrop-blur-xl border-b border-cardBorder">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary p-1.5 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300 text-white font-black text-xl">
            <img src="/favicon.svg" alt="Logo" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <span className="text-xl font-bold text-white tracking-wider">
            Franklin<span className="text-primary">.</span>
          </span>
        </a>

        {/* Links de Navegação (Escondidos em telas muito pequenas) */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-muted">
          <li><a href="#sobre" className="hover:text-white transition-colors">Sobre</a></li>
          <li><a href="#projetos" className="hover:text-white transition-colors">Projetos</a></li>
          <li><a href="#habilidades" className="hover:text-white transition-colors">Habilidades</a></li>
          <li><a href="#experiencia" className="hover:text-white transition-colors">Experiência</a></li>
          <li><a href="#contato" className="hover:text-white transition-colors">Contato</a></li>
        </ul>

        {/* Botão Mobile (Opcional para o futuro, deixamos o espaço preparado) */}
        <div className="md:hidden">
          <button className="text-muted hover:text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;