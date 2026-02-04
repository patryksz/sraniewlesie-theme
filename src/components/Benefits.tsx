import { Brain, Heart, Zap, Shield, Sparkles, Users } from 'lucide-react';

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-6">

        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Czujesz, że zespół potrzebuje pauzy?
          </h3>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Wiele firm już wie - najlepsze integracje to te bez nacisku, bez powodów biznesowych. Po prostu dobry czas razem.
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all transform hover:scale-105"
          >
            Napiszcie do nas
          </button>
        </div>
      </div>
    </section>
  );
}
