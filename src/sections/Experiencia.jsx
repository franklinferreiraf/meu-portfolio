// src/sections/Experiencia.jsx
import React from 'react';
import { experiencias } from '../data';

const Experiencia = () => {
  return (
    <section id="experiencia" className="py-20 border-t border-cardBorder/50">
      
      {/* Cabeçalho */}
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Experiência & <span className="text-gradient">Trajetória</span>
        </h2>
        <p className="text-muted text-base md:text-lg max-w-2xl">
          Um resumo do meu percurso profissional e dos principais projetos que moldaram a minha experiência.
        </p>
      </div>

      {/* Contentor da Linha do Tempo */}
      <div className="relative max-w-4xl mx-auto">
        
        {/* A Linha Vertical */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-cardBorder"></div>

        {/* Os Itens da Timeline */}
        <div className="space-y-12">
          {experiencias.map((item, index) => (
            <div 
              key={item.id} 
              className={`relative flex flex-col md:flex-row items-start md:items-center ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              
              {/* Espaçador para o lado vazio no Desktop */}
              <div className="hidden md:block md:w-1/2"></div>

              {/* O Marcador Central (Bolinha) */}
              <div className="absolute left-[-5px] md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10 mt-1.5 md:mt-0"></div>

              {/* O Cartão de Conteúdo */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="bg-card border border-cardBorder p-6 rounded-2xl card-hover text-left">
                  <span className="text-sm font-bold text-secondary mb-2 block tracking-wider">
                    {item.ano}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-1">{item.cargo}</h3>
                  <h4 className="text-sm font-medium text-accent mb-4">{item.empresa}</h4>
                  <p className="text-muted text-sm leading-relaxed">
                    {item.descricao}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Experiencia;