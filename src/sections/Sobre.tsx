import { sobreCards } from '../data';

const Sobre = () => {
  return (
    <section id="sobre" aria-labelledby="sobre-title" className="py-20 border-t border-cardBorder/50">
      <div className="flex flex-col gap-12">
        {/* Textos */}
        <div className="w-full text-left">
          <h2 id="sobre-title" className="text-3xl md:text-4xl font-bold text-white mb-6">
            Sobre <span className="text-gradient">Mim</span>
          </h2>
          <div className="max-w-3xl space-y-6">
            <p className="text-white font-medium leading-relaxed text-lg md:text-xl">
              Desenvolvedor Full Stack com experiência na criação de aplicações web utilizando React, Java, Spring Boot,
              C#/.NET e Salesforce.
            </p>
            <p className="text-muted leading-relaxed text-base md:text-lg">
              Atuo no desenvolvimento de APIs REST, integração entre sistemas, interfaces responsivas, automação de
              processos e manutenção de aplicações corporativas.
            </p>
            <p className="text-muted leading-relaxed text-base md:text-lg">
              Tenho experiência com arquitetura em camadas, bancos de dados relacionais, Git, Docker e desenvolvimento de
              soluções escaláveis, sempre focando em performance, qualidade e boas práticas.
            </p>
            <p className="text-muted leading-relaxed text-base md:text-lg">
              Atualmente curso Sistemas de Informação pela UNEX, com conclusão prevista para 2026.
            </p>
          </div>
        </div>

        {/* Cards de Características */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
          {sobreCards.map((card) => (
            <div
              key={card.id}
              className="bg-card border border-cardBorder p-6 rounded-2xl card-hover flex flex-col items-start text-left gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-background border border-cardBorder flex items-center justify-center shadow-inner">
                {card.icone}
              </div>
              <div>
                <h3 className="text-white font-semibold mb-2 text-lg">{card.titulo}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.descricao}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sobre;
