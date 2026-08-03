import React from 'react';
import { PageRoute } from '../types';
import { BannerImage } from '../components/BannerImage';
import { SEOHead } from '../components/SEOHead';
import {
  PROBLEM_CARDS,
  TRANSFORMATIONS,
  SYSTEMS_LIST
} from '../data/content';
import {
  ArrowRight,
  CheckCircle2,
  Inbox,
  Clock,
  FolderKanban,
  FileText,
  UserCheck,
  Workflow,
  Calendar,
  Layers,
  BarChart3,
  Sparkles
} from 'lucide-react';

interface HomeProps {
  onNavigate: (route: PageRoute) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {

  const getProblemIcon = (iconName: string) => {
    switch (iconName) {
      case 'InboxX': return <Inbox className="w-6 h-6 text-[#C9A227]" />;
      case 'ClockAlert': return <Clock className="w-6 h-6 text-[#C9A227]" />;
      case 'FolderKanban': return <FolderKanban className="w-6 h-6 text-[#C9A227]" />;
      case 'FileText': return <FileText className="w-6 h-6 text-[#C9A227]" />;
      default: return <Sparkles className="w-6 h-6 text-[#C9A227]" />;
    }
  };

  const getSystemIcon = (iconName: string) => {
    switch (iconName) {
      case 'UserCheck': return <UserCheck className="w-6 h-6 text-[#C9A227]" />;
      case 'Workflow': return <Workflow className="w-6 h-6 text-[#C9A227]" />;
      case 'CalendarSync': return <Calendar className="w-6 h-6 text-[#C9A227]" />;
      case 'Layers': return <Layers className="w-6 h-6 text-[#C9A227]" />;
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-[#C9A227]" />;
      default: return <Workflow className="w-6 h-6 text-[#C9A227]" />;
    }
  };

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB]">
      <SEOHead
        title="RJN2 Spark | Streamline Client Intake, Follow-up & Operations"
        description="We help small service-based teams capture every request, automate follow-up, and run repeatable workflows with practical AI and automation systems."
        ogImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80"
      />

      {/* 1. Header banner image — full-width HD hero banner photo across top */}
      <BannerImage type="header" />

      {/* 2. Hero Section */}
      <section className="relative py-16 sm:py-24 border-b border-[#262626] overflow-hidden">
        {/* Subtle background image overlay */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
            alt="Hero subtle overlay"
            className="w-full h-full object-cover filter grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-transparent to-[#0A0A0A]" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          {/* Eyebrow */}
          <div className="inline-block px-3 py-1 rounded-full bg-[#0F172A] border border-[#C9A227]/40 text-xs font-semibold text-[#C9A227] tracking-widest uppercase mb-6 font-sans">
            FOR SMALL BUSINESSES & SERVICE FIRMS
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F5F2EB] tracking-tight leading-[1.15] max-w-4xl mx-auto mb-6">
            Streamline client intake, follow-up, and operations without adding more tools or manual work.
          </h1>

          {/* Subhead */}
          <p className="text-lg sm:text-xl text-[#9CA3AF] max-w-3xl mx-auto font-sans font-light leading-relaxed mb-8">
            We help small service-based teams capture every request, automate follow-up, and run repeatable workflows with practical AI and automation systems built around outcomes you can measure.
          </p>

          {/* Intro paragraph with inline hyperlinks */}
          <div className="p-6 rounded-xl bg-[#0F172A]/80 border border-[#262626] max-w-3xl mx-auto text-sm sm:text-base text-[#F5F2EB]/90 leading-relaxed font-sans mb-10 shadow-lg">
            Most teams know AI matters. Far fewer know where it fits, how to adopt it responsibly, or how to measure whether it's working. That gap — between the promise of AI and the day-to-day reality of your operations — is exactly where RJN2 Spark lives. Learn about our{' '}
            <button
              onClick={() => onNavigate('/services')}
              className="text-[#C9A227] underline decoration-[#C9A227]/50 hover:decoration-[#C9A227] hover:text-[#E0BA38] transition-colors font-medium"
            >
              tailored service offerings
            </button>{' '}
            or{' '}
            <button
              onClick={() => onNavigate('/contact')}
              className="text-[#C9A227] underline decoration-[#C9A227]/50 hover:decoration-[#C9A227] hover:text-[#E0BA38] transition-colors font-medium"
            >
              get in touch to audit your workflows today
            </button>.
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded bg-[#C9A227] text-[#0A0A0A] text-sm font-bold tracking-wider uppercase hover:bg-[#E0BA38] transition-all shadow-md group"
            >
              <span>Book a workflow audit</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('/services')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded border border-[#C9A227]/50 bg-[#0F172A] text-[#F5F2EB] text-sm font-semibold tracking-wider hover:border-[#C9A227] hover:bg-[#1E293B] transition-all"
            >
              <span>See what we build</span>
            </button>
          </div>

        </div>
      </section>

      {/* 3. Problem Section (The Daily Friction) */}
      <section className="py-20 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2 font-sans">
              THE DAILY FRICTION
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F5F2EB] tracking-tight">
              You know you need better systems. You just don't know what to fix first.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROBLEM_CARDS.map((card) => (
              <div
                key={card.id}
                className="p-6 rounded-xl bg-[#0F172A] border border-[#262626] hover:border-[#C9A227]/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-[#0A0A0A] border border-[#262626] flex items-center justify-center mb-5">
                    {getProblemIcon(card.iconName)}
                  </div>
                  <h3 className="text-base font-serif font-bold text-[#F5F2EB] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#9CA3AF] leading-relaxed font-sans">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Values Image Strip */}
      <BannerImage type="values" />

      {/* 5. Transformation Section */}
      <section className="py-20 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2 font-sans">
              OPERATIONAL SHIFT
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F5F2EB]">
              From manual chaos to systems that run themselves.
            </h2>
          </div>

          <div className="space-y-4">
            {TRANSFORMATIONS.map((row, idx) => (
              <div
                key={idx}
                className="grid grid-cols-1 md:grid-cols-12 rounded-xl border border-[#262626] overflow-hidden bg-[#0F172A]"
              >
                {/* Before */}
                <div className="md:col-span-5 p-5 bg-[#0A0A0A]/60 flex items-center gap-3 border-b md:border-b-0 md:border-r border-[#262626]">
                  <span className="w-2 h-2 rounded-full bg-red-500/80 shrink-0" />
                  <span className="text-sm text-[#9CA3AF] font-sans">
                    {row.before}
                  </span>
                </div>

                {/* Arrow indicator */}
                <div className="hidden md:flex md:col-span-1 items-center justify-center bg-[#0F172A] text-[#C9A227]">
                  <ArrowRight className="w-4 h-4" />
                </div>

                {/* After */}
                <div className="md:col-span-6 p-5 bg-[#0F172A] flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#C9A227] shrink-0" />
                  <span className="text-sm text-[#F5F2EB] font-medium font-sans">
                    {row.after}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Systems We Build */}
      <section className="py-20 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <span className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest block mb-2 font-sans">
              SYSTEMS WE BUILD
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#F5F2EB] mb-4">
              Practical workflows, not abstract service labels.
            </h2>
            <p className="text-base text-[#9CA3AF] font-sans font-light leading-relaxed">
              We build systems like lead capture and follow-up workflows, client onboarding pipelines, and internal request tracking so your team spends less time chasing information and more time serving clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SYSTEMS_LIST.map((sys) => (
              <div
                key={sys.id}
                className="p-6 rounded-xl bg-[#0F172A] border border-[#262626] hover:border-[#C9A227]/40 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-[#0A0A0A] border border-[#C9A227]/30 flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                  {getSystemIcon(sys.iconName)}
                </div>
                <h3 className="text-lg font-serif font-bold text-[#F5F2EB] mb-2">
                  {sys.title}
                </h3>
                <p className="text-sm text-[#9CA3AF] leading-relaxed font-sans">
                  {sys.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Starter Offer Card */}
      <section className="py-20 bg-[#0A0A0A] border-b border-[#262626]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-2xl bg-[#0F172A] border-2 border-[#C9A227] shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#C9A227] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest rounded-bl-lg font-sans">
              FEATURED STARTER SYSTEM
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#F5F2EB]">
                  Workflow Starter System
                </h3>
                <p className="text-sm text-[#9CA3AF] font-sans">
                  The fastest way to eliminate missed inquiries, automate client responses, and gain clarity.
                </p>

                <div className="pt-2 space-y-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#C9A227] block font-sans">
                    Deliverables Checklist:
                  </span>
                  <ul className="space-y-2.5 text-sm text-[#F5F2EB]/90">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <span>A workflow audit of your current intake and follow-up</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <span>One core system built and integrated (intake, onboarding, or requests)</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <span>Automated confirmations, reminders, and next steps</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <span>A clear roadmap for what to automate next</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-5 text-center md:text-right border-t md:border-t-0 md:border-l border-[#262626] pt-6 md:pt-0 md:pl-8 space-y-4">
                <div>
                  <span className="text-xs uppercase tracking-widest text-[#9CA3AF] block font-sans">
                    Investment
                  </span>
                  <span className="text-3xl sm:text-4xl font-serif font-bold text-[#C9A227]">
                    From $1,500
                  </span>
                </div>
                <button
                  onClick={() => onNavigate('/contact')}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-[#C9A227] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider hover:bg-[#E0BA38] transition-all shadow-md"
                >
                  <span>Start with a workflow audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Final CTA Section */}
      <section className="py-20 bg-[#0F172A] text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#F5F2EB] tracking-tight">
            Ready to stop chasing inquiries and start running on systems?
          </h2>
          <p className="text-base text-[#9CA3AF] font-sans font-light">
            Book a 20-minute workflow audit. We will analyze your bottlenecks and map out immediate automation wins.
          </p>
          <div className="pt-4">
            <button
              onClick={() => onNavigate('/contact')}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#C9A227] text-[#0A0A0A] text-sm font-bold uppercase tracking-widest hover:bg-[#E0BA38] transition-all shadow-lg"
            >
              <span>Get in touch</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
