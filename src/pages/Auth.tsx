import React, { useState } from 'react';
import { User, PageRoute } from '../types';
import { SEOHead } from '../components/SEOHead';
import { Logo } from '../components/Logo';
import { Lock, Mail, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';

interface AuthProps {
  currentUser: User | null;
  onLoginSuccess: (user: User, token: string) => void;
  onNavigate: (route: PageRoute) => void;
}

export const Auth: React.FC<AuthProps> = ({
  currentUser,
  onLoginSuccess,
  onNavigate
}) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email || !password) {
      setError('Please provide both email and password.');
      return;
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setIsSubmitting(true);

    const endpoint = mode === 'login' ? '/api/auth/login' : '/api/auth/signup';

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Authentication failed.');
      }

      onLoginSuccess(data.user, data.token);
      onNavigate('/');
    } catch (err: any) {
      setError(err.message || 'An error occurred during sign in.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (currentUser) {
    return (
      <div className="bg-[#0A0A0A] text-[#F5F2EB] py-20 min-h-[70vh] flex items-center justify-center">
        <SEOHead
          title="Account | RJN2 Spark"
          description="Manage your account session and systems access."
        />
        <div className="max-w-md w-full mx-auto px-4 text-center space-y-6">
          <div className="p-8 rounded-2xl bg-[#0F172A] border border-[#C9A227]/40 space-y-4">
            <div className="w-12 h-12 rounded-full bg-[#C9A227]/20 border border-[#C9A227] text-[#C9A227] flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h1 className="text-2xl font-serif font-bold text-[#F5F2EB]">
              You are signed in
            </h1>
            <p className="text-sm text-[#9CA3AF] font-mono">
              {currentUser.email}
            </p>
            <p className="text-xs text-[#9CA3AF]/70 font-sans">
              Signed in since {new Date(currentUser.createdAt).toLocaleDateString()}
            </p>
            <div className="pt-4 flex flex-col gap-3">
              <button
                onClick={() => onNavigate('/')}
                className="w-full py-3 rounded bg-[#C9A227] text-[#0A0A0A] text-xs font-bold uppercase tracking-wider hover:bg-[#E0BA38] transition-all"
              >
                Return to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#0A0A0A] text-[#F5F2EB] py-20 min-h-[75vh] flex items-center justify-center">
      <SEOHead
        title={mode === 'login' ? 'Sign In | RJN2 Spark' : 'Sign Up | RJN2 Spark'}
        description="Access RJN2 Spark client and systems portal."
      />

      <div className="max-w-md w-full mx-auto px-4">
        <div className="text-center mb-8 space-y-3">
          <Logo size="lg" className="justify-center" />
          <p className="text-xs uppercase tracking-widest text-[#C9A227] font-semibold font-sans pt-2">
            CLIENT & SYSTEMS PORTAL
          </p>
        </div>

        <div className="bg-[#0F172A] border border-[#262626] rounded-2xl p-8 shadow-xl">
          
          {/* Tab Selector */}
          <div className="flex rounded-lg bg-[#0A0A0A] p-1 border border-[#262626] mb-6">
            <button
              onClick={() => {
                setMode('login');
                setError(null);
              }}
              className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all ${
                mode === 'login'
                  ? 'bg-[#C9A227] text-[#0A0A0A] shadow'
                  : 'text-[#9CA3AF] hover:text-[#F5F2EB]'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => {
                setMode('signup');
                setError(null);
              }}
              className={`flex-1 py-2 text-xs font-semibold uppercase tracking-wider rounded-md transition-all ${
                mode === 'signup'
                  ? 'bg-[#C9A227] text-[#0A0A0A] shadow'
                  : 'text-[#9CA3AF] hover:text-[#F5F2EB]'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            
            {error && (
              <div className="p-3.5 rounded-lg bg-red-950/50 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
                <span>{error}</span>
              </div>
            )}

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-xs font-medium uppercase tracking-wider text-[#9CA3AF] mb-2 font-sans">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="name@firm.com"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#262626] text-[#F5F2EB] placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-xs font-medium uppercase tracking-wider text-[#9CA3AF] mb-2 font-sans">
                Password
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-4 py-3 rounded-lg bg-[#0A0A0A] border border-[#262626] text-[#F5F2EB] placeholder-[#9CA3AF]/40 text-sm focus:outline-none focus:border-[#C9A227] focus:ring-1 focus:ring-[#C9A227]"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded bg-[#C9A227] text-[#0A0A0A] text-xs font-bold uppercase tracking-widest hover:bg-[#E0BA38] transition-all shadow-md"
              >
                {isSubmitting ? (
                  <span>Processing...</span>
                ) : (
                  <>
                    <span>{mode === 'login' ? 'Sign In' : 'Create Account'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

          </form>

          <p className="text-center text-xs text-[#9CA3AF] mt-6 font-sans">
            Public intake form does not require an account. Go to{' '}
            <button
              onClick={() => onNavigate('/contact')}
              className="text-[#C9A227] underline hover:text-[#E0BA38]"
            >
              Contact Form
            </button>.
          </p>

        </div>
      </div>
    </div>
  );
};
