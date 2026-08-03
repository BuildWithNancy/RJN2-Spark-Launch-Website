import React from 'react';
import { Logo } from './Logo';
import { PageRoute } from '../types';
import { Instagram, ArrowUpRight } from 'lucide-react';

interface FooterProps {
  onNavigate: (route: PageRoute) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: '/' },
    { label: 'Services', route: '/services' },
    { label: 'Tools & Systems', route: '/tools' },
    { label: 'Pricing', route: '/pricing' },
    { label: 'Contact', route: '/contact' }
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A0A0A] border-t border-[#262626] text-[#F5F2EB]/80 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-12 border-b border-[#262626]">
          
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <Logo size="lg" />
            <p className="text-base text-[#9CA3AF] max-w-md font-sans leading-relaxed">
              Turning AI from a buzzword into real, measurable impact.
            </p>
            <p className="text-xs text-[#9CA3AF]/70 max-w-md font-sans">
              Streamlining operations, client intake, and automated workflows for service firms worldwide.
            </p>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest font-sans">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {footerLinks.map((link) => (
                <li key={link.route}>
                  <button
                    onClick={() => handleNavClick(link.route)}
                    className="hover:text-[#C9A227] transition-colors text-[#F5F2EB]/80 font-sans flex items-center gap-1 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#C9A227]" />
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & Contact */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-semibold text-[#C9A227] uppercase tracking-widest font-sans">
              Connect
            </h4>
            <div className="space-y-3 text-sm">
              <a
                href="mailto:projects@rjn2spark.com"
                className="text-[#F5F2EB] hover:text-[#C9A227] transition-colors block font-mono text-xs"
              >
                projects@rjn2spark.com
              </a>
              <a
                href="https://instagram.com/rjn2spark"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0F172A] border border-[#262626] text-xs text-[#F5F2EB] hover:border-[#C9A227] hover:text-[#C9A227] transition-all"
              >
                <Instagram className="w-4 h-4 text-[#C9A227]" />
                <span>@rjn2spark</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#9CA3AF] gap-4">
          <p>© {currentYear} RJN2 Spark. All rights reserved.</p>
          <div className="flex items-center gap-6 text-[#9CA3AF]">
            <button onClick={() => handleNavClick('/contact')} className="hover:text-[#C9A227] transition-colors">
              Book Workflow Audit
            </button>
            <span>•</span>
            <button onClick={() => handleNavClick('/privacy' as PageRoute)} className="hover:text-[#C9A227] transition-colors">
              Privacy & Operations
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
