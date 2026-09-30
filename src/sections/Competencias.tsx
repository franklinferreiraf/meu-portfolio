import Highlight from '../components/Highlight';
import { useLanguage } from '../i18n/useLanguage';
import { useContent } from '../i18n/useContent';

const Competencias = () => {
  const { t } = useLanguage();
  const { competencias } = useContent();

  return (
    <section id="competencias" aria-labelledby="competencias-title" className="py-20 border-t border-cardBorder/50">
      <div className="mb-12">
        <h2 id="competencias-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
          <Highlight text={t.competencies.title} />
        </h2>
        <p className="text-muted text-base md:text-lg max-w-2xl">{t.competencies.subtitle}</p>
      </div>

      <ul className="flex flex-wrap gap-3">
        {competencias.map((competencia) => (
          <li
            key={competencia}
            className="px-4 py-2 text-sm font-medium text-gray-300 bg-card border border-cardBorder rounded-full shadow-sm hover:border-primary/50 hover:text-white hover:-translate-y-0.5 transition-all cursor-default"
          >
            {competencia}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Competencias;
