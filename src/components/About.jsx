import React from 'react';
import { Code2, Layout, Database, Zap } from 'lucide-react';

const About = () => {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-header">
          <h2>Sobre Mim</h2>
          <p>Desenvolvedor apaixonado por tecnologia e inovação, com foco em criar soluções que unem funcionalidade e estética</p>
        </div>

        <div className="grid-4 about-grid">
          <div className="lovable-glass">
            <Code2 className="icon-box" size={32} />
            <h3>Código Limpo</h3>
            <p>Desenvolvimento com as melhores práticas e padrões da indústria</p>
          </div>
          <div className="lovable-glass">
            <Layout className="icon-box" size={32} />
            <h3>Design Responsivo</h3>
            <p>Interfaces que funcionam perfeitamente em todos os dispositivos</p>
          </div>
          <div className="lovable-glass">
            <Database className="icon-box" size={32} />
            <h3>Backend Robusto</h3>
            <p>Arquiteturas escaláveis e APIs bem estruturadas</p>
          </div>
          <div className="lovable-glass">
            <Zap className="icon-box" size={32} />
            <h3>Performance</h3>
            <p>Otimização para experiências rápidas e fluidas</p>
          </div>
        </div>

        <div className="about-text">
          <p>
            Com experiência em desenvolvimento web moderno, trabalho com tecnologias como <strong>React, TypeScript, Node.js e C#/.NET</strong>. Minha abordagem combina design centrado no usuário com código de alta qualidade.
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