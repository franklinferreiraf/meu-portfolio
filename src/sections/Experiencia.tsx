import Highlight from '../components/Highlight';
import { useLanguage } from '../i18n/useLanguage';
import { useContent } from '../i18n/useContent';

const Experiencia = () => {
  const { t } = useLanguage();
  const { experiencias } = useContent();

  return (
    <section id="experiencia" aria-labelledby="experiencia-title" className="py-20 border-t border-cardBorder/50">
      {/* Cabeçalho */}
      <div className="mb-16">
        <h2 id="experiencia-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
          <Highlight text={t.experience.title} />
        </h2>
        <p className="text-muted text-base md:text-lg max-w-2xl">{t.experience.subtitle}</p>
      </div>

      {/* Linha do Tempo — coluna única: cards com largura total, do mais recente para o mais antigo */}
      <div className="relative max-w-4xl">
        {/* A Linha Vertical */}
        <div className="absolute left-[5px] top-2 bottom-2 w-0.5 bg-cardBorder" aria-hidden="true"></div>

        <ol className="space-y-10">
          {experiencias.map((item) => (
            <li key={item.id} className="relative pl-8 md:pl-12">
              {/* O Marcador (Bolinha) */}
              <div
                className="absolute left-0 top-7 w-3 h-3 bg-secondary rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] z-10"
                aria-hidden="true"
              ></div>

              {/* O Cartão de Conteúdo */}
              <article className="bg-card border border-cardBorder p-6 md:p-8 rounded-2xl card-hover text-left">
                <header className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-6 mb-5">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{item.cargo}</h3>
                    {item.empresa && <p className="text-sm font-medium text-accent">{item.empresa}</p>}
                  </div>
                  <span className="text-sm font-bold text-secondary tracking-wider md:whitespace-nowrap md:pt-1">
                    {item.periodo}
                  </span>
                </header>

                <ul className="space-y-2 mb-6">
                  {item.destaques.map((destaque) => (
                    <li key={destaque} className="flex gap-3 text-muted text-sm md:text-base leading-relaxed">
                      <span className="mt-2 w-1.5 h-1.5 flex-shrink-0 rounded-full bg-secondary/70" aria-hidden="true"></span>
                      <span>{destaque}</span>
                    </li>
                  ))}
                </ul>

                <ul className="flex flex-wrap gap-2" aria-label={t.experience.stackLabel}>
                  {item.stack.map((tech) => (
                    <li
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-gray-300 bg-background border border-cardBorder rounded-lg"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Experiencia;
