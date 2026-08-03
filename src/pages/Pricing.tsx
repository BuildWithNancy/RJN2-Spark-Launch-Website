import React from 'react';
import { PageRoute } from '../types';
import { SEOHead } from '../components/SEOHead';
import { PRICING_PACKAGES } from '../data/content';
import { CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';

interface PricingProps {
  onNavigate: (route: PageRoute) => void;
}

export const Pricing: React.FC<PricingProps> = ({ onNavigate }) => {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB]">
      <SEOHead
        title="Transparent Outcome-Based Pricing | RJN2 Spark"
        description="Outcome-based pricing packages starting at $1,500. Workflow Starter, AI Literacy Workshop, and Work Placement Program. Custom packages available."
      />

      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-[#262626] bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest font-sans">
            CLEAR & PREDICTABLE INVESTMENT
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#F5F2EB]">
            Outcome-Based Pricing Packages
          </h1>
          <p className="text-base sm:text-lg text-[#9CA3AF] font-sans font-light max-w-2xl mx-auto">
            Fixed-scope implementations designed around measurable business outcomes rather than endless open-ended hourly billing.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20 border-b border-[#262626] bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
            {PRICING_PACKAGES.map((pkg) => {
              const isPopular = pkg.isPopular;
              return (
                <div
                  key={pkg.id}
                  className={`rounded-2xl p-8 flex flex-col justify-between transition-all relative ${
                    isPopular
                      ? 'bg-[#0F172A] border-2 border-[#C9A227] shadow-2xl scale-[1.02]'
                      : 'bg-[#0F172A]/70 border border-[#262626] hover:border-[#C9A227]/40'
                  }`}
                >
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C9A227] text-[#0A0A0A] text-[11px] font-bold uppercase tracking-widest shadow-md font-sans">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-serif font-bold text-[#F5F2EB] mb-2">
                        {pkg.title}
                      </h3>
                      <p className="text-sm text-[#9CA3AF] font-sans min-h-[40px]">
                        {pkg.description}
                      </p>
                    </div>

                    <div className="py-4 border-y border-[#262626]">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C9A227]">
                        {pkg.price}
                      </span>
                      <span className="text-xs text-[#9CA3AF] block mt-1 font-sans">
                        Fixed project investment
                      </span>
                    </div>

                    <div className="space-y-3">
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A227] block font-sans">
                        Included Deliverables:
                      </span>
                      <ul className="space-y-2.5 text-sm text-[#F5F2EB]/90">
                        {pkg.deliverables.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                            <span className="font-sans leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-8 mt-6 border-t border-[#262626]">
                    <button
                      onClick={() => onNavigate('/contact')}
                      className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded text-xs font-bold uppercase tracking-wider transition-all ${
                        isPopular
                          ? 'bg-[#C9A227] text-[#0A0A0A] hover:bg-[#E0BA38] shadow-md'
                          : 'border border-[#C9A227]/50 bg-[#0A0A0A] text-[#F5F2EB] hover:border-[#C9A227] hover:bg-[#1E293B]'
                      }`}
                    >
                      <span>{pkg.ctaText}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Audit Note */}
          <div className="mt-16 p-6 rounded-xl bg-[#0F172A] border border-[#262626] max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#C9A227] shrink-0" />
              <p className="text-sm text-[#F5F2EB] font-sans">
                Packages can be customized. Every engagement starts with a free 20-minute workflow audit.
              </p>
            </div>
            <button
              onClick={() => onNavigate('/contact')}
              className="shrink-0 px-5 py-2.5 rounded bg-[#C9A227] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider hover:bg-[#E0BA38] transition-all"
            >
              Book audit
            </button>
          </div>

        </div>
      </section>
    </div>
  );
};
