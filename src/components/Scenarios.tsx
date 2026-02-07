import { Flame, MapPin, Footprints, Users, Brain, Target } from 'lucide-react';
import bg from "@assets/img/bg/pines-forest.jpg"

const scenarios = [
  {
    icon: Brain,
    title: 'Strategy Retreat',
    tagline: 'Deep Work Session',
    description: '48h offline. Zero slajdów, zero sal konferencyjnych. Ogień, las, trudne pytania. Pracowaliście nad strategią w biurze - teraz przetestujcie ją w terenie. Decyzje podejmują się łatwiej, gdy macie czas pomyśleć.',
    highlights: ['Sesje strategiczne 2-4h', 'Moderowane rozmowy przy ognisku', 'Czas na indywidualne refleksje', 'Konkretne wnioski i action points']
  },
  {
    icon: Target,
    title: 'Leadership Test',
    tagline: 'Who Leads When Nobody Has To Follow',
    description: 'Bez tytułów, bez hierarchii. Navigacja w terenie, rozpalanie ognia, organizacja obozu. Kto decyduje? Kto prowadzi? Kto słucha? Zarząd poznaje siebie w sytuacji, gdzie nikt nikogo nie musi słuchać.',
    highlights: ['Scenariusze decyzyjne', 'Naturalne role w zespole', 'Test komunikacji pod presją', 'Feedback 360° w praktyce']
  },
  {
    icon: Users,
    title: 'Board Bonding',
    tagline: 'Beyond The Boardroom',
    description: 'Znacie się z Zoom i z kwartałów. Ale czy naprawdę się znacie? Dwa dni bez masek korporacyjnych. Wspólne gotowanie, noc pod gwiazdami, rozmowy do rana. Zaufanie buduje się offline.',
    highlights: ['Wspólne wyzwania', 'Autentyczne rozmowy', 'Budowanie zaufania', 'Poznanie poza rolami']
  }
];

export default function Scenarios() {
  return (
    <section id="scenarios" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundAttachment: 'scroll'
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-900/85 to-emerald-950/90"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16 text-white">
          <div className="inline-block bg-emerald-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Przykładowe formaty</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Jak może wyglądać executive retreat?
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Każdy program projektujemy indywidualnie pod zarząd. To nie są szablony - to scenariusze, które działają.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-800/40 to-emerald-900/40 backdrop-blur-sm border border-emerald-600/50 rounded-2xl overflow-hidden hover:border-emerald-500/70 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="p-8">
                <div className="bg-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                  <scenario.icon className="w-8 h-8 text-white" />
                </div>

                <div className="text-center mb-4">
                  <div className="text-xs text-emerald-300 uppercase tracking-wider mb-2 font-semibold">
                    {scenario.tagline}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {scenario.title}
                  </h3>
                </div>

                <p className="text-emerald-100 mb-6 leading-relaxed text-center">
                  {scenario.description}
                </p>

                <div className="space-y-2">
                  {scenario.highlights.map((highlight, hIndex) => (
                    <div key={hIndex} className="flex items-center text-emerald-200 text-sm">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-emerald-800/30 backdrop-blur-sm border border-emerald-600/40 rounded-xl p-8 max-w-3xl mx-auto">
            <p className="text-lg text-emerald-50 leading-relaxed mb-4">
              <span className="text-emerald-300 font-semibold">Uwaga:</span> To nie są gotowe pakiety. 
              Każdy retreat projektujemy pod konkretny zarząd. Rozmawiamy o wyzwaniach, celach, dynamice zespołu. 
            </p>
            <p className="text-emerald-100">
              Las jest narzędziem. Wy decydujecie, do czego go używamy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
