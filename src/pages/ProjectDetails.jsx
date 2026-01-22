import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';
import Footer from '../components/Footer';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <div className="container" style={{ paddingTop: '5rem', textAlign: 'center' }}>
        <h2>Projeto não encontrado</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Voltar para Home</Link>
      </div>
    );
  }

  const hasDemo = project.demoLink && project.demoLink !== "#";

  return (
    <div className="project-page-wrapper">
      <div className="container">
        <Link to="/" className="back-link">
          <ArrowLeft size={16} /> Voltar
        </Link>

        <div className="project-hero">
          <div className="project-hero-content">
            <h1 className="project-title">{project.title}</h1>
            <p className="project-short-desc">{project.description}</p>
            
            <div className="project-tech-stack">
              {project.techs.map(tech => (
                <span key={tech} className="hero-tag">{tech}</span>
              ))}
            </div>

            <div className="project-links">
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="btn-hero btn-hero-code">
                <Github size={20} /> Ver Código
              </a>
              
              {hasDemo && (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn-hero btn-hero-demo">
                  <ExternalLink size={20} /> Ver Demo
                </a>
              )}
            </div>
          </div>

          <div className="project-hero-image">
            <img src={project.image} alt={project.title} />
          </div>
        </div>

        <div className="project-body">
          <div className="project-section">
            <h2>Sobre o Projeto</h2>
            <p>{project.longDescription}</p>
          </div>

          <div className="project-section">
            <h2>Funcionalidades principais:</h2>
            <ul className="feature-list">
              {project.features && project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          
          <div className="project-section">
            <h2>Desafios superados:</h2>
            <ul className="feature-list">
               <li>Implementação de arquitetura limpa e escalável</li>
               <li>Otimização de performance para carregamento rápido</li>
               <li>Integração segura com APIs de terceiros</li>
            </ul>
          </div>

          <div className="project-nav-footer">
            <Link to="/" className="btn-nav-back">
              <ArrowLeft size={16} /> Ver todos os projetos
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ProjectDetails;