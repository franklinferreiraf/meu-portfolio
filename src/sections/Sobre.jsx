// src/sections/Sobre.jsx
import React from 'react';
import { sobreCards } from '../data';

const Sobre = () => {
  return (
    <section id="sobre" className="py-20 border-t border-cardBorder/50">
      
      {/* Container flex para separar os textos dos cards */}
      <div className="flex flex-col gap-12">
        
        {/* Textos - Agora alinhados na mesma margem esquerda do resto do site */}
        <div className="w-full text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          {/* Limitei a largura apenas dos parágrafos para a leitura ficar agradável, mas a margem obedece o padrão */}
          <div className="max-w-3xl">
            <p className="text-muted leading-relaxed mb-6 text-lg">
              Sou um desenvolvedor full stack apaixonado por criar soluções digitais que resolvem problemas reais. 
              Com experiência no front-end e no back-end, transformo requisitos complexos em interfaces 
              intuitivas e sistemas robustos.
            </p>
            <p className="text-muted leading-relaxed text-lg">
              Meu foco é entregar código limpo, de alta performance, garantindo a melhor usabilidade 
              e experiência para o usuário final, desde a concepção da interface até o deploy da aplicação.
            </p>
          </div>
        </div>

        {/* Cards de Características - Ocupando a largura total (alinhados com Projetos e Habilidades) */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {sobreCards.map((card) => (
            <div 
              key={card.id} 
              className="bg-card border border-cardBorder p-6 rounded-2xl card-hover flex flex-col items-start text-left gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-background border border-cardBorder flex items-center justify-center shadow-inner">
                {card.icone}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 text-lg">{card.titulo}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.descricao}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sobre;