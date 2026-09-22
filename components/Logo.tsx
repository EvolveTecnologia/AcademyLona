import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'icon-only';
  inverted?: boolean; // For dark backgrounds (white logo) or light backgrounds (color logo)
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'horizontal',
  inverted = false,
  size,
}) => {
  if (variant === 'icon-only') {
    return (
      <img 
        src="/pwa-512x512.png" 
        alt="Academy Lona - Fondation Lona" 
        className={`object-contain select-none shrink-0 ${className || 'w-10 h-10 rounded-xl'}`}
        loading="eager"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/apple-touch-icon.png';
        }}
      />
    );
  }

  if (variant === 'stacked') {
    return (
      <img 
        src={inverted ? "/logolona-white-png.png" : "/logolona-png.png"} 
        alt="Academy Lona - Fondation Lona" 
        className={`w-48 max-w-full h-auto object-contain select-none filter drop-shadow-md ${className}`}
        loading="eager"
        onError={(e) => {
          (e.target as HTMLImageElement).src = '/pwa-512x512.png';
        }}
      />
    );
  }

  // Horizontal variant (default)
  // When inverted = true (on dark background), use logolona-white-png.png
  // When inverted = false (on light background), use logolona-png.png
  const logoSrc = inverted ? '/logolona-white-png.png' : '/logolona-png.png';
  
  const sizeClass = size === 'sm' 
    ? 'h-7 md:h-8' 
    : size === 'lg' 
    ? 'h-12 md:h-14' 
    : size === 'xl' 
    ? 'h-16 md:h-20' 
    : 'h-9 md:h-10';

  return (
    <img 
      src={logoSrc} 
      alt="Academy Lona - Fondation Lona" 
      className={`w-auto object-contain select-none shrink-0 transition-all ${className ? className : sizeClass}`}
      loading="eager"
      onError={(e) => {
        (e.target as HTMLImageElement).src = '/logolona-png.png';
      }}
    />
  );
};

export default Logo;


