import React from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink } from 'lucide-react';

export function ProjectCard({ project }) {
  const hasDemo = project.demoLink && project.demoLink !== "#";

  return (
    <div className="project-card">
      <div 
        className="project-image" 
        style={{backgroundImage: `url('${project.image}')`}}
      ></div>
      
      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        
        <div className="project-tags">
          {project.techs.slice(0, 3).map(tech => (
            <span key={tech} className="project-tag">{tech}</span>
          ))}
          {project.techs.length > 3 && <span className="project-tag">+{project.techs.length - 3}</span>}
        </div>

        <div className="project-actions">
          <Link to={`/project/${project.id}`} className="btn btn-code">
            <Github size={18}/> Código
          </Link>
          
          {hasDemo ? (
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className="btn btn-demo">
              <ExternalLink size={18}/> Demo
            </a>
          ) : (
            <Link to={`/project/${project.id}`} className="btn btn-demo">
              <ExternalLink size={18}/> Demo
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;