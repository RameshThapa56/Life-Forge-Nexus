import React from 'react';
import { Battery, Wifi, Signal } from 'lucide-react';
import './_group.css';

export function Splash() {
  return (
    <div className="lf-screen relative flex flex-col" style={{ background: 'var(--lf-gradient-hero)' }}>
      {/* Background orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full blur-[64px]" style={{ background: 'var(--lf-purple-glow)' }}></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full blur-[80px]" style={{ background: 'var(--lf-blue-glow)' }}></div>
      
      {/* Status Bar */}
      <div className="lf-status-bar z-10">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal size={14} />
          <Wifi size={14} />
          <Battery size={14} />
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center relative z-10 pb-20">
        <div className="relative mb-6" style={{ animation: 'lf-pulse-glow 3s infinite ease-in-out' }}>
          <div className="w-24 h-24 rounded-full flex items-center justify-center border border-[var(--lf-border-bright)]" style={{ background: 'var(--lf-bg-glass)', backdropFilter: 'blur(12px)', boxShadow: 'var(--lf-shadow-blue)' }}>
            <svg viewBox="0 0 100 100" className="w-12 h-12">
              <path d="M 30,70 L 30,30 L 70,30 M 30,50 L 60,50" fill="none" stroke="url(#blue-purple)" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
              <defs>
                <linearGradient id="blue-purple" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--lf-blue)" />
                  <stop offset="100%" stopColor="var(--lf-purple)" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold tracking-tight mb-2 lf-gradient-text" style={{ fontFamily: 'var(--lf-font-display)' }}>
          LifeForge
        </h1>
        <p className="text-[var(--lf-text-secondary)] font-medium text-sm tracking-wide">
          Forge Your Best Life
        </p>
      </div>

      <div className="absolute bottom-12 left-0 right-0 px-10 flex flex-col items-center z-10">
        <div className="w-full lf-xp-bar mb-6">
          <div className="lf-xp-bar-fill" style={{ '--target-width': '100%', animationDuration: '2s' } as React.CSSProperties}></div>
        </div>
        <div className="text-[var(--lf-text-muted)] text-[10px] font-semibold tracking-widest uppercase">
          V 2.1.0
        </div>
      </div>
    </div>
  );
}
