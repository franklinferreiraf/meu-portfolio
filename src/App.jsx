import React from 'react';
import { 
  Github, Linkedin, Mail, Code2, Layout, Database, Zap, 
  ExternalLink, MapPin, Phone 
} from 'lucide-react';
import './App.css';

function App() {
  return (
    <div className="app-container">
      
      <section className="hero">
        <div className="hero-content">
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
              Com experiência em desenvolvimento web moderno, trabalho com tecnologias como <strong>React, TypeScript, Node.js e PostgreSQL</strong>. Minha abordagem combina design centrado no usuário com código de alta qualidade.
            </p>
            <br />
            <p>
               Cada projeto é uma oportunidade de aprender, crescer e entregar valor real. Estou sempre buscando novos desafios e maneiras de aprimorar minhas habilidades.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2>Tecnologias & Habilidades</h2>
            <p>Ferramentas e tecnologias que domino para criar soluções completas</p>
          </div>

          <div className="tech-grid">
            <div className="tech-card">
              <h3>Frontend</h3>
              <div className="tags">
                {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'HTML5', 'CSS3'].map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
            
            <div className="tech-card">
              <h3>Backend</h3>
              <div className="tags">
                {['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'REST APIs', 'GraphQL'].map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="tech-card">
              <h3>Ferramentas</h3>
              <div className="tags">
                {['Git', 'Docker', 'VS Code', 'Figma', 'Webpack', 'Vite'].map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>

            <div className="tech-card">
              <h3>Outros</h3>
              <div className="tags">
                {['Responsive Design', 'UI/UX', 'Agile', 'Testing', 'CI/CD'].map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <div className="container">
          <div className="section-header">
            <h2>Projetos em Destaque</h2>
            <p>Alguns dos meus trabalhos mais recentes e relevantes</p>
          </div>

          <div className="grid-3">
             <div className="project-card">
                <div 
                  className="project-image" 
                  style={{backgroundImage: `url('https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=800')`}}
                ></div>
                <h3>Plataforma de E-commerce</h3>
                <p>Sistema completo de e-commerce com carrinho, pagamentos e painel administrativo</p>
                <div className="tags" style={{marginBottom: '1.5rem'}}>
                  <span className="tag">React</span>
                  <span className="tag">Node.js</span>
                  <span className="tag">PostgreSQL</span>
                  <span className="tag">Stripe</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn-project btn-code">
                    <Github size={16}/> Código
                  </a>
                  <a href="#" className="btn-project btn-demo">
                    <ExternalLink size={16}/> Demo
                  </a>
                </div>
              </div>

              <div className="project-card">
                <div 
                  className="project-image" 
                  style={{backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800')`}}
                ></div>
                <h3>Dashboard Analytics</h3>
                <p>Dashboard interativo para visualização de dados e métricas em tempo real</p>
                <div className="tags" style={{marginBottom: '1.5rem'}}>
                  <span className="tag">React</span>
                  <span className="tag">TypeScript</span>
                  <span className="tag">Chart.js</span>
                  <span className="tag">Tailwind</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn-project btn-code">
                    <Github size={16}/> Código
                  </a>
                  <a href="#" className="btn-project btn-demo">
                    <ExternalLink size={16}/> Demo
                  </a>
                </div>
              </div>

              <div className="project-card">
                <div 
                  className="project-image" 
                  style={{backgroundImage: `url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=800')`}}
                ></div>
                <h3>App de Gestão de Tarefas</h3>
                <p>Aplicativo mobile-first para gerenciamento de projetos e tarefas em equipe</p>
                <div className="tags" style={{marginBottom: '1.5rem'}}>
                  <span className="tag">React</span>
                  <span className="tag">Firebase</span>
                  <span className="tag">PWA</span>
                  <span className="tag">Material UI</span>
                </div>
                <div className="project-links">
                  <a href="#" className="btn-project btn-code">
                    <Github size={16}/> Código
                  </a>
                  <a href="#" className="btn-project btn-demo">
                    <ExternalLink size={16}/> Demo
                  </a>
                </div>
              </div>
          </div>
        </div>
      </section>

      <section className="section" id="contact">
        <div className="container">
          <div className="section-header">
            <h2>Vamos Trabalhar Juntos</h2>
            <p>Tem um projeto em mente? Entre em contato e vamos transformá-lo em realidade</p>
          </div>

          <div className="contact-wrapper">
            <form className="contact-form">
              <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem'}}>
                  <div style={{display:'flex', flexDirection:'column', gap: '0.5rem', textAlign: 'left'}}>
                    <label style={{fontSize: '0.9rem', fontWeight: 600}}>Nome</label>
                    <input type="text" placeholder="Seu nome" />
                  </div>
                  <div style={{display:'flex', flexDirection:'column', gap: '0.5rem', textAlign: 'left'}}>
                    <label style={{fontSize: '0.9rem', fontWeight: 600}}>Email</label>
                    <input type="email" placeholder="seu@email.com" />
                  </div>
              </div>
              
              <div style={{display:'flex', flexDirection:'column', gap: '0.5rem', textAlign: 'left'}}>
                  <label style={{fontSize: '0.9rem', fontWeight: 600}}>Assunto</label>
                  <input type="text" placeholder="Como posso ajudar?" />
              </div>

              <div style={{display:'flex', flexDirection:'column', gap: '0.5rem', textAlign: 'left'}}>
                  <label style={{fontSize: '0.9rem', fontWeight: 600}}>Mensagem</label>
                  <textarea rows="5" placeholder="Conte-me sobre seu projeto..."></textarea>
              </div>

              <button className="btn btn-primary" style={{width: '100%', justifyContent: 'center', marginTop: '0.5rem'}}>Enviar Mensagem</button>
            </form>

            <div className="contact-info-list">
                <div className="contact-card">
                  <div className="icon-wrapper">
                     <Mail size={24} />
                  </div>
                  <div style={{textAlign: 'left'}}>
                    <h4 style={{fontWeight: 600, marginBottom: '0.2rem'}}>Email</h4>
                    <p style={{color: 'var(--text-secondary)', margin: 0}}>contato@exemplo.com</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="icon-wrapper">
                     <Phone size={24} />
                  </div>
                  <div style={{textAlign: 'left'}}>
                    <h4 style={{fontWeight: 600, marginBottom: '0.2rem'}}>Telefone</h4>
                    <p style={{color: 'var(--text-secondary)', margin: 0}}>+55 (11) 99999-9999</p>
                  </div>
                </div>

                <div className="contact-card">
                  <div className="icon-wrapper">
                     <MapPin size={24} />
                  </div>
                  <div style={{textAlign: 'left'}}>
                    <h4 style={{fontWeight: 600, marginBottom: '0.2rem'}}>Localização</h4>
                    <p style={{color: 'var(--text-secondary)', margin: 0}}>São Paulo, Brasil</p>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container">
          <p>© 2025 Portfolio. Desenvolvido com React & TypeScript</p>
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
    </div>
  );
}

export default App;