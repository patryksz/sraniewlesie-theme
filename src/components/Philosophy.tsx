import { Leaf, TreePine, Wind } from 'lucide-react';

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1179229/pexels-photo-1179229.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>
      
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
    </section>
  );
}
