import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Philosophy />
      <Services />
      <Benefits />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
