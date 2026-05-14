import React from 'react';
import { Battery, Wifi, Signal, Mail, Lock, EyeOff } from 'lucide-react';
import './_group.css';

export function Auth() {
  return (
    <div className="lf-screen flex flex-col relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--lf-purple-glow)] rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[var(--lf-blue-glow)] rounded-full blur-[100px] -translate-x-1/4 translate-y-1/4 pointer-events-none"></div>

      <div className="lf-status-bar z-10 relative">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal size={14} />
          <Wifi size={14} />
          <Battery size={14} />
        </div>
      </div>

      <div className="flex-1 flex flex-col px-6 pt-12 pb-8 z-10 relative">
        <div className="flex flex-col items-center mb-10">
          <div className="w-12 h-12 rounded-xl mb-4 flex items-center justify-center border border-[var(--lf-border-bright)]" style={{ background: 'var(--lf-gradient-hero)', boxShadow: 'var(--lf-shadow-purple)' }}>
            <svg viewBox="0 0 100 100" className="w-6 h-6">
              <path d="M 30,70 L 30,30 L 70,30 M 30,50 L 60,50" fill="none" stroke="white" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold lf-gradient-text" style={{ fontFamily: 'var(--lf-font-display)' }}>LifeForge</h1>
        </div>

        <div className="flex mb-8 border-b border-[var(--lf-border)]">
          <button className="flex-1 pb-3 text-[15px] font-semibold border-b-2 border-[var(--lf-blue)] lf-gradient-text">
            Sign In
          </button>
          <button className="flex-1 pb-3 text-[15px] font-medium text-[var(--lf-text-muted)] hover:text-[var(--lf-text-secondary)] transition-colors">
            Create Account
          </button>
        </div>

        <div className="flex flex-col gap-4 mb-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Mail size={18} className="text-[var(--lf-text-muted)]" />
            </div>
            <input 
              type="email" 
              placeholder="Email address"
              className="w-full h-14 bg-[var(--lf-bg-glass)] border border-[var(--lf-border)] rounded-[var(--lf-radius-md)] pl-12 pr-4 text-[15px] text-[var(--lf-text-primary)] placeholder-[var(--lf-text-muted)] focus:outline-none focus:border-[var(--lf-blue)] transition-colors"
            />
          </div>
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Lock size={18} className="text-[var(--lf-text-muted)]" />
            </div>
            <input 
              type="password" 
              placeholder="Password"
              className="w-full h-14 bg-[var(--lf-bg-glass)] border border-[var(--lf-border)] rounded-[var(--lf-radius-md)] pl-12 pr-12 text-[15px] text-[var(--lf-text-primary)] placeholder-[var(--lf-text-muted)] focus:outline-none focus:border-[var(--lf-blue)] transition-colors"
            />
            <button className="absolute inset-y-0 right-4 flex items-center text-[var(--lf-text-muted)] hover:text-[var(--lf-text-secondary)]">
              <EyeOff size={18} />
            </button>
          </div>
          <div className="flex justify-end">
            <a href="#" className="text-[13px] font-medium text-[var(--lf-text-muted)] hover:text-[var(--lf-text-primary)] transition-colors">Forgot Password?</a>
          </div>
        </div>

        <button className="lf-btn-primary mb-8 py-4">
          Sign In
        </button>

        <div className="flex items-center gap-4 mb-8">
          <div className="h-[1px] flex-1 bg-[var(--lf-border)]"></div>
          <span className="text-[13px] text-[var(--lf-text-muted)] uppercase tracking-wider font-medium">or continue with</span>
          <div className="h-[1px] flex-1 bg-[var(--lf-border)]"></div>
        </div>

        <div className="flex flex-col gap-3 mb-auto">
          <button className="h-14 w-full bg-white text-black rounded-[var(--lf-radius-md)] flex items-center justify-center gap-3 font-semibold text-[15px] hover:bg-gray-100 transition-colors">
            <svg width="20" height="20" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
          <button className="h-14 w-full bg-[var(--lf-bg-card)] border border-[var(--lf-border)] text-white rounded-[var(--lf-radius-md)] flex items-center justify-center gap-3 font-semibold text-[15px] hover:bg-[var(--lf-bg-glass)] transition-colors">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 13.91c-.03-2.62 2.12-3.87 2.21-3.92-1.22-1.78-3.13-2.02-3.81-2.06-1.63-.16-3.18.96-4.02.96-.84 0-2.12-.94-3.48-.91-1.76.03-3.39 1.02-4.29 2.59-1.84 3.19-.47 7.9 1.32 10.49.88 1.28 1.93 2.72 3.31 2.67 1.34-.05 1.84-.86 3.46-.86 1.62 0 2.09.86 3.49.83 1.43-.03 2.34-1.3 3.19-2.58.98-1.43 1.39-2.82 1.41-2.9-.03-.01-2.63-1.01-2.79-4.21zM14.51 5.38c.74-.89 1.24-2.13 1.1-3.38-1.07.04-2.38.71-3.14 1.6-.68.79-1.28 2.06-1.12 3.36 1.19.09 2.41-.68 3.16-1.58z"/>
            </svg>
            Continue with Apple
          </button>
        </div>

        <div className="text-center mt-6">
          <span className="text-[14px] text-[var(--lf-text-muted)]">Don't have an account? </span>
          <button className="text-[14px] font-semibold text-[var(--lf-blue)] hover:text-[var(--lf-blue-bright)] transition-colors">Create one</button>
        </div>
      </div>
    </div>
  );
}
