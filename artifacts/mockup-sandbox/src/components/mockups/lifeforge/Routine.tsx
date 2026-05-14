import React from 'react';
import { ChevronLeft, MoreHorizontal, Check, Plus, Home, ListTodo, Activity, Utensils, CheckCircle2 } from 'lucide-react';
import './_group.css';

export function Routine() {
  return (
    <div className="lf-screen text-[var(--lf-text-primary)]">
      {/* Status Bar */}
      <div className="lf-status-bar">
        <span>9:41</span>
        <div className="flex gap-1 items-center">
          <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
          <div className="w-4 h-3 bg-white/80 rounded-sm"></div>
          <div className="w-5 h-3 bg-white/80 rounded-sm"></div>
        </div>
      </div>

      {/* Header */}
      <div className="flex justify-between items-center px-5 py-4">
        <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <ChevronLeft className="w-6 h-6" />
        </button>
        <h1 className="text-lg font-semibold tracking-wide">Daily Routine</h1>
        <button className="p-2 rounded-full hover:bg-white/10 transition-colors">
          <MoreHorizontal className="w-6 h-6" />
        </button>
      </div>

      {/* Date Selector */}
      <div className="flex justify-between px-5 py-2">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, i) => {
          const isSelected = day === 'Thu';
          return (
            <div key={day} className={`flex flex-col items-center gap-1 ${isSelected ? '' : 'opacity-60'}`}>
              <span className="text-[10px] uppercase font-medium">{day}</span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                ${isSelected ? 'bg-gradient-to-br from-blue-500 to-purple-600 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-white/5'}`}>
                {11 + i}
              </div>
            </div>
          );
        })}
      </div>

      {/* Progress Header */}
      <div className="mx-5 mt-6 mb-4 p-4 lf-glass flex justify-between items-center">
        <div>
          <div className="text-sm text-[var(--lf-text-secondary)] mb-1">Today's Progress</div>
          <div className="text-xl font-bold lf-gradient-text">8 of 12 tasks complete</div>
        </div>
        <div className="relative w-14 h-14 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
            <circle cx="18" cy="18" r="16" fill="none" className="stroke-white/10" strokeWidth="4" />
            <circle cx="18" cy="18" r="16" fill="none" className="stroke-[var(--lf-blue)]" strokeWidth="4" strokeDasharray="100" strokeDashoffset="33" strokeLinecap="round" />
          </svg>
          <span className="absolute text-sm font-bold">67%</span>
        </div>
      </div>

      {/* Timeline */}
      <div className="px-5 pb-32">
        {/* Morning Section */}
        <div className="mb-6 relative">
          <div className="text-xs font-bold text-[var(--lf-emerald)] uppercase tracking-wider mb-4 ml-16">Morning Routine</div>
          
          <div className="relative flex gap-4 mb-4 opacity-60">
            <div className="w-12 text-right text-xs font-medium text-[var(--lf-text-secondary)] mt-1">06:00</div>
            <div className="relative z-10 w-6 h-6 rounded-full bg-[var(--lf-emerald)] flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              <Check className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1 pb-4 border-b border-white/5">
              <div className="font-medium line-through decoration-white/30">Wake Up + Hydrate</div>
              <div className="text-xs text-[var(--lf-text-secondary)] mt-1 flex gap-2">
                <span className="bg-white/10 px-2 py-0.5 rounded text-[10px]">15m</span>
              </div>
            </div>
            <div className="absolute left-[3.85rem] top-6 bottom-[-1rem] w-px bg-[var(--lf-emerald)]/30"></div>
          </div>

          <div className="relative flex gap-4 mb-4 opacity-60">
            <div className="w-12 text-right text-xs font-medium text-[var(--lf-text-secondary)] mt-1">06:15</div>
            <div className="relative z-10 w-6 h-6 rounded-full bg-[var(--lf-emerald)] flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              <Check className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1 pb-4 border-b border-white/5">
              <div className="font-medium line-through decoration-white/30">Meditation</div>
              <div className="text-xs text-[var(--lf-text-secondary)] mt-1 flex gap-2">
                <span className="bg-white/10 px-2 py-0.5 rounded text-[10px]">10m</span>
              </div>
            </div>
            <div className="absolute left-[3.85rem] top-6 bottom-[-1rem] w-px bg-[var(--lf-emerald)]/30"></div>
          </div>

          <div className="relative flex gap-4 mb-2 opacity-60">
            <div className="w-12 text-right text-xs font-medium text-[var(--lf-text-secondary)] mt-1">06:30</div>
            <div className="relative z-10 w-6 h-6 rounded-full bg-[var(--lf-emerald)] flex items-center justify-center shadow-[0_0_10px_rgba(16,185,129,0.3)]">
              <Check className="w-3.5 h-3.5 text-white" />
            </div>
            <div className="flex-1 pb-4">
              <div className="font-medium line-through decoration-white/30">Morning Run 5km</div>
              <div className="text-xs text-[var(--lf-text-secondary)] mt-1 flex gap-2">
                <span className="bg-white/10 px-2 py-0.5 rounded text-[10px]">45m</span>
              </div>
            </div>
          </div>
        </div>

        {/* Work Block Section */}
        <div className="mb-6 relative">
          <div className="text-xs font-bold text-[var(--lf-blue)] uppercase tracking-wider mb-4 ml-16">Work Block</div>
          
          <div className="relative flex gap-4 mb-4">
            <div className="w-12 text-right text-xs font-medium text-[var(--lf-blue)] mt-1">09:00</div>
            <div className="relative z-10 w-6 h-6 rounded-full border-2 border-[var(--lf-blue)] flex items-center justify-center bg-[var(--lf-bg)]">
              <div className="w-2.5 h-2.5 rounded-full bg-[var(--lf-blue)] animate-[lf-pulse-glow_1.5s_ease-in-out_infinite] shadow-[0_0_8px_rgba(59,130,246,0.8)]"></div>
            </div>
            <div className="flex-1 lf-card p-3 border-[var(--lf-blue)]/50 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
              <div className="font-semibold text-[var(--lf-blue-bright)]">Deep Focus Session #1</div>
              <div className="text-xs text-[var(--lf-text-secondary)] mt-2 flex items-center justify-between">
                <span className="bg-[var(--lf-blue)]/20 text-[var(--lf-blue-bright)] px-2 py-0.5 rounded font-mono">1:23:45</span>
                <span className="text-[10px] uppercase tracking-wider">In Progress</span>
              </div>
            </div>
            <div className="absolute left-[3.85rem] top-6 bottom-[-1rem] w-px bg-[var(--lf-blue)]/30"></div>
          </div>

          <div className="relative flex gap-4 mb-4">
            <div className="w-12 text-right text-xs font-medium text-[var(--lf-text-secondary)] mt-1">11:00</div>
            <div className="relative z-10 w-6 h-6 rounded-full border-2 border-white/20 bg-[var(--lf-bg)]"></div>
            <div className="flex-1 pb-4 border-b border-white/5">
              <div className="font-medium text-[var(--lf-text-primary)]">Team Standup</div>
              <div className="text-xs text-[var(--lf-text-secondary)] mt-1 flex gap-2">
                <span className="bg-white/10 px-2 py-0.5 rounded text-[10px]">30m</span>
              </div>
            </div>
            <div className="absolute left-[3.85rem] top-6 bottom-[-1rem] w-px bg-white/10"></div>
          </div>

          <div className="relative flex gap-4 mb-2">
            <div className="w-12 text-right text-xs font-medium text-[var(--lf-text-secondary)] mt-1">12:00</div>
            <div className="relative z-10 w-6 h-6 rounded-full border-2 border-white/20 bg-[var(--lf-bg)]"></div>
            <div className="flex-1 pb-4">
              <div className="font-medium text-[var(--lf-text-primary)]">Lunch Break</div>
              <div className="text-xs text-[var(--lf-text-secondary)] mt-1 flex gap-2">
                <span className="bg-white/10 px-2 py-0.5 rounded text-[10px]">1h</span>
              </div>
            </div>
          </div>
        </div>

        {/* Evening Section */}
        <div className="mb-6 relative">
          <div className="text-xs font-bold text-[var(--lf-purple)] uppercase tracking-wider mb-4 ml-16">Evening</div>
          
          <div className="relative flex gap-4 mb-4">
            <div className="w-12 text-right text-xs font-medium text-[var(--lf-text-secondary)] mt-1">18:00</div>
            <div className="relative z-10 w-6 h-6 rounded-full border-2 border-white/20 bg-[var(--lf-bg)]"></div>
            <div className="flex-1 pb-4 border-b border-white/5">
              <div className="font-medium text-[var(--lf-text-primary)]">Gym Session</div>
            </div>
            <div className="absolute left-[3.85rem] top-6 bottom-[-1rem] w-px bg-white/10"></div>
          </div>

          <div className="relative flex gap-4 mb-4">
            <div className="w-12 text-right text-xs font-medium text-[var(--lf-text-secondary)] mt-1">20:00</div>
            <div className="relative z-10 w-6 h-6 rounded-full border-2 border-white/20 bg-[var(--lf-bg)]"></div>
            <div className="flex-1 pb-4 border-b border-white/5">
              <div className="font-medium text-[var(--lf-text-primary)]">Reading 30 min</div>
            </div>
            <div className="absolute left-[3.85rem] top-6 bottom-[-1rem] w-px bg-white/10"></div>
          </div>

          <div className="relative flex gap-4 mb-4">
            <div className="w-12 text-right text-xs font-medium text-[var(--lf-text-secondary)] mt-1">21:00</div>
            <div className="relative z-10 w-6 h-6 rounded-full border-2 border-white/20 bg-[var(--lf-bg)]"></div>
            <div className="flex-1 pb-4 border-b border-white/5">
              <div className="font-medium text-[var(--lf-text-primary)]">Journaling</div>
            </div>
            <div className="absolute left-[3.85rem] top-6 bottom-[-1rem] w-px bg-white/10"></div>
          </div>

          <div className="relative flex gap-4 mb-2">
            <div className="w-12 text-right text-xs font-medium text-[var(--lf-text-secondary)] mt-1">22:00</div>
            <div className="relative z-10 w-6 h-6 rounded-full border-2 border-white/20 bg-[var(--lf-bg)]"></div>
            <div className="flex-1 pb-4">
              <div className="font-medium text-[var(--lf-text-primary)]">Wind Down</div>
            </div>
          </div>
        </div>
      </div>

      {/* FAB */}
      <button className="fixed bottom-24 right-5 w-14 h-14 rounded-full bg-gradient-to-tr from-[var(--lf-blue)] to-[var(--lf-purple)] flex items-center justify-center shadow-[0_4px_20px_rgba(139,92,246,0.4)] hover:scale-105 transition-transform z-50">
        <Plus className="w-8 h-8 text-white" />
      </button>

      {/* Bottom Nav */}
      <div className="lf-bottom-nav">
        <button className="flex flex-col items-center gap-1 opacity-50">
          <Home className="w-6 h-6" />
          <span className="text-[10px]">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[var(--lf-blue-bright)]">
          <ListTodo className="w-6 h-6 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]" />
          <span className="text-[10px] font-medium">Routine</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <CheckCircle2 className="w-6 h-6" />
          <span className="text-[10px]">Habits</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <Activity className="w-6 h-6" />
          <span className="text-[10px]">Stats</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <Utensils className="w-6 h-6" />
          <span className="text-[10px]">Diet</span>
        </button>
      </div>
    </div>
  );
}
