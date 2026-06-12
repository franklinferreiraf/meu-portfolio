import React from 'react';
import { certificacoes } from '../data';

const Certificacoes = () => {
  return (
    <section id="certificacoes" className="py-20 border-t border-cardBorder/50">
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Certificações & <span className="text-gradient">Cursos</span>
        </h2>
        <p className="text-muted text-base md:text-lg max-w-2xl">
          Investimento constante em aprendizado e validação técnica das minhas competências.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {certificacoes.map((cert) => (
          <div 
            key={cert.id} 
            className="flex items-center gap-4 p-4 bg-card border border-cardBorder rounded-xl hover:bg-background transition-colors"
          >
            <div className="w-12 h-12 flex-shrink-0 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
              <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.006 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 1.006 3.42 3.42 0 011.007 1.946 3.42 3.42 0 001.006 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.006 1.946 3.42 3.42 0 01-1.007 1.946 3.42 3.42 0 00-1.946 1.006 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-1.006 3.42 3.42 0 01-1.007-1.946 3.42 3.42 0 00-1.006-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 001.006-1.946 3.42 3.42 0 011.007-1.946z" />
              </svg>
            </div>
            <div>
              <h3 className="text-white font-medium">{cert.nome}</h3>
              <p className="text-gray-400 text-sm">{cert.emissor}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certificacoes;
