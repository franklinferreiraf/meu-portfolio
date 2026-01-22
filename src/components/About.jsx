import React from 'react';
import { Code2, Layout, Database, Zap } from 'lucide-react';

const About = () => {
  return (
    <section className="section-padding" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            Desenvolvedor apaixonado por tecnologia e inovação, com foco em criar soluções que unem funcionalidade e estética
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <div className="icon-wrapper">
              <Code2 size={32} />
            </div>
            <h3>Código Limpo</h3>
            <p>Desenvolvimento com as melhores práticas e padrões da indústria</p>
          </div>

          <div className="about-card">
            <div className="icon-wrapper">
              <Layout size={32} />
            </div>
            <h3>Design Responsivo</h3>
            <p>Interfaces que funcionam perfeitamente em todos os dispositivos</p>
          </div>

          <div className="about-card">
            <div className="icon-wrapper">
              <Database size={32} />
            </div>
            <h3>Backend Robusto</h3>
            <p>Arquiteturas escaláveis e APIs bem estruturadas</p>
          </div>

          <div className="about-card">
            <div className="icon-wrapper">
              <Zap size={32} />
            </div>
            <h3>Performance</h3>
            <p>Otimização para experiências rápidas e fluidas</p>
          </div>
        </div>

        <div className="about-bio-card">
          <p>
            Com experiência em desenvolvimento web moderno, trabalho com tecnologias como <span className="highlight">React, TypeScript, Node.js e PostgreSQL</span>. Minha abordagem combina design centrado no usuário com código de alta qualidade.
          </p>
          <br />
          <p>
            Cada projeto é uma oportunidade de aprender, crescer e entregar valor real. Estou sempre buscando novos desafios e maneiras de aprimorar minhas habilidades.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;