import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { projetosLista } from '../data';

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const projeto = projetosLista.find((p) => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!projeto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white px-6">
        <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
        <Link to="/" className="text-secondary hover:underline">Voltar para a Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white py-20 px-6 sm:px-12">
      <div className="max-w-4xl mx-auto">
        
        {/* Botão Voltar */}
        <button 
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-muted hover:text-white transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Voltar
        </button>

        {/* Cabeçalho */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">{projeto.titulo}</h1>
          <p className="text-xl text-muted leading-relaxed">{projeto.descricaoLonga}</p>
        </header>

        {/* Imagem Principal */}
        <div className="rounded-3xl overflow-hidden border border-cardBorder mb-12 shadow-2xl">
          <img src={projeto.imagem} alt={projeto.titulo} className="w-full h-auto" />
        </div>

        {/* Grid de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-secondary">
              <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">01</span>
              O Problema
            </h2>
            <p className="text-muted leading-relaxed">{projeto.problema}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-secondary">
              <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">02</span>
              A Solução
            </h2>
            <p className="text-muted leading-relaxed">{projeto.solucao}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-secondary">
              <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">03</span>
              Desafios
            </h2>
            <p className="text-muted leading-relaxed">{projeto.desafios}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-secondary">
              <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">04</span>
              Aprendizados
            </h2>
            <p className="text-muted leading-relaxed">{projeto.aprendizados}</p>
          </section>

        </div>

        {/* Rodapé do Projeto - Detalhes Técnicos */}
        <div className="bg-card border border-cardBorder rounded-3xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Arquitetura</h3>
              <p className="text-white text-sm leading-relaxed">{projeto.arquitetura}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Stack</h3>
              <div className="flex flex-wrap gap-2">
                {projeto.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-background border border-cardBorder rounded-lg text-xs font-medium text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Resultado</h3>
              <p className="text-white font-medium">{projeto.resultados}</p>
            </div>

          </div>
        </div>

        {/* Links Finais */}
        <div className="flex flex-wrap gap-6 justify-center border-t border-cardBorder/50 pt-12">
          {projeto.linkProjeto && (
            <a 
              href={projeto.linkProjeto} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/80 transition-all shadow-lg shadow-primary/20"
            >
              Acessar Projeto Live
            </a>
          )}
          {projeto.linkCodigo && (
            <a 
              href={projeto.linkCodigo} 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-card border border-cardBorder text-white font-bold hover:bg-background transition-all"
            >
              Ver Código no GitHub
            </a>
          )}
        </div>

      </div>
    </div>
  );
};

export default ProjectDetail;
