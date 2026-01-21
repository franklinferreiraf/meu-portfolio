import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <p>© {currentYear} Franklin Ferreira. Desenvolvido com React & TypeScript</p>
        <div style={{marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '1rem'}}>
          <a 
            href="https://github.com/franklinferreiraf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://www.linkedin.com/in/franklin-ferreira-09a21a231/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="social-link"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:franklinferreira280@gmail.com" 
            className="social-link"
          >
            <Mail size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;