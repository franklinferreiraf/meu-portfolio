import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import TechSkills from '../components/TechSkills';
import ProjectCard from '../components/ProjectCard';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { projects } from '../data/projects';
import Experience from '../components/Experience';

const Home = () => {
  return (
    <div className="home-container">
      <Hero />
      <About />
      <TechSkills />
      <Experience />
      
      <section className="projects-section" id="projects">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Projetos em Destaque</h2>
            <p className="section-subtitle">Alguns dos meus trabalhos mais recentes e relevantes</p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      <Contact />
      <Footer />
    </div>
  );
};

export default Home;