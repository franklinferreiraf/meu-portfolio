import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { fmt } from '../i18n/context';
import { useLanguage } from '../i18n/useLanguage';
import { useContent } from '../i18n/useContent';
import { useDocumentMeta } from '../i18n/useDocumentMeta';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t } = useLanguage();
  const { projetos } = useContent();
  const projeto = projetos.find((p) => p.id === id);

  useDocumentMeta(
    projeto ? fmt(t.meta.projectTitle, { titulo: projeto.titulo }) : t.meta.notFoundTitle,
    projeto ? projeto.descricaoLonga : t.meta.homeDescription,
    t.meta.ogLocale,
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!projeto) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-white px-6">
        <h1 className="text-4xl font-bold mb-4">{t.projectDetail.notFound}</h1>
        <Link to="/" className="text-secondary hover:underline">
          {t.projectDetail.backHome}
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-white py-20">
      <div className="max-w-4xl mx-auto">
        {/* Botão Voltar */}
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-muted hover:text-white transition-colors group"
        >
          <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          {t.projectDetail.back}
        </button>

        {/* Cabeçalho */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">{projeto.titulo}</h1>
          <p className="text-xl text-muted leading-relaxed">{projeto.descricaoLonga}</p>
        </header>

        {/* Imagem Principal */}
        <div className="rounded-3xl overflow-hidden border border-cardBorder mb-12 shadow-2xl">
          <img
            src={projeto.imagem}
            alt={fmt(t.projectDetail.screenshotAlt, { titulo: projeto.titulo })}
            loading="lazy"
            decoding="async"
            className="w-full h-auto"
          />
        </div>

        {/* Resultados em Números */}
        {projeto.metricas.length > 0 && (
          <section className="mb-12" aria-labelledby="resultados-title">
            <h2 id="resultados-title" className="text-2xl font-bold mb-6 flex items-center gap-2 text-secondary">
              <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary" aria-hidden="true">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </span>
              {t.projectDetail.resultsTitle}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {projeto.metricas.map((metrica) => (
                <li key={metrica.id} className="bg-card border border-cardBorder rounded-2xl p-6 text-center card-hover">
                  <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">{metrica.valor}</div>
                  <div className="text-muted text-sm md:text-base font-medium">{metrica.label}</div>
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Principais Funcionalidades */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2 text-secondary">
            <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">★</span>
            {t.projectDetail.features}
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projeto.funcionalidades.map((func) => (
              <li key={func} className="flex items-center gap-3 bg-card border border-cardBorder rounded-xl px-4 py-3">
                <svg className="w-5 h-5 flex-shrink-0 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white text-sm font-medium">{func}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Grid de Informações */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-secondary">
              <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">01</span>
              {t.projectDetail.problem}
            </h2>
            <p className="text-muted leading-relaxed">{projeto.problema}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-secondary">
              <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">02</span>
              {t.projectDetail.solution}
            </h2>
            <p className="text-muted leading-relaxed">{projeto.solucao}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-secondary">
              <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">03</span>
              {t.projectDetail.challenges}
            </h2>
            <p className="text-muted leading-relaxed">{projeto.desafios}</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-secondary">
              <span className="w-8 h-8 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary text-sm">04</span>
              {t.projectDetail.learnings}
            </h2>
            <p className="text-muted leading-relaxed">{projeto.aprendizados}</p>
          </section>
        </div>

        {/* Rodapé do Projeto - Detalhes Técnicos */}
        <div className="bg-card border border-cardBorder rounded-3xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{t.projectDetail.architecture}</h3>
              <p className="text-white text-sm leading-relaxed">{projeto.arquitetura}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{t.projectDetail.technologies}</h3>
              <div className="flex flex-wrap gap-2">
                {projeto.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-background border border-cardBorder rounded-lg text-xs font-medium text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">{t.projectDetail.result}</h3>
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
              className="px-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/80 transition-all shadow-lg shadow-primary/20 flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {t.projectDetail.accessDemo}
            </a>
          )}
          {projeto.linkCodigo && (
            <a
              href={projeto.linkCodigo}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-xl bg-card border border-cardBorder text-white font-bold hover:bg-background transition-all flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              {t.projectDetail.viewCode}
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
