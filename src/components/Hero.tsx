import { TreePine, ArrowRight } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <nav className="relative z-10 container mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <TreePine className="w-8 h-8" />
            <span className="text-2xl font-bold">SranieWLesie.pl</span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="hover:text-emerald-300 transition-colors">Oferta</a>
            <a href="#benefits" className="hover:text-emerald-300 transition-colors">Korzyści</a>
            <a href="#process" className="hover:text-emerald-300 transition-colors">Jak to działa</a>
            <a href="#contact" className="hover:text-emerald-300 transition-colors">Kontakt</a>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-24 md:py-32">
        <div className="max-w-4xl">
          <div className="inline-block bg-emerald-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Szkolenia B2B dla firm</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Wyprowadź swój zespół
            <span className="block text-emerald-300">w las</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-emerald-50 leading-relaxed max-w-2xl">
            Zapomnij o nudnych salach konferencyjnych. Organizujemy wyjątkowe obozy integracyjne
            dla firm, gdzie natura spotyka się z rozwojem biznesowym.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={scrollToContact}
              className="bg-white text-emerald-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              Zapytaj o ofertę
              <ArrowRight className="w-5 h-5" />
            </button>
            <a
              href="#services"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all flex items-center justify-center gap-2"
            >
              Zobacz ofertę
            </a>
          </div>
        </div>
      </div>

      <div className="relative z-10 bg-emerald-950/50 backdrop-blur-sm border-t border-emerald-700/50">
        <div className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">500+</div>
              <div className="text-emerald-100">Zadowolonych uczestników</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">50+</div>
              <div className="text-emerald-100">Zrealizowanych obozów</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">100%</div>
              <div className="text-emerald-100">Natury</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-emerald-300 mb-2">0%</div>
              <div className="text-emerald-100">PowerPointa</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
