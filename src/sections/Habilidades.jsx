// src/sections/Habilidades.jsx
import React from 'react';
import { habilidades } from '../data';

const Habilidades = () => {
  return (
    <section id="habilidades" className="py-20 border-t border-cardBorder/50">
      
      {/* Cabeçalho */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Habilidades <span className="text-gradient">Técnicas</span>
        </h2>
        <p className="text-muted text-base md:text-lg max-w-2xl">
          Tecnologias e ferramentas que utilizo no dia a dia para construir aplicações completas e eficientes.
        </p>
      </div>

      {/* Grid de Categorias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {habilidades.map((categoria) => (
          <div 
            key={categoria.id} 
            className="bg-card border border-cardBorder rounded-2xl p-6 card-hover flex flex-col"
          >
            {/* Título da Categoria com Ícone */}
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-background border border-cardBorder rounded-lg">
                {categoria.icone}
              </div>
              <h3 className="text-xl font-bold text-white">{categoria.categoria}</h3>
            </div>

            {/* Lista de Tecnologias (Badges) */}
            <div className="flex flex-wrap gap-3">
              {categoria.tecnologias.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 text-sm font-medium text-gray-300 bg-background border border-cardBorder rounded-lg shadow-sm hover:border-primary/50 hover:text-white transition-colors cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;