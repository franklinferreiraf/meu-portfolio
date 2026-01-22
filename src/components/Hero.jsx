import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import heroBg from '../../public/hero-bg.jpg';

const Hero = () => {
  return (
    <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">Desenvolvedor Full Stack</h1>
          <p className="hero-subtitle">
            Criando experiências digitais robustas, escaláveis e esteticamente agradáveis.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">Ver Projetos</a>
            <a href="#contact" className="btn btn-outline">Entrar em Contato</a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/franklinferreiraf" target="_blank" rel="noopener noreferrer">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/franklin-ferreira-09a21a231/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} />
            </a>
            <a href="mailto:franklinferreira280@gmail.com">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;