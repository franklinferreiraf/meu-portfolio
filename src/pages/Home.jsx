import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import TechSkills from '../components/TechSkills';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { projects } from '../data/projects';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <TechSkills />
      
      <section className="section" id="projects">
        <div className="container">
           <div className="section-header">
            <h2>Projetos em Destaque</h2>
            <p>Alguns dos meus trabalhos mais recentes e relevantes</p>
          </div>

          <div className="grid-3">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
      
      <Contact />
      <Footer />
    </>
  );
};

export default Home;