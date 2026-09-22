import React, { useState } from 'react';
import { Shield, FileText, Lock, Database } from 'lucide-react';

const LegalScreen: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'terms' | 'license' | 'privacy' | 'data'>('terms');

  const tabs = [
    { id: 'terms', label: 'Conditions Générales', icon: FileText },
    { id: 'license', label: 'Licence & Droits', icon: Shield },
    { id: 'privacy', label: 'Confidentialité', icon: Lock },
    { id: 'data', label: 'Protection des Données', icon: Database },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'terms':
        return (
          <div className="space-y-4 animate-in fade-in duration-300">
            <h2 className="text-lg font-bold text-white uppercase tracking-tight">Conditions Générales d'Utilisation</h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              Bienvenue sur <strong>Academy Lona</strong>, la plateforme éducative officielle de la <strong>Fondation Lona</strong> (présidée par la Première Dame de la RDC, Denise Nyakeru Tshisekedi, Siège : Boulevard du 30 Juin, Gombe, Kinshasa, République Démocratique du Congo). En accédant aux services, vous acceptez l'ensemble des présentes dispositions contractuelles.
            </p>
            
            <h3 className="text-xs font-bold text-[#E8B84B] uppercase tracking-wider mt-4">1. Accès & Titularité du Compte</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              L'accès à l'espace de formation est personnel et nominatif. Le partage d'identifiants est prohibé afin de préserver l'authenticité des certifications et bourses délivrées.
            </p>
            
            <h3 className="text-xs font-bold text-[#E8B84B] uppercase tracking-wider mt-4">2. Propriété Intellectuelle</h3>
            <p className="text-xs text-gray-300 leading-relaxed">
              L'intégralité des contenus pédagogiques (cours vidéo, livrets PDF, banques d'exercices et modules interactifs) demeure la propriété de la Fondation Lona ou de ses partenaires académiques agréés.
            </p>
          </div>
        );
      case 'license':
        return (
          <div className="space-y-4 animate-in fade-in duration-300">
            <h2 className="text-lg font-bold text-white uppercase tracking-tight">Licence d'Accès Pédagogique</h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              Academy Lona accorde à l'apprenant une licence d'apprentissage non transférable, non exclusive et à titre strictement individuel dans le cadre de son parcours d'étude.
            </p>
            
            <ul className="list-disc pl-5 space-y-1.5 text-xs text-gray-400">
              <li>Interdiction de redistribuer ou vendre les enregistrements et supports éducatifs.</li>
              <li>Le téléchargement local de livrets PDF est réservé à un usage d'étude personnelle hors-ligne.</li>
              <li>Toute tentative d'extraction automatisée ou d'ingénierie inverse est formellement proscrite.</li>
            </ul>
          </div>
        );
      case 'privacy':
        return (
          <div className="space-y-4 animate-in fade-in duration-300">
            <h2 className="text-lg font-bold text-white uppercase tracking-tight">Politique de Confidentialité</h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              La protection de la vie privée des apprenants et boursiers est au cœur de nos engagements. Vos données sont hébergées selon les normes de sécurité les plus strictes en vigueur en RDC.
            </p>
            
            <div className="bg-white/5 p-4 rounded-xl border border-white/10 space-y-1">
              <h4 className="font-bold text-white text-xs">Données Recueillies</h4>
              <p className="text-xs text-gray-300">Identité, courriel, cursus d'étude et traces d'apprentissage nécessaires à l'émission des certificats officiels.</p>
            </div>
          </div>
        );
      case 'data':
        return (
          <div className="space-y-4 animate-in fade-in duration-300">
            <h2 className="text-lg font-bold text-white uppercase tracking-tight">Protection et Droits des Utilisateurs</h2>
            <p className="text-xs text-gray-300 leading-relaxed">
              Conformément à la réglementation, vous disposez d'un droit d'accès, de rectification et d'effacement de vos données personnelles sur simple demande adressée à <span className="text-[#E8B84B]">contact@fondationlona.org</span>.
            </p>
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0F172A] text-white">
      <div className="flex overflow-x-auto hide-scrollbar border-b border-white/10 px-6 md:px-10 bg-[#0F172A] sticky top-0 z-10">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex items-center gap-2 px-5 py-4 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                isActive ? 'border-[#E8B84B] text-white font-bold' : 'border-transparent text-gray-400 hover:text-gray-200'
              }`}
            >
              <Icon size={15} />
              <span className="text-xs uppercase tracking-wider">{tab.label}</span>
            </button>
          );
        })}
      </div>

      <div className="flex-1 overflow-y-auto p-6 md:p-10 text-gray-300 text-xs leading-relaxed pb-32">
        <div className="max-w-3xl mx-auto">
          {renderContent()}
          <p className="text-center text-[10px] text-gray-400 mt-12 pt-6 border-t border-white/10 uppercase tracking-wider">
            Dernière révision : Février 2026 • Département Juridique Fondation Lona
          </p>
        </div>
      </div>
    </div>
  );
};

export default LegalScreen;
