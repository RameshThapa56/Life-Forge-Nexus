import React from 'react';
import { ChevronDown, ArrowUpRight, ArrowDownRight, TrendingUp, Home, ListTodo, Activity, Utensils, CheckCircle2, Sparkles } from 'lucide-react';
import './_group.css';

export function Analytics() {
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
      <div className="flex justify-between items-center px-5 py-4">
        <h1 className="text-2xl font-bold tracking-wide">Analytics</h1>
        <button className="lf-glass px-3 py-1.5 rounded-full flex items-center gap-1 text-sm text-[var(--lf-text-secondary)]">
          This Week <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-3 px-5 mb-6">
        <div className="lf-card p-3 flex flex-col justify-between h-24">
          <div className="text-[11px] text-[var(--lf-text-secondary)] font-medium">Productivity</div>
          <div>
            <div className="text-xl font-bold text-[var(--lf-blue-bright)]">87%</div>
            <div className="text-[10px] text-[var(--lf-emerald-bright)] flex items-center mt-1">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> +5%
            </div>
          </div>
        </div>
        <div className="lf-card p-3 flex flex-col justify-between h-24">
          <div className="text-[11px] text-[var(--lf-text-secondary)] font-medium">Avg Sleep</div>
          <div>
            <div className="text-xl font-bold text-[var(--lf-purple-bright)]">7.2h</div>
            <div className="text-[10px] text-[var(--lf-emerald-bright)] flex items-center mt-1">
              <ArrowUpRight className="w-3 h-3 mr-0.5" /> +0.4h
            </div>
          </div>
        </div>
        <div className="lf-card p-3 flex flex-col justify-between h-24">
          <div className="text-[11px] text-[var(--lf-text-secondary)] font-medium">Focus Time</div>
          <div>
            <div className="text-xl font-bold text-[var(--lf-orange-bright)]">4.1h</div>
            <div className="text-[10px] text-red-400 flex items-center mt-1">
              <ArrowDownRight className="w-3 h-3 mr-0.5" /> -0.2h
            </div>
          </div>
        </div>
      </div>

      {/* Productivity Trend Chart */}
      <div className="px-5 mb-6">
        <div className="lf-card p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-bold text-[15px]">Productivity Score</h2>
            <span className="text-xs text-[var(--lf-text-secondary)]">Weekly Avg: 78%</span>
          </div>
          
          <div className="relative h-40 w-full">
            {/* Y-axis labels */}
            <div className="absolute left-0 top-0 bottom-6 w-6 flex flex-col justify-between text-[10px] text-[var(--lf-text-muted)] text-right pr-2">
              <span>100</span>
              <span>50</span>
              <span>0</span>
            </div>
            
            <div className="absolute left-6 right-0 top-0 bottom-6">
              {/* Grid lines */}
              <div className="absolute top-0 w-full border-t border-dashed border-white/10"></div>
              <div className="absolute top-1/2 w-full border-t border-dashed border-white/10"></div>
              <div className="absolute bottom-0 w-full border-t border-dashed border-white/10"></div>
              
              {/* SVG Chart */}
              <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--lf-blue)" stopOpacity="0.3" />
                    <stop offset="100%" stopColor="var(--lf-blue)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                {/* Data: Mon:65, Tue:72, Wed:80, Thu:88, Fri:75, Sat:60, Sun:90 */}
                <path 
                  d="M 0,45 C 40,45 40,36 80,36 C 120,36 120,26 160,26 C 200,26 200,16 240,16 C 280,16 280,33 320,33 C 360,33 360,52 400,52 C 440,52 440,13 480,13 L 480,130 L 0,130 Z" 
                  fill="url(#chartGradient)" 
                  transform="scale(0.65, 1)"
                />
                <path 
                  d="M 0,45 C 40,45 40,36 80,36 C 120,36 120,26 160,26 C 200,26 200,16 240,16 C 280,16 280,33 320,33 C 360,33 360,52 400,52 C 440,52 440,13 480,13" 
                  fill="none" 
                  stroke="var(--lf-blue-bright)" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  transform="scale(0.65, 1)"
                  className="drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
                />
                
                {/* Data points */}
                <circle cx="0" cy="45" r="3" fill="var(--lf-bg)" stroke="var(--lf-blue-bright)" strokeWidth="2" />
                <circle cx="52" cy="36" r="3" fill="var(--lf-bg)" stroke="var(--lf-blue-bright)" strokeWidth="2" />
                <circle cx="104" cy="26" r="3" fill="var(--lf-bg)" stroke="var(--lf-blue-bright)" strokeWidth="2" />
                <circle cx="156" cy="16" r="3" fill="var(--lf-bg)" stroke="var(--lf-blue-bright)" strokeWidth="2" />
                <circle cx="208" cy="33" r="3" fill="var(--lf-bg)" stroke="var(--lf-blue-bright)" strokeWidth="2" />
                <circle cx="260" cy="52" r="3" fill="var(--lf-bg)" stroke="var(--lf-blue-bright)" strokeWidth="2" />
                {/* Today */}
                <circle cx="312" cy="13" r="5" fill="var(--lf-blue-bright)" className="drop-shadow-[0_0_10px_rgba(96,165,250,1)]" />
              </svg>
            </div>
            
            {/* X-axis labels */}
            <div className="absolute left-6 right-0 bottom-0 flex justify-between text-[10px] text-[var(--lf-text-muted)] font-medium">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span className="text-[var(--lf-text-primary)]">Sun</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sleep & Mood Row */}
      <div className="grid grid-cols-2 gap-4 px-5 mb-6">
        {/* Sleep Analysis */}
        <div className="lf-card p-4">
          <h2 className="font-bold text-[13px] mb-4">Sleep Quality</h2>
          <div className="flex items-end justify-between h-20 mb-3">
            {[6.5, 7.0, 7.5, 6.8, 8.2, 5.5, 7.8].map((val, i) => (
              <div key={i} className="w-2.5 rounded-full overflow-hidden flex flex-col justify-end" style={{ height: `${(val/9)*100}%` }}>
                <div className="w-full bg-[var(--lf-blue)]" style={{ height: '40%' }}></div>
                <div className="w-full bg-gradient-to-t from-[var(--lf-purple)] to-fuchsia-400" style={{ height: '60%' }}></div>
              </div>
            ))}
          </div>
          <div className="space-y-1">
            <div className="flex items-center gap-1.5 text-[9px] text-[var(--lf-text-secondary)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--lf-blue)]"></div> Deep: 1.8h
            </div>
            <div className="flex items-center gap-1.5 text-[9px] text-[var(--lf-text-secondary)]">
              <div className="w-1.5 h-1.5 rounded-full bg-fuchsia-400"></div> REM: 1.4h
            </div>
            <div className="flex items-center gap-1.5 text-[9px] text-[var(--lf-text-secondary)]">
              <div className="w-1.5 h-1.5 rounded-full bg-[var(--lf-purple)]"></div> Light: 4.0h
            </div>
          </div>
        </div>

        {/* Mood Correlation */}
        <div className="lf-card p-4 flex flex-col">
          <h2 className="font-bold text-[13px] mb-4">Mood & Energy</h2>
          <div className="flex-1 flex flex-col justify-between">
            <div className="flex items-center justify-between text-sm">
              <div className="flex flex-col items-center gap-1">
                <span>😴</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--lf-text-muted)]"></div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span>😐</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--lf-orange)]"></div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span>🙂</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--lf-emerald)]"></div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <span>⚡</span>
                <div className="w-1.5 h-1.5 rounded-full bg-[var(--lf-blue-bright)] shadow-[0_0_5px_rgba(96,165,250,0.8)]"></div>
              </div>
            </div>
            <div className="mt-3 text-[10px] text-[var(--lf-text-secondary)] leading-tight">
              High energy correlates with 7.5h+ sleep and morning workouts.
            </div>
          </div>
        </div>
      </div>

      {/* AI Insights */}
      <div className="px-5">
        <div className="lf-glass p-4 relative overflow-hidden border-[var(--lf-blue)]/20 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
          <div className="absolute -right-6 -top-6 w-24 h-24 bg-[var(--lf-blue)]/20 rounded-full blur-2xl"></div>
          <div className="flex items-center gap-2 mb-2">
            <Sparkles className="w-4 h-4 text-[var(--lf-blue-bright)]" />
            <span className="text-[10px] font-bold text-[var(--lf-blue-bright)] uppercase tracking-wider">Generated by AI</span>
          </div>
          <p className="text-sm text-[var(--lf-text-primary)] leading-relaxed">
            Your productivity peaks on Sundays. Schedule important tasks on weekends for <span className="text-[var(--lf-emerald-bright)] font-semibold">23% better output</span>.
          </p>
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
        <button className="flex flex-col items-center gap-1 opacity-50">
          <CheckCircle2 className="w-6 h-6" />
          <span className="text-[10px]">Habits</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-[var(--lf-emerald-bright)]">
          <Activity className="w-6 h-6 drop-shadow-[0_0_8px_rgba(52,211,153,0.5)]" />
          <span className="text-[10px] font-medium">Stats</span>
        </button>
        <button className="flex flex-col items-center gap-1 opacity-50">
          <Utensils className="w-6 h-6" />
          <span className="text-[10px]">Diet</span>
        </button>
      </div>
    </div>
  );
}
