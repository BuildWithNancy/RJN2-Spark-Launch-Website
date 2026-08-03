import React, { useState } from 'react';
import { Logo } from './Logo';
import { PageRoute, User } from '../types';
import { Menu, X, User as UserIcon, LogOut } from 'lucide-react';

interface HeaderProps {
  currentRoute: PageRoute;
  onNavigate: (route: PageRoute) => void;
  currentUser: User | null;
  onSignOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentRoute,
  onNavigate,
  currentUser,
  onSignOut
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; route: PageRoute }[] = [
    { label: 'Home', route: '/' },
    { label: 'Services', route: '/services' },
    { label: 'Tools & Systems', route: '/tools' },
    { label: 'Pricing', route: '/pricing' },
    { label: 'Contact', route: '/contact' }
  ];

  const handleNavClick = (route: PageRoute) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('/')}
          className="group focus:outline-none text-left"
          aria-label="RJN2 Spark Home"
        >
          <Logo size="md" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`text-sm font-medium transition-colors relative py-1 ${
                  isActive
                    ? 'text-[#C9A227]'
                    : 'text-[#F5F2EB]/80 hover:text-[#F5F2EB]'
                }`}
              >
                {link.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#C9A227] rounded-full" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Auth / Action Area */}
        <div className="hidden md:flex items-center gap-4">
          {currentUser ? (
            <div className="flex items-center gap-3">
              <span className="text-xs text-[#9CA3AF] truncate max-w-[140px]">
                {currentUser.email}
              </span>
              <button
                onClick={onSignOut}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded border border-[#262626] bg-[#0F172A] text-xs font-medium text-[#F5F2EB] hover:bg-[#262626] transition-colors"
              >
                <LogOut className="w-3.5 h-3.5 text-[#C9A227]" />
                Sign out
              </button>
            </div>
          ) : (
            <button
              onClick={() => handleNavClick('/auth')}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#C9A227] text-[#0A0A0A] text-xs font-semibold uppercase tracking-wider hover:bg-[#E0BA38] transition-all shadow-sm"
            >
              <UserIcon className="w-3.5 h-3.5" />
              Sign in
            </button>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md border border-[#262626] text-[#F5F2EB] hover:bg-[#171717] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#262626] bg-[#0A0A0A] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => {
            const isActive = currentRoute === link.route;
            return (
              <button
                key={link.route}
                onClick={() => handleNavClick(link.route)}
                className={`block w-full text-left py-2.5 px-3 rounded-md text-base font-medium transition-colors ${
                  isActive
                    ? 'bg-[#0F172A] text-[#C9A227] border-l-2 border-[#C9A227]'
                    : 'text-[#F5F2EB]/90 hover:bg-[#171717]'
                }`}
              >
                {link.label}
              </button>
            );
          })}

          <div className="pt-4 border-t border-[#262626]">
            {currentUser ? (
              <div className="space-y-3">
                <div className="text-xs text-[#9CA3AF] px-3">
                  Signed in as <span className="text-[#F5F2EB] font-medium">{currentUser.email}</span>
                </div>
                <button
                  onClick={() => {
                    onSignOut();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded border border-[#262626] bg-[#0F172A] text-sm text-[#F5F2EB]"
                >
                  <LogOut className="w-4 h-4 text-[#C9A227]" />
                  Sign out
                </button>
              </div>
            ) : (
              <button
                onClick={() => handleNavClick('/auth')}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-3 rounded bg-[#C9A227] text-[#0A0A0A] font-semibold text-sm uppercase tracking-wider"
              >
                <UserIcon className="w-4 h-4" />
                Sign in
              </button>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
