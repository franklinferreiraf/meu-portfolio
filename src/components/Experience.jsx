import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';
import { experiences } from '../data/experience';

const Experience = () => {
  return (
    <section className="section-padding" id="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Experiência Profissional</h2>
          <p className="section-subtitle">Minha trajetória e contribuições no mercado</p>
        </div>

        <div className="experience-timeline">
          {experiences.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot"></div>
              
              <div className="timeline-content">
                <div className="exp-header">
                  <h3 className="exp-role">{exp.role}</h3>
                  <span className="exp-company">{exp.company}</span>
                </div>
                
                <div className="exp-date">
                  <Calendar size={16} />
                  {exp.period}
                </div>
                
                <p className="exp-description">{exp.description}</p>
                
                <ul className="exp-tasks">
                  {exp.tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;