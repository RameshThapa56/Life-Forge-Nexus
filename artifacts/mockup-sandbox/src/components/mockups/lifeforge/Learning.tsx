import React from 'react';
import { 
  Wifi, Battery, Signal, Play, SkipForward, CheckCircle2, Lock, 
  BookOpen, Terminal, Layers, Globe, Brain, Home, Target, TrendingUp
} from 'lucide-react';
import './_group.css';

export function Learning() {
  return (
    <div className="lf-screen pb-24">
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
      <div className="px-5 pt-4 pb-6">
        <h1 className="text-2xl font-bold font-['Space_Grotesk'] text-white">Learning Hub</h1>
      </div>

      <div className="px-5 space-y-6">
        {/* Active Focus Session */}
        <div className="lf-card p-5 relative overflow-hidden" style={{ borderColor: 'var(--lf-blue-glow)', boxShadow: 'var(--lf-shadow-blue)' }}>
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl -mr-10 -mt-10" />
          
          <div className="flex items-center justify-between mb-4 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-red-500 animate-[lf-pulse-glow_2s_ease-in-out_infinite]" />
              <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">Pomodoro Active</span>
            </div>
            <div className="flex gap-1">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
          </div>
          
          <div className="text-center mb-5 relative z-10">
            <div className="text-5xl font-bold font-['Space_Grotesk'] text-white mb-2 tracking-tight">23:45</div>
            <div className="text-sm font-medium text-blue-200">Deep Work — JavaScript Advanced</div>
            <div className="text-xs text-slate-400 mt-1">Session 2 of 4</div>
          </div>
          
          <div className="flex gap-3 relative z-10">
            <button className="flex-1 lf-glass flex items-center justify-center gap-2 py-3 rounded-xl text-white hover:bg-white/5 transition-colors">
              <Play size={18} fill="currentColor" />
              <span className="font-semibold text-sm">Pause</span>
            </button>
            <button className="flex-1 lf-glass flex items-center justify-center gap-2 py-3 rounded-xl text-white hover:bg-white/5 transition-colors">
              <SkipForward size={18} />
              <span className="font-semibold text-sm">Skip</span>
            </button>
          </div>
        </div>

        {/* Today's Stats */}
        <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded-2xl p-4">
          <div className="text-center px-2">
            <div className="text-xl font-bold text-white mb-0.5">2.4h</div>
            <div className="text-xs text-slate-400">Studied</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center px-2">
            <div className="text-xl font-bold text-white mb-0.5">3</div>
            <div className="text-xs text-slate-400">Sessions</div>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div className="text-center px-2">
            <div className="text-xl font-bold text-emerald-400 mb-0.5">+180</div>
            <div className="text-xs text-slate-400">XP Earned</div>
          </div>
        </div>

        {/* Skill Trees */}
        <div>
          <h2 className="text-lg font-bold font-['Space_Grotesk'] text-white mb-4">Your Skill Trees</h2>
          <div className="grid grid-cols-2 gap-3">
            {/* JS Card */}
            <div className="lf-glass p-4 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-blue-500/10 rounded-full blur-xl transition-opacity opacity-50 group-hover:opacity-100" />
              <div className="flex justify-between items-start mb-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Terminal size={16} />
                </div>
                <div className="text-[10px] font-bold bg-blue-500/20 text-blue-400 px-2 py-0.5 rounded-full">+XP today</div>
              </div>
              <div className="font-semibold text-white mb-1">JavaScript</div>
              <div className="text-xs text-blue-400 font-medium mb-3">Level 8</div>
              <div className="lf-xp-bar">
                <div className="lf-xp-bar-fill" style={{ '--target-width': '65%', backgroundImage: 'var(--lf-gradient-blue-purple)' } as React.CSSProperties} />
              </div>
            </div>

            {/* UI/UX Card */}
            <div className="lf-glass p-4 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-purple-500/10 rounded-full blur-xl transition-opacity opacity-50 group-hover:opacity-100" />
              <div className="flex justify-between items-start mb-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Layers size={16} />
                </div>
              </div>
              <div className="font-semibold text-white mb-1">UI/UX Design</div>
              <div className="text-xs text-purple-400 font-medium mb-3">Level 5</div>
              <div className="lf-xp-bar">
                <div className="lf-xp-bar-fill" style={{ '--target-width': '40%', backgroundImage: 'linear-gradient(135deg, #8B5CF6, #D946EF)' } as React.CSSProperties} />
              </div>
            </div>

            {/* Data Science Card */}
            <div className="lf-glass p-4 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl transition-opacity opacity-50 group-hover:opacity-100" />
              <div className="flex justify-between items-start mb-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
                  <Globe size={16} />
                </div>
              </div>
              <div className="font-semibold text-white mb-1">Data Science</div>
              <div className="text-xs text-cyan-400 font-medium mb-3">Level 3</div>
              <div className="lf-xp-bar">
                <div className="lf-xp-bar-fill" style={{ '--target-width': '20%', backgroundImage: 'var(--lf-gradient-emerald-cyan)' } as React.CSSProperties} />
              </div>
            </div>

            {/* Spanish Card */}
            <div className="lf-glass p-4 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-16 h-16 bg-orange-500/10 rounded-full blur-xl transition-opacity opacity-50 group-hover:opacity-100" />
              <div className="flex justify-between items-start mb-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                  <BookOpen size={16} />
                </div>
                <div className="text-[10px] font-bold bg-orange-500/20 text-orange-400 px-2 py-0.5 rounded-full">+XP today</div>
              </div>
              <div className="font-semibold text-white mb-1">Spanish</div>
              <div className="text-xs text-orange-400 font-medium mb-3">Level 6</div>
              <div className="lf-xp-bar">
                <div className="lf-xp-bar-fill" style={{ '--target-width': '78%', backgroundImage: 'var(--lf-gradient-orange-pink)' } as React.CSSProperties} />
              </div>
            </div>
          </div>
        </div>

        {/* Roadmap */}
        <div>
          <div className="flex justify-between items-end mb-4">
            <h2 className="text-lg font-bold font-['Space_Grotesk'] text-white">Learning Roadmap</h2>
            <span className="text-xs font-medium text-blue-400">Full-Stack Developer</span>
          </div>
          
          <div className="lf-glass p-5 rounded-2xl overflow-hidden relative">
            <div className="flex items-center gap-4 relative z-10 w-full overflow-x-auto pb-2 scrollbar-hide -mx-1 px-1">
              {/* Line connector background */}
              <div className="absolute top-5 left-6 right-6 h-0.5 bg-white/10 -z-10" />
              <div className="absolute top-5 left-6 w-[35%] h-0.5 bg-blue-500 -z-10 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              
              {/* Step 1 */}
              <div className="flex flex-col items-center gap-2 min-w-[70px]">
                <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                  <CheckCircle2 size={20} className="text-white" />
                </div>
                <span className="text-[10px] font-semibold text-white whitespace-nowrap">HTML/CSS</span>
              </div>
              
              {/* Step 2 */}
              <div className="flex flex-col items-center gap-2 min-w-[70px]">
                <div className="w-10 h-10 rounded-full bg-white/10 border-2 border-blue-400 flex items-center justify-center relative">
                  <div className="w-3 h-3 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(96,165,250,0.8)]" />
                </div>
                <span className="text-[10px] font-bold text-blue-400 whitespace-nowrap">JavaScript</span>
              </div>
              
              {/* Step 3 */}
              <div className="flex flex-col items-center gap-2 min-w-[70px]">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Lock size={16} className="text-white/30" />
                </div>
                <span className="text-[10px] font-medium text-white/40 whitespace-nowrap">React</span>
              </div>
              
              {/* Step 4 */}
              <div className="flex flex-col items-center gap-2 min-w-[70px]">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Lock size={16} className="text-white/30" />
                </div>
                <span className="text-[10px] font-medium text-white/40 whitespace-nowrap">Node.js</span>
              </div>
              
              {/* Step 5 */}
              <div className="flex flex-col items-center gap-2 min-w-[70px]">
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                  <Lock size={16} className="text-white/30" />
                </div>
                <span className="text-[10px] font-medium text-white/40 whitespace-nowrap">Deployment</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Nav */}
      <div className="lf-bottom-nav">
        <button className="flex flex-col items-center gap-1 p-2 text-slate-500">
          <Home size={22} />
          <span className="text-[10px] font-medium">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-slate-500">
          <Target size={22} />
          <span className="text-[10px] font-medium">Goals</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-blue-400 relative">
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <Brain size={22} className="drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
          <span className="text-[10px] font-bold">Learning</span>
        </button>
        <button className="flex flex-col items-center gap-1 p-2 text-slate-500">
          <TrendingUp size={22} />
          <span className="text-[10px] font-medium">Stats</span>
        </button>
      </div>
    </div>
  );
}
