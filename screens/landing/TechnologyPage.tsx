import React from 'react';
import { ArrowLeft, Brain, Lock, WifiOff, Smartphone, Server, Zap, ShieldCheck } from 'lucide-react';
import LandingFooter from '../../components/LandingFooter';

type LandingView = 'home' | 'categories' | 'technology' | 'impact' | 'about' | 'partners' | 'contact' | 'help' | 'terms' | 'privacy';

interface PageProps {
  onBack: () => void;
  onViewChange: (v: LandingView) => void;
}

const TechnologyPage: React.FC<PageProps> = ({ onBack, onViewChange }) => {
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
          Technologie • Academy Lona
        </span>
      </div>
      
      <div className="max-w-7xl mx-auto px-5 sm:px-8 md:px-12 py-10 sm:py-14 md:py-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center mb-14 sm:mb-18 md:mb-24">
          <div className="md:w-1/2">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#183D73]/10 border border-[#183D73]/20 rounded-full mb-4 sm:mb-6">
              <Brain size={14} className="text-[#183D73]" />
              <span className="text-[10px] sm:text-[11px] font-bold text-[#183D73] uppercase tracking-wider">
                Moteur d'Apprentissage Adaptatif & Streaming
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-[#0F172A] uppercase leading-tight mb-4 sm:mb-6">
              Haute Technologie <br />
              <span className="text-[#183D73]">au Service de l'Inclusion</span> en RDC
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed mb-6 sm:mb-8">
              Conçue pour franchir les obstacles de connectivité en République Démocratique du Congo, <strong>Academy Lona</strong> déploie une infrastructure de streaming vidéo adaptatif ultra-légère, un tuteur d'intelligence artificielle intégré et une architecture Progressive Web App (PWA) installable sur tout appareil sans passerelle lourde.
            </p>
            
            <div className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-gray-200 pt-6 sm:pt-8">
              <div className="space-y-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#0F172A] block">99.9%</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-bold tracking-wider sm:tracking-widest">Disponibilité</span>
              </div>
              <div className="space-y-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#E8B84B] block">HLS/DASH</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-bold tracking-wider sm:tracking-widest">Flux Adaptatif</span>
              </div>
              <div className="space-y-1">
                <span className="text-xl sm:text-2xl md:text-3xl font-black text-[#183D73] block">PWA</span>
                <span className="text-[9px] sm:text-[10px] text-gray-500 uppercase font-bold tracking-wider sm:tracking-widest">Multi-écrans</span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
              className="rounded-3xl border border-gray-200 shadow-xl w-full object-cover"
              alt="Technologie Academy Lona"
            />
            
            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-4 bg-white border border-[#E8B84B]/40 p-4 rounded-2xl shadow-xl flex items-center gap-3">
              <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                <Lock size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-[#0F172A]">Chiffrement & Certificats Vérifiés</p>
                <p className="text-[10px] text-gray-500">Signatures cryptographiques Fondation Lona</p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4 hover:border-[#183D73] transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#183D73]/10 text-[#183D73] flex items-center justify-center">
              <Smartphone size={24} />
            </div>
            <h3 className="font-bold text-lg text-[#0F172A]">PWA & Expérience Mobile</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Interface responsive de type streaming pensée pour smartphones, tablettes et ordinateurs, installable directement sur l'écran d'accueil sans passer par les stores.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4 hover:border-[#E8B84B] transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#E8B84B]/20 text-[#183D73] flex items-center justify-center">
              <WifiOff size={24} />
            </div>
            <h3 className="font-bold text-lg text-[#0F172A]">Optimisation Bas Débit (RDC)</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Algorithmes de compression avancés permettant le visionnage fluide même sur réseau 3G ou 4G instable, tout en réduisant drastiquement l'usage de données mobiles.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-gray-200 space-y-4 hover:border-[#183D73] transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#183D73]/10 text-[#183D73] flex items-center justify-center">
              <Server size={24} />
            </div>
            <h3 className="font-bold text-lg text-[#0F172A]">Tuteur IA Intelligent</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              Système de mentorat pédagogique virtuel 24/7 pour assister les apprenants, clarifier les leçons, générer des exercices et accompagner les boursiers EXCELLENTIA.
            </p>
          </div>
        </div>
      </div>

      <LandingFooter onViewChange={onViewChange} />
    </div>
  );
};

export default TechnologyPage;
