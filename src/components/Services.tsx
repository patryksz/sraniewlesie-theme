import { Tent, Users, Trophy, Target, Compass, Flame } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Team Building w Terenie',
    description: 'Zamiast trust fall w biurze - prawdziwe wyzwania teamowe w środku lasu. Budowanie schronień, organizacja obozowiska i wspólne gotowanie na ognisku.',
    features: ['Gry survivalowe', 'Zadania zespołowe', 'Przygody na świeżym powietrzu']
  },
  {
    icon: Target,
    title: 'Warsztaty Strategiczne',
    description: 'Planowanie strategii biznesowej z dala od rozpraszających ekranów. Las to idealne miejsce na fokus i kreatywne myślenie.',
    features: ['Sesje strategiczne outdoor', 'Moderacja doświadczonych trenerów', 'Naturalna detoksykacja cyfrowa']
  },
  {
    icon: Trophy,
    title: 'Leadership w Dziczy',
    description: 'Odkryj prawdziwe przywództwo w warunkach, gdzie liczy się decyzyjność, empatia i współpraca. Żadnych slajdów - sama praktyka.',
    features: ['Treningi przywódcze', 'Symulacje kryzysowe', 'Rozwój umiejętności menedżerskich']
  },
  {
    icon: Compass,
    title: 'Integracja z Przygodą',
    description: 'Niech Twój zespół pozna się z zupełnie nowej strony. Orientacja w terenie, wspólne wyprawy i wieczory przy ognisku.',
    features: ['Gry terenowe', 'Wspólne wyzwania', 'Nieformalna atmosfera']
  },
  {
    icon: Flame,
    title: 'Motywacja & Reset',
    description: 'Czasem firmie potrzeba resetu. Las daje przestrzeń do oddechu, refleksji i powrotu z nowymi pomysłami i energią.',
    features: ['Mindfulness w naturze', 'Warsztaty motywacyjne', 'Odnowa mentalna']
  },
  {
    icon: Tent,
    title: 'Eventy Firmowe',
    description: 'Od małych wyjazdów po duże eventy korporacyjne. Zapewniamy całą infrastrukturę, jedzenie i profesjonalną opiekę.',
    features: ['Pełna organizacja', 'Catering leśny', 'Bezpieczeństwo i komfort']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Co oferujemy?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Kompleksowa oferta obozów korporacyjnych dostosowana do potrzeb Twojej firmy
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100 hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="bg-emerald-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-2">
                {service.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center text-gray-700">
                    <div className="w-1.5 h-1.5 bg-emerald-600 rounded-full mr-3"></div>
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
