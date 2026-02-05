import { Flame, MapPin, Footprints } from 'lucide-react';
import bg from "@assets/img/bg/pines-forest.jpg"

const scenarios = [
  {
    icon: Flame,
    title: 'Noc w lesie',
    tagline: 'Extraordinary Overnight Camp',
    description: 'Razem zbieracie drewno. Razem rozniecacie ogień. Razem przygotowujecie posiłek. Wszystko powoli, bez pośpiechu. Wieczór przy ognisku, rozmowy do białego rana, sen pod gwiazdami.',
    highlights: ['Zbieranie drewna', 'Rozpalanie ogniska', 'Wspólne gotowanie', 'Noc pod gwiazdami']
  },
  {
    icon: MapPin,
    title: 'Gry w lesie',
    tagline: 'Forest Games & Opencaching',
    description: 'Przed głównym obozem rozgrzewamy się. Opencaching, tropienie, nawigacja bez GPS. Zespół uczy się współpracy w terenie, czytania mapy, podejmowania decyzji pod presją czasu.',
    highlights: ['Opencaching', 'Nawigacja terenowa', 'Współpraca pod presją', 'Czytanie mapy']
  },
  {
    icon: Footprints,
    title: 'Polowanie',
    tagline: 'Ed Stafford Vibe',
    description: 'Uciekam w las. Zespół musi mnie odnaleźć. To test strategii, komunikacji i determinacji. Kto podejmie inicjatywę? Kto poprowadzi? Kto się nie podda? Prawdziwy test zespołu w akcji.',
    highlights: ['Test strategii', 'Naturalne przywództwo', 'Komunikacja w terenie', 'Determinacja zespołu']
  }
];

export default function Scenarios() {
  return (
    <section id="scenarios" className="relative py-24 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundAttachment: 'fixed',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-b from-emerald-950/90 via-emerald-900/85 to-emerald-950/90"></div>

      <div className="relative z-10 container mx-auto px-6">
        <div className="text-center mb-16 text-white">
          <div className="inline-block bg-emerald-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Przykładowe scenariusze</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Jak to może wyglądać?
          </h2>
          <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
            Każdy wyjazd dostosowujemy do zespołu. Oto kilka przykładów tego, co możemy razem zrobić.
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
            <p className="text-lg text-emerald-50 leading-relaxed">
              To tylko przykłady. Każdy obóz projektujemy indywidualnie. Razem z Wami tworzymy program,
              który odpowiada potrzebom Waszego zespołu. <span className="text-emerald-300 font-semibold">Żadnych szablonów.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
