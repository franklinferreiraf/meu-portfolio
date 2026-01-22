import React from 'react';
import { Code2, Server, Database, Cloud, Wrench, Layout } from 'lucide-react';

const TechSkills = () => {
  return (
    <section className="section-padding" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Tecnologias e Habilidades</h2>
          <p className="section-subtitle">Ferramentas que domino e utilizo para criar soluções de alto nível</p>
        </div>

        <div className="tech-grid">
          <div className="tech-card">
            <h3><Cloud size={24} style={{ display: 'inline', marginRight: '10px' }} /> Salesforce & CRM</h3>
            <div className="tech-tags">
              <span className="tech-tag">Salesforce Platform</span>
              <span className="tech-tag">Apex</span>
              <span className="tech-tag">Flows</span>
              <span className="tech-tag">SOQL/SOSL</span>
              <span className="tech-tag">Process Builder</span>
            </div>
          </div>

          <div className="tech-card">
            <h3><Layout size={24} style={{ display: 'inline', marginRight: '10px' }} /> Frontend</h3>
            <div className="tech-tags">
              <span className="tech-tag">React.js</span>
              <span className="tech-tag">Next.js</span>
              <span className="tech-tag">JavaScript (ES6+)</span>
              <span className="tech-tag">TypeScript</span>
              <span className="tech-tag">Tailwind CSS</span>
              <span className="tech-tag">HTML5 & CSS3</span>
            </div>
          </div>

          <div className="tech-card">
            <h3><Server size={24} style={{ display: 'inline', marginRight: '10px' }} /> Backend</h3>
            <div className="tech-tags">
              <span className="tech-tag">Node.js</span>
              <span className="tech-tag">C# / .NET</span>
              <span className="tech-tag">Java</span>
              <span className="tech-tag">RESTful APIs</span>
              <span className="tech-tag">MVC Architecture</span>
            </div>
          </div>

          <div className="tech-card">
            <h3><Database size={24} style={{ display: 'inline', marginRight: '10px' }} /> Banco de Dados</h3>
            <div className="tech-tags">
              <span className="tech-tag">SQL Server</span>
              <span className="tech-tag">PostgreSQL</span>
              <span className="tech-tag">MySQL</span>
              <span className="tech-tag">SQLite</span>
              <span className="tech-tag">Firebase</span>
            </div>
          </div>

          <div className="tech-card">
            <h3><Wrench size={24} style={{ display: 'inline', marginRight: '10px' }} /> Ferramentas & DevOps</h3>
            <div className="tech-tags">
              <span className="tech-tag">Git & GitHub</span>
              <span className="tech-tag">Docker</span>
              <span className="tech-tag">VS Code</span>
              <span className="tech-tag">Jira</span>
              <span className="tech-tag">Scrum/Agile</span>
            </div>
          </div>
          
          <div className="tech-card">
            <h3><Code2 size={24} style={{ display: 'inline', marginRight: '10px' }} /> Outros</h3>
            <div className="tech-tags">
              <span className="tech-tag">Mobile First</span>
              <span className="tech-tag">UI/UX Design</span>
              <span className="tech-tag">Figma</span>
              <span className="tech-tag">Clean Code</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSkills;