  import { TreePine, ArrowRight } from 'lucide-react';
  import bg from "@assets/img/bg/pines-forest.jpg"
  import Logo from "./Logo.tsx";

  export default function Hero() {
    const scrollToContact = () => {
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
      <div className="relative bg-gradient-to-br from-emerald-900/20 via-emerald-800/20 to-emerald-950/20 text-white overflow-hidden min-h-screen">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/80 via-emerald-800/80 to-emerald-950/80"></div>

        <nav className="relative z-10 container mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <Logo className="w-full" />
            <div className="hidden md:flex gap-8">
              <a href="#philosophy" className="hover:text-emerald-300 transition-colors">Dlaczego las?</a>
              <a href="#services" className="hover:text-emerald-300 transition-colors">Dla kogo?</a>
              <a href="#scenarios" className="hover:text-emerald-300 transition-colors">Scenariusze</a>
              <a href="#process" className="hover:text-emerald-300 transition-colors">Proces</a>
              <a href="#contact" className="hover:text-emerald-300 transition-colors">Kontakt</a>
            </div>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            <div className="inline-block bg-emerald-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">Dla kadry zarządzającej i liderów</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Strategia rodzi się
              <span className="block text-emerald-300">poza biurem</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-emerald-50 leading-relaxed max-w-2xl">
              Dla CEO, zarządów i top management. Las daje to, czego nie da sala konferencyjna - <span className="text-emerald-300">przestrzeń do myślenia</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Rezerwuj executive retreat
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href="#services"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
              >
                Zobacz program
              </a>
            </div>
          </div>
        </div>

        <div className="relative z-10 bg-emerald-950/50 backdrop-blur-sm border-t border-emerald-700/50">
          <div className="container mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">Strategia</div>
                <div className="text-emerald-100">w spokoju lasu</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">Leadership</div>
                <div className="text-emerald-100">przez doświadczenie</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">Zarząd</div>
                <div className="text-emerald-100">który się słucha</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">Decyzje</div>
                <div className="text-emerald-100">z perspektywy</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
