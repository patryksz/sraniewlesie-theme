import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import bg from "@assets/img/bg/snow-forest.jpg"

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
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
