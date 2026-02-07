import { Mail, Phone, MapPin, Send } from 'lucide-react';
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
        setMessage('Wiadomość została wysłana pomyślnie!');
        setMessageType('success');
        form.reset();

        // auto-hide po 5 sekundach
        setTimeout(() => {
          setMessage('');
          setMessageType('');
        }, 5000);
      } else {
        setMessage(result.error || 'Wystąpił błąd przy wysyłce. Spróbuj ponownie.');
        setMessageType('error');

        setTimeout(() => {
          setMessage('');
          setMessageType('');
        }, 5000);
      }
    } catch (error) {
      console.error(error);
      setMessage('Wystąpił błąd przy wysyłce. Spróbuj ponownie.');
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Wyruszmy razem w las!
            </h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Wypełnij formularz lub skontaktuj się z nami bezpośrednio.
              Chętnie odpowiemy na wszystkie pytania i pomożemy zorganizować
              idealny obóz dla Twojej firmy.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-emerald-700 p-3 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Email</div>
                  <a href="mailto:kontakt@spaniewlesie.pl" className="text-emerald-300 hover:text-emerald-200 transition-colors">
                    kontakt@spaniewlesie.pl
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-emerald-700 p-3 rounded-lg">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <div className="font-semibold mb-1">Telefon</div>
                  <a href="tel:+48123456789" className="text-emerald-300 hover:text-emerald-200 transition-colors">
                    +48 577 161 291
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-12 bg-emerald-800/30 backdrop-blur-sm border border-emerald-600/40 rounded-2xl p-8 hover:border-emerald-500/60 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-center">Zasięg działania</h3>
              <p className="text-emerald-100 text-center mb-6">
                Docieramy do każdego zakątka Polski. Las jest wszędzie.
              </p>
              <div className="flex justify-center">
                <ForestMap />
              </div>
            </div>
          </div>


          <div className="bg-white rounded-2xl p-8 text-gray-900 shadow-lg relative">
            <h3 className="text-2xl font-bold mb-6">Wyślij zapytanie</h3>

            {/* KOMUNIKAT */}
            {message && (
              <div
                className={`
                  absolute top-4 left-1/2 transform -translate-x-1/2 w-full md:w-3/4 px-4 py-3 rounded-lg text-center font-medium transition-all
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
                <label htmlFor="company" className="block text-sm font-semibold mb-2">Nazwa firmy *</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  placeholder="Twoja firma Sp. z o.o."
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
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold mb-2">Telefon</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+48 123 456 789"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="participants" className="block text-sm font-semibold mb-2">Liczba uczestników</label>
                  <input
                    type="number"
                    id="participants"
                    name="participants"
                    placeholder="20"
                    min={1}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold mb-2">Wiadomość *</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Opowiedz nam o swoich oczekiwaniach..."
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-600 focus:border-transparent outline-none transition-all resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? 'Wysyłanie...' : 'Wyślij zapytanie'}
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ANIMACJA FADE IN */}
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
