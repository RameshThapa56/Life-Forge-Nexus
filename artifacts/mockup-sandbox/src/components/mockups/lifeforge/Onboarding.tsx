import React from 'react';
import { Battery, Wifi, Signal, Flame, Shield, BookOpen, Target, Moon, Zap, Check, ArrowRight } from 'lucide-react';
import './_group.css';

export function Onboarding() {
  const goals = [
    { id: 'weight', label: 'Lose Weight', icon: Flame, color: 'var(--lf-orange)', bg: 'var(--lf-orange-dim)', border: 'var(--lf-orange-bright)', selected: true },
    { id: 'discipline', label: 'Build Discipline', icon: Shield, color: 'var(--lf-purple)', bg: 'transparent', border: 'var(--lf-border)', selected: false },
    { id: 'skills', label: 'Learn Skills', icon: BookOpen, color: 'var(--lf-blue)', bg: 'var(--lf-blue-dim)', border: 'var(--lf-blue-bright)', selected: true },
    { id: 'focus', label: 'Improve Focus', icon: Target, color: 'var(--lf-cyan)', bg: 'transparent', border: 'var(--lf-border)', selected: false },
    { id: 'sleep', label: 'Improve Sleep', icon: Moon, color: 'var(--lf-purple-bright)', bg: 'var(--lf-purple-dim)', border: 'var(--lf-purple-bright)', selected: true },
    { id: 'productivity', label: 'Be More Productive', icon: Zap, color: 'var(--lf-orange-bright)', bg: 'transparent', border: 'var(--lf-border)', selected: false },
  ];

  return (
    <div className="lf-screen flex flex-col relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(var(--lf-border-bright) 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
      
      <div className="lf-status-bar z-10">
        <span>9:41</span>
        <div className="flex items-center gap-1.5">
          <Signal size={14} />
          <Wifi size={14} />
          <Battery size={14} />
        </div>
      </div>

      <div className="px-6 pt-4 pb-8 flex-1 flex flex-col z-10">
        <div className="flex justify-center gap-2 mb-8">
          {[1,2,3,4,5].map(step => (
            <div key={step} className={`h-1.5 rounded-full transition-all duration-300 ${step === 3 ? 'w-6 bg-[var(--lf-blue)] shadow-[0_0_8px_var(--lf-blue)]' : 'w-1.5 bg-[var(--lf-border-bright)]'}`} />
          ))}
        </div>

        <h1 className="text-3xl font-bold mb-3" style={{ fontFamily: 'var(--lf-font-display)', animation: 'lf-slide-up 0.5s ease-out' }}>
          What Are Your Goals?
        </h1>
        <p className="text-[var(--lf-text-secondary)] text-sm mb-8 leading-relaxed" style={{ animation: 'lf-slide-up 0.6s ease-out' }}>
          Select all that apply. Your AI coach will personalize your journey.
        </p>

        <div className="grid grid-cols-2 gap-4 flex-1" style={{ animation: 'lf-slide-up 0.7s ease-out' }}>
          {goals.map((goal, i) => (
            <div key={goal.id} className="relative rounded-[var(--lf-radius-lg)] p-4 flex flex-col items-center justify-center text-center transition-all cursor-pointer border" style={{ backgroundColor: goal.selected ? goal.bg : 'var(--lf-bg-card)', borderColor: goal.selected ? goal.border : 'var(--lf-border)' }}>
              {goal.selected && (
                <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-[var(--lf-blue)] flex items-center justify-center">
                  <Check size={12} color="white" />
                </div>
              )}
              <div className="w-12 h-12 rounded-full mb-3 flex items-center justify-center" style={{ backgroundColor: goal.selected ? 'rgba(0,0,0,0.2)' : 'var(--lf-bg-glass)', color: goal.color }}>
                <goal.icon size={24} />
              </div>
              <span className="font-semibold text-[13px] leading-tight text-[var(--lf-text-primary)]">
                {goal.label}
              </span>
            </div>
          ))}
        </div>

        <div className="pt-8 flex flex-col gap-4 items-center">
          <button className="lf-btn-primary flex items-center justify-center gap-2 relative overflow-hidden group">
            <span className="relative z-10">Continue</span>
            <ArrowRight size={18} className="relative z-10" />
            <div className="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity z-0"></div>
          </button>
          <span className="text-[var(--lf-text-muted)] text-xs font-medium uppercase tracking-wider">3 of 5</span>
        </div>
      </div>
    </div>
  );
}
