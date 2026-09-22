
import React, { ReactNode } from 'react';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';
import { Logo } from './Logo';

interface LayoutProps {
  children: ReactNode;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onLogout?: () => void;
  isMobile: boolean;
  hideNav?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, activeTab, setActiveTab, onLogout, isMobile, hideNav }) => {
  if (hideNav) return <>{children}</>;

  if (isMobile) {
    return (
      <div className="min-h-screen bg-[#0F172A] text-white pb-20">
        {/* Fixed Top Header for Mobile & Tablet */}
        <header className="fixed top-0 left-0 right-0 z-50 h-14 bg-[#0F172A]/95 backdrop-blur-md border-b border-[#183D73]/40 flex items-center justify-between px-4 sm:px-6 shadow-lg select-none">
          <div className="flex items-center cursor-pointer" onClick={() => setActiveTab('home')}>
            <Logo inverted={true} className="h-7 sm:h-8" />
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#E8B84B] animate-pulse shadow-[0_0_8px_rgba(232,184,75,0.8)]" />
          </div>
        </header>

        {/* Content offset for fixed header */}
        <div className="pt-14">
          {children}
        </div>

        {/* Fixed Bottom Navigation */}
        <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
    );
  }

  // Desktop/TV Layout (>= 1024px)
  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex overflow-hidden">
      {/* Sidebar Fixed to Left */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} onLogout={onLogout} />
      
      {/* Main Content - pl-[100px] to match collapsed sidebar width */}
      <main className="flex-1 lg:pl-[100px] transition-all duration-300 w-full relative z-0 overflow-y-auto h-screen hide-scrollbar bg-[#0F172A]">
        {children}
      </main>
    </div>
  );
};

export default Layout;
