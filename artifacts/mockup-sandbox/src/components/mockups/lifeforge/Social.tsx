import React from 'react';
import { 
  Wifi, Battery, Signal, Crown, Share2, Users, Trophy, Flame, ChevronRight, Zap
} from 'lucide-react';
import './_group.css';

export function Social() {
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

      {/* Header */}
      <div className="px-5 pt-4 pb-4">
        <h1 className="text-2xl font-bold font-['Space_Grotesk'] text-white">Community</h1>
      </div>

      {/* Tabs */}
      <div className="px-5 flex border-b border-white/10 mb-8">
        <button className="flex-1 pb-3 text-sm font-bold text-blue-400 border-b-2 border-blue-500 relative">
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
          Leaderboard
        </button>
        <button className="flex-1 pb-3 text-sm font-medium text-slate-400 hover:text-white transition-colors">
          Challenges
        </button>
        <button className="flex-1 pb-3 text-sm font-medium text-slate-400 hover:text-white transition-colors">
          Friends
        </button>
      </div>

      {/* Podium */}
      <div className="px-5 mb-10 flex items-end justify-center gap-2 h-48 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-blue-500/10 rounded-full blur-3xl" />
        
        {/* 2nd Place */}
        <div className="flex flex-col items-center w-24 relative z-10 animate-[lf-slide-up_0.5s_ease-out]">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-slate-400 to-slate-200 p-0.5 mb-2 shadow-[0_0_15px_rgba(148,163,184,0.3)]">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold text-white border-2 border-[#080B14]">
              JL
            </div>
          </div>
          <div className="text-[11px] font-bold text-white mb-0.5">Jamie L.</div>
          <div className="text-[9px] text-slate-400 mb-1">Level 31</div>
          <div className="text-[10px] font-bold text-slate-300 bg-slate-800/80 px-2 py-0.5 rounded-full mb-3 border border-slate-700">41,200 XP</div>
          <div className="w-full h-24 bg-gradient-to-t from-slate-400/20 to-slate-400/5 rounded-t-xl border-t border-slate-400/30 flex justify-center pt-2">
            <span className="text-xl font-bold font-['Space_Grotesk'] text-slate-400/80">2</span>
          </div>
        </div>

        {/* 1st Place */}
        <div className="flex flex-col items-center w-28 relative z-20 -mb-2 animate-[lf-slide-up_0.4s_ease-out]">
          <div className="absolute -top-6 text-yellow-400 drop-shadow-[0_0_8px_rgba(250,204,21,0.8)] z-30 animate-[lf-float_3s_ease-in-out_infinite]">
            <Crown size={24} fill="currentColor" />
          </div>
          <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-yellow-500 to-orange-400 p-0.5 mb-2 shadow-[0_0_20px_rgba(234,179,8,0.5)] z-20">
            <div className="w-full h-full rounded-full bg-[var(--lf-gradient-blue-purple)] flex items-center justify-center text-lg font-bold font-['Space_Grotesk'] text-white border-[3px] border-[#080B14]">
              A
            </div>
          </div>
          <div className="text-xs font-bold text-white mb-0.5">You (Alex)</div>
          <div className="text-[10px] text-slate-400 mb-1">Level 24</div>
          <div className="text-[11px] font-bold text-yellow-400 bg-yellow-500/10 px-2.5 py-0.5 rounded-full mb-3 border border-yellow-500/30 shadow-[0_0_10px_rgba(234,179,8,0.2)]">48,240 XP</div>
          <div className="w-full h-32 bg-gradient-to-t from-yellow-500/20 to-yellow-500/5 rounded-t-xl border-t border-yellow-500/40 flex justify-center pt-2 backdrop-blur-sm">
            <span className="text-2xl font-bold font-['Space_Grotesk'] text-yellow-500/80">1</span>
          </div>
        </div>

        {/* 3rd Place */}
        <div className="flex flex-col items-center w-24 relative z-10 animate-[lf-slide-up_0.6s_ease-out]">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-amber-700 to-amber-500 p-0.5 mb-2 shadow-[0_0_15px_rgba(180,83,9,0.3)]">
            <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center text-sm font-bold text-white border-2 border-[#080B14]">
              SK
            </div>
          </div>
          <div className="text-[11px] font-bold text-white mb-0.5">Sam K.</div>
          <div className="text-[9px] text-slate-400 mb-1">Level 19</div>
          <div className="text-[10px] font-bold text-amber-600 bg-slate-800/80 px-2 py-0.5 rounded-full mb-3 border border-amber-900/50">38,900 XP</div>
          <div className="w-full h-20 bg-gradient-to-t from-amber-700/20 to-amber-700/5 rounded-t-xl border-t border-amber-700/30 flex justify-center pt-2">
            <span className="text-xl font-bold font-['Space_Grotesk'] text-amber-700/80">3</span>
          </div>
        </div>
      </div>

      {/* List */}
      <div className="px-5 mb-8 space-y-2">
        {/* Row 4 */}
        <div className="lf-glass p-3 rounded-xl flex items-center gap-3">
          <div className="w-6 text-center font-bold font-['Space_Grotesk'] text-slate-400">4</div>
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold border border-white/10">MT</div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white">Morgan T.</div>
            <div className="text-[11px] text-slate-400">Lv.18</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-white">35,100</div>
            <div className="text-[10px] font-semibold text-orange-400 flex items-center justify-end gap-0.5 mt-0.5">
              23 <Flame size={10} fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Row 5 */}
        <div className="lf-glass p-3 rounded-xl flex items-center gap-3">
          <div className="w-6 text-center font-bold font-['Space_Grotesk'] text-slate-400">5</div>
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold border border-white/10">RP</div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white">Riley P.</div>
            <div className="text-[11px] text-slate-400">Lv.16</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-white">31,800</div>
            <div className="text-[10px] font-semibold text-orange-400 flex items-center justify-end gap-0.5 mt-0.5">
              15 <Flame size={10} fill="currentColor" />
            </div>
          </div>
        </div>

        {/* Row 6 */}
        <div className="lf-glass p-3 rounded-xl flex items-center gap-3">
          <div className="w-6 text-center font-bold font-['Space_Grotesk'] text-slate-400">6</div>
          <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-xs font-bold border border-white/10">CM</div>
          <div className="flex-1">
            <div className="text-sm font-bold text-white">Casey M.</div>
            <div className="text-[11px] text-slate-400">Lv.15</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-white">29,400</div>
            <div className="text-[10px] font-semibold text-orange-400 flex items-center justify-end gap-0.5 mt-0.5">
              8 <Flame size={10} fill="currentColor" />
            </div>
          </div>
        </div>
      </div>

      {/* Active Challenge Card */}
      <div className="px-5 mb-6">
        <div className="lf-card p-5 relative overflow-hidden border-purple-500/30">
          <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 blur-2xl rounded-full" />
          
          <div className="flex justify-between items-start mb-3 relative z-10">
            <div className="bg-purple-500/20 text-purple-400 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Weekly Challenge</div>
            <div className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
              <Zap size={10} fill="currentColor" /> 2 days left
            </div>
          </div>
          
          <h3 className="text-lg font-bold font-['Space_Grotesk'] text-white mb-1 relative z-10">7-Day Consistency Sprint</h3>
          <p className="text-xs text-purple-200 mb-4 relative z-10">Reward: 500 XP + Exclusive Badge</p>
          
          <div className="mb-4 relative z-10">
            <div className="flex justify-between text-xs font-semibold mb-2">
              <span className="text-white">Progress</span>
              <span className="text-purple-300">5/7 days</span>
            </div>
            <div className="lf-xp-bar bg-white/10 h-2">
              <div className="lf-xp-bar-fill bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" style={{ '--target-width': '71%' } as React.CSSProperties} />
            </div>
          </div>
          
          <div className="flex items-center justify-between mt-2 relative z-10">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-slate-700 border-2 border-[#111827] z-30" />
              <div className="w-6 h-6 rounded-full bg-slate-600 border-2 border-[#111827] z-20" />
              <div className="w-6 h-6 rounded-full bg-slate-500 border-2 border-[#111827] z-10" />
            </div>
            <span className="text-[10px] text-slate-400 font-medium">1,247 people joined</span>
          </div>
        </div>
      </div>

      {/* Action Button */}
      <div className="px-5">
        <button className="w-full lf-btn-primary bg-[var(--lf-gradient-orange-pink)] shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center justify-center gap-2">
          <Share2 size={18} />
          Share Your 47-Day Streak
        </button>
      </div>
    </div>
  );
}
