import React from 'react';
import { Battery, Wifi, Signal, Flame, Droplet, Brain, ArrowUpRight, Zap, Home, Calendar, LayoutGrid, BarChart2, User, ChevronRight } from 'lucide-react';
import './_group.css';

export function Dashboard() {
  return (
    <div className="lf-screen pb-24 relative">
      <div className="absolute top-0 inset-x-0 h-64 bg-gradient-to-b from-[var(--lf-blue-dim)] to-transparent opacity-30 pointer-events-none"></div>

      <div className="lf-status-bar relative z-10">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal size={14} />
          <Wifi size={14} />
          <Battery size={14} />
        </div>
      </div>

      <div className="px-5 pt-4 pb-6 relative z-10" style={{ animation: 'lf-slide-up 0.4s ease-out' }}>
        <div className="flex items-center justify-between mb-1">
          <h1 className="text-3xl font-bold tracking-tight" style={{ fontFamily: 'var(--lf-font-display)' }}>Good Morning, Alex 👋</h1>
          <div className="lf-badge bg-[var(--lf-bg-card)] border border-[var(--lf-purple)] text-[var(--lf-purple-bright)] shadow-[var(--lf-shadow-purple)]">
            LVL 24
          </div>
        </div>
        <p className="text-[var(--lf-text-secondary)] text-sm mb-5 font-medium">Wednesday, May 14</p>

        <div className="mb-8">
          <div className="flex justify-between text-xs font-semibold mb-2">
            <span className="text-[var(--lf-text-primary)]">2,840 / 4,000 XP</span>
            <span className="text-[var(--lf-blue-bright)]">Level 25 unlocks: AI Coach Pro</span>
          </div>
          <div className="lf-xp-bar">
            <div className="lf-xp-bar-fill" style={{ '--target-width': '71%' } as React.CSSProperties}></div>
          </div>
        </div>

        <div className="flex flex-col items-center mb-8 relative" style={{ animation: 'lf-scale-in 0.6s ease-out' }}>
          <div className="relative w-48 h-48 flex items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-[var(--lf-blue-glow)] blur-2xl opacity-40"></div>
            <svg className="w-full h-full lf-progress-ring relative z-10" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="44" fill="none" stroke="var(--lf-bg-card)" strokeWidth="8" />
              <circle cx="50" cy="50" r="44" fill="none" stroke="url(#progress-gradient)" strokeWidth="8" strokeLinecap="round" strokeDasharray="276.46" strokeDashoffset="74.64" style={{ filter: 'drop-shadow(0 0 6px var(--lf-blue))' }} />
              <defs>
                <linearGradient id="progress-gradient" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="var(--lf-blue)" />
                  <stop offset="100%" stopColor="var(--lf-purple)" />
                </linearGradient>
              </defs>
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
              <span className="text-5xl font-bold tracking-tighter" style={{ fontFamily: 'var(--lf-font-display)' }}>73%</span>
              <span className="text-xs font-semibold text-[var(--lf-text-secondary)] tracking-widest uppercase mt-1">Daily Score</span>
            </div>
          </div>
          <div className="absolute -bottom-3 bg-gradient-to-r from-[var(--lf-orange)] to-[var(--lf-pink)] px-4 py-1.5 rounded-full text-xs font-bold shadow-[0_4px_12px_var(--lf-orange-glow)] flex items-center gap-1.5 z-30 border border-white/20">
            <span>🔥</span> 47 Day Streak
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-8" style={{ animation: 'lf-slide-up 0.7s ease-out' }}>
          <div className="lf-card p-3 flex flex-col items-center justify-center text-center">
            <Flame size={20} className="text-[var(--lf-orange)] mb-2" />
            <span className="text-lg font-bold">2,140</span>
            <span className="text-[10px] text-[var(--lf-text-muted)] font-semibold uppercase tracking-wide">Calories</span>
            <div className="w-full h-1 bg-[var(--lf-border)] rounded-full mt-2 overflow-hidden"><div className="h-full bg-[var(--lf-orange)] w-[80%] rounded-full"></div></div>
          </div>
          <div className="lf-card p-3 flex flex-col items-center justify-center text-center">
            <Droplet size={20} className="text-[var(--lf-cyan)] mb-2" />
            <span className="text-lg font-bold">6/8</span>
            <span className="text-[10px] text-[var(--lf-text-muted)] font-semibold uppercase tracking-wide">Glasses</span>
            <div className="w-full flex gap-0.5 mt-2">
              {[1,2,3,4,5,6,7,8].map(i => (
                <div key={i} className={`flex-1 h-1 rounded-sm ${i <= 6 ? 'bg-[var(--lf-cyan)]' : 'bg-[var(--lf-border)]'}`}></div>
              ))}
            </div>
          </div>
          <div className="lf-card p-3 flex flex-col items-center justify-center text-center">
            <Brain size={20} className="text-[var(--lf-purple-bright)] mb-2" />
            <div className="flex items-center gap-1">
              <span className="text-lg font-bold">4.2h</span>
              <ArrowUpRight size={12} className="text-[var(--lf-emerald)]" />
            </div>
            <span className="text-[10px] text-[var(--lf-text-muted)] font-semibold uppercase tracking-wide">Focus Time</span>
          </div>
        </div>

        <div className="lf-glass p-4 relative overflow-hidden mb-8 group cursor-pointer" style={{ animation: 'lf-slide-up 0.8s ease-out' }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--lf-blue-glow)] rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="flex items-center gap-2 mb-2">
            <div className="bg-[var(--lf-blue)] text-white text-[10px] font-bold px-2 py-0.5 rounded-[4px] flex items-center gap-1">
              <Zap size={10} fill="currentColor" /> AI
            </div>
            <span className="text-xs font-semibold text-[var(--lf-text-secondary)]">Insight</span>
          </div>
          <p className="text-sm font-medium leading-relaxed mb-3 pr-4">
            Today you're <span className="text-white font-bold">34% more productive</span> than your weekly average. Keep this momentum!
          </p>
          <div className="flex items-center text-[13px] font-semibold text-[var(--lf-blue-bright)] group-hover:text-[var(--lf-blue)] transition-colors">
            Optimize Now <ChevronRight size={16} className="ml-1" />
          </div>
        </div>

        <div className="mb-8" style={{ animation: 'lf-slide-up 0.9s ease-out' }}>
          <h2 className="text-lg font-bold mb-4" style={{ fontFamily: 'var(--lf-font-display)' }}>Today's Routine</h2>
          <div className="flex flex-col gap-0">
            <div className="flex gap-4 relative">
              <div className="w-px bg-[var(--lf-border)] absolute left-[9px] top-6 bottom-0"></div>
              <div className="w-5 h-5 rounded-full bg-[var(--lf-emerald-dim)] border border-[var(--lf-emerald)] flex items-center justify-center shrink-0 mt-0.5 relative z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--lf-emerald)]"></div>
              </div>
              <div className="pb-6 w-full">
                <p className="text-sm font-semibold text-[var(--lf-text-muted)] line-through">07:00 Morning Workout</p>
              </div>
            </div>
            
            <div className="flex gap-4 relative">
              <div className="w-px bg-[var(--lf-border)] absolute left-[9px] top-6 bottom-0"></div>
              <div className="w-5 h-5 rounded-full bg-[var(--lf-blue-dim)] border border-[var(--lf-blue)] flex items-center justify-center shrink-0 mt-0.5 relative z-10" style={{ boxShadow: '0 0 12px var(--lf-blue-glow)' }}>
                <div className="w-2.5 h-2.5 rounded-full bg-[var(--lf-blue)]" style={{ animation: 'lf-pulse-glow 2s infinite' }}></div>
              </div>
              <div className="pb-6 w-full">
                <p className="text-sm font-bold text-white mb-1">09:00 Deep Work Block</p>
                <div className="text-xs text-[var(--lf-blue-bright)] font-semibold flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--lf-blue-bright)] animate-pulse"></div> IN PROGRESS
                </div>
              </div>
            </div>

            <div className="flex gap-4 relative">
              <div className="w-px bg-[var(--lf-border)] absolute left-[9px] top-6 bottom-0"></div>
              <div className="w-5 h-5 rounded-full bg-[var(--lf-bg-card)] border-2 border-[var(--lf-border-bright)] shrink-0 mt-0.5 relative z-10"></div>
              <div className="pb-6 w-full">
                <p className="text-sm font-medium text-[var(--lf-text-primary)]">12:00 Lunch + Mindfulness</p>
              </div>
            </div>

            <div className="flex gap-4 relative">
              <div className="w-5 h-5 rounded-full bg-[var(--lf-bg-card)] border-2 border-[var(--lf-border)] shrink-0 mt-0.5 relative z-10"></div>
              <div className="pb-2 w-full">
                <p className="text-sm font-medium text-[var(--lf-text-muted)]">20:00 Evening Review</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-2" style={{ animation: 'lf-slide-up 1s ease-out' }}>
          <h2 className="text-[13px] font-semibold text-[var(--lf-text-secondary)] uppercase tracking-wider mb-3">How are you feeling?</h2>
          <div className="flex justify-between">
            {['😴','😐','🙂','😊','🔥'].map((emoji, i) => (
              <button key={i} className={`w-12 h-12 rounded-full text-2xl flex items-center justify-center transition-all ${i === 2 ? 'bg-[var(--lf-bg-glass)] border border-[var(--lf-blue)] shadow-[0_0_15px_var(--lf-blue-dim)] scale-110' : 'bg-[var(--lf-bg-card)] border border-[var(--lf-border)] opacity-60 hover:opacity-100 hover:scale-105'}`}>
                {emoji}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="lf-bottom-nav">
        <button className="flex flex-col items-center gap-1 text-[var(--lf-blue)]">
          <Home size={22} fill="currentColor" />
          <span className="text-[10px] font-semibold">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[var(--lf-text-muted)] hover:text-[var(--lf-text-secondary)] transition-colors">
          <Calendar size={22} />
          <span className="text-[10px] font-semibold">Routine</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[var(--lf-text-muted)] hover:text-[var(--lf-text-secondary)] transition-colors">
          <LayoutGrid size={22} />
          <span className="text-[10px] font-semibold">Habits</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[var(--lf-text-muted)] hover:text-[var(--lf-text-secondary)] transition-colors">
          <BarChart2 size={22} />
          <span className="text-[10px] font-semibold">Analytics</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[var(--lf-text-muted)] hover:text-[var(--lf-text-secondary)] transition-colors">
          <User size={22} />
          <span className="text-[10px] font-semibold">Profile</span>
        </button>
      </div>
    </div>
  );
}
