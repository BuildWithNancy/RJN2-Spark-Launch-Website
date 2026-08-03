import React, { useState, useEffect } from 'react';
import { PageRoute, User } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Services } from './pages/Services';
import { Tools } from './pages/Tools';
import { Pricing } from './pages/Pricing';
import { Contact } from './pages/Contact';
import { Auth } from './pages/Auth';

export default function App() {
  // Sync router with browser pathname
  const [currentRoute, setCurrentRoute] = useState<PageRoute>(() => {
    const path = window.location.pathname as PageRoute;
    const validRoutes: PageRoute[] = ['/', '/services', '/tools', '/pricing', '/contact', '/auth'];
    return validRoutes.includes(path) ? path : '/';
  });

  const [currentUser, setCurrentUser] = useState<User | null>(null);

  // Check auth session on load
  useEffect(() => {
    const token = localStorage.getItem('rjn2_session_token');
    if (token) {
      fetch('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` }
      })
        .then(res => (res.ok ? res.json() : null))
        .then(data => {
          if (data && data.user) {
            setCurrentUser(data.user);
          } else {
            localStorage.removeItem('rjn2_session_token');
          }
        })
        .catch(() => {
          localStorage.removeItem('rjn2_session_token');
        });
    }
  }, []);

  // Listen to popstate (browser back/forward navigation)
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as PageRoute;
      const validRoutes: PageRoute[] = ['/', '/services', '/tools', '/pricing', '/contact', '/auth'];
      setCurrentRoute(validRoutes.includes(path) ? path : '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateTo = (route: PageRoute) => {
    setCurrentRoute(route);
    window.history.pushState({}, '', route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLoginSuccess = (user: User, token: string) => {
    setCurrentUser(user);
    localStorage.setItem('rjn2_session_token', token);
  };

  const handleSignOut = () => {
    const token = localStorage.getItem('rjn2_session_token');
    if (token) {
      fetch('/api/auth/logout', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` }
      }).catch(() => {});
    }
    localStorage.removeItem('rjn2_session_token');
    setCurrentUser(null);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F2EB] flex flex-col font-sans selection:bg-[#C9A227]/30 selection:text-[#FFF]">
      
      {/* Sticky Header */}
      <Header
        currentRoute={currentRoute}
        onNavigate={navigateTo}
        currentUser={currentUser}
        onSignOut={handleSignOut}
      />

      {/* Main Content View Container */}
      <main className="flex-grow">
        {currentRoute === '/' && <Home onNavigate={navigateTo} />}
        {currentRoute === '/services' && <Services onNavigate={navigateTo} />}
        {currentRoute === '/tools' && <Tools onNavigate={navigateTo} />}
        {currentRoute === '/pricing' && <Pricing onNavigate={navigateTo} />}
        {currentRoute === '/contact' && <Contact />}
        {currentRoute === '/auth' && (
          <Auth
            currentUser={currentUser}
            onLoginSuccess={handleLoginSuccess}
            onNavigate={navigateTo}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onNavigate={navigateTo} />
    </div>
  );
}
