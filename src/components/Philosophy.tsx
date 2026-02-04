import { Leaf, TreePine, Wind } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy">
      <div className="relative bg-gradient-to-br from-emerald-900/20 via-emerald-800/20 to-emerald-950/20 text-white overflow-hidden min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-900/80 via-emerald-800/80 to-emerald-950/80"></div>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(20px) rotate(-5deg); }
        }
        .float-1 { animation: float 6s ease-in-out infinite; }
        .float-2 { animation: float-reverse 8s ease-in-out infinite 1s; }
        .float-3 { animation: float 7s ease-in-out infinite 0.5s; }
        .float-4 { animation: float-reverse 9s ease-in-out infinite 1.5s; }
      `}</style>
      
      {/* Animated SVG shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 opacity-5 float-1">
          <Leaf className="w-32 h-32 text-emerald-300" />
        </div>
        <div className="absolute top-20 right-20 opacity-5 float-2">
          <TreePine className="w-40 h-40 text-emerald-300" />
        </div>
        <div className="absolute bottom-20 left-1/4 opacity-5 float-3">
          <Wind className="w-36 h-36 text-emerald-300" />
        </div>
        <div className="absolute bottom-10 right-10 opacity-5 float-4">
          <Leaf className="w-28 h-28 text-emerald-300" />
        </div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block bg-emerald-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">O co chodzi?</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Offline
            </h2>
            <p className="text-xl text-emerald-100 leading-relaxed">
              Zachwycać życiem można się po polsku, norwesku, duńsku, japońsku, po swojemu. Każdy naród ma termin na głębokie przeżywanie, ale mało kto potrafi głęboko przeżywać.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-emerald-800/40 backdrop-blur-sm border border-emerald-600/50 p-8 rounded-xl">
              <Leaf className="w-8 h-8 text-emerald-300 mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-3 text-center">Fytoncydy</h3>
              <p className="text-emerald-100 leading-relaxed">
                Stop and smell the roses. Lotna chemia lasu, jego terpenowy areozol od zawsze nam towarzyszył, ale dopiero od niedawna został zastąpiony zapachem miasta.
              </p>
            </div>

            <div className="bg-emerald-800/40 backdrop-blur-sm border border-emerald-600/50 p-8 rounded-xl">
              <TreePine className="w-8 h-8 text-emerald-300 mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-3 text-center">Resynchronizacja</h3>
              <p className="text-emerald-100 leading-relaxed">
                Nasz zegar biologiczny się rozregulował. Las ma rytm. Kiedy ostatnio miałeś chociaż godzinę dla siebie, bez notyfikacji, muzyki, syntetycznych sygnałów?
              </p>
            </div>

            <div className="bg-emerald-800/40 backdrop-blur-sm border border-emerald-600/50 p-8 rounded-xl">
              <Wind className="w-8 h-8 text-emerald-300 mb-4 mx-auto" />
              <h3 className="text-lg font-bold mb-3 text-center">Ścieżka powrotna</h3>
              <p className="text-emerald-100 leading-relaxed">
                Wejdziecie razem i wyjdziecie razem, ale razem też coś zyskacie. Poznacie siebie nazwajem, ale dowiecie się czegoś o sobie. I to coś zostanie na zawsze.
              </p>
            </div>
          </div>

          <div className="bg-emerald-800/20 backdrop-blur-sm border border-emerald-600/30 p-8 rounded-xl">
            <p className="text-lg text-emerald-100 leading-relaxed">
              Nie sprzedajemy uzdrawiania, ani duchowości. Sprzedajemy czas i przestrzeń. 
              Reszta - to natura robi sama. Wy tylko musicie tam przyjść i pozwolić się sobie nawzajem poznać.
            </p>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
}
