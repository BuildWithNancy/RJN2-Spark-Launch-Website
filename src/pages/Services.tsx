import React from 'react';
import { PageRoute } from '../types';
import { SEOHead } from '../components/SEOHead';
import { SERVICES_LIST } from '../data/content';
import { CheckCircle2, ArrowRight, Cpu, GraduationCap, Users } from 'lucide-react';

interface ServicesProps {
  onNavigate: (route: PageRoute) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const getServiceIcon = (index: number) => {
    switch (index) {
      case 0: return <Cpu className="w-8 h-8 text-[#C9A227]" />;
      case 1: return <GraduationCap className="w-8 h-8 text-[#C9A227]" />;
      case 2: return <Users className="w-8 h-8 text-[#C9A227]" />;
      default: return <Cpu className="w-8 h-8 text-[#C9A227]" />;
    }
  };

  const getServiceImage = (index: number) => {
    switch (index) {
      case 0: return 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80';
      case 1: return 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80';
      case 2: return 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80';
      default: return 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80';
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB]">
      <SEOHead
        title="Services & Offerings | RJN2 Spark"
        description="Explore our core service offerings: Workflow Optimization through AI Automation, AI Literacy Programs, and Work Placement Programs."
      />

      {/* Page Header */}
      <section className="py-16 sm:py-20 border-b border-[#262626] bg-[#0F172A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest font-sans">
            OUR CORE OFFERINGS
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#F5F2EB]">
            Services Designed for Practical Impact
          </h1>
          <p className="text-base sm:text-lg text-[#9CA3AF] max-w-2xl mx-auto font-sans font-light">
            We move beyond abstract AI advice to implement tangible systems, educate teams, and supply qualified talent.
          </p>
        </div>
      </section>

      {/* Alternating Full-Width Editorial Sections */}
      <div className="divide-y divide-[#262626]">
        {SERVICES_LIST.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={service.id}
              className={`py-20 ${isEven ? 'bg-[#0A0A0A]' : 'bg-[#0F172A]'}`}
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                  
                  {/* Left Column Text (or Right if reversed) */}
                  <div className={`lg:col-span-7 space-y-6 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A0A0A] border border-[#C9A227]/30 text-xs font-semibold text-[#C9A227] tracking-wider uppercase font-sans">
                      {service.tag}
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F5F2EB] leading-tight">
                      {service.title}
                    </h2>

                    <p className="text-base sm:text-lg text-[#9CA3AF] font-sans font-light leading-relaxed">
                      {service.description}
                    </p>

                    <div className="pt-2 space-y-3">
                      <h3 className="text-xs font-semibold uppercase tracking-widest text-[#C9A227] font-sans">
                        Key Outcomes & Benefits:
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.benefits.map((benefit, bIdx) => (
                          <div key={bIdx} className="flex items-center gap-2.5 p-3 rounded bg-[#0A0A0A]/50 border border-[#262626]">
                            <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0" />
                            <span className="text-sm text-[#F5F2EB] font-sans">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4">
                      <button
                        onClick={() => onNavigate('/contact')}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded bg-[#C9A227] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider hover:bg-[#E0BA38] transition-all shadow-md"
                      >
                        <span>Discuss this program</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column Image Block */}
                  <div className={`lg:col-span-5 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
                    <div className="relative rounded-2xl overflow-hidden border border-[#262626] bg-[#0A0A0A] group shadow-xl">
                      <img
                        src={getServiceImage(index)}
                        alt={service.title}
                        className="w-full h-[320px] sm:h-[400px] object-cover object-center filter brightness-[0.75] contrast-[1.1] group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent opacity-80" />
                      
                      <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0A0A0A]/80 border border-[#C9A227]/30 backdrop-blur-md flex items-center gap-4">
                        <div className="p-2.5 rounded-lg bg-[#0F172A] border border-[#C9A227]/40 shrink-0">
                          {getServiceIcon(index)}
                        </div>
                        <div>
                          <p className="text-xs text-[#9CA3AF] uppercase tracking-wider font-sans">
                            {service.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom Audit Banner */}
      <section className="py-16 bg-[#0F172A] text-center border-t border-[#262626]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F2EB]">
            Unsure which service fits your current stage?
          </h2>
          <p className="text-sm sm:text-base text-[#9CA3AF] font-sans">
            Start with our free 20-minute workflow audit. We will analyze your operations and recommend the right path forward.
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded bg-[#C9A227] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest hover:bg-[#E0BA38] transition-all"
            >
              <span>Book a free audit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
