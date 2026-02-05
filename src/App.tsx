import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Scenarios from './components/Scenarios';
import Benefits from './components/Benefits';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import bg from "@assets/img/bg/snow-forest.jpg"

function App() {
  return (
    <div className="min-h-screen
    bg-no-repeat
    bg-[length:140%] bg-center
    sm:bg-[length:130%]
    md:bg-[length:130%]
    
    bg-scroll md:bg-fixed" style={{ backgroundImage: `url(${bg})`, backgroundAttachment: 'fixed', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Hero />
      <Philosophy />
      <Services />
      <Scenarios />
      <Benefits />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
