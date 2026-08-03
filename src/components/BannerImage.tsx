import React from 'react';

interface BannerImageProps {
  type: 'header' | 'values';
  className?: string;
}

export const BannerImage: React.FC<BannerImageProps> = ({ type, className = '' }) => {
  if (type === 'header') {
    return (
      <div className={`w-full relative overflow-hidden bg-[#0A0A0A] border-b border-[#C9A227]/20 ${className}`}>
        <div className="relative w-full h-[180px] sm:h-[240px] md:h-[300px] lg:h-[340px]">
          {/* HD Architectural Noir Banner */}
          <img
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
            alt="RJN2 Spark Modern Operations Environment"
            className="w-full h-full object-cover object-center filter brightness-[0.45] contrast-[1.1] saturate-[0.8]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle gold and dark linear gradients */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/40 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/80 via-transparent to-[#0A0A0A]/80" />
          <div className="absolute inset-0 bg-[#C9A227]/5 mix-blend-overlay" />
          
          {/* Editorial Content Overlay */}
          <div className="absolute inset-0 flex items-center justify-center px-6">
            <div className="max-w-4xl text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A0A0A]/80 border border-[#C9A227]/30 backdrop-blur-sm text-xs font-medium text-[#C9A227] tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse" />
                Architected Workflows & AI Automation
              </div>
              <p className="text-sm sm:text-base md:text-lg text-[#F5F2EB]/80 max-w-2xl mx-auto font-light leading-relaxed hidden sm:block">
                Eliminating operational friction for service agencies, consultants, and high-touch firms.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Values image strip
  return (
    <div className={`w-full relative overflow-hidden border-y border-[#C9A227]/30 bg-[#0F172A] my-12 sm:my-16 ${className}`}>
      <div className="relative w-full h-[160px] sm:h-[200px] md:h-[240px]">
        {/* HD Systems Photography Background */}
        <img
          src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=2000&q=85"
          alt="RJN2 Spark Core Values & Systems"
          className="w-full h-full object-cover object-center filter brightness-[0.25] contrast-[1.2]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        <div className="absolute inset-0 bg-[#0F172A]/80 mix-blend-multiply" />
        
        {/* Values Strip Grid */}
        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-8">
          <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            <div className="p-3 sm:p-4 rounded-lg bg-[#0A0A0A]/70 border border-[#C9A227]/20 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-serif text-[#C9A227] font-bold">100%</div>
              <div className="text-xs text-[#F5F2EB]/80 font-sans tracking-wide uppercase mt-1">Lead Ingestion Rate</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-[#0A0A0A]/70 border border-[#C9A227]/20 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-serif text-[#C9A227] font-bold">&lt; 5 Mins</div>
              <div className="text-xs text-[#F5F2EB]/80 font-sans tracking-wide uppercase mt-1">Instant Automated Response</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-[#0A0A0A]/70 border border-[#C9A227]/20 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-serif text-[#C9A227] font-bold">Zero</div>
              <div className="text-xs text-[#F5F2EB]/80 font-sans tracking-wide uppercase mt-1">Siloed Communication</div>
            </div>
            <div className="p-3 sm:p-4 rounded-lg bg-[#0A0A0A]/70 border border-[#C9A227]/20 backdrop-blur-md">
              <div className="text-xl sm:text-2xl font-serif text-[#C9A227] font-bold">Measurable</div>
              <div className="text-xs text-[#F5F2EB]/80 font-sans tracking-wide uppercase mt-1">Business Impact</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
