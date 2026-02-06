import Hero from './components/Hero';
import Philosophy from './components/Philosophy';
import Services from './components/Services';
import Scenarios from './components/Scenarios';
import Interruption from './components/Interruption';
import Process from './components/Process';
import Contact from './components/Contact';
import Footer from './components/Footer';
import bg from "@assets/img/bg/snow-forest.jpg"

function App() {
  return (
    <div className="relative">
      {/* Fixed background */}
      <div 
        className="fixed inset-0 -z-10 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg})` }}
      />
      
      {/* Content */}
      <Hero />
      <Philosophy />
      <Services />
      <Scenarios />
      <Interruption />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
