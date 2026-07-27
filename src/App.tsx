import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Metrics from './sections/Metrics';
import Sobre from './sections/Sobre';
import Projetos from './sections/Projetos';
import Habilidades from './sections/Habilidades';
import Experiencia from './sections/Experiencia';
import Competencias from './sections/Competencias';
import Formacao from './sections/Formacao';
import Certificacoes from './sections/Certificacoes';
import Contato from './sections/Contato';
import Footer from './components/Footer';

// Code splitting: a página de detalhe do projeto só é carregada quando acessada.
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'));

function HomePage() {
  return (
    <>
      <Hero />
      <Metrics />
      <Sobre />
      <Projetos />
      <Habilidades />
      <Experiencia />
      <Competencias />
      <Formacao />
      <Certificacoes />
      <Contato />
    </>
  );
}

function RouteFallback() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center" role="status" aria-live="polite">
      <div className="w-10 h-10 border-2 border-cardBorder border-t-primary rounded-full animate-spin" aria-hidden="true"></div>
      <span className="sr-only">Carregando…</span>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen text-white font-sans relative">
        <Navbar />
        <main className="max-w-7xl mx-auto px-6 sm:px-12">
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projeto/:id" element={<ProjectDetail />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
