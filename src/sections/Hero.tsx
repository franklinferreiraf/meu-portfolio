import heroImg from '../assets/hero.png';
import { heroBadges } from '../data';

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col md:flex-row items-center gap-12 min-h-[90vh] relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] -z-10" aria-hidden="true"></div>

      {/* Lado Esquerdo - Conteúdo */}
      <div className="flex-1 text-left">
        {/* Títulos Principais */}
        <h1 id="hero-title" className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
          Desenvolvedor <br />
          <span className="text-gradient">Full Stack</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 font-medium mb-6 tracking-wide">
          Java <span className="text-secondary">•</span> Spring Boot <span className="text-secondary">•</span> React{' '}
          <span className="text-secondary">•</span> C#/.NET <span className="text-secondary">•</span> Salesforce
        </p>

        {/* Parágrafo de Apresentação */}
        <p className="max-w-2xl text-muted text-base md:text-lg mb-8 leading-relaxed">
          Desenvolvedor Full Stack com experiência no desenvolvimento de aplicações web, APIs REST, integrações entre
          sistemas e automação de processos. Atuação com React, Java, Spring Boot, C#/.NET e Salesforce, criando soluções
          escaláveis, performáticas e alinhadas às melhores práticas de desenvolvimento.
        </p>

        {/* Badges de Stack */}
        <ul className="flex flex-wrap gap-2.5 mb-10 pb-10 border-b border-cardBorder/50" aria-label="Principais tecnologias">
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
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a
            href="#projetos"
            className="px-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/80 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2"
          >
            Ver Projetos
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

      {/* Lado Direito - Foto Profissional */}
      <div className="flex-1 flex justify-center md:justify-end relative">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Círculo de fundo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl rotate-6 opacity-20 -z-10" aria-hidden="true"></div>
          <div className="absolute inset-0 bg-card border border-cardBorder rounded-3xl -z-5" aria-hidden="true"></div>

          {/* Imagem do Franklin */}
          <div className="w-full h-full rounded-3xl overflow-hidden border border-cardBorder shadow-2xl">
            <img
              src={heroImg}
              alt="Franklin Ferreira, Desenvolvedor Full Stack"
              width={384}
              height={384}
              fetchPriority="high"
              decoding="async"
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>

          {/* Badge flutuante 1 */}
          <div className="absolute -bottom-4 -left-4 bg-card border border-cardBorder p-4 rounded-2xl shadow-xl animate-float">
            <div className="text-secondary font-bold text-xl leading-none">4+</div>
            <div className="text-gray-400 text-[10px] uppercase tracking-tighter">Anos Exp.</div>
          </div>

          {/* Badge flutuante 2 */}
          <div className="absolute top-10 -right-6 bg-card border border-cardBorder p-4 rounded-2xl shadow-xl animate-float-delayed">
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
