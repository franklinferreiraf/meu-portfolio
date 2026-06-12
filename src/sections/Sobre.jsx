import React from 'react';
import { sobreCards } from '../data';

const Sobre = () => {
  return (
    <section id="sobre" className="py-20 border-t border-cardBorder/50">
      
      {/* Container flex para separar os textos dos cards */}
      <div className="flex flex-col gap-12">
        
        {/* Textos */}
        <div className="w-full text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <div className="max-w-3xl">
            <p className="text-white font-medium leading-relaxed mb-6 text-xl">
              Desenvolvedor Full Stack com experiência prática em React, Java e Salesforce. 
            </p>
            <p className="text-muted leading-relaxed mb-6 text-lg">
              Atuo na criação de aplicações web, automações corporativas e sistemas de gestão, com foco em escalabilidade, performance e manutenção simplificada. Meu objetivo é transformar requisitos de negócio em software de alta qualidade que gera resultados reais.
            </p>
            <p className="text-muted leading-relaxed text-lg">
              Minha trajetória é marcada pela curiosidade técnica e pelo compromisso com as melhores práticas de desenvolvimento, garantindo que cada linha de código contribua para uma arquitetura robusta e sustentável a longo prazo.
            </p>
          </div>
        </div>

        {/* Cards de Características */}
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
