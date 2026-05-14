import React from 'react';
import { Camera, Plus, Check, Home, ListTodo, Activity, Utensils, CheckCircle2 } from 'lucide-react';
import './_group.css';

export function Diet() {
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
      <div className="px-5 py-4 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold tracking-wide">Diet Tracker</h1>
          <div className="text-sm text-[var(--lf-text-secondary)] mt-1">Today, May 14</div>
        </div>
        <div className="w-10 h-10 rounded-full bg-[var(--lf-bg-card)] border border-[var(--lf-border)] flex items-center justify-center">
          <Utensils className="w-5 h-5 text-[var(--lf-text-secondary)]" />
        </div>
      </div>

      {/* Calorie Ring Hero */}
      <div className="flex flex-col items-center justify-center my-6 relative">
        <div className="relative w-48 h-48 flex items-center justify-center">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            {/* Background ring */}
            <circle cx="50" cy="50" r="42" fill="none" className="stroke-white/5" strokeWidth="12" />
            
            {/* Protein (Blue) - 30% */}
            <circle cx="50" cy="50" r="42" fill="none" className="stroke-[var(--lf-blue)]" strokeWidth="12" 
              strokeDasharray="264" strokeDashoffset="184.8" strokeLinecap="round" />
            
            {/* Carbs (Orange) - 40% */}
            <circle cx="50" cy="50" r="42" fill="none" className="stroke-[var(--lf-orange)]" strokeWidth="12" 
              strokeDasharray="264" strokeDashoffset="158.4" strokeLinecap="round" 
              transform="rotate(108 50 50)" />
            
            {/* Fat (Purple) - 15% */}
            <circle cx="50" cy="50" r="42" fill="none" className="stroke-[var(--lf-purple)]" strokeWidth="12" 
              strokeDasharray="264" strokeDashoffset="224.4" strokeLinecap="round" 
              transform="rotate(252 50 50)" />
          </svg>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="text-xs text-[var(--lf-text-secondary)] font-medium tracking-wide uppercase">Calories</span>
            <div className="text-2xl font-bold mt-1">1,840</div>
            <div className="text-[11px] text-[var(--lf-text-muted)] border-b border-white/10 pb-1 mb-1">/ 2,400</div>
            <div className="text-[10px] text-[var(--lf-emerald-bright)] font-semibold mt-1">560 cal remaining</div>
          </div>
        </div>
      </div>

      {/* Macro Progress Bars */}
      <div className="px-5 mb-8">
        <div className="lf-card p-4 space-y-4">
          {/* Protein */}
          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-[var(--lf-blue-bright)]">Protein</span>
              <span>142g <span className="text-[var(--lf-text-muted)]">/ 180g</span></span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[var(--lf-blue)] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.6)]" style={{ width: '79%' }}></div>
            </div>
          </div>

          {/* Carbs */}
          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-[var(--lf-orange-bright)]">Carbs</span>
              <span>210g <span className="text-[var(--lf-text-muted)]">/ 250g</span></span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[var(--lf-orange)] rounded-full shadow-[0_0_10px_rgba(245,158,11,0.6)]" style={{ width: '84%' }}></div>
            </div>
          </div>

          {/* Fat */}
          <div>
            <div className="flex justify-between text-xs font-medium mb-1.5">
              <span className="text-[var(--lf-purple-bright)]">Fat</span>
              <span>48g <span className="text-[var(--lf-text-muted)]">/ 65g</span></span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-[var(--lf-purple)] rounded-full shadow-[0_0_10px_rgba(139,92,246,0.6)]" style={{ width: '74%' }}></div>
            </div>
          </div>
        </div>
      </div>

      {/* Hydration */}
      <div className="px-5 mb-8">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-[15px] font-bold">Hydration</h2>
          <div className="text-xs text-[var(--lf-text-secondary)]">1,500 ml</div>
        </div>
        <div className="flex justify-between items-center bg-white/5 p-3 rounded-xl border border-white/5">
          <div className="flex gap-1.5">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="w-7 h-9 rounded-md bg-[var(--lf-blue)]/20 border border-[var(--lf-blue)]/50 relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 bg-[var(--lf-blue)] shadow-[0_0_10px_rgba(59,130,246,0.5)]" style={{ height: '80%' }}></div>
              </div>
            ))}
            {[7,8].map(i => (
              <div key={i} className="w-7 h-9 rounded-md border border-white/10 bg-white/5"></div>
            ))}
          </div>
          <div className="text-sm font-bold text-[var(--lf-blue-bright)]">6 / 8</div>
        </div>
      </div>

      {/* Meals */}
      <div className="px-5 space-y-3">
        <h2 className="text-[15px] font-bold mb-1">Meals</h2>
        
        {/* Breakfast */}
        <div className="lf-card p-3 flex justify-between items-center">
          <div>
            <div className="text-xs text-[var(--lf-text-secondary)] font-medium mb-0.5">Breakfast</div>
            <div className="font-semibold text-[14px]">Oatmeal + Berries</div>
            <div className="text-[10px] text-[var(--lf-text-muted)] mt-1 flex gap-2">
              <span>P: 18g</span><span>C: 65g</span><span>F: 8g</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-[15px] font-bold lf-gradient-text-warm">420 cal</div>
            <div className="mt-1 flex items-center gap-1 text-[9px] font-bold text-[var(--lf-emerald)] bg-[var(--lf-emerald)]/10 px-1.5 py-0.5 rounded">
              <Check className="w-2.5 h-2.5" /> LOGGED
            </div>
          </div>
        </div>

        {/* Lunch */}
        <div className="lf-card p-3 flex justify-between items-center">
          <div>
            <div className="text-xs text-[var(--lf-text-secondary)] font-medium mb-0.5">Lunch</div>
            <div className="font-semibold text-[14px]">Grilled Chicken Salad</div>
            <div className="text-[10px] text-[var(--lf-text-muted)] mt-1 flex gap-2">
              <span>P: 52g</span><span>C: 28g</span><span>F: 18g</span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className="text-[15px] font-bold lf-gradient-text-warm">650 cal</div>
            <div className="mt-1 flex items-center gap-1 text-[9px] font-bold text-[var(--lf-emerald)] bg-[var(--lf-emerald)]/10 px-1.5 py-0.5 rounded">
              <Check className="w-2.5 h-2.5" /> LOGGED
            </div>
          </div>
        </div>

        {/* Dinner (Empty) */}
        <button className="w-full p-4 rounded-xl border-2 border-dashed border-white/10 bg-white/5 flex items-center justify-center gap-2 hover:bg-white/10 transition-colors">
          <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-[var(--lf-orange)] to-[var(--lf-pink)] flex items-center justify-center">
            <Plus className="w-4 h-4 text-white" />
          </div>
          <span className="font-semibold text-sm text-[var(--lf-text-secondary)]">Log Dinner</span>
        </button>
      </div>

      {/* Scan FAB */}
      <button className="fixed bottom-24 right-5 w-14 h-14 rounded-full bg-gradient-to-tr from-[var(--lf-orange)] to-[var(--lf-pink)] flex items-center justify-center shadow-[0_4px_20px_rgba(236,72,153,0.4)] hover:scale-105 transition-transform z-50">
        <Camera className="w-6 h-6 text-white" />
      </button>

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
        <button className="flex flex-col items-center gap-1 opacity-50">
          <CheckCircle2 className="w-6 h-6" />
          <span className="text-[10px]">Habits</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <Activity className="w-6 h-6" />
          <span className="text-[10px]">Stats</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[var(--lf-orange-bright)]">
          <Utensils className="w-6 h-6 drop-shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
          <span className="text-[10px] font-medium">Diet</span>
        </button>
      </div>
    </div>
  );
}
