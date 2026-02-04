import { Brain, Heart, Zap, Shield, Sparkles, Users } from 'lucide-react';

const benefits = [
  {
    icon: Brain,
    title: 'Zwiększona kreatywność',
    description: 'Natura stymuluje mózg do nieszablonowego myślenia. Czas spędzony w lesie zwiększa kreatywność o 50%.'
  },
  {
    icon: Heart,
    title: 'Prawdziwa integracja',
    description: 'Nie ma lepszego sposobu na poznanie współpracowników niż wspólne wyzwania i przygody w terenie.'
  },
  {
    icon: Zap,
    title: 'Energia i motywacja',
    description: 'Świeże powietrze, ruch i brak ekranów to najlepsza regeneracja dla zapracowanych zespołów.'
  },
  {
    icon: Shield,
    title: 'Budowanie zaufania',
    description: 'W lesie liczy się autentyczność. To buduje prawdziwe zaufanie między członkami zespołu.'
  },
  {
    icon: Sparkles,
    title: 'Niezapomniane wrażenia',
    description: 'To nie będzie kolejne nudne szkolenie. To doświadczenie, o którym będzie się mówiło latami.'
  },
  {
    icon: Users,
    title: 'Lepsza współpraca',
    description: 'Wspólne rozwiązywanie problemów w terenie przekłada się na lepszą współpracę w biurze.'
  }
];

export default function Benefits() {
  return (
    <section id="benefits" className="py-24 bg-gradient-to-br from-emerald-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dlaczego las?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Nauka przez doświadczenie w naturalnym środowisku przynosi realne rezultaty
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Gotowi na przygodę?
          </h3>
          <p className="text-xl text-emerald-50 mb-8 max-w-2xl mx-auto">
            Dołącz do grona firm, które już odkryły moc szkoleń w naturalnym środowisku
          </p>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-emerald-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-50 transition-all transform hover:scale-105"
          >
            Skontaktuj się z nami
          </button>
        </div>
      </div>
    </section>
  );
}
