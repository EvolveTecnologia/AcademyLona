import React from 'react';
import { ArrowLeft, Award, HeartPulse, Sparkles, Scale, GraduationCap, ShieldCheck, Users, Briefcase } from 'lucide-react';
import LandingFooter from '../../components/LandingFooter';

type LandingView = 'home' | 'categories' | 'technology' | 'impact' | 'about' | 'partners' | 'contact' | 'help' | 'terms' | 'privacy';

interface PageProps {
  onBack: () => void;
  onViewChange: (v: LandingView) => void;
}

const CategoriesPage: React.FC<PageProps> = ({ onBack, onViewChange }) => {
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
        <span className="text-xs font-black text-[#183D73] uppercase tracking-widest">Écosystème • Academy Lona</span>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#183D73]/10 border border-[#183D73]/20 rounded-full text-[#183D73] text-xs font-extrabold uppercase tracking-wider mb-4">
            <span className="w-2 h-2 rounded-full bg-[#E8B84B]" />
            <span>Infrastructure Pédagogique Nationale</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tight mb-6">
            Écosystème Éducatif <br />
            <span className="text-[#183D73]">Fondation Lona</span>
          </h1>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl leading-relaxed">
            La plateforme <strong>Academy Lona</strong> transcende le simple streaming vidéo. Elle constitue l'infrastructure d'apprentissage intégrée de la <strong>Fondation Lona</strong>, articulant technologie adaptative pour faibles débits, tuteur d'intelligence artificielle et production de modules alignés sur les priorités humaines de la République Démocratique du Congo.
          </p>
        </div>

        {/* 3 Pillars of the Ecosystem */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-[#183D73] transition-all shadow-sm">
            <div className="w-14 h-14 bg-[#183D73]/10 rounded-2xl flex items-center justify-center text-[#183D73] mb-6">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Pour les Boursiers EXCELLENTIA</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Préparation intensive aux cycles supérieurs en mathématiques, physique appliquée et algorithmique. Suivi personnalisé des boursiers de la Première Dame Denise Nyakeru Tshisekedi.
            </p>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#183D73] rounded-full"/> Préparation aux Grandes Écoles d'Ingénieurs</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#183D73] rounded-full"/> Mentorat Académique & Scientifique</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#183D73] rounded-full"/> Certification d'Excellence Nationale</li>
            </ul>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-[#E8B84B] transition-all shadow-sm">
            <div className="w-14 h-14 bg-[#E8B84B]/20 rounded-2xl flex items-center justify-center text-[#183D73] mb-6">
              <HeartPulse size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Santé & Prévention Communautaire</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Formation continue des professionnels de santé et des relais communautaires sur le diagnostic précoce de la drépanocytose, les soins néonatals et la santé maternelle.
            </p>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#E8B84B] rounded-full"/> Protocoles Cliniques Drépanocytose</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#E8B84B] rounded-full"/> Dépistage et Prise en Charge Néonatale</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#E8B84B] rounded-full"/> Vulgarisation Médicale en Langues Locales</li>
            </ul>
          </div>

          <div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-200 hover:border-[#183D73] transition-all shadow-sm">
            <div className="w-14 h-14 bg-[#183D73]/10 rounded-2xl flex items-center justify-center text-[#183D73] mb-6">
              <Sparkles size={28} />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-3">Autonomisation des Femmes & Jeunes</h3>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Modules d'éducation financière, gestion de micro-entreprises, agriculture vivrière durable et leadership associatif pour transformer la condition féminine.
            </p>
            <ul className="space-y-2.5 text-xs text-gray-600 font-medium">
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#183D73] rounded-full"/> Gestion Budgétaire & Épargne Solidaire</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#183D73] rounded-full"/> Création et Gestion de Coopératives</li>
              <li className="flex items-center gap-2"><div className="w-2 h-2 bg-[#183D73] rounded-full"/> Accès aux Outils Numériques & Vente</li>
            </ul>
          </div>
        </div>

        {/* 4 Piliers Officiels */}
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-gray-200">
          <div className="max-w-2xl mb-10">
            <h2 className="text-2xl font-black text-[#0F172A] uppercase tracking-tight mb-2">Les 4 Piliers d'Intervention</h2>
            <p className="text-sm text-gray-600">Des parcours complets avec certifications officielles délivrées par la Fondation Lona.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200 space-y-2">
              <Award className="text-[#183D73]" size={28} />
              <div className="text-sm font-bold text-[#0F172A]">Programme EXCELLENTIA & STEM</div>
              <p className="text-xs text-gray-500">Sciences exactes, technologies, bourses nationales et internationales.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200 space-y-2">
              <HeartPulse className="text-[#183D73]" size={28} />
              <div className="text-sm font-bold text-[#0F172A]">Santé & Prévention</div>
              <p className="text-xs text-gray-500">Lutte contre la drépanocytose, santé maternelle et infantile.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200 space-y-2">
              <Sparkles className="text-[#E8B84B]" size={28} />
              <div className="text-sm font-bold text-[#0F172A]">Autonomisation Féminine</div>
              <p className="text-xs text-gray-500">Entrepreneuriat, micro-finance et émancipation des femmes.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#F8FAFC] border border-gray-200 space-y-2">
              <Scale className="text-[#183D73]" size={28} />
              <div className="text-sm font-bold text-[#0F172A]">Éducation Civique & Droits</div>
              <p className="text-xs text-gray-500">Lutte contre les VBG, civisme, consolidation de la paix.</p>
            </div>
          </div>
        </div>
      </div>

      <LandingFooter onViewChange={onViewChange} />
    </div>
  );
};

export default CategoriesPage;
