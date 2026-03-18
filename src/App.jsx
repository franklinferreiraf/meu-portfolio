// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Sobre from './sections/Sobre';
import Projetos from './sections/Projetos';
import Habilidades from './sections/Habilidades';
import Experiencia from './sections/Experiencia';
import Contato from './sections/Contato'; // Importando Contato
import Footer from './components/Footer'; // Importando Footer

function App() {
  return (
    <div className="bg-background min-h-screen text-white font-sans relative">
      <Navbar />
      <main className="max-w-7xl mx-auto px-6 sm:px-12">
        <Hero />
        <Sobre />
        <Projetos />
        <Habilidades />
        <Experiencia />
        <Contato /> {/* A nova seção de Contato */}
      </main>
      <Footer /> {/* O rodapé, fora do main mas dentro do container principal */}
    </div>
  );
}

export default App;