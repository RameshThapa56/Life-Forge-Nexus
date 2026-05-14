import React from 'react';
import { 
  Wifi, Battery, Signal, Crown, CheckCircle2, ShieldCheck, Star, Zap, Brain, Sparkles, X
} from 'lucide-react';
import './_group.css';

export function Premium() {
  return (
    <div className="lf-screen relative">
      {/* Background Effects */}
      <div className="absolute top-0 inset-x-0 h-96 bg-gradient-to-b from-orange-500/20 via-pink-500/5 to-transparent pointer-events-none" />
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none" />
      
      {/* Status Bar */}
      <div className="lf-status-bar bg-transparent relative z-20">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal size={14} />
          <Wifi size={14} />
          <Battery size={14} />
        </div>
      </div>

      {/* Header Close Button */}
      <div className="absolute top-12 left-5 z-20">
        <button className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white/70 hover:bg-white/20 transition-colors backdrop-blur-md">
          <X size={18} />
        </button>
      </div>

      {/* Main Content */}
      <div className="px-5 pt-8 pb-10 relative z-10 flex flex-col items-center">
        
        {/* Header Icon */}
        <div className="mb-4 relative">
          <div className="absolute inset-0 bg-yellow-500/30 blur-xl rounded-full" />
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 p-[2px] relative z-10">
            <div className="w-full h-full rounded-full bg-[#080B14] flex items-center justify-center">
              <Crown size={28} className="text-yellow-500" fill="currentColor" />
            </div>
          </div>
        </div>

        <h1 className="text-3xl font-bold font-['Space_Grotesk'] text-white mb-2 text-center">Go Premium</h1>
        <p className="text-sm text-pink-200/80 mb-8 text-center px-4">Unlock the full power of your AI life coach</p>

        {/* Hero Card */}
        <div className="w-full p-[2px] rounded-3xl bg-[var(--lf-gradient-orange-pink)] mb-8 shadow-[0_0_30px_rgba(245,158,11,0.3)] relative group animate-[lf-scale-in_0.6s_ease-out]">
          <div className="absolute -inset-1 bg-[var(--lf-gradient-orange-pink)] rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-1000" />
          <div className="w-full rounded-[22px] bg-[#080B14] p-6 relative z-10 overflow-hidden">
            {/* Inner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 blur-2xl rounded-full -mr-10 -mt-10 pointer-events-none" />
            
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold font-['Space_Grotesk'] text-transparent bg-clip-text bg-[var(--lf-gradient-orange-pink)]">LIFEFORGE PRO</h2>
              <div className="px-3 py-1 bg-orange-500/10 border border-orange-500/30 rounded-full flex items-center gap-1.5">
                <Star size={10} className="text-yellow-500" fill="currentColor" />
                <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wider">Best Value</span>
              </div>
            </div>

            <div className="flex items-end gap-2 mb-6">
              <span className="text-sm text-slate-400 line-through mb-2">$12.99</span>
              <div className="text-4xl font-bold font-['Space_Grotesk'] text-white tracking-tight">$7.79</div>
              <span className="text-sm text-slate-400 font-medium mb-1">/ month</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5"><CheckCircle2 size={16} className="text-emerald-400" /></div>
                <span className="text-sm font-medium text-white/90">Unlimited habits & tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5"><CheckCircle2 size={16} className="text-emerald-400" /></div>
                <span className="text-sm font-medium text-white/90"><span className="text-blue-400 font-bold">ARIA</span> AI Coach (Unlimited)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5"><CheckCircle2 size={16} className="text-emerald-400" /></div>
                <span className="text-sm font-medium text-white/90">Advanced analytics + insights</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5"><CheckCircle2 size={16} className="text-emerald-400" /></div>
                <span className="text-sm font-medium text-white/90">Wearable sync (Apple Watch, Fitbit)</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-0.5"><CheckCircle2 size={16} className="text-emerald-400" /></div>
                <span className="text-sm font-medium text-white/90">Exclusive premium themes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Toggle */}
        <div className="w-full bg-white/5 p-1 rounded-xl flex mb-6 border border-white/10 backdrop-blur-sm">
          <button className="flex-1 py-2.5 text-sm font-medium text-slate-400 rounded-lg hover:text-white transition-colors">
            Monthly
          </button>
          <button className="flex-1 py-2.5 text-sm font-bold text-white bg-white/10 rounded-lg shadow-sm border border-white/10 relative">
            <div className="absolute inset-0 bg-orange-500/10 rounded-lg" />
            Yearly (Save 40%)
          </button>
        </div>

        {/* Free Tier Comparison (Subtle) */}
        <div className="w-full lf-glass p-5 rounded-2xl mb-8 border-white/5 opacity-70">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-bold text-slate-300">Free Plan</h3>
            <span className="text-sm font-bold text-slate-400">Current</span>
          </div>
          <div className="flex gap-4 text-xs text-slate-500">
            <span>5 habits max</span>
            <span>•</span>
            <span>3 AI messages/day</span>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full mt-auto sticky bottom-8 z-30 pt-4">
          <button className="w-full py-4 rounded-xl bg-[var(--lf-gradient-orange-pink)] text-white font-bold text-lg shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:shadow-[0_0_35px_rgba(245,158,11,0.6)] transition-shadow mb-3 flex items-center justify-center gap-2">
            <Zap size={20} fill="currentColor" />
            Start 7-Day Free Trial
          </button>
          <p className="text-center text-xs text-slate-400 font-medium">Then $7.79/month • Cancel anytime</p>
        </div>

        {/* Trust Badges */}
        <div className="flex items-center justify-center gap-6 mt-6 pt-6 border-t border-white/10 w-full opacity-60">
          <div className="flex flex-col items-center gap-1.5 text-slate-400">
            <ShieldCheck size={18} />
            <span className="text-[9px] font-semibold uppercase tracking-wider">Secure</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-slate-400">
            <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinelinejoin="round">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
            </svg>
            <span className="text-[9px] font-semibold uppercase tracking-wider">Cancel Anytime</span>
          </div>
          <div className="flex flex-col items-center gap-1.5 text-slate-400">
            <Star size={18} fill="currentColor" className="text-slate-500" />
            <span className="text-[9px] font-semibold uppercase tracking-wider">4.9/5 Rating</span>
          </div>
        </div>

      </div>
    </div>
  );
}
