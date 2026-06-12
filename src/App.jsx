import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Sobre from './sections/Sobre';
import Projetos from './sections/Projetos';
import Habilidades from './sections/Habilidades';
import Experiencia from './sections/Experiencia';
import Contato from './sections/Contato';
import Footer from './components/Footer';
import Metrics from './sections/Metrics';
import Salesforce from './sections/Salesforce';
import Certificacoes from './sections/Certificacoes';
import ProjectDetail from './pages/ProjectDetail';

function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Salesforce />
      <Experiencia />
      <Certificacoes />
      <Contato />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen text-white font-sans relative">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 sm:px-12">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projeto/:id" element={<ProjectDetail />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
