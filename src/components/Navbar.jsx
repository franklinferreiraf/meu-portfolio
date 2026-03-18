// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-md border-b border-cardBorder">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-xl font-bold text-white tracking-wider flex items-center gap-1">
          <span className="text-primary">&lt;</span>
          Franklin
          <span className="text-primary">/&gt;</span>
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