import React from 'react';
import { Flame, Dumbbell, BookOpen, Sparkles, Droplets, Trophy, Star, Home, ListTodo, Activity, Utensils, CheckCircle2, Check } from 'lucide-react';
import './_group.css';

export function Habits() {
  const renderHeatmap = (doneDays: number[]) => {
    const days = Array.from({ length: 28 }, (_, i) => i);
    return (
      <div className="grid grid-cols-7 gap-1 mt-3">
        {days.map(day => {
          const isDone = doneDays.includes(day);
          const isToday = day === 27;
          let bgColor = 'bg-white/5';
          if (isDone) bgColor = 'bg-[var(--lf-emerald)]/60';
          if (isToday) bgColor = 'bg-[var(--lf-blue)] shadow-[0_0_8px_rgba(59,130,246,0.8)] border border-white/40';
          
          return (
            <div key={day} className={`w-2 h-2 rounded-[2px] ${bgColor}`} />
          );
        })}
      </div>
    );
  };

  return (
    <div className="lf-screen text-[var(--lf-text-primary)] pb-24">
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
      <div className="px-5 py-4">
        <h1 className="text-2xl font-bold tracking-wide">Habit Tracker</h1>
      </div>

      {/* Streak Banner */}
      <div className="mx-5 mb-4 p-4 rounded-xl bg-gradient-to-r from-[var(--lf-orange)]/20 to-[var(--lf-orange)]/5 border border-[var(--lf-orange)]/30 shadow-[0_0_20px_rgba(245,158,11,0.15)] flex items-center gap-3">
        <div className="bg-[var(--lf-orange)]/20 p-2 rounded-lg">
          <Flame className="w-6 h-6 text-[var(--lf-orange-bright)] drop-shadow-[0_0_8px_rgba(252,211,77,0.8)]" />
        </div>
        <div>
          <div className="font-bold text-[var(--lf-orange-bright)]">47 Day Streak</div>
          <div className="text-xs text-[var(--lf-text-secondary)]">Your best streak ever!</div>
        </div>
      </div>

      {/* XP Badge */}
      <div className="mx-5 mb-6 flex justify-center">
        <div className="lf-glass px-4 py-2 rounded-full inline-flex items-center gap-2 border-[var(--lf-blue)]/30 shadow-[0_0_10px_rgba(59,130,246,0.1)]">
          <Star className="w-4 h-4 text-[var(--lf-blue-bright)]" />
          <span className="text-sm font-semibold text-[var(--lf-blue-bright)]">+320 XP earned today</span>
        </div>
      </div>

      {/* Habit Cards */}
      <div className="px-5 space-y-4">
        {/* Habit 1 */}
        <div className="lf-card p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--lf-blue)]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-lg bg-[var(--lf-blue)]/20 flex items-center justify-center text-[var(--lf-blue-bright)]">
                <Dumbbell className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[15px]">Morning Workout</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-semibold text-[var(--lf-orange-bright)] flex items-center gap-0.5">47 <Flame className="w-3 h-3"/></span>
                  <span className="text-[10px] text-[var(--lf-text-secondary)] bg-white/5 px-2 py-0.5 rounded">+50 XP</span>
                </div>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-[var(--lf-emerald)]/20 border border-[var(--lf-emerald)]/50 flex items-center justify-center text-[var(--lf-emerald-bright)] shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              <Check className="w-5 h-5" />
            </button>
          </div>
          {renderHeatmap([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27])}
        </div>

        {/* Habit 2 */}
        <div className="lf-card p-4 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--lf-purple)]/10 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-lg bg-[var(--lf-purple)]/20 flex items-center justify-center text-[var(--lf-purple-bright)]">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[15px]">Daily Reading</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-semibold text-[var(--lf-orange-bright)] flex items-center gap-0.5">31 <Flame className="w-3 h-3"/></span>
                  <span className="text-[10px] text-[var(--lf-text-secondary)] bg-white/5 px-2 py-0.5 rounded">+30 XP</span>
                </div>
              </div>
            </div>
            <button className="w-8 h-8 rounded-full bg-[var(--lf-emerald)]/20 border border-[var(--lf-emerald)]/50 flex items-center justify-center text-[var(--lf-emerald-bright)] shadow-[0_0_10px_rgba(16,185,129,0.2)]">
              <Check className="w-5 h-5" />
            </button>
          </div>
          {renderHeatmap([2,3,4,5,6,7,8,9,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27])}
        </div>

        {/* Habit 3 */}
        <div className="lf-card p-4 relative overflow-hidden">
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-lg bg-[var(--lf-cyan)]/20 flex items-center justify-center text-[var(--lf-cyan)]">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[15px]">Meditation</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-semibold text-[var(--lf-orange-bright)] flex items-center gap-0.5">12 <Flame className="w-3 h-3"/></span>
                  <span className="text-[10px] text-[var(--lf-text-secondary)] bg-white/5 px-2 py-0.5 rounded">+40 XP</span>
                </div>
              </div>
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-gradient-to-r from-[var(--lf-blue)] to-[var(--lf-cyan)] text-xs font-bold shadow-[0_0_10px_rgba(6,182,212,0.3)]">
              Complete
            </button>
          </div>
          {renderHeatmap([10,12,14,15,16,17,18,19,20,21,22,23,24,25,26])}
        </div>

        {/* Habit 4 */}
        <div className="lf-card p-4 relative overflow-hidden opacity-80">
          <div className="flex justify-between items-start mb-2">
            <div className="flex gap-3 items-center">
              <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center text-indigo-400">
                <Droplets className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-[15px]">Cold Shower</h3>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs font-semibold text-[var(--lf-orange-bright)] flex items-center gap-0.5">8 <Flame className="w-3 h-3"/></span>
                  <span className="text-[10px] text-[var(--lf-text-secondary)] bg-white/5 px-2 py-0.5 rounded">+60 XP</span>
                </div>
              </div>
            </div>
            <button className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-bold text-[var(--lf-text-secondary)]">
              Complete
            </button>
          </div>
          {renderHeatmap([15,17,19,20,21,22,23,24,25,26])}
        </div>
      </div>

      {/* Achievements */}
      <div className="px-5 mt-8 mb-6">
        <h2 className="text-sm font-bold text-[var(--lf-text-secondary)] uppercase tracking-wider mb-4">Recent Badges</h2>
        <div className="flex justify-between">
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border-2 border-slate-500 flex items-center justify-center shadow-[0_0_15px_rgba(148,163,184,0.2)]">
              <Trophy className="w-6 h-6 text-slate-300" />
            </div>
            <span className="text-xs font-medium text-[var(--lf-text-secondary)]">Iron Will</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--lf-purple)] to-fuchsia-700 border-2 border-[var(--lf-purple-bright)] flex items-center justify-center shadow-[0_0_15px_rgba(167,139,250,0.4)]">
              <Star className="w-6 h-6 text-white drop-shadow-md" />
            </div>
            <span className="text-xs font-medium text-[var(--lf-text-primary)]">Week Warrior</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--lf-orange)] to-red-600 border-2 border-[var(--lf-orange-bright)] flex items-center justify-center shadow-[0_0_15px_rgba(245,158,11,0.4)]">
              <Flame className="w-6 h-6 text-white drop-shadow-md" />
            </div>
            <span className="text-xs font-medium text-[var(--lf-text-primary)]">Early Riser</span>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="lf-bottom-nav">
        <button className="flex flex-col items-center gap-1 opacity-50">
          <Home className="w-6 h-6" />
          <span className="text-[10px]">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <ListTodo className="w-6 h-6" />
          <span className="text-[10px]">Routine</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[var(--lf-purple-bright)]">
          <CheckCircle2 className="w-6 h-6 drop-shadow-[0_0_8px_rgba(167,139,250,0.5)]" />
          <span className="text-[10px] font-medium">Habits</span>
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
