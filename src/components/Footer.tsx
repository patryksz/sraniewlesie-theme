import { TreePine, Facebook, Instagram, Linkedin } from 'lucide-react';
import Logo from "./Logo.tsx";  

export default function Footer() {
  return (
    <footer className="bg-emerald-950/80 backdrop-blur-sm text-white py-12 border-t border-emerald-700/50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="text-emerald-200 mb-4 leading-relaxed">
              Executive retreaty dla kadry zarządzającej. Strategy sessions, leadership development, 
              board bonding - wszystko w naturalnym środowisku, poza biurem.
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
            <h4 className="font-bold text-lg mb-4">Dla kogo</h4>
            <ul className="space-y-2 text-emerald-200">
              <li><a href="#services" className="hover:text-white transition-colors">CEO & Zarządy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">C-level Executives</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Partnerzy</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Senior Leadership</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Kontakt</h4>
            <ul className="space-y-2 text-emerald-200">
              <li>
                <a href="mailto:kontakt@spaniewlesie.pl" className="hover:text-white transition-colors">
                  kontakt@spaniewlesie.pl
                </a>
              </li>
              <li>
                <a href="tel:+48577161291" className="hover:text-white transition-colors">
                  +48 577 161 291
                </a>
              </li>
              <li>Cała Polska</li>
              <li className="text-sm pt-2">Pn-Pt 9:00-17:00</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-emerald-800 pt-8 text-center text-emerald-300 text-sm">
          <p>&copy; {new Date().getFullYear()} SpanieWLesie.pl - Wszystkie prawa zastrzeżone</p>
          <p className="mt-2">Executive retreaty i leadership programs dla kadry zarządzającej</p>
        </div>
      </div>
    </footer>
  );
}
