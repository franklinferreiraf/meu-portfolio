// src/sections/Contato.jsx
import React from 'react';

const Contato = () => {
  return (
    <section id="contato" className="py-20 border-t border-cardBorder/50 flex flex-col items-center">
      
      {/* Cabeçalho */}
      <div className="text-center mb-10 w-full max-w-2xl">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Vamos <span className="text-gradient">Conversar</span>
        </h2>
        <p className="text-muted text-base md:text-lg">
          Tem um projeto em mente ou precisa de um desenvolvedor para a sua equipe? Me mande uma mensagem!
        </p>
      </div>

      {/* Container Principal do Formulário e WhatsApp */}
      <div className="w-full max-w-xl flex flex-col gap-8">
        
        {/* Formulário CONECTADO AO SEU FORMSPREE */}
        <form 
          action="https://formspree.io/f/xeervrjl" 
          method="POST"
          className="flex flex-col gap-4"
        >
          <input 
            type="text" 
            name="nome"
            required
            placeholder="Seu nome" 
            className="w-full bg-card border border-cardBorder rounded-xl px-5 py-3 text-white placeholder:text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
          />
          <input 
            type="email" 
            name="email"
            required
            placeholder="Seu e-mail" 
            className="w-full bg-card border border-cardBorder rounded-xl px-5 py-3 text-white placeholder:text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all"
          />
          <textarea 
            name="mensagem"
            required
            placeholder="Sua mensagem" 
            rows="4"
            className="w-full bg-card border border-cardBorder rounded-xl px-5 py-3 text-white placeholder:text-muted focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/50 transition-all resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            className="w-full bg-card border border-cardBorder hover:border-primary/50 text-white font-medium py-3 rounded-xl transition-all hover:shadow-[0_0_15px_rgba(79,70,229,0.2)] flex items-center justify-center gap-2 mt-2"
          >
            {/* Ícone de Enviar (Avião de papel) */}
            <svg className="w-5 h-5 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            Enviar por E-mail
          </button>
        </form>

        {/* Separador Visual */}
        <div className="flex items-center gap-4 text-muted text-sm w-full">
          <div className="flex-1 h-px bg-cardBorder"></div>
          <span>OU</span>
          <div className="flex-1 h-px bg-cardBorder"></div>
        </div>

        {/* Botão do WhatsApp (Lembre de trocar os números "999999999" pelo seu!) */}
        <a 
          href="https://wa.me/5575991964091?text=Olá,%20vi%20o%20seu%20portfólio%20e%20gostaria%20de%20conversar!" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full bg-[#25D366]/10 border border-[#25D366]/30 hover:border-[#25D366] text-white font-medium py-3 rounded-xl transition-all hover:shadow-[0_0_20px_rgba(37,211,102,0.2)] flex items-center justify-center gap-2 group"
        >
          <svg className="w-6 h-6 text-[#25D366] group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.031 0C5.385 0 .003 5.382.003 12.028c0 2.126.554 4.197 1.606 6.02L.053 24l6.113-1.604c1.761 1.006 3.75 1.536 5.86 1.536 6.645 0 12.029-5.382 12.029-12.028C24.055 5.382 18.675 0 12.031 0zm0 21.968c-1.803 0-3.568-.485-5.118-1.403l-.367-.218-3.8.996.996-3.805-.24-.383C2.476 15.395 2 13.738 2 12.028 2 6.486 6.488 2 12.031 2c5.541 0 10.029 4.486 10.029 10.028s-4.488 10.028-10.029 10.028zm5.503-7.53c-.302-.151-1.785-.882-2.062-.983-.277-.101-.48-.151-.682.151-.202.302-.78 1.055-.956 1.272-.176.216-.353.242-.655.091-1.608-.802-2.731-1.488-3.8-2.934-.277-.376.273-.35.86-.926.151-.151.302-.302.454-.454.151-.151.202-.302.302-.504.101-.202.051-.378-.025-.529-.076-.151-.682-1.644-.934-2.25-.246-.593-.496-.512-.682-.521-.176-.008-.378-.01-.58-.01-.202 0-.529.076-.807.378-.277.302-1.058 1.034-1.058 2.522s1.084 2.925 1.235 3.126c.151.202 2.131 3.254 5.161 4.557.72.31 1.282.496 1.723.635.723.23 1.38.197 1.895.12.58-.088 1.785-.73 2.036-1.438.252-.707.252-1.312.176-1.438-.076-.126-.277-.202-.58-.353z"></path>
          </svg>
          Chamar no WhatsApp
        </a>
      </div>

      {/* Redes Sociais */}
      <div className="flex gap-4 mt-12">
        <a 
          href="https://github.com/franklinferreiraf" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Ver perfil no GitHub"
          className="w-11 h-11 rounded-full bg-card border border-cardBorder flex items-center justify-center text-muted hover:text-white hover:border-primary/50 hover:bg-card/80 transition-all shadow-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path></svg>
        </a>
        <a 
          href="https://www.linkedin.com/in/franklin-ferreira-09a21a231/" 
          target="_blank" 
          rel="noopener noreferrer"
          title="Conectar no LinkedIn"
          className="w-11 h-11 rounded-full bg-card border border-cardBorder flex items-center justify-center text-muted hover:text-white hover:border-primary/50 hover:bg-card/80 transition-all shadow-lg"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd"></path></svg>
        </a>
      </div>
    </section>
  );
};

export default Contato;