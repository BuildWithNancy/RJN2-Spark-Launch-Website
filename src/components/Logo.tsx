import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true
}) => {
  const iconSizes = {
    sm: 'w-7 h-7',
    md: 'w-9 h-9',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* RJN2 Spark Emblem */}
      <div className={`${iconSizes[size]} relative flex items-center justify-center rounded-md bg-[#0F172A] border border-[#C9A227]/40 shadow-inner group-hover:border-[#C9A227] transition-colors`}>
        <svg
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full p-1.5"
        >
          {/* Subtle background frame */}
          <rect x="2" y="2" width="36" height="36" rx="4" fill="#0A0A0A" stroke="#C9A227" strokeWidth="1.2" strokeOpacity="0.3" />
          
          {/* Monogram R-2 stylized geometry + Gold Spark */}
          <path
            d="M11 12H20C22.2091 12 24 13.7909 24 16C24 18.2091 22.2091 20 20 20H11V12Z"
            stroke="#F5F2EB"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 12V28"
            stroke="#F5F2EB"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          <path
            d="M18 20L25 28"
            stroke="#F5F2EB"
            strokeWidth="2.2"
            strokeLinecap="round"
          />
          
          {/* Gold Spark Diamond Accent */}
          <path
            d="M28 8L29.5 13.5L35 15L29.5 16.5L28 22L26.5 16.5L21 15L26.5 13.5L28 8Z"
            fill="#C9A227"
          />
        </svg>
      </div>

      {showText && (
        <div className="flex flex-col leading-none">
          <span className={`font-serif ${textSizes[size]} font-bold tracking-tight text-[#F5F2EB]`}>
            RJN2 <span className="text-[#C9A227] italic">Spark</span>
          </span>
          <span className="text-[10px] tracking-widest text-[#9CA3AF] uppercase font-sans mt-0.5">
            Systems & Automation
          </span>
        </div>
      )}
    </div>
  );
};
