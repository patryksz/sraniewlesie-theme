import { TreePine, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-emerald-950/80 backdrop-blur-sm text-white py-12 border-t border-emerald-700/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <TreePine className="w-8 h-8" />
              <span className="text-2xl font-bold">SranieWLesie.pl</span>
            </div>
            <p className="text-emerald-200 mb-4 leading-relaxed">
              Profesjonalne obozy i szkolenia B2B w naturalnym środowisku.
              Rozwijamy firmy poprzez autentyczne doświadczenia w dziczy.
            </p>
            <div className="flex gap-4">
              <a href="#" className="bg-emerald-800 p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="bg-emerald-800 p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="bg-emerald-800 p-2 rounded-lg hover:bg-emerald-700 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Oferta</h4>
            <ul className="space-y-2 text-emerald-200">
              <li><a href="#services" className="hover:text-white transition-colors">Team Building</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Warsztaty strategiczne</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Eventy firmowe</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-2 text-emerald-200">
              <li>
                <a href="mailto:kontakt@sraniewlesie.pl" className="hover:text-white transition-colors">
                  kontakt@sraniewlesie.pl
                </a>
              </li>
              <li>
                <a href="tel:+48123456789" className="hover:text-white transition-colors">
                  +48 123 456 789
                </a>
              </li>
              <li>Absolutnie cała Polska</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8 text-center text-emerald-300 text-sm">
          <p>&copy; {new Date().getFullYear()} SranieWLesie.pl - Wszystkie prawa zastrzeżone</p>
          <p className="mt-2">Organizacja szkoleń i obozów firmowych B2B w naturalnym środowisku</p>
        </div>
      </div>
    </footer>
  );
}
