import { Brain, Heart, Zap, Shield, Sparkles, Users } from 'lucide-react';
import bg from "@assets/img/bg/pines-forest.jpg"

export default function Interruption() {
  return (
    <section id="interruption" className="py-24 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-6">

        <div className="relative rounded-2xl overflow-hidden text-white text-center">
  {/* Tło */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundAttachment: 'scroll'
    }}
  ></div>

  {/* Overlay gradient */}
  <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/70 to-emerald-700/70"></div>

  {/* Treść */}
  <div className="relative p-12">
    <h3 className="text-3xl md:text-4xl font-bold mb-4">
      Ostatni Q pokazał, że strategia wymaga korekty?
    </h3>
    <p className="text-xl text-emerald-50 mb-2 max-w-3xl mx-auto">
      Kolejne meeting room nie da Wam odpowiedzi. 
    </p>
    <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
      Czasem najlepsze decyzje powstają, gdy przestajecie udawać, że wszystko pod kontrolą.
    </p>
    <button
      onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
      className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all transform hover:scale-105"
    >
      Zarezerwuj executive retreat
    </button>
  </div>
</div>

      </div>
    </section>
  );
}
