import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github, ExternalLink, CheckCircle2, Lightbulb } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="container" style={{paddingTop: '5rem', textAlign: 'center'}}>
        <h2>Projeto não encontrado!</h2>
        <Link to="/" className="btn btn-primary" style={{marginTop: '1rem'}}>Voltar</Link>
      </div>
    );
  }

  const hasDemo = project.demoLink && project.demoLink !== "#";

  return (
    <div className="container project-details">
      <Link to="/" className="back-link">
        <ArrowLeft size={20} /> Voltar
      </Link>

      <div className="project-header">
        <h1>{project.title}</h1>
        <div className="tags">
          {project.techs.map(tech => (
            <span key={tech} className="tag">{tech}</span>
          ))}
        </div>
      </div>

      <div className="detail-layout">
        <div className="left-content">
          <div className="overview-section">
            <h2>Visão Geral</h2>
            <p className="overview-text">
              {project.longDescription || project.description}
            </p>
          </div>

          <div className="overview-section">
            <h2>Funcionalidades Principais</h2>
            <div className="features-grid-detail">
              {project.features && project.features.map((feature, index) => (
                <div key={index} className="feature-box">
                  <CheckCircle2 color="#0ea5e9" size={20} />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {project.challenge && (
            <div className="challenge-box">
              <div className="challenge-title">
                <Lightbulb size={24} />
                <span>O Desafio & Solução</span>
              </div>
              <p style={{color: '#e2e8f0', lineHeight: 1.6}}>
                {project.challenge}
              </p>
            </div>
          )}
        </div>

        <div className="right-sidebar">
          <div className="sidebar-card">
            <div className="sidebar-section">
              <h3>Informações</h3>
              <div className="status-row">
                <span style={{color: '#94a3b8'}}>Status</span>
                <span className="status-badge">Concluído</span>
              </div>
            </div>

            <div className="sidebar-section">
              <h3>Links do Projeto</h3>
              
              <a href={project.repoLink} target="_blank" rel="noopener noreferrer" className="sidebar-btn btn-blue">
                <Github size={18} /> Ver Código
              </a>

              {hasDemo ? (
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="sidebar-btn btn-dark active">
                  <ExternalLink size={18} /> Ver Demo
                </a>
              ) : (
                <button disabled className="sidebar-btn btn-dark">
                  <ExternalLink size={18} /> Demo Indisponível
                </button>
              )}
            </div>

            <div className="sidebar-section" style={{marginBottom: 0}}>
              <h3>Tecnologias</h3>
              <div className="tags">
                {project.techs.map(tech => (
                  <span key={tech} className="tag" style={{fontSize: '0.8rem'}}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;