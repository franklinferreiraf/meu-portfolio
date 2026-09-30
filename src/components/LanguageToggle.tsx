import { IDIOMAS } from '../i18n/context';
import { useLanguage } from '../i18n/useLanguage';

/** Seletor PT/EN exibido no header. A escolha é persistida pelo LanguageProvider. */
const LanguageToggle = () => {
  const { idioma, setIdioma, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.nav.languageLabel}
      className="flex items-center p-0.5 bg-card border border-cardBorder rounded-lg text-xs font-bold"
    >
      {IDIOMAS.map((opcao) => {
        const ativo = opcao === idioma;
        return (
          <button
            key={opcao}
            type="button"
            lang={opcao === 'pt' ? 'pt-BR' : 'en'}
            onClick={() => setIdioma(opcao)}
            aria-pressed={ativo}
            aria-label={t.nav.languageNames[opcao]}
            className={`px-2.5 py-1 rounded-md uppercase tracking-wider transition-colors ${
              ativo ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-muted hover:text-white'
            }`}
          >
            {opcao}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageToggle;
