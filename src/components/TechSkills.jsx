import React from 'react';

const TechSkills = () => {
  const skills = [
    {
      category: "Frontend",
      techs: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Vue.js', 'HTML5', 'CSS3']
    },
    {
      category: "Backend",
      techs: ['Node.js', 'C#', '.NET', 'Java', 'PostgreSQL', 'MongoDB', 'REST APIs']
    },
    {
      category: "Ferramentas",
      techs: ['Git', 'Docker', 'VS Code', 'Figma', 'Webpack', 'Vite']
    },
    {
      category: "Outros",
      techs: ['Responsive Design', 'UI/UX', 'Agile', 'Testing', 'CI/CD']
    }
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-header">
          <h2>Tecnologias & Habilidades</h2>
          <p>Ferramentas e tecnologias que domino para criar soluções completas</p>
        </div>

        <div className="tech-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="tech-card">
              <h3>{skillGroup.category}</h3>
              <div className="tags">
                {skillGroup.techs.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechSkills;