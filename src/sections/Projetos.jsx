// src/sections/Projetos.jsx
import React from 'react';
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
          Uma seleção dos projetos que demonstram minha paixão por resolver problemas e criar soluções digitais.
        </p>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projetosLista.map((projeto) => (
          <div 
            key={projeto.id} 
            className="bg-card border border-cardBorder rounded-2xl overflow-hidden card-hover flex flex-col"
          >
            
            {/* Capa do Projeto (Imagem ou Letra) */}
            <div className="h-56 w-full bg-gradient-to-br from-[#12121a] to-[#0a0a0f] flex items-center justify-center relative group overflow-hidden border-b border-cardBorder/50">
              
              {projeto.imagem ? (
                /* Se tiver imagem, mostra ela com efeito de zoom no hover */
                <img 
                  src={projeto.imagem} 
                  alt={`Capa do projeto ${projeto.titulo}`} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                /* Se NÃO tiver imagem, mostra a Letra como plano B */
                <>
                  <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-5xl font-bold text-white/10 group-hover:text-primary/30 transition-colors duration-300 tracking-widest uppercase relative z-10">
                    {projeto.titulo.charAt(0)}
                  </span>
                </>
              )}
              
              {/* Overlay sutil em cima da imagem para não ofuscar o resto do card */}
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>
            </div>

            {/* Informações do Projeto */}
            <div className="p-6 flex flex-col flex-grow gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{projeto.titulo}</h3>
                <p className="text-muted text-sm leading-relaxed">{projeto.descricao}</p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {projeto.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="px-3 py-1 text-xs font-medium text-gray-300 bg-background border border-cardBorder rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links de Ação (Aparecem apenas se o link existir nos dados) */}
              <div className="flex gap-4 mt-2 pt-5 border-t border-cardBorder/30">
                
                {projeto.linkProjeto && (
                  <a 
                    href={projeto.linkProjeto} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                    </svg>
                    Ver Projeto
                  </a>
                )}

                {projeto.linkCodigo && (
                  <a 
                    href={projeto.linkCodigo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    Código
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