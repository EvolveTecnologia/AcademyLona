import React from 'react';
import { ArrowLeft, Award, HeartPulse, Sparkles, Scale, Leaf, Users } from 'lucide-react';
import LandingFooter from '../../components/LandingFooter';

type LandingView = 'home' | 'categories' | 'technology' | 'impact' | 'about' | 'partners' | 'contact' | 'help' | 'terms' | 'privacy';

interface PageProps {
  onBack: () => void;
  onViewChange: (v: LandingView) => void;
}

const ImpactPage: React.FC<PageProps> = ({ onBack, onViewChange }) => {
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
          Impact Social • Fondation Lona
        </span>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-10 sm:py-14 md:py-16">
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E8B84B]/20 border border-[#E8B84B]/40 rounded-full mb-4 sm:mb-6">
            <Sparkles size={14} className="text-[#183D73]" />
            <span className="text-[11px] sm:text-xs font-black text-[#183D73] uppercase tracking-wider sm:tracking-widest">
              Impact Réel & Mesurable dans les 26 Provinces de la RDC
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0F172A] uppercase leading-tight mb-4 sm:mb-6">
            L'Excellence et la Solidarité <br />
            <span className="text-[#183D73]">pour Transformer des Vies</span> en RDC
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-gray-700 leading-relaxed max-w-3xl mx-auto">
            Sous l'impulsion de la Première Dame, <strong>Denise Nyakeru Tshisekedi</strong>, la <strong>Fondation Lona</strong> déploie à travers <strong>Academy Lona</strong> une éducation inclusive, de haut niveau, articulée autour de résultats vérifiables sur le terrain.
          </p>
        </div>

        {/* 4 Piliers d'Impact */}
        <div className="space-y-4 sm:space-y-6 mb-16 sm:mb-20 md:mb-24 max-w-4xl mx-auto">
          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 shadow-sm hover:border-[#183D73] transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#183D73] text-white flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
              <Award size={22} />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#0F172A] mb-1 sm:mb-2">Bourses d'Élite EXCELLENTIA</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                Plus de 1 000 boursiers d'excellence accompagnés dans les meilleures universités de RDC, de France, du Maroc et des États-Unis dans les disciplines STEM (Sciences, Technologies, Ingénierie et Mathématiques).
              </p>
            </div>
          </div>

          <div className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl md:rounded-3xl border border-gray-200 flex flex-col sm:flex-row items-start gap-4 sm:gap-6 shadow-sm hover:border-[#183D73] transition-colors">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0B6E4F] text-white flex items-center justify-center font-bold text-base sm:text-lg shrink-0">
              <HeartPulse size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Lutte Contre la Drépanocytose & Santé Maternelle</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Campagnes massives d'électrophorèse de l'hémoglobine, sensibilisation avant le mariage, dotation de centres hospitaliers en kits de dépistage néonatal et formation de centaines d'infirmiers et sages-femmes.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 flex flex-col md:flex-row items-start gap-6 shadow-sm hover:border-[#E8B84B] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#E8B84B] text-[#0F172A] flex items-center justify-center font-bold text-lg shrink-0">
              <Sparkles size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Autonomisation Économique des Femmes Congolaises</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Apprentissage pratique de la gestion financière, formalisation d'activités génératrices de revenus et octroi de kits d'installation pour des milliers de mères de famille et jeunes entrepreneures.
              </p>
            </div>
          </div>

          <div className="bg-white p-6 md:p-8 rounded-3xl border border-gray-200 flex flex-col md:flex-row items-start gap-6 shadow-sm hover:border-[#183D73] transition-colors">
            <div className="w-12 h-12 rounded-2xl bg-[#183D73] text-white flex items-center justify-center font-bold text-lg shrink-0">
              <Scale size={22} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0F172A] mb-2">Éducation Civique, Paix et Lutte Contre les VBG</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Prise en charge holistique (médicale, psychologique, juridique et réinsertion sociale) des victimes de violences sexuelles et promotion active de la culture de la paix et de la citoyenneté responsable.
              </p>
            </div>
          </div>
        </div>
      </div>

      <LandingFooter onViewChange={onViewChange} />
    </div>
  );
};

export default ImpactPage;
