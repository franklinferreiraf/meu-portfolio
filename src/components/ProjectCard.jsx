import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/project/${project.id}`} className="project-card">
      <div className="card-image-wrapper">
        <img src={project.image} alt={project.title} className="card-image" />
      </div>

      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="card-tags">
          {project.techs.slice(0, 4).map((tech) => (
            <span key={tech} className="tech-pill">{tech}</span>
          ))}
        </div>

        <div className="card-footer">
          <span className="details-link">
            Ver detalhes <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;