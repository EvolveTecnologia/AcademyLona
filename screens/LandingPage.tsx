import React, { useState, useEffect, useRef } from 'react';
import { 
  Monitor, Smartphone, Tablet, Tv, ChevronDown, GraduationCap, 
  HeartPulse, Sparkles, Scale, Play, CheckCircle, Wifi, 
  Zap, Award, Users, BookOpen, Brain, Download, ShieldCheck, ArrowRight, Star
} from 'lucide-react';
import { COURSES, STRATEGIC_AXES } from '../constants';
import { Category } from '../types';
import CourseCard from '../components/CourseCard';
import LandingFooter from '../components/LandingFooter';
import { Logo } from '../components/Logo';

// Importing Sub-pages
import CategoriesPage from './landing/CategoriesPage';
import TechnologyPage from './landing/TechnologyPage';
import ImpactPage from './landing/ImpactPage';
import AboutPage from './landing/AboutPage';
import PartnersPage from './landing/PartnersPage';
import ContactPage from './landing/ContactPage';
import HelpCenterPage from './landing/HelpCenterPage';
import TermsPage from './landing/TermsPage';
import PrivacyPage from './landing/PrivacyPage';

interface LandingPageProps {
  onEnter: () => void;
}

type LandingView = 'home' | 'categories' | 'technology' | 'impact' | 'about' | 'partners' | 'contact' | 'help' | 'terms' | 'privacy';

const LandingPage: React.FC<LandingPageProps> = ({ onEnter }) => {
  const [currentView, setCurrentView] = useState<LandingView>('home');
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  
  // Interactive Streaming Demo State
  const [streamQuality, setStreamQuality] = useState<'360p' | '720p' | '1080p'>('720p');
  const [isDemoPlaying, setIsDemoPlaying] = useState(false);
  const [adaptiveStep, setAdaptiveStep] = useState<number>(2);

  // Scroll to top whenever currentView changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [currentView]);

  // Scroll listener for sticky header
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // --- ROUTING LOGIC ---
  if (currentView === 'categories') return <CategoriesPage onBack={() => setCurrentView('home')} onViewChange={setCurrentView} />;
  if (currentView === 'technology') return <TechnologyPage onBack={() => setCurrentView('home')} onViewChange={setCurrentView} />;
  if (currentView === 'impact') return <ImpactPage onBack={() => setCurrentView('home')} onViewChange={setCurrentView} />;
  if (currentView === 'about') return <AboutPage onBack={() => setCurrentView('home')} onViewChange={setCurrentView} />;
  if (currentView === 'partners') return <PartnersPage onBack={() => setCurrentView('home')} onViewChange={setCurrentView} />;
  if (currentView === 'contact') return <ContactPage onBack={() => setCurrentView('home')} onViewChange={setCurrentView} />;
  if (currentView === 'help') return <HelpCenterPage onBack={() => setCurrentView('home')} onViewChange={setCurrentView} />;
  if (currentView === 'terms') return <TermsPage onBack={() => setCurrentView('home')} onViewChange={setCurrentView} />;
  if (currentView === 'privacy') return <PrivacyPage onBack={() => setCurrentView('home')} onViewChange={setCurrentView} />;

  // Filter courses for prominent showcases
  const excellentiaCourses = COURSES.filter(c => c.category === Category.Excellentia).slice(0, 4);
  const santeCourses = COURSES.filter(c => c.category === Category.Sante).slice(0, 4);
  const autonomisationCourses = COURSES.filter(c => c.category === Category.Autonomisation).slice(0, 4);
  const droitsCourses = COURSES.filter(c => c.category === Category.DroitsHumains).slice(0, 4);

  return (
    <div className="min-h-screen bg-[#0F172A] font-sans text-white overflow-x-hidden animate-in fade-in duration-500">
      
      {/* --- NAVBAR (Sticky) --- */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-12 py-3.5 flex justify-between items-center ${
        scrolled ? 'bg-[#102B52]/95 backdrop-blur-md shadow-2xl border-b border-[#E8B84B]/20' : 'bg-gradient-to-b from-[#0F172A]/90 to-transparent'
      }`}>
        <div className="flex items-center gap-6">
          <div className="cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <img 
              src="/logolona-white-png.png" 
              alt="Academy Lona - Fondation Lona" 
              className="h-10 sm:h-11 w-auto object-contain filter drop-shadow-md"
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/pwa-512x512.png';
              }}
            />
          </div>

          <div className="hidden lg:flex items-center gap-6 text-xs uppercase tracking-wider font-semibold text-white/80">
            <button onClick={() => setCurrentView('categories')} className="hover:text-[#E8B84B] transition-colors cursor-pointer">
              Axes de Formation
            </button>
            <button onClick={() => setCurrentView('technology')} className="hover:text-[#E8B84B] transition-colors cursor-pointer">
              Streaming & IA Adaptative
            </button>
            <button onClick={() => setCurrentView('impact')} className="hover:text-[#E8B84B] transition-colors cursor-pointer">
              Impact RDC
            </button>
            <button onClick={() => setCurrentView('about')} className="hover:text-[#E8B84B] transition-colors cursor-pointer">
              Fondation Lona
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={onEnter}
            className="px-5 sm:px-6 py-2.5 bg-gradient-to-r from-[#E8B84B] to-[#D4A338] hover:from-[#FCE082] hover:to-[#E8B84B] text-[#0F172A] rounded-xl text-xs font-black uppercase tracking-wider transition-all shadow-lg shadow-[#E8B84B]/20 hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-2"
          >
            <span>Connexion / Espace Élève</span>
            <ArrowRight size={14} className="stroke-[3]" />
          </button>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[92vh] w-full flex items-center justify-center overflow-hidden pt-20 pb-16 px-5 sm:px-8 md:px-14">
        {/* Background Image with Deep Blue Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1920&auto=format&fit=crop" 
            alt="Academy Lona - Apprentissage en RDC" 
            className="w-full h-full object-cover object-center filter brightness-[0.35]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#102B52]/90 to-[#0F172A]/70" />
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0F172A]/60 to-[#0F172A]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center">
          {/* Badge Fondation Lona */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#183D73]/80 border border-[#E8B84B]/40 shadow-lg mb-6 backdrop-blur-md animate-in fade-in slide-in-from-top-3 duration-700">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8B84B] animate-pulse" />
            <span className="text-[#E8B84B] font-black uppercase tracking-[2px] text-[11px] sm:text-xs">
              Plateforme Éducative Officielle • Fondation Lona
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight leading-[1.1] mb-6 drop-shadow-2xl">
            Bienvenue sur <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] via-[#E8B84B] to-[#FCE082]">Academy Lona</span>
            <span className="block text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#E8B84B] mt-2">
              L'Excellence par l'Apprentissage Adaptatif
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-sm sm:text-base md:text-lg max-w-3xl leading-relaxed mb-8 font-medium">
            La plateforme éducative officielle de la <strong>Fondation Lona</strong> dédiée à la formation, au développement des compétences et à l'autonomisation des jeunes et des femmes en République Démocratique du Congo.
          </p>

          {/* Action Buttons (CTAs) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* CTA 1: Commencer un cours (Dourado #E8B84B) */}
            <button 
              onClick={onEnter}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-[#E8B84B] to-[#D4A338] hover:from-[#FCE082] hover:to-[#E8B84B] text-[#0F172A] rounded-2xl font-black uppercase tracking-wider text-xs sm:text-sm transition-all transform hover:scale-[1.03] active:scale-95 shadow-xl shadow-[#E8B84B]/25 cursor-pointer flex items-center justify-center gap-3"
            >
              <Play size={18} className="fill-[#0F172A]" />
              <span>Commencer un cours</span>
            </button>

            {/* CTA 2: Découvrir le programme EXCELLENTIA (Azul #183D73 com borda e ícone) */}
            <button 
              onClick={() => setCurrentView('categories')}
              className="w-full sm:w-auto px-8 py-4 bg-[#183D73] hover:bg-[#245398] text-white border-2 border-[#E8B84B] rounded-2xl font-black uppercase tracking-wider text-xs sm:text-sm transition-all transform hover:scale-[1.03] active:scale-95 shadow-xl shadow-[#183D73]/40 cursor-pointer flex items-center justify-center gap-3"
            >
              <Star size={18} className="text-[#E8B84B] fill-[#E8B84B]" />
              <span>Découvrir le programme EXCELLENTIA</span>
            </button>
          </div>

          {/* Trust Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-12 pt-8 border-t border-white/10 w-full max-w-4xl text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#183D73] border border-[#E8B84B]/30 flex items-center justify-center text-[#E8B84B] shrink-0">
                <GraduationCap size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Programme EXCELLENTIA</p>
                <p className="text-[10px] text-gray-300">Bourses & STEM d'élite</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#183D73] border border-[#E8B84B]/30 flex items-center justify-center text-[#E8B84B] shrink-0">
                <HeartPulse size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Santé & Prévention</p>
                <p className="text-[10px] text-gray-300">Drépanocytose & Maternité</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#183D73] border border-[#E8B84B]/30 shrink-0 flex items-center justify-center text-[#E8B84B]">
                <Sparkles size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Autonomisation</p>
                <p className="text-[10px] text-gray-300">Leadership & Finance</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#183D73] border border-[#E8B84B]/30 shrink-0 flex items-center justify-center text-[#E8B84B]">
                <Scale size={20} />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Droits Humains</p>
                <p className="text-[10px] text-gray-300">Lutte VBG & Citoyenneté</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: VITRINE DE STREAMING VIDÉO OPTIMISÉ (RDC DATA SAVER) --- */}
      <section className="py-20 px-5 sm:px-8 md:px-14 bg-gradient-to-b from-[#0F172A] via-[#102B52] to-[#0F172A] border-y border-[#E8B84B]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#E8B84B]/15 border border-[#E8B84B]/40 rounded-full text-xs font-black text-[#E8B84B] uppercase tracking-wider mb-3">
              <Wifi size={14} />
              <span>Streaming Adaptatif & Basse Consommation</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Technologie de Diffusion Haute Performance pour la RDC
            </h2>
            <p className="text-gray-200 text-xs sm:text-sm leading-relaxed">
              Conçu pour fonctionner avec fluidité sur les réseaux mobiles 3G, 4G et connexions instables. Profitez d'une compression intelligente et d'un mode hors-ligne complet.
            </p>
          </div>

          {/* Interactive Player Mockup */}
          <div className="bg-[#0D2342] border-2 border-[#183D73] rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Video Screen Preview */}
              <div className="lg:col-span-7 relative rounded-2xl overflow-hidden bg-black aspect-video border border-white/10 group shadow-inner">
                <img 
                  src="https://images.unsplash.com/photo-1509228468518-180dd4864904?q=80&w=1200&auto=format&fit=crop" 
                  alt="Extrait de cours Academy Lona" 
                  className="w-full h-full object-cover filter brightness-[0.85]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />

                {/* Center Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    onClick={() => setIsDemoPlaying(!isDemoPlaying)}
                    className="w-16 h-16 rounded-full bg-[#E8B84B] text-[#0F172A] flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                  >
                    <Play size={28} className="fill-[#0F172A] ml-1" />
                  </button>
                </div>

                {/* Player Bottom Bar Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/90 to-transparent flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="font-bold text-[11px] uppercase tracking-wider">Direct HD • 45 Mo/h</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#183D73]/80 px-2.5 py-1 rounded-lg border border-[#E8B84B]/30 font-bold text-[10px]">
                    <span>Résolution active : {streamQuality}</span>
                  </div>
                </div>
              </div>

              {/* Streaming Features Controls */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <h3 className="text-xl font-black text-white uppercase tracking-tight mb-2">
                    Ajustement Dynamique de Débit (HLS / DASH)
                  </h3>
                  <p className="text-xs text-gray-300 leading-relaxed">
                    Sélectionnez votre mode de lecture selon votre forfait mobile ou téléchargez le cours en un clic pour une étude sans connexion.
                  </p>
                </div>

                {/* Quality Switcher Pills */}
                <div className="space-y-2">
                  <label className="text-[11px] font-bold text-[#E8B84B] uppercase tracking-wider block">
                    Mode Réseau & Économie de Données :
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    <button 
                      onClick={() => setStreamQuality('360p')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        streamQuality === '360p' 
                          ? 'bg-[#E8B84B] text-[#0F172A] border-[#E8B84B] font-black' 
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <span className="block text-xs font-bold">360p Éco</span>
                      <span className="block text-[9px] opacity-80 mt-0.5">25 Mo/h</span>
                    </button>

                    <button 
                      onClick={() => setStreamQuality('720p')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        streamQuality === '720p' 
                          ? 'bg-[#E8B84B] text-[#0F172A] border-[#E8B84B] font-black' 
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <span className="block text-xs font-bold">720p Équilibré</span>
                      <span className="block text-[9px] opacity-80 mt-0.5">45 Mo/h</span>
                    </button>

                    <button 
                      onClick={() => setStreamQuality('1080p')}
                      className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                        streamQuality === '1080p' 
                          ? 'bg-[#E8B84B] text-[#0F172A] border-[#E8B84B] font-black' 
                          : 'bg-white/5 text-gray-300 border-white/10 hover:border-white/20'
                      }`}
                    >
                      <span className="block text-xs font-bold">1080p Max</span>
                      <span className="block text-[9px] opacity-80 mt-0.5">WiFi Pro</span>
                    </button>
                  </div>
                </div>

                {/* Key Streaming Features */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-start gap-3 text-xs text-gray-200">
                    <CheckCircle size={16} className="text-[#E8B84B] shrink-0 mt-0.5" />
                    <span><strong>Synchronisation hors-ligne :</strong> Sauvegarde sécurisée des leçons et des PDF pédagogiques.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-gray-200">
                    <CheckCircle size={16} className="text-[#E8B84B] shrink-0 mt-0.5" />
                    <span><strong>Reprise automatique de lecture :</strong> Sauvegarde à la seconde exacte sur tout appareil.</span>
                  </div>
                  <div className="flex items-start gap-3 text-xs text-gray-200">
                    <CheckCircle size={16} className="text-[#E8B84B] shrink-0 mt-0.5" />
                    <span><strong>Sous-titres & Audio Multilingue :</strong> Français, Swahili, Lingala, Anglais.</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    onClick={onEnter}
                    className="w-full py-3.5 bg-[#183D73] hover:bg-[#245398] text-white border border-[#E8B84B]/40 rounded-xl font-bold uppercase tracking-wider text-xs transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <Download size={16} className="text-[#E8B84B]" />
                    <span>Tester le lecteur interactif</span>
                  </button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 3: MOTEUR D'APPRENTISSAGE ADAPTATIF (ADAPTIVE LEARNING ENGINE) --- */}
      <section className="py-24 px-5 sm:px-8 md:px-14 bg-[#0F172A] relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[#183D73] border border-[#E8B84B]/40 rounded-full text-xs font-black text-[#E8B84B] uppercase tracking-wider mb-3">
              <Brain size={14} />
              <span>Votre Parcours Personnalisé</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black text-white uppercase tracking-tight mb-4">
              Un Moteur Pédagogique Intelligent Calibré sur vos Performances
            </h2>
            <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
              Academy Lona évalue continuellement votre maîtrise des concepts et ajuste automatiquement les exercices de renforcement, les révisions et le rythme des cours.
            </p>
          </div>

          {/* Interactive Simulation Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Step 1: Diagnostic */}
            <div 
              onClick={() => setAdaptiveStep(1)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                adaptiveStep === 1 
                  ? 'bg-[#183D73] border-[#E8B84B] shadow-xl scale-[1.02]' 
                  : 'bg-[#102B52]/60 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8B84B]/20 border border-[#E8B84B]/40 flex items-center justify-center text-[#E8B84B] mb-4">
                <Zap size={24} />
              </div>
              <span className="text-[10px] font-bold text-[#E8B84B] uppercase tracking-widest block mb-1">Étape 01</span>
              <h3 className="text-lg font-bold text-white mb-2">Évaluation Diagnostique</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Un quiz initial mesure vos prérequis académiques pour éviter les redondances et cibler vos besoins réels.
              </p>
              <div className="p-3 rounded-lg bg-black/30 border border-white/10 text-[11px] text-[#E8B84B] font-semibold">
                ✓ Niveau calibré instantanément
              </div>
            </div>

            {/* Step 2: Adaptive Path */}
            <div 
              onClick={() => setAdaptiveStep(2)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                adaptiveStep === 2 
                  ? 'bg-[#183D73] border-[#E8B84B] shadow-xl scale-[1.02]' 
                  : 'bg-[#102B52]/60 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8B84B]/20 border border-[#E8B84B]/40 flex items-center justify-center text-[#E8B84B] mb-4">
                <Brain size={24} />
              </div>
              <span className="text-[10px] font-bold text-[#E8B84B] uppercase tracking-widest block mb-1">Étape 02</span>
              <h3 className="text-lg font-bold text-white mb-2">Parcours Dynamique & Remédiation</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Si une notion présente des difficultés, le système injecte des micro-leçons de soutien et des exercices progressifs.
              </p>
              <div className="p-3 rounded-lg bg-black/30 border border-white/10 text-[11px] text-[#E8B84B] font-semibold">
                ✓ Recommandations personnalisées à chaque module
              </div>
            </div>

            {/* Step 3: Certification */}
            <div 
              onClick={() => setAdaptiveStep(3)}
              className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                adaptiveStep === 3 
                  ? 'bg-[#183D73] border-[#E8B84B] shadow-xl scale-[1.02]' 
                  : 'bg-[#102B52]/60 border-white/10 hover:border-white/20'
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8B84B]/20 border border-[#E8B84B]/40 flex items-center justify-center text-[#E8B84B] mb-4">
                <Award size={24} />
              </div>
              <span className="text-[10px] font-bold text-[#E8B84B] uppercase tracking-widest block mb-1">Étape 03</span>
              <h3 className="text-lg font-bold text-white mb-2">Certificat Officiel Fondation Lona</h3>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Obtention du diplôme numérique avec hash cryptographique d'authenticité et badges d'excellence EXCELLENTIA.
              </p>
              <div className="p-3 rounded-lg bg-black/30 border border-white/10 text-[11px] text-[#E8B84B] font-semibold">
                ✓ Reconnaissance académique et professionnelle
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- SECTION 4: LES 4 AXES STRATÉGIQUES DE LA FONDATION LONA --- */}
      <section className="py-20 px-5 sm:px-8 md:px-14 bg-gradient-to-b from-[#0F172A] to-[#102B52] border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-white/10 pb-6 gap-4">
            <div>
              <span className="text-xs font-black text-[#E8B84B] uppercase tracking-widest block mb-1">Curriculum Officiel</span>
              <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                Les 4 Grands Piliers Éducatifs
              </h2>
            </div>
            <button 
              onClick={() => setCurrentView('categories')} 
              className="text-xs font-bold text-[#E8B84B] hover:underline uppercase tracking-wider flex items-center gap-1.5"
            >
              <span>Consulter le programme complet</span>
              <ArrowRight size={14} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STRATEGIC_AXES.map((axis, idx) => (
              <div 
                key={idx}
                onClick={onEnter}
                className="bg-[#0D2342] border border-[#183D73] hover:border-[#E8B84B] p-6 rounded-3xl transition-all duration-300 hover:scale-[1.03] cursor-pointer group flex flex-col justify-between shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E8B84B]/5 rounded-bl-full pointer-events-none" />
                
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#183D73] border border-[#E8B84B]/40 flex items-center justify-center text-[#E8B84B] mb-5 group-hover:bg-[#E8B84B] group-hover:text-[#0F172A] transition-colors">
                    {idx === 0 && <GraduationCap size={24} />}
                    {idx === 1 && <HeartPulse size={24} />}
                    {idx === 2 && <Sparkles size={24} />}
                    {idx === 3 && <Scale size={24} />}
                  </div>

                  <h3 className="text-base font-black text-white uppercase tracking-tight mb-2 group-hover:text-[#E8B84B] transition-colors">
                    {axis.title}
                  </h3>

                  <p className="text-xs text-gray-300 leading-relaxed mb-4">
                    {axis.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#E8B84B] uppercase tracking-wider">
                    {axis.stats}
                  </span>
                  <ArrowRight size={14} className="text-gray-400 group-hover:text-[#E8B84B] group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 5: COURS EN VEDETTE (SHOWCASE) --- */}
      <section className="py-20 px-5 sm:px-8 md:px-14 bg-[#102B52] border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Row 1: EXCELLENTIA & STEM */}
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8B84B]/20 border border-[#E8B84B]/40 flex items-center justify-center text-[#E8B84B]">
                  <GraduationCap size={18} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">Programme EXCELLENTIA & STEM</h3>
                  <p className="text-xs text-gray-300">Sciences, Mathématiques Supérieures & Technologies d'Avenir</p>
                </div>
              </div>
              <button onClick={onEnter} className="text-xs font-bold text-[#E8B84B] hover:text-white uppercase tracking-wider">
                Accéder →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {excellentiaCourses.map(course => (
                <div key={course.id} onClick={onEnter} className="cursor-pointer transform hover:scale-[1.02] transition-all">
                  <CourseCard course={course} onClick={onEnter} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 2: SANTÉ & PRÉVENTION */}
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8B84B]/20 border border-[#E8B84B]/40 flex items-center justify-center text-[#E8B84B]">
                  <HeartPulse size={18} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">Santé & Prévention</h3>
                  <p className="text-xs text-gray-300">Lutte contre la drépanocytose, santé maternelle et secourisme</p>
                </div>
              </div>
              <button onClick={onEnter} className="text-xs font-bold text-[#E8B84B] hover:text-white uppercase tracking-wider">
                Accéder →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {santeCourses.map(course => (
                <div key={course.id} onClick={onEnter} className="cursor-pointer transform hover:scale-[1.02] transition-all">
                  <CourseCard course={course} onClick={onEnter} />
                </div>
              ))}
            </div>
          </div>

          {/* Row 3: AUTONOMISATION & DROITS */}
          <div>
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#E8B84B]/20 border border-[#E8B84B]/40 flex items-center justify-center text-[#E8B84B]">
                  <Sparkles size={18} />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-white uppercase tracking-tight">Autonomisation & Droits Humains</h3>
                  <p className="text-xs text-gray-300">Entrepreneuriat féminin, gestion de micro-entreprises et lutte contre les VBG</p>
                </div>
              </div>
              <button onClick={onEnter} className="text-xs font-bold text-[#E8B84B] hover:text-white uppercase tracking-wider">
                Accéder →
              </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[...autonomisationCourses, ...droitsCourses].slice(0, 3).map(course => (
                <div key={course.id} onClick={onEnter} className="cursor-pointer transform hover:scale-[1.02] transition-all">
                  <CourseCard course={course} onClick={onEnter} />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* --- SECTION 6: CHIFFRES D'IMPACT FONDATION LONA --- */}
      <section className="py-20 px-5 sm:px-8 md:px-14 bg-[#0D2342] border-t border-[#E8B84B]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight mb-3">
              L'Impact de la Fondation Lona sur le Terrain
            </h2>
            <p className="text-xs sm:text-sm text-gray-300">
              Des actions concrètes menées sous le haut patronage de la Première Dame, Denise Nyakeru Tshisekedi.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#183D73]/60 border border-[#E8B84B]/30">
              <span className="block text-3xl sm:text-4xl font-black text-[#E8B84B] mb-1">1 000+</span>
              <span className="block text-xs font-bold uppercase tracking-wider text-white">Boursiers EXCELLENTIA</span>
              <span className="block text-[10px] text-gray-300 mt-1">En RDC et à l'international</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#183D73]/60 border border-[#E8B84B]/30">
              <span className="block text-3xl sm:text-4xl font-black text-[#E8B84B] mb-1">50 000+</span>
              <span className="block text-xs font-bold uppercase tracking-wider text-white">Sensibilisés Drépanocytose</span>
              <span className="block text-[10px] text-gray-300 mt-1">Dépistages et kits de soins</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#183D73]/60 border border-[#E8B84B]/30">
              <span className="block text-3xl sm:text-4xl font-black text-[#E8B84B] mb-1">15 000+</span>
              <span className="block text-xs font-bold uppercase tracking-wider text-white">Femmes Autonomisées</span>
              <span className="block text-[10px] text-gray-300 mt-1">Formation & micro-activités</span>
            </div>

            <div className="p-6 rounded-2xl bg-[#183D73]/60 border border-[#E8B84B]/30">
              <span className="block text-3xl sm:text-4xl font-black text-[#E8B84B] mb-1">26</span>
              <span className="block text-xs font-bold uppercase tracking-wider text-white">Provinces Couvertes</span>
              <span className="block text-[10px] text-gray-300 mt-1">Accessibilité partout en RDC</span>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 7: MULTI-ÉCRANS --- */}
      <section className="py-20 px-6 md:px-16 bg-[#0F172A] border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 max-w-6xl mx-auto">
          <div className="md:w-1/2 space-y-6 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#183D73] border border-[#E8B84B]/30 rounded-full text-xs font-bold text-[#E8B84B] uppercase tracking-wider">
              <span>Accessibilité Totale</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-black leading-tight">
              Apprenez partout, sur smartphone, tablette ou ordinateur.
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              Academy Lona est une Progressive Web App (PWA) ultra-légère, installable directement sur votre écran d'accueil sans passer par les magasins d'applications.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
              <div className="flex flex-col items-center gap-2 text-gray-300">
                <div className="w-14 h-14 rounded-2xl bg-[#183D73]/50 border border-white/10 flex items-center justify-center">
                  <Smartphone size={28} className="text-[#E8B84B]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider">Smartphone</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-gray-300">
                <div className="w-14 h-14 rounded-2xl bg-[#183D73]/50 border border-white/10 flex items-center justify-center">
                  <Tablet size={28} className="text-[#E8B84B]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider">Tablette</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-gray-300">
                <div className="w-14 h-14 rounded-2xl bg-[#183D73]/50 border border-white/10 flex items-center justify-center">
                  <Monitor size={28} className="text-[#E8B84B]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider">Ordinateur</span>
              </div>
              <div className="flex flex-col items-center gap-2 text-gray-300">
                <div className="w-14 h-14 rounded-2xl bg-[#183D73]/50 border border-white/10 flex items-center justify-center">
                  <Tv size={28} className="text-[#E8B84B]" />
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider">Grand Écran</span>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <img 
              src="https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=800&auto=format&fit=crop" 
              alt="Multi-écrans Academy Lona" 
              className="rounded-3xl shadow-2xl border border-[#E8B84B]/30 relative z-10 w-full" 
            />
            <div className="absolute inset-0 bg-[#183D73]/40 blur-[90px] z-0" />
          </div>
        </div>
      </section>

      {/* --- SECTION 8: FAQ --- */}
      <section className="py-20 px-6 md:px-16 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-12 uppercase tracking-tight">
          Questions Fréquemment Posées
        </h2>
        <div className="space-y-4">
          {[
            { 
              q: 'Qu\'est-ce que la plateforme Academy Lona ?', 
              a: 'Academy Lona est la plateforme éducative officielle de la Fondation Lona (présidée par la Première Dame de la RDC, Denise Nyakeru Tshisekedi). Elle dispense des cours certifiants en ligne et en streaming adapté pour promouvoir l\'excellence académique, la santé communautaire, l\'autonomisation des femmes et les droits civiques.' 
            },
            { 
              q: 'Qui peut postuler et suivre les cours du programme EXCELLENTIA ?', 
              a: 'Les modules EXCELLENTIA & STEM sont ouverts aux lauréats des bourses EXCELLENTIA ainsi qu\'à tous les élèves et étudiants congolais désireux de se perfectionner en sciences, mathématiques supérieures, ingénierie et technologies d\'avenir.' 
            },
            { 
              q: 'Comment fonctionne l\'apprentissage adaptatif sur Academy Lona ?', 
              a: 'Notre moteur d\'apprentissage adaptatif analyse vos résultats aux quiz et votre rythme d\'assimilation pour ajuster automatiquement le niveau des exercices, vous suggérer des modules de remédiation et vous proposer un plan d\'étude sur mesure.' 
            },
            { 
              q: 'Les cours sont-ils accessibles avec une faible connexion Internet en RDC ?', 
              a: 'Oui. Le lecteur vidéo intègre un profil 360p "Éco Données" ne consommant qu\'environ 25 Mo par heure, ainsi que le téléchargement direct de résumés et livrets au format PDF pour une révision 100% hors-ligne.' 
            },
            { 
              q: 'Les certificats délivrés sont-ils reconnus ?', 
              a: 'Chaque formation complétée délivre un certificat officiel Fondation Lona doté d\'un identifiant numérique unique et vérifiable, attestant de votre acquisition de compétences.' 
            }
          ].map((item, idx) => (
            <div key={idx} className="border-b border-white/10 pb-4">
              <button 
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                className="w-full py-5 flex justify-between items-center text-left hover:text-[#E8B84B] transition-colors cursor-pointer"
              >
                <span className="text-base md:text-lg font-bold">{item.q}</span>
                <ChevronDown className={`text-[#E8B84B] transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openFaq === idx ? 'max-h-48 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">{item.a}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- FOOTER --- */}
      <LandingFooter onViewChange={setCurrentView} />

    </div>
  );
};

export default LandingPage;
