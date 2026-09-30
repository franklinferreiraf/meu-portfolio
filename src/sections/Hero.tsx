import { curriculoArquivo, curriculoUrl } from '../data';
import { useLanguage } from '../i18n/useLanguage';
import { useContent } from '../i18n/useContent';

const Hero = () => {
  const { t } = useLanguage();
  const { heroBadges } = useContent();

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col lg:flex-row items-center gap-12 min-h-[90vh] relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>

      {/* Lado Esquerdo - Conteúdo */}
      <div className="w-full lg:flex-1 min-w-0 text-left">
        {/* Títulos Principais */}
        <h1 id="hero-title" className="text-4xl min-[400px]:text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
          {t.hero.titleLine1} <br />
          <span className="text-gradient">{t.hero.titleLine2}</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 font-medium mb-6 tracking-wide">
          Java <span className="text-secondary">•</span> Spring Boot <span className="text-secondary">•</span> React{' '}
          <span className="text-secondary">•</span> C#/.NET <span className="text-secondary">•</span> Salesforce
        </p>

        {/* Parágrafo de Apresentação */}
        <p className="max-w-2xl text-muted text-base md:text-lg mb-8 leading-relaxed">
          {t.hero.intro}
        </p>

        {/* Badges de Stack */}
        <ul className="flex flex-wrap gap-2.5 mb-10 pb-10 border-b border-cardBorder/50" aria-label={t.hero.badgesLabel}>
          {heroBadges.map((badge) => (
            <li
              key={badge}
              className="px-3 py-1.5 text-xs md:text-sm font-medium text-gray-300 bg-card border border-cardBorder rounded-lg hover:border-primary/50 hover:text-white transition-colors"
            >
              {badge}
            </li>
          ))}
        </ul>

        {/* Botões de Ação */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:max-w-lg">
          <a
            href="#projetos"
            className="px-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/80 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            {t.hero.viewProjects}
          </a>

          <a
            href={curriculoUrl}
            download={curriculoArquivo}
            aria-label={t.hero.downloadCvAria}
            className="px-8 py-3 rounded-xl bg-card border border-primary/50 text-white font-bold hover:bg-primary/10 hover:border-primary transition-all flex items-center justify-center gap-2 group"
          >
            <svg className="w-5 h-5 text-secondary group-hover:translate-y-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            {t.hero.downloadCv}
          </a>

          <a
            href="https://github.com/franklinferreiraf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl bg-card border border-cardBorder text-white font-medium hover:border-primary/50 transition-all flex items-center justify-center gap-2 group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/franklin-ferreira-09a21a231/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl bg-card border border-cardBorder text-white font-medium hover:border-primary/50 transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Lado Direito - Card de Código */}
      {/* Abaixo do lg o card acompanha a largura do conteúdo (alinhado à esquerda) e os selos flutuantes somem */}
      <div className="w-full lg:w-auto lg:flex-1 flex justify-start lg:justify-end lg:pr-6 relative">
        <div className="relative w-full max-w-lg lg:w-96 lg:h-96">
          {/* Círculo de fundo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl rotate-2 lg:rotate-6 opacity-20 -z-10" aria-hidden="true"></div>
          <div className="absolute inset-0 bg-card border border-cardBorder rounded-3xl -z-5" aria-hidden="true"></div>

          {/* Card de Código */}
          <figure
            aria-label={t.hero.codeCardLabel}
            className="w-full lg:h-full rounded-3xl overflow-hidden border border-cardBorder shadow-2xl bg-card flex flex-col"
          >
            {/* Barra da "janela" do editor */}
            <div className="flex items-center gap-2 px-5 py-3 lg:py-4 border-b border-cardBorder/60" aria-hidden="true">
              <span className="w-3 h-3 rounded-full bg-primary"></span>
              <span className="w-3 h-3 rounded-full bg-secondary"></span>
              <span className="w-3 h-3 rounded-full bg-accent"></span>
              <span className="ml-3 text-xs font-medium text-muted">franklin.ts</span>
            </div>

            <pre className="flex-1 flex flex-col justify-center px-5 py-5 lg:py-0 lg:pb-6 sm:px-6 font-mono text-[12px] sm:text-sm lg:text-[15px] leading-relaxed text-gray-300 overflow-x-auto">
              <code>
                <span className="text-gray-500 italic">{`// ${t.hero.codeComment}\n`}</span>
                <span className="text-accent">const</span> <span className="text-white">franklin</span> = {'{'}
                {'\n  '}
                <span className="text-secondary">role</span>: <span className="text-gray-400">'Full Stack'</span>,
                {'\n  '}
                <span className="text-secondary">backend</span>: [<span className="text-gray-400">'Java'</span>,{' '}
                <span className="text-gray-400">'.NET'</span>],
                {'\n  '}
                <span className="text-secondary">frontend</span>: [<span className="text-gray-400">'React'</span>,{' '}
                <span className="text-gray-400">'Angular'</span>],
                {'\n  '}
                <span className="text-secondary">cloud</span>: [<span className="text-gray-400">'Azure'</span>,{' '}
                <span className="text-gray-400">'AWS'</span>],
                {'\n  '}
                <span className="text-secondary">remote</span>: <span className="text-accent">true</span>,
                {'\n'}
                {'};'}
              </code>
            </pre>
          </figure>

          {/* Badge flutuante 1 */}
          <div className="hidden lg:block absolute -bottom-4 -left-4 bg-card border border-cardBorder p-4 rounded-2xl shadow-xl animate-float">
            <div className="text-secondary font-bold text-xl leading-none">5+</div>
            <div className="text-gray-400 text-[10px] uppercase tracking-tighter">{t.hero.yearsBadge}</div>
          </div>

          {/* Badge flutuante 2 */}
          <div className="hidden lg:block absolute top-10 -right-6 bg-card border border-cardBorder p-4 rounded-2xl shadow-xl animate-float-delayed">
            <svg className="w-6 h-6 text-primary mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-1.006 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946 1.006 3.42 3.42 0 011.007 1.946 3.42 3.42 0 001.006 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-1.006 1.946 3.42 3.42 0 01-1.007 1.946 3.42 3.42 0 00-1.946 1.006 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-1.006 3.42 3.42 0 01-1.007-1.946 3.42 3.42 0 00-1.006-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 001.006-1.946 3.42 3.42 0 011.007-1.946z" />
            </svg>
            <div className="text-white font-bold text-xs">Full Stack</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
