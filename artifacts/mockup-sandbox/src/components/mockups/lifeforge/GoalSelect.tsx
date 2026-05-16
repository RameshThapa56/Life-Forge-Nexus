import React, { useState } from 'react';
import { Dumbbell, Zap, BookOpen, Rocket, Brain, Leaf, ArrowRight, Wifi, Battery, Signal } from 'lucide-react';
import './_group.css';

const goals = [
  { id: 'fitness', label: 'Fitness', emoji: '💪', icon: Dumbbell, color: '#10B981', glow: 'rgba(16,185,129,0.25)', dim: 'rgba(16,185,129,0.08)' },
  { id: 'productivity', label: 'Productivity', emoji: '⚡', icon: Zap, color: '#F59E0B', glow: 'rgba(245,158,11,0.25)', dim: 'rgba(245,158,11,0.08)' },
  { id: 'study', label: 'Study', emoji: '📚', icon: BookOpen, color: '#3B82F6', glow: 'rgba(59,130,246,0.25)', dim: 'rgba(59,130,246,0.08)' },
  { id: 'career', label: 'Career', emoji: '🚀', icon: Rocket, color: '#8B5CF6', glow: 'rgba(139,92,246,0.25)', dim: 'rgba(139,92,246,0.08)' },
  { id: 'mental', label: 'Mental Health', emoji: '🧠', icon: Brain, color: '#EC4899', glow: 'rgba(236,72,153,0.25)', dim: 'rgba(236,72,153,0.08)' },
  { id: 'growth', label: 'General Growth', emoji: '🌱', icon: Leaf, color: '#06B6D4', glow: 'rgba(6,182,212,0.25)', dim: 'rgba(6,182,212,0.08)' },
];

export function GoalSelect() {
  const [selected, setSelected] = useState<string>('fitness');

  return (
    <div className="lf-screen" style={{ background: 'var(--lf-bg)', minHeight: '844px', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes card-select {
          0% { transform: scale(1); }
          40% { transform: scale(0.96); }
          100% { transform: scale(1); }
        }
        @keyframes glow-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }
        .goal-card {
          transition: all 0.22s cubic-bezier(0.34, 1.56, 0.64, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }
        .goal-card:active { transform: scale(0.96); }
        .goal-card.selected { animation: card-select 0.25s ease-out; }
        .goal-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 16px;
          opacity: 0;
          transition: opacity 0.2s ease;
        }
        .goal-card.selected::before { opacity: 1; }
        .check-dot {
          width: 20px; height: 20px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px;
          font-weight: 700;
          position: absolute;
          top: 10px; right: 10px;
          transition: all 0.2s ease;
        }
        .step-dot {
          width: 8px; height: 8px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
      `}</style>

      {/* Status Bar */}
      <div className="lf-status-bar">
        <span>9:41</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Signal size={14} /><Wifi size={14} /><Battery size={14} />
        </div>
      </div>

      {/* Step Indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, padding: '16px 20px 0' }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} className="step-dot" style={{
            background: i === 1 ? 'var(--lf-blue)' : 'rgba(255,255,255,0.15)',
            width: i === 1 ? 24 : 8,
            borderRadius: i === 1 ? 4 : '50%',
          }} />
        ))}
      </div>

      {/* Header */}
      <div style={{ padding: '28px 24px 0', animation: 'lf-slide-up 0.4s ease-out' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'var(--lf-blue-dim)', border: '1px solid rgba(59,130,246,0.3)',
          borderRadius: 20, padding: '4px 12px', marginBottom: 14,
          fontSize: 11, fontWeight: 700, color: 'var(--lf-blue-bright)', letterSpacing: '0.06em',
          textTransform: 'uppercase'
        }}>
          Step 1 of 5
        </div>
        <h1 style={{
          fontFamily: 'var(--lf-font-display)', fontSize: 28, fontWeight: 700,
          color: 'var(--lf-text-primary)', margin: 0, lineHeight: 1.2, marginBottom: 8
        }}>
          What are you<br />focusing on?
        </h1>
        <p style={{ fontSize: 14, color: 'var(--lf-text-secondary)', margin: 0 }}>
          Choose your primary goal. You can add more later.
        </p>
      </div>

      {/* Goal Grid */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 12, padding: '24px 20px 0',
        animation: 'lf-slide-up 0.5s ease-out 0.1s both',
        flex: 1
      }}>
        {goals.map((goal) => {
          const isSelected = selected === goal.id;
          const Icon = goal.icon;
          return (
            <div
              key={goal.id}
              className={`goal-card${isSelected ? ' selected' : ''}`}
              onClick={() => setSelected(goal.id)}
              style={{
                background: isSelected ? goal.dim : 'var(--lf-bg-card)',
                border: isSelected
                  ? `2px solid ${goal.color}`
                  : '2px solid var(--lf-border)',
                borderRadius: 16,
                padding: '20px 16px',
                display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
                gap: 10,
                boxShadow: isSelected ? `0 0 24px ${goal.glow}, inset 0 1px 0 rgba(255,255,255,0.06)` : 'none',
                minHeight: 120,
              }}
            >
              {/* Check dot */}
              <div className="check-dot" style={{
                background: isSelected ? goal.color : 'rgba(255,255,255,0.08)',
                color: isSelected ? '#fff' : 'transparent',
                boxShadow: isSelected ? `0 0 10px ${goal.glow}` : 'none',
              }}>
                {isSelected && '✓'}
              </div>

              {/* Icon */}
              <div style={{
                width: 42, height: 42, borderRadius: 12,
                background: isSelected ? `${goal.color}22` : 'rgba(255,255,255,0.06)',
                border: `1px solid ${isSelected ? goal.color + '55' : 'rgba(255,255,255,0.08)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={20} color={isSelected ? goal.color : 'var(--lf-text-secondary)'} />
              </div>

              {/* Label */}
              <div>
                <div style={{
                  fontSize: 15, fontWeight: 700,
                  color: isSelected ? goal.color : 'var(--lf-text-primary)',
                  marginBottom: 2,
                }}>
                  {goal.label}
                </div>
                <div style={{ fontSize: 18 }}>{goal.emoji}</div>
              </div>

              {/* Selected shimmer overlay */}
              {isSelected && (
                <div style={{
                  position: 'absolute', inset: 0, borderRadius: 14,
                  background: `linear-gradient(135deg, ${goal.color}08 0%, transparent 60%)`,
                  pointerEvents: 'none',
                  animation: 'glow-in 0.3s ease-out',
                }} />
              )}
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div style={{ padding: '24px 20px 36px', animation: 'lf-slide-up 0.5s ease-out 0.2s both' }}>
        <button className="lf-btn-primary" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          fontSize: 16, fontWeight: 700, letterSpacing: '0.01em',
        }}>
          Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
