import { Users, Flame, Compass, Brain, Target, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'Executive Retreats',
    description: 'Dla zarządów i C-level. 48 godzin bez notyfikacji. Strategia, która nie rodzi się w PowerPoint.',
    features: ['Sesje strategiczne w terenie', 'Czas na trudne rozmowy', 'Decyzje z perspektywy']
  },
  {
    icon: Target,
    title: 'Leadership w praktyce',
    description: 'Kto prowadzi, gdy nie ma tytułu? Kto decyduje, gdy nikt nie musi słuchać? Las to test.',
    features: ['Naturalne przywództwo', 'Decyzje pod presją', 'Autentyczna współpraca']
  },
  {
    icon: Shield,
    title: 'Zarząd offline',
    description: 'Wiecie wszystko o KPI. Ale czy znacie siebie nawzajem? Las zmusza do obecności.',
    features: ['Prawdziwe rozmowy', 'Budowanie zaufania', 'Poznanie poza rolami']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-emerald-800/90 backdrop-blur-sm bg-gradient-to-br from-emerald-900/20 via-emerald-800/20 to-emerald-950/20 text-white overflow-hidden min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold">Dla kogo?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Kadra zarządzająca, która myśli poważnie
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            To nie jest wyjazd integracyjny. To narzędzie dla CEO, zarządów i partnerów, 
            którzy rozumieją, że <span className="text-emerald-300">najlepsze decyzje nie rodzą się w biurze</span>.
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
          <h3 className="text-2xl font-bold mb-6 text-center">Typowi uczestnicy</h3>
          <div className="grid md:grid-cols-2 gap-6 text-emerald-100">
            <div>
              <h4 className="font-semibold text-white mb-3">Idealny profil:</h4>
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
                  <span>C-level executives (CFO, COO, CTO)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>Senior leadership teams</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-3">Dla firm, które:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>Stoją przed strategicznym zwrotem</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>Budują nowy zarząd lub partnership</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>Potrzebują autentycznego zaufania na górze</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-3 mt-2"></div>
                  <span>Rozumieją wartość czasu poza biurem</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
