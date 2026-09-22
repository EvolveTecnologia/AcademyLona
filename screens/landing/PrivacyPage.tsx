import React from 'react';
import { ArrowLeft, ShieldCheck, Database, Eye, Server, Lock } from 'lucide-react';
import LandingFooter from '../../components/LandingFooter';

type LandingView = 'home' | 'categories' | 'technology' | 'impact' | 'about' | 'partners' | 'contact' | 'help' | 'terms' | 'privacy';

interface PageProps {
  onBack: () => void;
  onViewChange: (v: LandingView) => void;
}

const PrivacyPage: React.FC<PageProps> = ({ onBack, onViewChange }) => {
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
          Confidentialité • Fondation Lona
        </span>
      </div>

      <div className="max-w-4xl mx-auto px-6 md:px-12 py-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#E8B84B]/20 border border-[#E8B84B]/40 rounded-full mb-6">
            <ShieldCheck size={14} className="text-[#183D73]" />
            <span className="text-xs font-black text-[#183D73] uppercase tracking-widest">
              Protection des Données Personnelles des Apprenants
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-[#0F172A] uppercase tracking-tight mb-4">
            Votre Confidentialité est <br />
            <span className="text-[#183D73]">Notre Priorité Absolue</span>
          </h1>
          <p className="text-gray-700 text-sm leading-relaxed">
            Au sein de la <strong>Fondation Lona</strong> et de la plateforme <strong>Academy Lona</strong>, la transparence et la sécurité de vos informations personnelles guident l'ensemble de nos choix institutionnels et technologiques.
          </p>
        </div>

        {/* Data Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3 shadow-sm hover:border-[#183D73] transition-colors">
            <Database className="text-[#183D73]" size={28} />
            <h4 className="font-bold text-base text-[#0F172A]">Données Collectées</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Nous collectons uniquement les informations nécessaires au suivi pédagogique : nom complet, email académique ou personnel, province de résidence et avancement dans les modules.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3 shadow-sm hover:border-[#E8B84B] transition-colors">
            <Eye className="text-[#E8B84B]" size={28} />
            <h4 className="font-bold text-base text-[#0F172A]">Finalités du Traitement</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Vos données sont consacrées exclusivement à la délivrance des attestations officielles Fondation Lona, au tutorat adaptatif et à l'orientation des bourses d'études.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3 shadow-sm hover:border-[#183D73] transition-colors">
            <Server className="text-[#183D73]" size={28} />
            <h4 className="font-bold text-base text-[#0F172A]">Hébergement Sécurisé</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Toutes les données sont chiffrées selon les normes de cybersécurité les plus rigoureuses avec redondance et conformité aux règlements de la RDC.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-gray-200 space-y-3 shadow-sm hover:border-[#183D73] transition-colors">
            <Lock className="text-[#183D73]" size={28} />
            <h4 className="font-bold text-base text-[#0F172A]">Vos Droits Garantis</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              Vous disposez à tout moment d'un droit d'accès, de rectification et d'effacement de vos données sur simple demande à contact@fondationlona.org.
            </p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-gray-200 text-center text-xs text-gray-600 shadow-sm">
          Pour toute question relative aux données personnelles : <strong>contact@fondationlona.org</strong> • Fondation Lona, Boulevard du 30 Juin, Commune de la Gombe, Kinshasa, RDC.
        </div>
      </div>

      <LandingFooter onViewChange={onViewChange} />
    </div>
  );
};

export default PrivacyPage;
