import { MessageSquare, FileText, Calendar, Sparkles } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Rozmowa',
    description: 'Kontakt. Opowiadacie nam o zespole, o tym co czujecie. My słuchamy. Nie sprzedajemy - pytamy.'
  },
  {
    icon: FileText,
    title: 'Plan',
    description: 'Planujemy wspólnie - Wy znacie swój zespół, my znamy las. Dogadamy się.'
  },
  {
    icon: Calendar,
    title: 'Przygotowanie',
    description: 'My przygotowujemy trasy, logistykę, możliwości, ubieramy w formę do zatwierdzenia. '
  },
  {
    icon: Sparkles,
    title: 'Przyjazd',
    description: 'Od tej pory Wasz zespół jest w naszych rękach. Każdy przeżyje przegodę na swój sposób.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Jak to działa?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proste kroki do Waszego wymarzonego obozu firmowego
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100 text-center h-full">
                <div className="bg-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 relative">
                  <step.icon className="w-8 h-8 text-white" />
                  <div className="absolute -top-2 -right-2 bg-emerald-900 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <div className="w-8 h-0.5 bg-emerald-300"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
