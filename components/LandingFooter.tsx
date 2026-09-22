import React from 'react';
import { MapPin, Phone, Mail, Award, HeartHandshake, Sparkles } from 'lucide-react';

type LandingView = 'home' | 'categories' | 'technology' | 'impact' | 'about' | 'partners' | 'contact' | 'help' | 'terms' | 'privacy';

interface LandingFooterProps {
  onViewChange: (view: LandingView) => void;
}

const LandingFooter: React.FC<LandingFooterProps> = ({ onViewChange }) => {
  const handleNav = (view: LandingView) => {
    window.scrollTo(0, 0);
    onViewChange(view);
  };

  return (
    <footer className="bg-[#183D73] text-white/90 py-16 px-6 md:px-16 border-t border-[#E8B84B]/30 text-xs relative z-20 shadow-2xl">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
        {/* Brand & Address Column */}
        <div className="lg:col-span-2 space-y-4">
          <div className="cursor-pointer" onClick={() => handleNav('home')}>
            <img 
              src="/logolona-white-png.png" 
              alt="Academy Lona - Fondation Lona" 
              className="h-10 w-auto object-contain filter drop-shadow-md"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/pwa-512x512.png';
              }}
            />
          </div>
          <p className="text-white/80 text-sm leading-relaxed max-w-sm pt-2">
            La plateforme éducative officielle de la <strong>Fondation Lona</strong>, dédiée à l'excellence académique, au programme EXCELLENTIA, à la santé préventive, à l'autonomisation des femmes et à la citoyenneté en RDC.
          </p>
          <div className="pt-2 space-y-2 text-white/80">
            <div className="flex items-start gap-2.5">
              <MapPin size={16} className="text-[#E8B84B] shrink-0 mt-0.5" />
              <span>Boulevard du 30 Juin, Gombe, Kinshasa, République Démocratique du Congo</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone size={16} className="text-[#E8B84B] shrink-0" />
              <span>+243 81 000 0000 / +243 99 000 0000</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={16} className="text-[#E8B84B] shrink-0" />
              <span>contact@fondationlona.org • contact@academylona.cd</span>
            </div>
          </div>
        </div>

        {/* Menu Piliers Éducatifs */}
        <div className="space-y-4">
          <h4 className="font-bold text-[#E8B84B] uppercase tracking-widest text-xs border-b border-white/20 pb-2 flex items-center gap-1.5">
            <Award size={14} /> Piliers Éducatifs
          </h4>
          <button onClick={() => handleNav('categories')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Programme EXCELLENTIA & STEM</button>
          <button onClick={() => handleNav('categories')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Santé & Prévention (Drépanocytose)</button>
          <button onClick={() => handleNav('categories')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Autonomisation des Femmes</button>
          <button onClick={() => handleNav('categories')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Éducation Civique & Droits Humains</button>
        </div>

        {/* Menu Technologie & Support */}
        <div className="space-y-4">
          <h4 className="font-bold text-[#E8B84B] uppercase tracking-widest text-xs border-b border-white/20 pb-2 flex items-center gap-1.5">
            <Sparkles size={14} /> Technologie & Aide
          </h4>
          <button onClick={() => handleNav('technology')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Streaming Optimisé & Hors-Ligne</button>
          <button onClick={() => handleNav('technology')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Moteur d'Apprentissage Adaptatif</button>
          <button onClick={() => handleNav('help')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Centre d'Assistance Apprenant</button>
          <button onClick={() => handleNav('terms')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Conditions d'Utilisation</button>
          <button onClick={() => handleNav('privacy')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Politique de Confidentialité</button>
        </div>

        {/* Menu Fondation Lona */}
        <div className="space-y-4">
          <h4 className="font-bold text-[#E8B84B] uppercase tracking-widest text-xs border-b border-white/20 pb-2 flex items-center gap-1.5">
            <HeartHandshake size={14} /> Fondation Lona
          </h4>
          <button onClick={() => handleNav('about')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Vision & Présidence</button>
          <button onClick={() => handleNav('impact')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Impact Social & 26 Provinces</button>
          <button onClick={() => handleNav('partners')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Partenaires Institutionnels</button>
          <button onClick={() => handleNav('contact')} className="block text-white/80 hover:text-[#E8B84B] cursor-pointer transition-colors text-left">Contact & Siège</button>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-white/70">
        <p>Copyright © 2026 AmaniTech. Tous droits réservés.</p>
        <p className="text-white/70 text-[11px]">
          Plateforme officielle <span className="text-[#E8B84B] font-bold">Academy Lona</span> • République Démocratique du Congo.
        </p>
      </div>
    </footer>
  );
};

export default LandingFooter;

