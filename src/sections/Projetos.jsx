import React from 'react';
import { Link } from 'react-router-dom';
import { projetosLista } from '../data';

const Projetos = () => {
  return (
    <section id="projetos" className="py-20 border-t border-cardBorder/50">
      
      {/* Cabeçalho da Seção */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Projetos em <span className="text-gradient">Destaque</span>
        </h2>
        <p className="text-muted text-base md:text-lg max-w-2xl">
          Uma seleção dos projetos que demonstram minha paixão por resolver problemas e criar soluções digitais com impacto real.
        </p>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projetosLista.map((projeto) => (
          <div 
            key={projeto.id} 
            className="bg-card border border-cardBorder rounded-2xl overflow-hidden card-hover flex flex-col group"
          >
            
            {/* Capa do Projeto */}
            <div className="h-56 w-full bg-gradient-to-br from-[#12121a] to-[#0a0a0f] flex items-center justify-center relative overflow-hidden border-b border-cardBorder/50">
              {projeto.imagem ? (
                <img 
                  src={projeto.imagem} 
                  alt={`Capa do projeto ${projeto.titulo}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                <span className="text-5xl font-bold text-white/10 tracking-widest uppercase">
                  {projeto.titulo.charAt(0)}
                </span>
              )}
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
              
              {/* Overlay de "Ver Detalhes" */}
              <Link 
                to={`/projeto/${projeto.id}`}
                className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
              >
                <span className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm">Ver Detalhes Técnicos</span>
              </Link>
            </div>

            {/* Informações do Projeto */}
            <div className="p-6 flex flex-col flex-grow gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{projeto.titulo}</h3>
                <p className="text-muted text-sm leading-relaxed line-clamp-2">{projeto.descricao}</p>
              </div>

              {/* Resultados em Destaque (Badge) */}
              <div className="flex items-center gap-2 text-xs font-semibold text-secondary bg-secondary/10 px-3 py-1.5 rounded-lg border border-secondary/20 w-fit">
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Impacto: {projeto.resultados}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {projeto.tags.slice(0, 3).map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-background border border-cardBorder rounded"
                  >
                    {tag}
                  </span>
                ))}
                {projeto.tags.length > 3 && (
                  <span className="text-[10px] text-gray-500 font-bold">+{projeto.tags.length - 3}</span>
                )}
              </div>

              {/* Links de Ação */}
              <div className="flex gap-4 mt-2 pt-4 border-t border-cardBorder/30">
                <Link 
                  to={`/projeto/${projeto.id}`}
                  className="flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-white transition-colors"
                >
                  Estudo de Caso
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </Link>

                {projeto.linkProjeto && (
                  <a 
                    href={projeto.linkProjeto} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-white transition-colors ml-auto"
                  >
                    Site Live
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                  </a>
                )}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
