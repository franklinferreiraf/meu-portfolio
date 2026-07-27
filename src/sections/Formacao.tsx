import { formacoes, idiomas } from '../data';

const Formacao = () => {
  return (
    <section id="formacao" aria-labelledby="formacao-title" className="py-20 border-t border-cardBorder/50">
      <div className="mb-12">
        <h2 id="formacao-title" className="text-3xl md:text-4xl font-bold text-white mb-4">
          Formação & <span className="text-gradient">Idiomas</span>
        </h2>
        <p className="text-muted text-base md:text-lg max-w-2xl">
          Formação acadêmica e proficiência em idiomas.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Formação Acadêmica */}
        <div className="lg:col-span-2">
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Formação Acadêmica</h3>
          <ul className="space-y-4">
            {formacoes.map((formacao) => (
              <li key={formacao.id} className="bg-card border border-cardBorder rounded-2xl p-6 card-hover flex items-start gap-4">
                <div className="w-12 h-12 flex-shrink-0 bg-primary/10 border border-primary/20 rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold text-lg">{formacao.curso}</h4>
                  <p className="text-muted text-sm mt-0.5">{formacao.instituicao}</p>
                  <span className="inline-block mt-3 text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20 rounded-full px-3 py-1">
                    {formacao.periodo}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Idiomas */}
        <div>
          <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">Idiomas</h3>
          <ul className="space-y-4">
            {idiomas.map((idioma) => (
              <li key={idioma.id} className="bg-card border border-cardBorder rounded-2xl p-6 card-hover flex items-center justify-between">
                <span className="text-white font-semibold text-lg">{idioma.idioma}</span>
                <span className="text-xs font-bold text-secondary bg-secondary/10 border border-secondary/20 rounded-full px-3 py-1">
                  {idioma.nivel}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Formacao;
