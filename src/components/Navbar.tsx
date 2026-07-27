import { useState } from 'react';

const links = [
  { href: '#sobre', label: 'Sobre' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#habilidades', label: 'Habilidades' },
  { href: '#experiencia', label: 'Experiência' },
  { href: '#contato', label: 'Contato' },
];

const Navbar = () => {
  const [aberto, setAberto] = useState(false);

  const fecharMenu = () => setAberto(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-background/60 backdrop-blur-xl border-b border-cardBorder">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" onClick={fecharMenu} className="flex items-center gap-3 group" aria-label="Franklin Ferreira — início">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary p-2.5 shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform duration-300">
            <img src="/logo-f.svg" alt="" aria-hidden="true" className="w-full h-full object-contain brightness-0 invert" />
          </div>
          <span className="text-xl font-bold text-white tracking-wider">
            Franklin<span className="text-primary">.</span>
          </span>
        </a>

        {/* Links de Navegação (Desktop) */}
        <ul className="hidden md:flex space-x-8 text-sm font-medium text-muted">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Botão Mobile */}
        <div className="md:hidden">
          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            className="text-muted hover:text-white transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              {aberto ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menu Mobile (dropdown) */}
      <div
        id="menu-mobile"
        className={`md:hidden overflow-hidden border-t border-cardBorder transition-[max-height] duration-300 ease-in-out ${
          aberto ? 'max-h-96' : 'max-h-0 border-t-0'
        }`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1 text-sm font-medium text-muted bg-background/80 backdrop-blur-xl">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={fecharMenu} className="block py-3 hover:text-white transition-colors">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
