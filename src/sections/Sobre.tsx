import Highlight from '../components/Highlight';
import { useLanguage } from '../i18n/useLanguage';
import { useContent } from '../i18n/useContent';

const Sobre = () => {
  const { t } = useLanguage();
  const { sobreCards } = useContent();

  return (
    <section id="sobre" aria-labelledby="sobre-title" className="py-20 border-t border-cardBorder/50">
      <div className="flex flex-col gap-12">
        {/* Textos */}
        <div className="w-full text-left">
          <h2 id="sobre-title" className="text-3xl md:text-4xl font-bold text-white mb-6">
            <Highlight text={t.about.title} />
          </h2>
          <div className="max-w-3xl space-y-6">
            <p className="text-white font-medium leading-relaxed text-lg md:text-xl">{t.about.lead}</p>
            {t.about.paragraphs.map((paragrafo) => (
              <p key={paragrafo} className="text-muted leading-relaxed text-base md:text-lg">
                {paragrafo}
              </p>
            ))}
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
