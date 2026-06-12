import React from 'react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 flex flex-col md:flex-row items-center gap-12 min-h-[90vh] relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-secondary/20 rounded-full blur-[120px] -z-10"></div>

      {/* Lado Esquerdo - Conteúdo */}
      <div className="flex-1 text-left">
        {/* Títulos Principais */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight leading-tight">
          Desenvolvedor <br />
          <span className="text-gradient">Full Stack</span>
        </h1>
        <h2 className="text-xl md:text-2xl text-gray-300 font-medium mb-6 tracking-wider">
          Desenvolvedor <span className="text-secondary">Full Stack Pleno</span> | Java | C# | .NET | JavaScript | React | Salesforce | APIs REST | MySQL
        </h2>

        {/* Parágrafo de Apresentação Refinado */}
        <p className="max-w-2xl text-muted text-base md:text-lg mb-10 leading-relaxed">
          Transformo desafios complexos em soluções digitais escaláveis. Com experiência prática em arquitetura de software e automação corporativa, foco em entregar performance e valor real para o negócio.
        </p>

        {/* Main Stack Visual (Pequeno destaque) */}
        <div className="flex items-center gap-4 mb-10 pb-10 border-b border-cardBorder/50">
          <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Stack Principal:</span>
          <div className="flex gap-3">
            <div className="p-2 bg-card border border-cardBorder rounded-lg hover:border-primary/50 transition-colors" title="React">
              <img src="/src/assets/react.svg" alt="React" className="w-5 h-5" />
            </div>
            <div className="p-2 bg-card border border-cardBorder rounded-lg hover:border-primary/50 transition-colors" title="Java">
              <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.533 18.273c.175.034.341.054.498.054 1.353 0 2.221-1.077 2.628-2.618.17-.636.257-1.32.257-2.025v-.167c0-2.001-.475-3.327-1.428-3.931-.474-.3-.974-.452-1.488-.452-1.282 0-2.046.81-2.433 1.944-.143.435-.205.89-.205 1.343v.273c0 2.632.744 4.887 2.171 5.579zm9.052-13.882c-.11-.082-.23-.153-.362-.204a3.81 3.81 0 00-1.428-.273c-2.486 0-3.414 1.933-4.108 4.409-.158.55-.297 1.155-.417 1.8h.001c.206-1.554.814-2.529 1.767-3.033.428-.225.867-.341 1.32-.341 1.258 0 2.057.771 2.457 1.944.156.452.235.941.235 1.446v.355c0 2.524-.766 4.71-2.188 5.432.261.026.541.042.839.042 2.373 0 3.733-1.897 4.108-4.113.111-.532.164-1.085.164-1.637V8.583c0-1.742-.435-3.032-1.388-3.692z" />
              </svg>
            </div>
            <div className="p-2 bg-card border border-cardBorder rounded-lg hover:border-primary/50 transition-colors" title="Salesforce">
              <svg className="w-5 h-5 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.45 10c-.04 0-.07 0-.1.01.21-1.16-.08-2.38-.85-3.34-1.12-1.38-3.12-1.57-4.47-.43-.27.23-.49.51-.66.81-.35-.22-.76-.35-1.19-.35-1.21 0-2.19.98-2.19 2.19 0 .09.01.17.02.26C6.73 9.42 5.37 10.35 4.7 11.66c-.66 1.31-.5 2.88.4 4.02.81 1.01 2.02 1.58 3.3 1.58h9.04c1.66 0 3-1.34 3-3 0-1.57-1.2-2.85-2.74-2.98.08-.41.13-.84.13-1.28 0-.46-.06-.91-.18-1.34-.34-1.21-1.42-2.12-2.71-2.29-.02.01-.05.01-.08.02.5 1.15.35 2.5-.47 3.51-.76.94-1.92 1.39-3.08 1.29-.03 0-.06 0-.09.01-.2.86-.71 1.59-1.41 2.05 1.03.62 2.23.95 3.47.95h5.4c1.1 0 2-.9 2-2s-.9-2-2-2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <a href="#projetos" className="px-8 py-3 rounded-xl bg-primary text-white font-bold hover:bg-primary/80 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
            Ver Projetos
          </a>
          
          <a 
            href="https://github.com/franklinferreiraf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl bg-card border border-cardBorder text-white font-medium hover:border-primary/50 transition-all flex items-center justify-center gap-2 group"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            GitHub
            <span className="ml-2 px-2 py-0.5 bg-background border border-cardBorder rounded text-[10px] text-gray-400 group-hover:text-white transition-colors">Stats</span>
          </a>

          <a 
            href="https://www.linkedin.com/in/franklin-ferreira-09a21a231/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-xl bg-card border border-cardBorder text-white font-medium hover:border-primary/50 transition-all flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5 text-[#0A66C2]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>

      {/* Lado Direito - Foto Profissional */}
      <div className="flex-1 flex justify-center md:justify-end relative">
        <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
          {/* Círculo de fundo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-tr from-primary to-secondary rounded-3xl rotate-6 opacity-20 -z-10"></div>
          <div className="absolute inset-0 bg-card border border-cardBorder rounded-3xl -z-5"></div>
          
          {/* Imagem do Franklin */}
          <div className="w-full h-full rounded-3xl overflow-hidden border border-cardBorder shadow-2xl">
            <img 
              src={heroImg} 
              alt="Franklin Ferreira" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>

          {/* Badge flutuante 1 */}
          <div className="absolute -bottom-4 -left-4 bg-card border border-cardBorder p-4 rounded-2xl shadow-xl animate-float">
            <div className="text-secondary font-bold text-xl leading-none">3+</div>
            <div className="text-gray-400 text-[10px] uppercase tracking-tighter">Anos Exp.</div>
          </div>

          {/* Badge flutuante 2 */}
          <div className="absolute top-10 -right-6 bg-card border border-cardBorder p-4 rounded-2xl shadow-xl animate-float-delayed">
            <svg className="w-6 h-6 text-primary mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
