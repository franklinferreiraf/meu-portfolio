import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="greeting">Olá, eu sou Franklin Ferreira</p>
        <h1 className="text-gradient">Desenvolvedor Full Stack</h1>
        <p>Criando experiências digitais robustas, escaláveis e esteticamente agradáveis.</p>
        
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Ver Projetos</a>
          <a href="#contact" className="btn btn-outline">Entrar em Contato</a>
        </div>

        <div style={{marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1.5rem'}}>
          <a 
            href="https://github.com/franklinferreiraf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <Github size={24} />
          </a>

          <a 
            href="https://www.linkedin.com/in/franklin-ferreira-09a21a231/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <Linkedin size={24} />
          </a>

          <a 
            href="mailto:franklinferreira280@gmail.com" 
            className="social-link"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;