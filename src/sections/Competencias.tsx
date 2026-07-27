import { competencias } from '../data';

const Competencias = () => {
  return (
    <section id="competencias" aria-labelledby="competencias-title" className="py-20 border-t border-cardBorder/50">
      <div className="mb-12">
        <h2 id="competencias-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
          Compet<span className="text-gradient">ências</span>
        </h2>
        <p className="text-muted text-base md:text-lg max-w-2xl">
          Principais tecnologias, ferramentas e metodologias que domino e aplico no dia a dia.
        </p>
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
