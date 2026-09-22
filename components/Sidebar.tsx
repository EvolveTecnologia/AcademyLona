import React, { useState } from 'react';
import { Home, Search, Layout, Download, User, LogOut, Sparkles } from 'lucide-react';
import { Logo } from './Logo';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab, onLogout }) => {
  const [isHovered, setIsHovered] = useState(false);

  const tabs = [
    { id: 'home', label: 'Accueil', icon: Home },
    { id: 'search', label: 'Recherche', icon: Search },
    { id: 'ai-tutor', label: 'Tuteur IA Lona', icon: Sparkles, isAi: true },
    { id: 'trail', label: 'Parcours Académique', icon: Layout },
    { id: 'downloads', label: 'Téléchargements', icon: Download },
    { id: 'profile', label: 'Mon Compte', icon: User },
  ];

  return (
    <div
      className={`fixed left-0 top-0 h-full z-[100] flex flex-col transition-all duration-300 ease-in-out group outline-none ${
        isHovered 
          ? 'w-[300px] bg-gradient-to-r from-[#0F172A] via-[#0F172A]/95 to-[#0F172A]/90 backdrop-blur-md border-r border-[#183D73]/50 shadow-2xl' 
          : 'w-[100px] bg-[#0F172A] border-r border-[#183D73]/40'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsHovered(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) {
          setIsHovered(false);
        }
      }}
      tabIndex={0}
    >
      {/* Logo Area */}
      <div className={`h-28 flex items-center ${isHovered ? 'justify-start px-6' : 'justify-center'} transition-all duration-300`}>
        {isHovered ? (
          <Logo inverted={true} className="h-11" />
        ) : (
          <div className="w-11 h-11 rounded-2xl bg-[#1E293B] hover:bg-[#183D73]/40 border border-[#E8B84B]/30 flex items-center justify-center transition-all p-1.5 shadow-lg group-hover:scale-105">
            <Logo variant="icon-only" className="w-full h-full drop-shadow" />
          </div>
        )}
      </div>

      {/* Nav Items */}
      <nav className="flex-1 flex flex-col justify-center gap-2 px-3">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative flex items-center gap-4 p-3.5 rounded-xl transition-all duration-200 group/item outline-none cursor-pointer ${
                isActive 
                  ? 'text-white bg-[#183D73] shadow-md shadow-[#183D73]/40 border border-[#E8B84B]/30' 
                  : 'text-gray-300 hover:text-white hover:bg-white/10'
              } ${isHovered ? 'justify-start px-4' : 'justify-center'}`}
            >
              <div className={`transition-transform duration-300 ${isActive ? 'scale-110 text-[#E8B84B]' : 'group-hover/item:scale-110'}`}>
                <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              
              <span className={`text-sm font-bold tracking-wide whitespace-nowrap overflow-hidden transition-all duration-300 ${
                isHovered ? 'opacity-100 max-w-[200px] translate-x-0' : 'opacity-0 max-w-0 -translate-x-4'
              }`}>
                {tab.label}
              </span>

              {/* Active Indicator accent in gold */}
              {isActive && (
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-7 bg-[#E8B84B] rounded-l-full" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Footer / Logout */}
      <div className="p-4 pb-8">
        {onLogout && (
          <button 
            onClick={onLogout}
            className={`flex items-center gap-4 p-3.5 rounded-xl text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-all w-full outline-none cursor-pointer ${
              isHovered ? 'justify-start px-4' : 'justify-center'
            }`}
          >
            <LogOut size={22} />
            <span className={`text-sm font-bold whitespace-nowrap overflow-hidden transition-all duration-300 ${
              isHovered ? 'opacity-100 max-w-[200px]' : 'opacity-0 max-w-0'
            }`}>
              Déconnexion
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Sidebar;
