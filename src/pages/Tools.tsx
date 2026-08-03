import React from 'react';
import { PageRoute } from '../types';
import { SEOHead } from '../components/SEOHead';
import { TOOLS_LIST, REAL_WORLD_SYSTEMS } from '../data/content';
import {
  Target,
  Database,
  Layout,
  Zap,
  CreditCard,
  CheckCircle2,
  ArrowRight,
  Layers
} from 'lucide-react';

interface ToolsProps {
  onNavigate: (route: PageRoute) => void;
}

export const Tools: React.FC<ToolsProps> = ({ onNavigate }) => {

  const getToolIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target': return <Target className="w-6 h-6 text-[#C9A227]" />;
      case 'Database': return <Database className="w-6 h-6 text-[#C9A227]" />;
      case 'Layout': return <Layout className="w-6 h-6 text-[#C9A227]" />;
      case 'Zap': return <Zap className="w-6 h-6 text-[#C9A227]" />;
      case 'CreditCard': return <CreditCard className="w-6 h-6 text-[#C9A227]" />;
      default: return <Layers className="w-6 h-6 text-[#C9A227]" />;
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB]">
      <SEOHead
        title="Tools & Systems We Use | RJN2 Spark"
        description="We build practical systems using trusted tools like HubSpot, Airtable, Softr, Zapier, Make, and Wave to connect your operations without adding complexity."
      />

      {/* Header */}
      <section className="py-16 sm:py-24 border-b border-[#262626] bg-[#0F172A]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest font-sans">
            MODERN TECH STACK
          </span>
          <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#F5F2EB]">
            Tools & Systems We Use
          </h1>
          <p className="text-base sm:text-lg text-[#9CA3AF] font-sans font-light leading-relaxed">
            We build practical systems using trusted no-code and low-code tools so you can streamline operations without adding unnecessary complexity. The goal is not to force you into more software—it is to connect the tools you already use, or set up the right ones to save time, reduce manual work, and improve visibility across your business.
          </p>
        </div>
      </section>

      {/* 5 Tool Cards */}
      <section className="py-20 border-b border-[#262626] bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2 font-sans">
              CORE INFRASTRUCTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F2EB]">
              Trusted Platforms We Integrate
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TOOLS_LIST.map((tool) => (
              <div
                key={tool.id}
                className="p-6 rounded-xl bg-[#0F172A] border border-[#262626] hover:border-[#C9A227]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#0A0A0A] border border-[#262626] flex items-center justify-center">
                      {getToolIcon(tool.iconName)}
                    </div>
                    <span className="text-[10px] font-semibold text-[#C9A227] uppercase tracking-wider px-2.5 py-1 rounded bg-[#0A0A0A] border border-[#C9A227]/20 font-sans">
                      {tool.role}
                    </span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#F5F2EB] mb-2">
                    {tool.name}
                  </h3>

                  <p className="text-sm text-[#9CA3AF] leading-relaxed font-sans">
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5 Real-World Systems Section */}
      <section className="py-20 border-b border-[#262626] bg-[#0F172A]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2 font-sans">
              REAL-WORLD APPLICATION
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F5F2EB] mb-3">
              5 Real-World Systems We Can Build For You
            </h2>
            <p className="text-sm sm:text-base text-[#9CA3AF] font-sans font-light">
              Here is how these platforms combine into reliable daily business workflows:
            </p>
          </div>

          <div className="space-y-4">
            {REAL_WORLD_SYSTEMS.map((system, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#0A0A0A] border border-[#262626] flex items-start gap-4 hover:border-[#C9A227]/30 transition-all"
              >
                <div className="w-7 h-7 rounded-full bg-[#0F172A] border border-[#C9A227] flex items-center justify-center text-xs font-bold text-[#C9A227] shrink-0 font-mono mt-0.5">
                  0{idx + 1}
                </div>
                <div>
                  <h3 className="text-base font-serif font-bold text-[#F5F2EB] mb-1">
                    {system.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] font-sans leading-relaxed">
                    {system.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="py-20 bg-[#0A0A0A] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-xl sm:text-2xl font-serif text-[#F5F2EB] leading-relaxed italic">
            "We don't just set up tools—we build systems that help your business run with more clarity, consistency, and less manual work."
          </p>
          <div className="pt-2">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center gap-2 px-8 py-4 rounded bg-[#C9A227] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest hover:bg-[#E0BA38] transition-all shadow-md"
            >
              <span>Audit your tools today</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
