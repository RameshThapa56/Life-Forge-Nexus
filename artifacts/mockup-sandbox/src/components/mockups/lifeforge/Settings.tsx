import React from 'react';
import { 
  Wifi, Battery, Signal, ChevronRight, Moon, Palette, AppWindow, Bell, Zap, Trophy, 
  Sparkles, HeartPulse, Activity, Shield, Download, Trash2, Info, Star, HelpCircle
} from 'lucide-react';
import './_group.css';

export function Settings() {
  return (
    <div className="lf-screen pb-12">
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
        <h1 className="text-2xl font-bold font-['Space_Grotesk'] text-white">Settings</h1>
      </div>

      {/* Profile Card */}
      <div className="px-5 mb-8">
        <div className="lf-glass p-4 rounded-2xl flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-[var(--lf-gradient-blue-purple)] flex items-center justify-center text-xl font-bold font-['Space_Grotesk'] text-white shadow-[var(--lf-shadow-purple)] flex-shrink-0 border-2 border-white/10">
            A
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-white mb-0.5">Alex Chen</h2>
            <p className="text-xs text-slate-400 mb-1">alex@lifeforge.ai</p>
            <button className="text-xs font-semibold text-blue-400 hover:text-blue-300">Edit Profile</button>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        {/* Appearance Group */}
        <div className="px-5">
          <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 pl-1">Appearance</h3>
          <div className="lf-glass rounded-2xl overflow-hidden divide-y divide-white/5">
            <button className="w-full p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
                  <Moon size={16} />
                </div>
                <span className="text-sm font-medium text-white">Theme</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400">Dark Mode</span>
                <ChevronRight size={16} className="text-slate-600" />
              </div>
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-pink-500/20 text-pink-400 flex items-center justify-center">
                  <Palette size={16} />
                </div>
                <span className="text-sm font-medium text-white">Accent Color</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
                <ChevronRight size={16} className="text-slate-600" />
              </div>
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                  <AppWindow size={16} />
                </div>
                <span className="text-sm font-medium text-white">App Icon</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded bg-slate-800 border border-white/20 flex items-center justify-center text-[10px] font-bold text-white">LF</div>
                <span className="text-sm text-slate-400 ml-1">Default</span>
                <ChevronRight size={16} className="text-slate-600" />
              </div>
            </button>
          </div>
        </div>

        {/* Notifications Group */}
        <div className="px-5">
          <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 pl-1">Notifications</h3>
          <div className="lf-glass rounded-2xl overflow-hidden divide-y divide-white/5">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                  <Bell size={16} />
                </div>
                <span className="text-sm font-medium text-white">Daily Reminders</span>
              </div>
              <div className="w-11 h-6 rounded-full bg-[var(--lf-gradient-emerald-cyan)] p-0.5 flex justify-end shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                <div className="w-5 h-5 bg-white rounded-full shadow-sm" />
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-500/20 text-orange-400 flex items-center justify-center">
                  <Zap size={16} />
                </div>
                <span className="text-sm font-medium text-white">Streak Alerts</span>
              </div>
              <div className="w-11 h-6 rounded-full bg-[var(--lf-gradient-emerald-cyan)] p-0.5 flex justify-end shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                <div className="w-5 h-5 bg-white rounded-full shadow-sm" />
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
                  <Trophy size={16} />
                </div>
                <span className="text-sm font-medium text-white">Achievement Alerts</span>
              </div>
              <div className="w-11 h-6 rounded-full bg-white/10 border border-white/10 p-0.5 flex justify-start">
                <div className="w-5 h-5 bg-slate-400 rounded-full shadow-sm" />
              </div>
            </div>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center">
                  <Sparkles size={16} />
                </div>
                <span className="text-sm font-medium text-white">AI Insights</span>
              </div>
              <div className="w-11 h-6 rounded-full bg-[var(--lf-gradient-emerald-cyan)] p-0.5 flex justify-end shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                <div className="w-5 h-5 bg-white rounded-full shadow-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Health & Integrations Group */}
        <div className="px-5">
          <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 pl-1">Health & Integrations</h3>
          <div className="lf-glass rounded-2xl overflow-hidden divide-y divide-white/5">
            <button className="w-full p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <HeartPulse size={16} />
                </div>
                <span className="text-sm font-medium text-white">Apple Health</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 px-2 py-1 bg-emerald-500/10 rounded">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-wider">Connected</span>
                </div>
                <ChevronRight size={16} className="text-slate-600 ml-1" />
              </div>
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-teal-500/20 text-teal-400 flex items-center justify-center">
                  <Activity size={16} />
                </div>
                <span className="text-sm font-medium text-white">Fitbit</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-blue-400">Connect</span>
                <ChevronRight size={16} className="text-slate-600" />
              </div>
            </button>
          </div>
        </div>

        {/* Privacy & Account Group */}
        <div className="px-5">
          <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 pl-1">Privacy & Account</h3>
          <div className="lf-glass rounded-2xl overflow-hidden divide-y divide-white/5">
            <button className="w-full p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-500/20 text-slate-400 flex items-center justify-center">
                  <Shield size={16} />
                </div>
                <span className="text-sm font-medium text-white">Privacy Settings</span>
              </div>
              <ChevronRight size={16} className="text-slate-600" />
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-white/[0.02] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-500/20 text-slate-400 flex items-center justify-center">
                  <Download size={16} />
                </div>
                <span className="text-sm font-medium text-white">Export Data</span>
              </div>
              <ChevronRight size={16} className="text-slate-600" />
            </button>
            <button className="w-full p-4 flex items-center justify-between hover:bg-red-500/5 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-red-500/10 text-red-500 flex items-center justify-center">
                  <Trash2 size={16} />
                </div>
                <span className="text-sm font-medium text-red-500">Delete Account</span>
              </div>
            </button>
          </div>
        </div>

        {/* About Group */}
        <div className="px-5">
          <h3 className="text-[11px] font-bold text-slate-500 uppercase tracking-widest mb-3 pl-1">About</h3>
          <div className="lf-glass rounded-2xl overflow-hidden divide-y divide-white/5 mb-8">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-slate-500/20 text-slate-400 flex items-center justify-center">
                  <Info size={16} />
                </div>
                <span className="text-sm font-medium text-white">Version</span>
              </div>
              <span className="text-sm text-slate-400 font-mono">2.1.0</span>
            </div>
            <button className="w-full p-4 flex items-center gap-3 hover:bg-white/[0.02] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-yellow-500/20 text-yellow-400 flex items-center justify-center">
                <Star size={16} />
              </div>
              <span className="text-sm font-medium text-white">Rate the App</span>
            </button>
            <button className="w-full p-4 flex items-center gap-3 hover:bg-white/[0.02] transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center">
                <HelpCircle size={16} />
              </div>
              <span className="text-sm font-medium text-white">Contact Support</span>
            </button>
          </div>
          
          <div className="text-center text-xs text-slate-600 pb-8">
            Made with intent by LifeForge Inc.
          </div>
        </div>
      </div>
    </div>
  );
}
