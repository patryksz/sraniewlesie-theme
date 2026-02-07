import { Mail, Phone, MapPin, Send, Calendar } from 'lucide-react';
import { useState } from 'react';
import ForestMap from './ForestMap.tsx';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState<'success' | 'error' | ''>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setMessageType('');

    const form = e.currentTarget as HTMLFormElement;
    const formData = new FormData(form);

    try {
      const response = await fetch('/send-mail.php', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Dziękujemy. Skontaktujemy się w ciągu 24h.');
        setMessageType('success');
        form.reset();

        setTimeout(() => {
          setMessage('');
          setMessageType('');
        }, 5000);
      } else {
        setMessage(result.error || 'Wystąpił błąd. Prosimy o kontakt mailowy.');
        setMessageType('error');

        setTimeout(() => {
          setMessage('');
          setMessageType('');
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setMessage('Wystąpił błąd. Prosimy o kontakt mailowy.');
      setMessageType('error');

      setTimeout(() => {
        setMessage('');
        setMessageType('');
      }, 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-emerald-900/80 to-emerald-950/80 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">

          <div>
            <div className="inline-block bg-emerald-700/50 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-sm font-semibold">Kontakt</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Zacznijmy od rozmowy
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Każdy retreat zaczynamy od discovery call. Nie sprzedajemy - słuchamy. 
              Opowiedzcie nam o zarządzie, wyzwaniach, oczekiwaniach. Decydujemy wspólnie, 
              czy las jest dobrym rozwiązaniem.
            </p>

            <div className="space-y-6 mb-12">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-700 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:kontakt@spaniewlesie.pl" className="text-emerald-300 hover:text-emerald-200 transition-colors">
                    kontakt@spaniewlesie.pl
                  </a>
                  <p className="text-sm text-emerald-200 mt-1">Odpowiadamy w ciągu 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-700 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Telefon</div>
                  <a href="tel:+48577161291" className="text-emerald-300 hover:text-emerald-200 transition-colors">
                    +48 577 161 291
                  </a>
                  <p className="text-sm text-emerald-200 mt-1">Pn-Pt 9:00-17:00</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-700 p-3 rounded-lg">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Discovery Call</div>
                  <p className="text-emerald-200">45-60 minut, online lub osobiście</p>
                  <p className="text-sm text-emerald-200 mt-1">Bezpłatnie, bez zobowiązań</p>
                </div>
              </div>
            </div>

            <div className="bg-emerald-800/30 backdrop-blur-sm border border-emerald-600/40 rounded-2xl p-8 hover:border-emerald-500/60 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-center">Zasięg</h3>
              <p className="text-emerald-100 text-center mb-6">
                Organizujemy retreaty w całej Polsce. Od Tatr po Mazury - znajdziemy właściwe miejsce.
              </p>
              <div className="flex justify-center">
                <ForestMap />
              </div>
            </div>
          </div>


          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-lg relative">
            <h3 className="text-2xl font-bold mb-2">Szybki kontakt</h3>
            <p className="text-gray-600 mb-6">Wypełnij formularz - oddzwonimy w ciągu 24h</p>

            {message && (
              <div
                className={`
                  absolute top-4 left-1/2 transform -translate-x-1/2 w-full md:w-3/4 px-4 py-3 rounded-lg text-center font-medium transition-all z-20
                  ${messageType === 'success' ? 'bg-emerald-600 text-white' : ''}
                  ${messageType === 'error' ? 'bg-red-600 text-white' : ''}
                  animate-fadeIn
                `}
              >
                {message}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="company" className="block text-sm font-semibold mb-2">Firma *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Nazwa firmy"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold mb-2">Imię i nazwisko *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Jan Kowalski"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="position" className="block text-sm font-semibold mb-2">Stanowisko *</label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    placeholder="CEO / Partner / Board Member"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold mb-2">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="jan@firma.pl"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Telefon *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+48 123 456 789"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="participants" className="block text-sm font-semibold mb-2">Przewidywana liczba uczestników</label>
                <select
                  id="participants"
                  name="participants"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all"
                >
                  <option value="">Wybierz zakres</option>
                  <option value="3-5">3-5 osób (mały zarząd)</option>
                  <option value="6-10">6-10 osób (średni zarząd)</option>
                  <option value="11-15">11-15 osób (duży zarząd)</option>
                  <option value="16+">16+ osób (zarząd + senior leadership)</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Wyzwania i cele *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Przed czym stoi Wasz zarząd? Jakie są cele retreatu?"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Wysyłanie...' : 'Umów discovery call'}
                <Send className="w-5 h-5" />
              </button>

              <p className="text-xs text-gray-500 text-center">
                Odpowiadamy w ciągu 24h. Gwarantujemy dyskrecję i poufność.
              </p>
            </form>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
