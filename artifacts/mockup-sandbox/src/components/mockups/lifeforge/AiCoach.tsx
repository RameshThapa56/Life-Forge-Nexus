import React from 'react';
import { 
  Wifi, Battery, Signal, Mic, Send, Calendar, Zap, Brain
} from 'lucide-react';
import './_group.css';

export function AiCoach() {
  return (
    <div className="lf-screen flex flex-col h-[844px]">
      {/* Status Bar */}
      <div className="lf-status-bar bg-transparent">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal size={14} />
          <Wifi size={14} />
          <Battery size={14} />
        </div>
      </div>

      {/* Header */}
      <div className="px-5 py-4 flex items-center gap-4 border-b border-white/5 bg-transparent z-10 relative">
        <div className="relative w-12 h-12 flex-shrink-0 flex items-center justify-center">
          <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-[lf-pulse-glow_3s_ease-in-out_infinite]" />
          <div className="absolute inset-2 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full shadow-[0_0_15px_rgba(59,130,246,0.6)]" />
          <div className="absolute inset-[10px] bg-black/40 rounded-full blur-[2px]" />
          <div className="w-2 h-2 bg-white rounded-full relative z-10 shadow-[0_0_10px_#fff]" />
        </div>
        <div>
          <h1 className="text-xl font-bold font-['Space_Grotesk'] text-white">ARIA — AI Coach</h1>
          <p className="text-xs text-blue-300 font-medium">Powered by LifeForge AI • Always learning</p>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-5 space-y-6 flex flex-col justify-end pb-4 scrollbar-hide">
        
        {/* AI Message 1 */}
        <div className="flex gap-3 max-w-[85%] animate-[lf-slide-up_0.4s_ease-out]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.3)] mt-1 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_#fff]" />
          </div>
          <div>
            <div className="lf-glass p-4 rounded-2xl rounded-tl-sm relative overflow-hidden border-l-2 border-l-blue-500">
              <div className="absolute top-0 left-0 w-8 h-full bg-blue-500/10 blur-xl" />
              <p className="text-[15px] text-white/90 leading-relaxed relative z-10">
                Good morning, Alex. Your sleep last night was 7.2 hours with <span className="text-emerald-400 font-semibold">88% quality</span>. Today is going to be great.
              </p>
            </div>
            <div className="text-[10px] text-slate-500 font-medium mt-1.5 ml-1">9:41 AM</div>
          </div>
        </div>

        {/* AI Message 2 */}
        <div className="flex gap-3 max-w-[85%] animate-[lf-slide-up_0.5s_ease-out]">
          <div className="w-8 h-8 rounded-full opacity-0 flex-shrink-0" /> {/* Spacer */}
          <div>
            <div className="lf-glass p-4 rounded-2xl relative overflow-hidden border-l-2 border-l-blue-500">
              <div className="absolute top-0 left-0 w-8 h-full bg-blue-500/10 blur-xl" />
              <p className="text-[15px] text-white/90 leading-relaxed relative z-10 mb-3">
                Based on your patterns, your peak focus window is <span className="text-blue-300 font-semibold">9 AM–12 PM</span>. I've blocked this for deep work. Your meeting load is light today.
              </p>
              <div className="flex gap-2 relative z-10">
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-semibold text-white transition-colors">
                  <Calendar size={12} className="text-blue-400" /> View Schedule
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-xs font-semibold text-white transition-colors">
                  <Zap size={12} className="text-orange-400" /> Optimize Today
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* User Message */}
        <div className="flex gap-3 max-w-[80%] self-end justify-end animate-[lf-slide-up_0.6s_ease-out]">
          <div className="flex flex-col items-end">
            <div className="p-4 rounded-2xl rounded-tr-sm bg-[var(--lf-gradient-blue-purple)] shadow-[var(--lf-shadow-blue)]">
              <p className="text-[15px] text-white font-medium">
                How can I improve my sleep quality?
              </p>
            </div>
            <div className="text-[10px] text-slate-500 font-medium mt-1.5 mr-1">9:43 AM</div>
          </div>
        </div>

        {/* AI Typing Indicator */}
        <div className="flex gap-3 max-w-[85%] animate-[lf-slide-up_0.7s_ease-out]">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500 flex-shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.3)] mt-1 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_5px_#fff]" />
          </div>
          <div className="lf-glass py-3 px-4 rounded-2xl rounded-tl-sm flex items-center gap-3 border-l-2 border-l-blue-500">
            <div className="flex gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '150ms' }} />
              <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '300ms' }} />
            </div>
            <span className="text-xs text-blue-300 font-medium">ARIA is thinking...</span>
          </div>
        </div>
      </div>

      {/* Input Area */}
      <div className="p-5 pt-2 bg-gradient-to-t from-[#080B14] via-[#080B14] to-transparent">
        <div className="flex gap-2 mb-3 overflow-x-auto scrollbar-hide pb-1">
          <button className="flex-shrink-0 px-4 py-2 lf-glass rounded-full text-xs font-semibold text-white/80 hover:text-white transition-colors border-white/10 whitespace-nowrap">
            Today's plan
          </button>
          <button className="flex-shrink-0 px-4 py-2 lf-glass rounded-full text-xs font-semibold text-blue-300 border-blue-500/30 whitespace-nowrap">
            Improve sleep
          </button>
          <button className="flex-shrink-0 px-4 py-2 lf-glass rounded-full text-xs font-semibold text-white/80 hover:text-white transition-colors border-white/10 whitespace-nowrap">
            Boost focus
          </button>
        </div>

        <div className="lf-glass p-2 rounded-2xl flex items-center gap-2 border-white/10">
          <button className="p-2.5 text-slate-400 hover:text-white transition-colors rounded-xl hover:bg-white/5">
            <Mic size={20} />
          </button>
          <input 
            type="text" 
            placeholder="Message ARIA..." 
            className="flex-1 bg-transparent border-none outline-none text-[15px] text-white placeholder-slate-500 font-medium"
          />
          <button className="p-2.5 bg-[var(--lf-gradient-blue-purple)] text-white rounded-xl shadow-[var(--lf-shadow-blue)]">
            <Send size={18} className="translate-x-0.5 translate-y-px" />
          </button>
        </div>
      </div>
    </div>
  );
}
