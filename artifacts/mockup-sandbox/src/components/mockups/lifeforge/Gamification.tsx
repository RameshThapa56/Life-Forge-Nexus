import React from 'react';
import { 
  Wifi, Battery, Signal, Zap, Flame, Check, List, Brain, Trophy, Moon, BookOpen, Dumbbell
} from 'lucide-react';
import './_group.css';

export function Gamification() {
  return (
    <div className="lf-screen pb-10">
      {/* Status Bar */}
      <div className="lf-status-bar">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal size={14} />
          <Wifi size={14} />
          <Battery size={14} />
        </div>
      </div>

      {/* Profile Header */}
      <div className="px-5 pt-6 pb-8 flex flex-col items-center text-center">
        <div className="relative mb-4">
          <div className="w-24 h-24 rounded-full bg-[var(--lf-gradient-blue-purple)] flex items-center justify-center text-4xl font-bold font-['Space_Grotesk'] text-white shadow-[var(--lf-shadow-purple)] z-10 relative">
            A
          </div>
          <svg className="absolute -inset-2 w-28 h-28 -rotate-90 z-0 drop-shadow-[0_0_8px_rgba(139,92,246,0.6)]">
            <circle cx="56" cy="56" r="52" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
            <circle cx="56" cy="56" r="52" fill="none" stroke="#A78BFA" strokeWidth="4" strokeDasharray="326" strokeDashoffset="95" className="transition-all duration-1000" />
          </svg>
          <div className="absolute -bottom-2 -right-2 bg-purple-500 border-2 border-[#080B14] w-8 h-8 rounded-full flex items-center justify-center z-20 shadow-lg">
            <span className="text-xs font-bold text-white">24</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold font-['Space_Grotesk'] text-white mb-1">Alex Chen</h1>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 mb-4">
          <Trophy size={12} className="text-purple-400" />
          <span className="text-xs font-semibold text-purple-300 tracking-wide uppercase">Life Architect</span>
        </div>
        
        <div className="w-full max-w-[240px]">
          <div className="flex justify-between text-[10px] font-semibold mb-1.5">
            <span className="text-white">Level 24</span>
            <span className="text-purple-300">2,840 XP to Level 25</span>
          </div>
          <div className="lf-xp-bar bg-white/5">
            <div className="lf-xp-bar-fill bg-purple-500 shadow-[0_0_10px_rgba(167,139,250,0.5)]" style={{ '--target-width': '71%' } as React.CSSProperties} />
          </div>
        </div>
      </div>

      {/* Life Stats Grid */}
      <div className="px-5 mb-8">
        <div className="grid grid-cols-2 gap-3">
          <div className="lf-glass p-4 rounded-2xl flex flex-col justify-center">
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 flex items-center justify-center mb-3">
              <Zap size={16} fill="currentColor" />
            </div>
            <div className="text-2xl font-bold font-['Space_Grotesk'] text-white mb-1 tracking-tight">48,240</div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">Total XP</div>
          </div>
          
          <div className="lf-glass p-4 rounded-2xl flex flex-col justify-center border-orange-500/30 bg-orange-500/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/20 blur-2xl rounded-full" />
            <div className="w-8 h-8 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center mb-3 relative z-10">
              <Flame size={16} fill="currentColor" />
            </div>
            <div className="text-2xl font-bold font-['Space_Grotesk'] text-white mb-1 tracking-tight relative z-10">47</div>
            <div className="text-[11px] font-medium text-orange-300 uppercase tracking-wide relative z-10">Day Streak</div>
          </div>

          <div className="lf-glass p-4 rounded-2xl flex flex-col justify-center">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3">
              <Check size={16} strokeWidth={3} />
            </div>
            <div className="text-xl font-bold font-['Space_Grotesk'] text-white mb-1 tracking-tight">1,247</div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">Habits Done</div>
          </div>

          <div className="lf-glass p-4 rounded-2xl flex flex-col justify-center">
            <div className="w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3">
              <List size={16} strokeWidth={2.5} />
            </div>
            <div className="text-xl font-bold font-['Space_Grotesk'] text-white mb-1 tracking-tight">3,891</div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">Tasks Completed</div>
          </div>

          <div className="lf-glass p-4 rounded-2xl flex flex-col justify-center">
            <div className="w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3">
              <Brain size={16} />
            </div>
            <div className="text-xl font-bold font-['Space_Grotesk'] text-white mb-1 tracking-tight">312h</div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">Focus Hours</div>
          </div>

          <div className="lf-glass p-4 rounded-2xl flex flex-col justify-center">
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center mb-3">
              <Trophy size={16} />
            </div>
            <div className="text-xl font-bold font-['Space_Grotesk'] text-white mb-1 tracking-tight">23</div>
            <div className="text-[11px] font-medium text-slate-400 uppercase tracking-wide">Challenges Won</div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="mb-8">
        <div className="px-5 flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold font-['Space_Grotesk'] text-white">Achievements <span className="text-slate-500 text-sm font-medium ml-1">(47/120)</span></h2>
        </div>
        
        <div className="flex gap-4 overflow-x-auto px-5 pb-4 scrollbar-hide">
          {/* Badge 1 */}
          <div className="lf-card min-w-[140px] p-4 flex flex-col items-center text-center relative overflow-hidden border-yellow-500/30">
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-yellow-500/10 to-transparent" />
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(234,179,8,0.4)] relative z-10">
              <Flame size={24} fill="currentColor" className="text-white" />
            </div>
            <div className="font-bold text-white text-sm mb-1">Iron Will</div>
            <div className="text-[10px] text-slate-400 mb-2 leading-tight">30 day streak</div>
            <div className="text-[9px] font-bold text-yellow-500 uppercase tracking-wider bg-yellow-500/10 px-2 py-0.5 rounded-sm">Earned</div>
          </div>

          {/* Badge 2 */}
          <div className="lf-card min-w-[140px] p-4 flex flex-col items-center text-center relative overflow-hidden border-purple-500/30">
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-purple-500/10 to-transparent" />
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple-400 to-indigo-600 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(168,85,247,0.4)] relative z-10">
              <Moon size={24} fill="currentColor" className="text-white" />
            </div>
            <div className="font-bold text-white text-sm mb-1">Night Owl</div>
            <div className="text-[10px] text-slate-400 mb-2 leading-tight">Late night warrior</div>
            <div className="text-[9px] font-bold text-purple-400 uppercase tracking-wider bg-purple-500/10 px-2 py-0.5 rounded-sm">Earned</div>
          </div>

          {/* Badge 3 */}
          <div className="lf-card min-w-[140px] p-4 flex flex-col items-center text-center relative overflow-hidden border-blue-500/30">
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-blue-500/10 to-transparent" />
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(59,130,246,0.4)] relative z-10">
              <BookOpen size={24} fill="currentColor" className="text-white" />
            </div>
            <div className="font-bold text-white text-sm mb-1">Scholar</div>
            <div className="text-[10px] text-slate-400 mb-2 leading-tight">100h learning</div>
            <div className="text-[9px] font-bold text-blue-400 uppercase tracking-wider bg-blue-500/10 px-2 py-0.5 rounded-sm">Earned</div>
          </div>

          {/* Badge 4 */}
          <div className="lf-card min-w-[140px] p-4 flex flex-col items-center text-center relative overflow-hidden border-emerald-500/30">
            <div className="absolute top-0 inset-x-0 h-1/2 bg-gradient-to-b from-emerald-500/10 to-transparent" />
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(16,185,129,0.4)] relative z-10">
              <Dumbbell size={24} fill="currentColor" className="text-white" />
            </div>
            <div className="font-bold text-white text-sm mb-1">Gym Rat</div>
            <div className="text-[10px] text-slate-400 mb-2 leading-tight">60 workouts</div>
            <div className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider bg-emerald-500/10 px-2 py-0.5 rounded-sm">Earned</div>
          </div>

          {/* Badge 5 (Partial) */}
          <div className="lf-card min-w-[140px] p-4 flex flex-col items-center text-center border-white/5 opacity-70">
            <div className="relative w-14 h-14 mb-3 flex items-center justify-center">
              <svg className="absolute inset-0 w-14 h-14 -rotate-90">
                <circle cx="28" cy="28" r="26" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="4" />
                <circle cx="28" cy="28" r="26" fill="none" stroke="#F472B6" strokeWidth="4" strokeDasharray="163" strokeDashoffset="125" />
              </svg>
              <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400 text-sm">🧘</span>
              </div>
            </div>
            <div className="font-bold text-slate-300 text-sm mb-1">Mindful</div>
            <div className="text-[10px] text-slate-500 mb-2 leading-tight">7/30 meditations</div>
          </div>
        </div>
      </div>

      {/* Recent XP Activity */}
      <div className="px-5">
        <h2 className="text-lg font-bold font-['Space_Grotesk'] text-white mb-4">Recent Activity</h2>
        <div className="lf-glass rounded-2xl overflow-hidden divide-y divide-white/5">
          <div className="p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
              <Dumbbell size={14} />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">Morning Workout completed</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Today, 7:30 AM</div>
            </div>
            <div className="text-sm font-bold text-emerald-400">+120 XP</div>
          </div>
          
          <div className="p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center flex-shrink-0">
              <span className="text-[10px]">🧘</span>
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">Meditation habit</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Today, 6:45 AM</div>
            </div>
            <div className="text-sm font-bold text-pink-400">+50 XP</div>
          </div>

          <div className="p-4 flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center flex-shrink-0">
              <Zap size={14} fill="currentColor" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-semibold text-white">Level Up Bonus!</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Yesterday, 9:00 PM</div>
            </div>
            <div className="text-sm font-bold text-yellow-500">+200 XP</div>
          </div>
        </div>
      </div>
    </div>
  );
}
