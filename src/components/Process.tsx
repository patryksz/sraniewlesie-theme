import { MessageSquare, FileText, Calendar, Sparkles, ArrowRight, Users } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Discovery Call',
    description: 'Rozmowa z decydentem. Pytamy o wyzwania, cele, dynamikę zarządu. Nie sprzedajemy - diagnozujemy.'
  },
  {
    icon: FileText,
    title: 'Custom Design',
    description: 'Projektujemy retreat pod Wasze potrzeby. Nie ma szablonów - każdy zespół ma inne wyzwania. Przedstawiamy koncept do zatwierdzenia.'
  },
  {
    icon: Calendar,
    title: 'Logistics & Prep',
    description: 'Zajmujemy się wszystkim: lokalizacja, sprzęt, catering, ubezpieczenie. Wy tylko potwierdzacie termin i skład. Zero organizacyjnego stresu.'
  },
  {
    icon: Sparkles,
    title: 'Execution',
    description: 'Od momentu przyjazdu - Wasz zespół jest w naszych rękach. My prowadzimy proces, Wy skupiacie się na tym, co ważne. Po zakończeniu: raport i follow-up.'
  }
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-emerald-100 px-4 py-2 rounded-full mb-6">
            <span className="text-sm font-semibold text-emerald-900">Jak to działa?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Od pierwszego kontaktu do wdrożenia
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Proces zaprojektowany dla zajętych ludzi. Minimum Waszego czasu, maksimum efektu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-gradient-to-br from-emerald-50 to-white p-8 rounded-2xl border border-emerald-100 text-center h-full hover:border-emerald-300 transition-all">
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
                <div className="hidden lg:flex absolute top-1/2 -right-7 -translate-y-1/2 z-10 items-center">
                  <ArrowRight className="w-6 h-6 text-emerald-400" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-emerald-50 to-white border border-emerald-200 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Typowy timeline</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">2-4 tyg</div>
              <div className="text-gray-600">Od kontaktu do konceptu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">4-8 tyg</div>
              <div className="text-gray-600">Do realizacji retreatu</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">1-2 tyg</div>
              <div className="text-gray-600">Follow-up i raport</div>
            </div>
          </div>
          <p className="text-center text-gray-500 mt-6 text-sm">
            *Terminy mogą być skrócone w pilnych przypadkach, bądź wydłużone przez warunki pogodowe (tych jedynych nie kontrolujemy).
          </p>
        </div>
      </div>
    </section>
  );
}
