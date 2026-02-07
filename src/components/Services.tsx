import { Users, Flame, Compass, Brain, Target, Shield } from 'lucide-react';

const services = [
  {
    icon: Flame,
    title: 'Powrót do ognia',
    description: 'Przez 99% historii ludzkości siedzieliśmy przy ognisku. Nie w sale conference room. Ogień daje przestrzeń - do rozmów, które nie zdarzają się w biurze.',
    features: ['Wspólne gotowanie', 'Wieczory przy ognisku', 'Rozmowy bez agendy']
  },
  {
    icon: Compass,
    title: 'Natura jako kontekst',
    description: 'Las nie dba o Wasz budżet ani o KPI. To zmusza do obecności. Bez notyfikacji, bez Slacka, bez "muszę skoczyć na 5 minut".',
    features: ['Pełna obecność', 'Czas bez zakłóceń', 'Reset umysłu']
  },
  {
    icon: Users,
    title: 'Poznanie poza rolami',
    description: 'W sali konferencyjnej jesteście w rolach. W lesie - po prostu ludźmi. Decyzje podejmują ludzie, którzy się nawzajem znają.',
    features: ['Autentyczne rozmowy', 'Budowanie zaufania', 'Relacje, nie tytuły']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-emerald-800/90 backdrop-blur-sm bg-gradient-to-br from-emerald-900/20 via-emerald-800/20 to-emerald-950/20 text-white overflow-hidden min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Dlaczego las?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Miasto to bardzo nowy wynalazek
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            Przez niemal całą historię ludzkości żyliśmy poza miastami, w rytmie natury. 
            Sale konferencyjne mamy od około 100 lat. <span className="text-emerald-300">Las - od zawsze.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-800/40 to-emerald-900/40 backdrop-blur-sm border border-emerald-600/50 p-8 rounded-2xl hover:border-emerald-500/70 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-white mb-3">
                {service.title}
              </h3>

              <p className="text-emerald-100 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-emerald-200">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="bg-emerald-800/20 backdrop-blur-sm border border-emerald-600/30 p-12 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Dla kogo?</h3>
          <div className="grid md:grid-cols-2 gap-6 text-emerald-100">
            <div>
              <h4 className="font-semibold text-white mb-3">Typowi uczestnicy:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>CEO i członkowie zarządu</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>Partnerzy i współwłaściciele</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>C-level executives</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>Senior leadership teams</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Kiedy ma sens?</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>Strategiczny zwrot w firmie</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>Nowy zarząd lub partnership</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>Potrzeba zaufania na górze</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>Czas bez rozpraszaczy</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}