import React, { useState } from 'react';
import { ArrowLeft, Search, User, Award, Video, Building2, HelpCircle, HeartPulse, Sparkles } from 'lucide-react';
import LandingFooter from '../../components/LandingFooter';

type LandingView = 'home' | 'categories' | 'technology' | 'impact' | 'about' | 'partners' | 'contact' | 'help' | 'terms' | 'privacy';

interface PageProps {
  onBack: () => void;
  onViewChange: (v: LandingView) => void;
}

const HelpCenterPage: React.FC<PageProps> = ({ onBack, onViewChange }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { icon: User, title: 'Compte & Accès Apprenant', desc: 'Connexion, mot de passe, inscription et profil boursier.' },
    { icon: Award, title: 'Certificats Officiels Lona', desc: 'Délivrance, vérification du QR code et signatures numériques.' },
    { icon: Sparkles, title: 'Programme EXCELLENTIA', desc: 'Bourses d\'études STEM, critères d\'éligibilité et suivi des cours.' },
    { icon: Video, title: 'Streaming & Débits Réduits', desc: 'Lecture vidéo basse consommation, mode hors-ligne et livrets PDF.' },
    { icon: HeartPulse, title: 'Formations Santé & VBG', desc: 'Protocoles drépanocytose, santé maternelle et civisme.' },
    { icon: HelpCircle, title: 'Assistance Technique RDC', desc: 'Support en ligne, installation de la PWA et contact à Kinshasa.' },
  ];

  const faqs = [
    { 
      q: "Comment obtenir une attestation ou un certificat de fin de formation ?", 
      a: "Après avoir complété tous les modules d'une formation et obtenu au moins 75% au quiz d'évaluation finale, votre certificat officiel Academy Lona sous le haut patronage de la Fondation Lona est immédiatement généré dans votre profil et téléchargeable au format PDF avec clé de vérification cryptographique." 
    },
    { 
      q: "Les cours sont-ils accessibles gratuitement pour les jeunes en RDC ?", 
      a: "Oui, les modules essentiels de santé préventive (lutte contre la drépanocytose), les modules civiques et les contenus d'autonomisation sont entièrement pris en charge et mis à disposition par la Fondation Lona pour le public congolais." 
    },
    { 
      q: "Comment fonctionne l'accès pour les boursiers du programme EXCELLENTIA ?", 
      a: "Les lauréats boursiers EXCELLENTIA disposent d'un accès privilégié avec mentorat académique, préparation aux concours scientifiques internationaux et cours avancés de mathématiques, physique et technologies." 
    },
    { 
      q: "Où se situe le siège de la Fondation Lona à Kinshasa ?", 
      a: "La Fondation Lona est établie sur le Boulevard du 30 Juin, dans la commune de la Gombe, à Kinshasa, en République Démocratique du Congo." 
    },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans">
      {/* Header */}
      <div className="sticky top-0 left-0 right-0 z-50 p-4 md:p-6 flex items-center justify-between bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <button 
          onClick={onBack} 
          className="flex items-center gap-2 px-4 py-2 bg-[#183D73]/10 hover:bg-[#183D73]/20 rounded-full text-[#183D73] font-bold text-xs uppercase tracking-wider transition-all cursor-pointer"
        >
          <ArrowLeft size={16} />
          <span>Retour</span>
        </button>
        <span className="text-xs font-black text-[#183D73] uppercase tracking-widest">
          Support • Academy Lona
        </span>
      </div>

      {/* Hero Search */}
      <section className="relative py-16 px-6 md:px-12 text-center bg-white border-b border-gray-200">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl md:text-5xl font-black text-[#0F172A] tracking-tight">
            Centre d'Aide <span className="text-[#183D73]">Academy Lona</span>
          </h1>
          <p className="text-sm text-gray-600">
            Trouvez les réponses à vos questions sur les formations, les bourses et la certification
          </p>
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="text-gray-400" size={20} />
            </div>
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un sujet, un module ou une question..."
              className="w-full bg-[#F8FAFC] border border-gray-200 rounded-2xl py-4 pl-12 pr-6 text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-[#183D73] text-base"
            />
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 px-6 md:px-16 max-w-7xl mx-auto">
        <h2 className="text-xl font-bold text-[#0F172A] mb-8">Thématiques d'Assistance</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-200 hover:border-[#183D73] transition-all cursor-pointer shadow-sm group">
                <div className="w-12 h-12 rounded-xl bg-[#183D73]/10 text-[#183D73] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="font-bold text-base text-[#0F172A] mb-1">{cat.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{cat.desc}</p>
              </div>
            );
          })}
        </div>

        {/* FAQs */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-8">Questions Fréquentes</h2>
          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
                <h4 className="font-bold text-base text-[#0F172A] mb-2">{faq.q}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 bg-gradient-to-r from-[#183D73] to-[#102B52] text-white p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold mb-1">Une question sur vos attestations ou votre parcours ?</h3>
            <p className="text-xs text-gray-200">Le secrétariat pédagogique de la Fondation Lona à Kinshasa vous accompagne.</p>
          </div>
          <button 
            onClick={() => { window.scrollTo(0, 0); onViewChange('contact'); }}
            className="bg-gradient-to-r from-[#E8B84B] to-[#D4A338] hover:from-[#FCE082] hover:to-[#E8B84B] text-[#0F172A] font-black px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all shrink-0 cursor-pointer shadow-md"
          >
            Contacter le Secrétariat
          </button>
        </div>
      </section>

      <LandingFooter onViewChange={onViewChange} />
    </div>
  );
};

export default HelpCenterPage;
