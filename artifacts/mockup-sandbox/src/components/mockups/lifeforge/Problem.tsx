import React, { useState } from 'react';
import { Clock, RefreshCw, Battery, LayoutGrid, Wind, ArrowRight, ChevronLeft, Wifi, Signal } from 'lucide-react';
import './_group.css';

const problems = [
  { id: 'procrastination', label: 'Procrastination', desc: "I delay tasks and lose momentum", icon: Clock, color: '#F59E0B' },
  { id: 'consistency', label: 'No consistency', desc: "I start strong but can't keep going", icon: RefreshCw, color: '#EC4899' },
  { id: 'energy', label: 'Low energy', desc: "I feel drained and unmotivated daily", icon: Battery, color: '#EF4444' },
  { id: 'structure', label: 'No structure', desc: "My days feel scattered and unplanned", icon: LayoutGrid, color: '#8B5CF6' },
  { id: 'distracted', label: 'Too distracted', desc: "I lose focus and waste hours", icon: Wind, color: '#06B6D4' },
];

export function Problem() {
  const [selected, setSelected] = useState<string>('procrastination');

  return (
    <div className="lf-screen" style={{ background: 'var(--lf-bg)', minHeight: '844px', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes radio-pop {
          0% { transform: scale(0); }
          60% { transform: scale(1.15); }
          100% { transform: scale(1); }
        }
        .problem-card {
          transition: all 0.2s cubic-bezier(0.34, 1.2, 0.64, 1);
          cursor: pointer;
          position: relative;
        }
        .problem-card:active { transform: scale(0.98); }
        .radio-ring {
          width: 22px; height: 22px;
          border-radius: 50%;
          border: 2px solid;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          transition: all 0.2s ease;
        }
        .radio-fill {
          width: 10px; height: 10px;
          border-radius: 50%;
          animation: radio-pop 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>

      {/* Status Bar */}
      <div className="lf-status-bar">
        <span>9:41</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Signal size={14} /><Wifi size={14} />
          <div style={{ fontSize: 12 }}>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
              <rect x="0" y="2" width="20" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
              <rect x="1.5" y="3.5" width="13" height="6" rx="1" fill="currentColor"/>
              <path d="M21 4.5v3c1.1-.5 1.1-2.5 0-3z" fill="currentColor"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Step Indicators */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, padding: '16px 20px 0' }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{
            height: 8, borderRadius: i === 2 ? 4 : '50%',
            width: i === 2 ? 24 : 8,
            background: i === 2 ? 'var(--lf-purple)' : i < 2 ? 'rgba(139,92,246,0.4)' : 'rgba(255,255,255,0.12)',
            transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

      {/* Back + Header */}
      <div style={{ padding: '20px 20px 0' }}>
        <button style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 4,
          color: 'var(--lf-text-secondary)', fontSize: 14, padding: 0, marginBottom: 20,
        }}>
          <ChevronLeft size={18} /> Back
        </button>

        <div style={{ animation: 'lf-slide-up 0.4s ease-out' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'var(--lf-purple-dim)', border: '1px solid rgba(139,92,246,0.3)',
            borderRadius: 20, padding: '4px 12px', marginBottom: 14,
            fontSize: 11, fontWeight: 700, color: 'var(--lf-purple-bright)', letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}>
            Step 2 of 5
          </div>
          <h1 style={{
            fontFamily: 'var(--lf-font-display)', fontSize: 26, fontWeight: 700,
            color: 'var(--lf-text-primary)', margin: 0, lineHeight: 1.25, marginBottom: 6
          }}>
            What is your biggest struggle?
          </h1>
          <p style={{ fontSize: 13, color: 'var(--lf-text-secondary)', margin: 0 }}>
            Select one option — be honest with yourself.
          </p>
        </div>
      </div>

      {/* Radio Cards */}
      <div style={{
        padding: '20px 20px 0', display: 'flex', flexDirection: 'column', gap: 10,
        animation: 'lf-slide-up 0.45s ease-out 0.08s both',
        flex: 1,
      }}>
        {problems.map((p) => {
          const isSelected = selected === p.id;
          const Icon = p.icon;
          return (
            <div
              key={p.id}
              className="problem-card"
              onClick={() => setSelected(p.id)}
              style={{
                background: isSelected
                  ? `linear-gradient(135deg, ${p.color}10, ${p.color}05)`
                  : 'var(--lf-bg-card)',
                border: `1.5px solid ${isSelected ? p.color + '80' : 'var(--lf-border)'}`,
                borderRadius: 14, padding: '14px 16px',
                display: 'flex', alignItems: 'center', gap: 14,
                boxShadow: isSelected ? `0 0 20px ${p.color}20` : 'none',
              }}
            >
              {/* Icon badge */}
              <div style={{
                width: 40, height: 40, borderRadius: 12, flexShrink: 0,
                background: isSelected ? `${p.color}20` : 'rgba(255,255,255,0.05)',
                border: `1px solid ${isSelected ? p.color + '50' : 'rgba(255,255,255,0.08)'}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon size={18} color={isSelected ? p.color : 'var(--lf-text-secondary)'} />
              </div>

              {/* Text */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div style={{
                  fontSize: 15, fontWeight: 700,
                  color: isSelected ? p.color : 'var(--lf-text-primary)',
                  marginBottom: 2,
                }}>
                  {p.label}
                </div>
                <div style={{ fontSize: 12, color: 'var(--lf-text-muted)', lineHeight: 1.4 }}>
                  {p.desc}
                </div>
              </div>

              {/* Radio */}
              <div className="radio-ring" style={{
                borderColor: isSelected ? p.color : 'rgba(255,255,255,0.2)',
              }}>
                {isSelected && (
                  <div className="radio-fill" style={{ background: p.color }} />
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* CTA */}
      <div style={{ padding: '20px 20px 36px', animation: 'lf-slide-up 0.5s ease-out 0.2s both' }}>
        {/* Progress hint */}
        <div style={{
          textAlign: 'center', fontSize: 12, color: 'var(--lf-text-muted)',
          marginBottom: 12,
        }}>
          LifeForge will build a personalized plan around your struggle
        </div>
        <button className="lf-btn-primary" style={{
          background: 'var(--lf-gradient-blue-purple)',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          fontSize: 16, fontWeight: 700,
        }}>
          Next <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}
