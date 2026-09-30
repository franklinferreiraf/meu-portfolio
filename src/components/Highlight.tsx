/**
 * Renderiza um texto das traduções destacando com gradiente o trecho entre chaves.
 * Ex.: "Sobre {Mim}" → Sobre <span class="text-gradient">Mim</span>
 */
const Highlight = ({ text }: { text: string }) => (
  <>
    {text.split(/\{(.+?)\}/).map((parte, i) =>
      i % 2 === 1 ? (
        <span key={i} className="text-gradient">
          {parte}
        </span>
      ) : (
        parte
      ),
    )}
  </>
);

export default Highlight;
