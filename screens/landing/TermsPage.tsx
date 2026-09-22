import React from 'react';
import { ArrowLeft, Scale } from 'lucide-react';
import LandingFooter from '../../components/LandingFooter';

type LandingView = 'home' | 'categories' | 'technology' | 'impact' | 'about' | 'partners' | 'contact' | 'help' | 'terms' | 'privacy';

interface PageProps {
  onBack: () => void;
  onViewChange: (v: LandingView) => void;
}

const TermsPage: React.FC<PageProps> = ({ onBack, onViewChange }) => {
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
        <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">Mise à jour : Fév. 2026</span>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-12">
          <div className="w-14 h-14 bg-[#183D73]/10 rounded-2xl flex items-center justify-center text-[#183D73] mb-6">
            <Scale size={28} />
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tight mb-4">
            Conditions Générales d'Utilisation
          </h1>
          <p className="text-gray-600 text-sm">
            Plateforme éducative officielle de la <strong>Fondation Lona</strong> • Siège : Boulevard du 30 Juin, Commune de la Gombe, Kinshasa, République Démocratique du Congo.
          </p>
        </div>

        <div className="space-y-8 text-sm text-gray-700 leading-relaxed bg-white p-8 md:p-12 rounded-3xl border border-gray-200 shadow-sm">
          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#0F172A] uppercase tracking-wide">1. Objet & Présentation</h3>
            <p>
              Les présentes Conditions Générales d'Utilisation (ci-après « CGU ») régissent l'accès et l'utilisation de la plateforme numérique <strong>Academy Lona</strong>, créée et administrée sous l'autorité de la <strong>Fondation Lona</strong>. En créant un compte apprenant, boursier ou formateur, vous acceptez sans réserve ces termes.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#0F172A] uppercase tracking-wide">2. Inscription & Sécurité des Comptes</h3>
            <p>
              L'accès aux cours, quiz et certificats officiels requiert un compte apprenant. Vous vous engagez à renseigner des informations exactes et à préserver la stricte confidentialité de vos identifiants d'accès. Toute validation d'examen effectuée depuis votre compte est réputée réalisée par vous-même.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#0F172A] uppercase tracking-wide">3. Propriété Intellectuelle & Droits d'Auteur</h3>
            <p>
              L'ensemble des cours, vidéos, manuels d'étude, logos et marques (notamment Academy Lona et Fondation Lona) sont protégés par le droit de la propriété intellectuelle en vigueur en République Démocratique du Congo et par les conventions internationales. Toute reproduction ou redistribution commerciale sans autorisation préalable est rigoureusement interdite.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#0F172A] uppercase tracking-wide">4. Certifications Numériques Officielles</h3>
            <p>
              Les certificats délivrés par Academy Lona attestent de l'assimilation des connaissances et de la réussite aux contrôles d'aptitude. Ils sont dotés d'un numéro d'enregistrement cryptographique vérifiable auprès du secrétariat de la Fondation Lona.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-base font-bold text-[#0F172A] uppercase tracking-wide">5. Droit Applicable & Juridiction Compétente</h3>
            <p>
              Les présentes CGU sont soumises à la législation de la République Démocratique du Congo. Tout litige relatif à leur interprétation relève de la compétence exclusive des tribunaux compétents de Kinshasa / Gombe.
            </p>
          </section>
        </div>
      </div>

      <LandingFooter onViewChange={onViewChange} />
    </div>
  );
};

export default TermsPage;
