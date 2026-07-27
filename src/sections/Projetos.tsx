import { Link } from 'react-router-dom';
import { projetosLista } from '../data';

const Projetos = () => {
  return (
    <section id="projetos" aria-labelledby="projetos-title" className="py-20 border-t border-cardBorder/50">
      {/* Cabeçalho da Seção */}
      <div className="mb-12">
        <h2 id="projetos-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
          Projetos em <span className="text-gradient">Destaque</span>
        </h2>
        <p className="text-muted text-base md:text-lg max-w-2xl">
          Uma seleção de projetos que demonstram minha atuação Full Stack — do front-end às APIs, integrações e automação.
        </p>
      </div>

      {/* Grid de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projetosLista.map((projeto) => (
          <article
            key={projeto.id}
            className="bg-card border border-cardBorder rounded-2xl overflow-hidden card-hover flex flex-col group"
          >
            {/* Capa do Projeto */}
            <div className="h-56 w-full bg-gradient-to-br from-[#12121a] to-[#0a0a0f] flex items-center justify-center relative overflow-hidden border-b border-cardBorder/50">
              <img
                src={projeto.imagem}
                alt={`Capa do projeto ${projeto.titulo}`}
                loading="lazy"
                decoding="async"
                width={640}
                height={360}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-background/20 group-hover:bg-transparent transition-colors duration-300 pointer-events-none"></div>

              {/* Overlay de "Ver Detalhes" */}
              <Link
                to={`/projeto/${projeto.id}`}
                aria-label={`Ver detalhes técnicos do projeto ${projeto.titulo}`}
                className="absolute inset-0 flex items-center justify-center bg-primary/40 opacity-0 group-hover:opacity-100 focus:opacity-100 transition-opacity duration-300 backdrop-blur-sm"
              >
                <span className="px-6 py-2 bg-white text-black font-bold rounded-full text-sm">Ver Detalhes Técnicos</span>
              </Link>
            </div>

            {/* Informações do Projeto */}
            <div className="p-6 flex flex-col flex-grow gap-4">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{projeto.titulo}</h3>
                <p className="text-muted text-sm leading-relaxed">{projeto.descricao}</p>
              </div>

              {/* Principais Funcionalidades */}
              <div>
                <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-500 mb-2">Funcionalidades</h4>
                <ul className="flex flex-wrap gap-2">
                  {projeto.funcionalidades.slice(0, 4).map((func) => (
                    <li
                      key={func}
                      className="px-2.5 py-1 text-xs font-medium text-secondary bg-secondary/10 border border-secondary/20 rounded-lg"
                    >
                      {func}
                    </li>
                  ))}
                  {projeto.funcionalidades.length > 4 && (
                    <li className="px-2.5 py-1 text-xs font-bold text-gray-500">
                      +{projeto.funcionalidades.length - 4}
                    </li>
                  )}
                </ul>
              </div>

              {/* Tecnologias */}
              <div className="flex flex-wrap gap-2">
                {projeto.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-background border border-cardBorder rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links de Ação */}
              <div className="flex flex-wrap items-center gap-4 mt-auto pt-4 border-t border-cardBorder/30">
                <Link
                  to={`/projeto/${projeto.id}`}
                  className="flex items-center gap-1.5 text-sm font-bold text-secondary hover:text-white transition-colors"
                >
                  Estudo de Caso
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>

                <div className="flex items-center gap-4 ml-auto">
                  {projeto.linkCodigo && (
                    <a
                      href={projeto.linkCodigo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ver código do projeto ${projeto.titulo} no GitHub`}
                      className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-white transition-colors"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                      GitHub
                    </a>
                  )}

                  {projeto.linkProjeto && (
                    <a
                      href={projeto.linkProjeto}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Abrir demo do projeto ${projeto.titulo}`}
                      className="flex items-center gap-1.5 text-sm font-medium text-muted hover:text-white transition-colors"
                    >
                      Demo
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projetos;
