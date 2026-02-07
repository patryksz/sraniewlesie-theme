import { Tent, Users, Trophy, Target, Compass, Flame } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Obecność',
    description: 'Obcujemy z lasem, słuchamy, oddychamy. W trakcie zajęć ciągle jesteśmy uważni.',
    features: ['Godziny w naturze', 'Celowa obecność', 'Cisza i słuchanie']
  },
  {
    icon: Flame,
    title: 'Powrót do ognia',
    description: 'Ogień daje przestrzeń - do ogrzania się, przygotowania jedzenia, do zajrzenia i słuchania.',
    features: ['Wspólne gotowanie', 'Wieczory przy ognisku', 'Rozmowy przez noc']
  },
  {
    icon: Compass,
    title: 'Droga bez kierunku',
    description: 'Zajęcia są zaplanowane, ale to grupa prowadzi.',
    features: ['Spacery bez celu (albo z celem)', 'Wspólne odkrywanie', 'Proces, nie harmonogram']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-emerald-800/90 backdrop-blur-sm bg-gradient-to-br from-emerald-900/20 via-emerald-800/20 to-emerald-950/20 text-white overflow-hidden min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dlaczego las?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Przez niemal całą historię ludzkości żyliśmy poza miastami, w rytmie natury. Miasta to bardzo nowy wynalazek. <span className="text-emerald-600">Wróć do lasu.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
      </div>
    </section>
  );
}
