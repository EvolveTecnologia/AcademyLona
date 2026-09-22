import React from 'react';
import { ArrowLeft, Handshake, Building2, Landmark, GraduationCap, ArrowRight, HeartPulse } from 'lucide-react';
import LandingFooter from '../../components/LandingFooter';

type LandingView = 'home' | 'categories' | 'technology' | 'impact' | 'about' | 'partners' | 'contact' | 'help' | 'terms' | 'privacy';

interface PageProps {
  onBack: () => void;
  onViewChange: (v: LandingView) => void;
}

const PartnersPage: React.FC<PageProps> = ({ onBack, onViewChange }) => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#0F172A] font-sans animate-in slide-in-from-right duration-500">
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
          Partenaires • Fondation Lona
        </span>
      </div>

      {/* Hero Section */}
      <section className="relative py-20 px-6 md:px-12 text-center bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#183D73]/10 rounded-full text-[#183D73] text-xs font-black uppercase tracking-widest">
            <Handshake size={14} className="text-[#E8B84B]" />
            <span>Alliances Stratégiques pour l'Éducation en RDC</span>
          </div>
          
          <h1 className="text-3xl md:text-5xl font-black uppercase leading-tight tracking-tight text-[#0F172A]">
            Ensemble pour Propulser la Jeunesse et le Capital Humain <br />
            <span className="text-[#183D73]">au Cœur du Développement</span>
          </h1>
          
          <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            La <strong>Fondation Lona</strong> collabore avec les ministères régaliens (Éducation Nationale, Santé Publique, Genre & Famille), les universités de renommée mondiale et les entreprises citoyennes pour bâtir des passerelles d'excellence et d'insertion.
          </p>

          <div className="pt-4">
            <button 
              onClick={() => { window.scrollTo(0, 0); onViewChange('contact'); }}
              className="px-8 py-4 bg-[#183D73] hover:bg-[#245398] text-white font-black uppercase tracking-widest text-xs rounded-xl transition-all shadow-md inline-flex items-center gap-2 cursor-pointer border border-[#E8B84B]/30"
            >
              <span>Rejoindre nos Partenaires</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Model Grid */}
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4 shadow-sm hover:border-[#183D73] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#183D73]/10 text-[#183D73] flex items-center justify-center">
              <Building2 size={26} />
            </div>
            <h3 className="font-bold text-lg text-[#0F172A]">Entreprises Mécènes & Industrie</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Financement de bourses EXCELLENTIA, accueil des stagiaires en alternance et parrainage de filières scientifiques prioritaires pour l'économie congolaise.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4 shadow-sm hover:border-[#E8B84B] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#E8B84B]/20 text-[#183D73] flex items-center justify-center">
              <Landmark size={26} />
            </div>
            <h3 className="font-bold text-lg text-[#0F172A]">Institutions Publiques & Bailleurs</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Programmes conjoints de lutte contre la drépanocytose, dotation des écoles et des centres hospitaliers provinciaux en infrastructures numériques.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4 shadow-sm hover:border-[#183D73] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#183D73]/10 text-[#183D73] flex items-center justify-center">
              <GraduationCap size={26} />
            </div>
            <h3 className="font-bold text-lg text-[#0F172A]">Universités d'Élite Internationales</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Accords de mobilité académique pour les lauréats EXCELLENTIA, échange d'enseignants-chercheurs et co-conception de programmes de pointe en RDC.
            </p>
          </div>
        </div>
      </section>

      <LandingFooter onViewChange={onViewChange} />
    </div>
  );
};

export default PartnersPage;
