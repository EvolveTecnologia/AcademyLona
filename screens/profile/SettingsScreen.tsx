import React, { useState } from 'react';
import { Bell, Wifi, Monitor, PlayCircle, Trash2, Smartphone, ShieldCheck, ChevronRight } from 'lucide-react';

const SettingsScreen: React.FC = () => {
  const [settings, setSettings] = useState({
    promoEmails: true,
    pushNotifs: true,
    wifiOnly: false,
    autoplay: true,
    quality: 'auto'
  });
  const [feedbackMsg, setFeedbackMsg] = useState<string | null>(null);

  const toggle = (key: keyof typeof settings) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key as keyof typeof settings] }));
  };

  const handleClearCache = () => {
    setFeedbackMsg('Cache local vidé avec succès.');
    setTimeout(() => setFeedbackMsg(null), 3000);
  };

  const SettingRow = ({ icon: Icon, title, subtitle, value, onClick, type = 'toggle' }: any) => (
    <div 
      className="flex items-center justify-between p-4 bg-[#183D73]/30 border border-white/10 rounded-2xl hover:border-[#E8B84B]/50 transition-colors group cursor-pointer" 
      onClick={onClick}
    >
      <div className="flex items-center gap-3.5">
        <div className="p-2 bg-white/5 rounded-xl text-gray-400 group-hover:text-white transition-colors">
          <Icon size={18} />
        </div>
        <div>
          <h4 className="text-xs font-bold text-white">{title}</h4>
          <p className="text-[10px] text-gray-400 font-medium">{subtitle}</p>
        </div>
      </div>
      
      {type === 'toggle' && (
        <div className={`w-10 h-5 rounded-full relative transition-colors ${value ? 'bg-[#E8B84B]' : 'bg-gray-700'}`}>
          <div className={`absolute top-0.5 w-4 h-4 rounded-full shadow-md transition-all ${value ? 'left-5 bg-[#0F172A]' : 'left-0.5 bg-white'}`} />
        </div>
      )}

      {type === 'select' && (
        <div className="flex items-center gap-1.5 text-xs font-bold text-[#E8B84B]">
          {value} <ChevronRight size={14} />
        </div>
      )}
      
      {type === 'action' && (
        <ChevronRight size={15} className="text-gray-400 group-hover:text-white" />
      )}
    </div>
  );

  return (
    <div className="p-6 md:p-10 pb-32 space-y-7 animate-in fade-in duration-300 text-white">
      {feedbackMsg && (
        <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 font-bold text-center animate-in fade-in">
          {feedbackMsg}
        </div>
      )}
      
      {/* Notifications */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold text-[#E8B84B] uppercase tracking-wider px-1">Préférences de Notification</h3>
        <div className="space-y-2.5">
          <SettingRow 
            icon={Bell} 
            title="Courriels d'actualités et opportunités" 
            subtitle="Nouveaux cours, webinaires et masterclasses recommandés."
            value={settings.promoEmails}
            onClick={() => toggle('promoEmails')}
          />
          <SettingRow 
            icon={Smartphone} 
            title="Notifications Push d'apprentissage" 
            subtitle="Rappels d'objectifs, alertes d'évaluation et nouveaux contenus."
            value={settings.pushNotifs}
            onClick={() => toggle('pushNotifs')}
          />
        </div>
      </section>

      {/* Streaming & Données */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold text-[#E8B84B] uppercase tracking-wider px-1">Lecture & Économie de Données</h3>
        <div className="space-y-2.5">
          <SettingRow 
            icon={Wifi} 
            title="Téléchargement Wi-Fi uniquement" 
            subtitle="Économisez vos données mobiles lors du stockage hors-ligne."
            value={settings.wifiOnly}
            onClick={() => toggle('wifiOnly')}
          />
          <SettingRow 
            icon={PlayCircle} 
            title="Lecture continue (Autoplay)" 
            subtitle="Lancer automatiquement la prochaine leçon du module."
            value={settings.autoplay}
            onClick={() => toggle('autoplay')}
          />
          <SettingRow 
            icon={Monitor} 
            title="Qualité vidéo par défaut" 
            subtitle="Définissez la résolution optimale de lecture vidéo."
            value={settings.quality === 'auto' ? 'Automatique (Optimisé)' : 'Haute Définition (1080p)'}
            type="select"
            onClick={() => setSettings(prev => ({...prev, quality: prev.quality === 'auto' ? 'high' : 'auto'}))}
          />
        </div>
      </section>

      {/* Stockage & Sécurité */}
      <section className="space-y-3">
        <h3 className="text-xs font-bold text-[#E8B84B] uppercase tracking-wider px-1">Maintenance & Sécurité</h3>
        <div className="space-y-2.5">
          <SettingRow 
            icon={Trash2} 
            title="Vider le cache local" 
            subtitle="Libérer l'espace de stockage temporaire (420 Mo)."
            type="action"
            onClick={handleClearCache}
          />
          <SettingRow 
            icon={ShieldCheck} 
            title="Sessions et appareils connectés" 
            subtitle="Consulter et révoquer les accès actifs sur vos terminaux."
            type="action"
            onClick={() => {}}
          />
        </div>
      </section>

      <div className="text-center pt-6">
        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
          Academy Lona v2.5.0 • Fondation Lona (Kinshasa, RDC)
        </p>
      </div>
    </div>
  );
};

export default SettingsScreen;
