import React from 'react';
import { ArrowLeft, Target, Globe, Award, HeartHandshake, Users, HeartPulse, Scale, Sparkles, MapPin } from 'lucide-react';
import LandingFooter from '../../components/LandingFooter';

type LandingView = 'home' | 'categories' | 'technology' | 'impact' | 'about' | 'partners' | 'contact' | 'help' | 'terms' | 'privacy';

interface PageProps {
  onBack: () => void;
  onViewChange: (v: LandingView) => void;
}

const AboutPage: React.FC<PageProps> = ({ onBack, onViewChange }) => {
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
          Fondation Lona • RDC
        </span>
      </div>

      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 px-5 sm:px-8 md:px-12 overflow-hidden bg-gradient-to-b from-[#183D73] to-[#102B52] text-white">
        <div className="max-w-5xl mx-auto text-center space-y-4 sm:space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E8B84B]/20 border border-[#E8B84B]/40 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#E8B84B] animate-pulse" />
            <span className="text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-[#E8B84B]">
              Fondation Lona • Présidence Denise Nyakeru Tshisekedi
            </span>
          </div>
          
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase leading-tight tracking-tight text-white">
            Former, Élever et Autonomiser <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E8B84B] to-[#FCE082]">
              la Jeunesse et les Femmes en RDC
            </span>
          </h1>
          
          <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-3xl mx-auto leading-relaxed font-normal">
            <strong>Academy Lona</strong> est l'infrastructure éducative numérique officielle de la <strong>Fondation Lona</strong>, dédiée à l'apprentissage d'élite, à la vulgarisation des savoirs de santé et à l'autonomie socio-économique dans les 26 provinces de la RDC.
          </p>
        </div>
      </section>

      {/* Qui Sommes-Nous */}
      <section className="py-12 sm:py-16 md:py-20 px-5 sm:px-8 md:px-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 text-xs font-black text-[#183D73] uppercase tracking-widest">
              <span>Vision & Engagement</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0F172A] leading-tight">
              Une initiative guidée par l'excellence et la solidarité nationale.
            </h2>
            <div className="space-y-3.5 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
              <p>
                Créée et portée avec dévouement par la Première Dame de la République Démocratique du Congo, <strong>Denise Nyakeru Tshisekedi</strong>, la <strong>Fondation Lona</strong> s'investit chaque jour pour transformer durablement les vies.
              </p>
              <p>
                À travers le programme emblématique <strong>EXCELLENTIA</strong>, la Fondation octroie des bourses d'études supérieures aux meilleurs lauréats de l'Examen d'État pour les propulser dans les filières scientifiques et technologiques (STEM) en RDC et à l'international.
              </p>
              <p>
                Avec le lancement d'<strong>Academy Lona</strong>, cette vision s'élargit à grande échelle grâce à la technologie : offrir un accès universel, libre et adaptatif à des modules de haute valeur en santé (drépanocytose), autonomisation féminine et éducation citoyenne.
              </p>
            </div>

            <div className="pt-4 flex items-center gap-3 text-xs font-semibold text-gray-700 bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
              <MapPin size={18} className="text-[#183D73] shrink-0" />
              <span>Boulevard du 30 Juin, Gombe, Kinshasa, République Démocratique du Congo</span>
            </div>
          </div>

          {/* Cards Mission & Vision */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm hover:border-[#183D73] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#183D73]/10 text-[#183D73] flex items-center justify-center mb-4">
                <Target size={26} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Notre Mission</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Démocratiser l'excellence éducative, éradiquer l'ignorance autour des maladies héréditaires comme la drépanocytose, et doter chaque jeune et femme congolaise des compétences nécessaires pour bâtir son autonomie financière.
              </p>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-3xl shadow-sm hover:border-[#E8B84B] transition-all">
              <div className="w-12 h-12 rounded-2xl bg-[#E8B84B]/20 text-[#183D73] flex items-center justify-center mb-4">
                <Globe size={26} />
              </div>
              <h3 className="text-xl font-bold text-[#0F172A] mb-2">Notre Vision</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Faire émerger une génération de leaders congolais qualifiés, sains et engagés, capables de catalyser l'industrialisation, le bien-être social et le rayonnement de la RDC.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Piliers Fondamentaux */}
      <section className="py-16 px-6 md:px-16 bg-white border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-[#0F172A] mb-4">Les 4 Axes Stratégiques de la Fondation Lona</h2>
            <p className="text-sm text-gray-600">Des actions concrètes coordonnées pour un impact national pérenne</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 space-y-3 hover:border-[#183D73] transition-colors">
              <Award className="text-[#183D73]" size={28} />
              <h4 className="font-bold text-base text-[#0F172A]">Programme EXCELLENTIA</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Bourses d'élite et préparation intensive aux sciences exactes et technologies d'avenir.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 space-y-3 hover:border-[#183D73] transition-colors">
              <HeartPulse className="text-[#183D73]" size={28} />
              <h4 className="font-bold text-base text-[#0F172A]">Santé & Drépanocytose</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Sensibilisation, dépistage précoce, prise en charge et santé de la mère et de l'enfant.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 space-y-3 hover:border-[#E8B84B] transition-colors">
              <Sparkles className="text-[#E8B84B]" size={28} />
              <h4 className="font-bold text-base text-[#0F172A]">Autonomisation des Femmes</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Micro-entrepreneuriat, éducation financière et accès aux financements productifs.</p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F8FAFC] border border-gray-200 space-y-3 hover:border-[#183D73] transition-colors">
              <Scale className="text-[#183D73]" size={28} />
              <h4 className="font-bold text-base text-[#0F172A]">Droits Civiques & Paix</h4>
              <p className="text-xs text-gray-600 leading-relaxed">Lutte contre les violences basées sur le genre (VBG) et promotion du devoir civique.</p>
            </div>
          </div>
        </div>
      </section>

      <LandingFooter onViewChange={onViewChange} />
    </div>
  );
};

export default AboutPage;
