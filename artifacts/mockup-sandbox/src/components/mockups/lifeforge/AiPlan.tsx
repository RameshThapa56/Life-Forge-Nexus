import React, { useState, useEffect } from 'react';
import { Wifi, Battery, Signal, Brain, Dumbbell, Clock, BarChart2, Target, Sparkles, CheckCircle2, ArrowRight, ChevronLeft, Zap, Star } from 'lucide-react';
import './_group.css';

const loadingSteps = [
  "Analyzing your goals...",
  "Identifying your struggle patterns...",
  "Calculating optimal habit timing...",
  "Designing your perfect daily system...",
  "Finalizing your AI-powered plan...",
];

export function AiPlan() {
  const [phase, setPhase] = useState<'loading' | 'reveal'>('loading');
  const [stepIdx, setStepIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [cardVisible, setCardVisible] = useState(false);

  useEffect(() => {
    let tick = 0;
    const interval = setInterval(() => {
      tick++;
      const newProgress = Math.min(tick * 4, 100);
      setProgress(newProgress);
      const newStep = Math.floor((newProgress / 100) * (loadingSteps.length - 1));
      setStepIdx(Math.min(newStep, loadingSteps.length - 1));

      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setPhase('reveal');
          setTimeout(() => setCardVisible(true), 150);
        }, 400);
      }
    }, 80);
    return () => clearInterval(interval);
  }, []);

  const planDetails = [
    { icon: Dumbbell,  label: 'Habit',       value: '10 min workout',    color: '#10B981' },
    { icon: Clock,     label: 'Best Time',   value: '7:30 AM',           color: '#3B82F6' },
    { icon: BarChart2, label: 'Difficulty',  value: 'Easy',              color: '#F59E0B' },
    { icon: Target,    label: 'Goal',        value: 'Build consistency', color: '#8B5CF6' },
  ];

  return (
    <div className="lf-screen" style={{
      background: 'var(--lf-bg)', minHeight: '844px',
      display: 'flex', flexDirection: 'column', overflow: 'hidden',
    }}>
      <style>{`
        @keyframes orbit {
          from { transform: rotate(0deg) translateX(54px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(54px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          from { transform: rotate(120deg) translateX(70px) rotate(-120deg); }
          to   { transform: rotate(480deg) translateX(70px) rotate(-480deg); }
        }
        @keyframes orbit3 {
          from { transform: rotate(240deg) translateX(88px) rotate(-240deg); }
          to   { transform: rotate(600deg) translateX(88px) rotate(-600deg); }
        }
        @keyframes brain-pulse {
          0%, 100% { transform: scale(1);   box-shadow: 0 0 0 0   rgba(139,92,246,0.5), 0 0 30px rgba(139,92,246,0.3); }
          50%       { transform: scale(1.06); box-shadow: 0 0 0 16px rgba(139,92,246,0),   0 0 50px rgba(139,92,246,0.5); }
        }
        @keyframes text-fade {
          0%   { opacity: 0; transform: translateY(6px); }
          20%  { opacity: 1; transform: translateY(0); }
          80%  { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(-6px); }
        }
        @keyframes bar-fill {
          from { width: 0%; }
          to   { width: var(--w); }
        }
        @keyframes card-reveal {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes checkmark-pop {
          0%   { transform: scale(0) rotate(-20deg); opacity: 0; }
          60%  { transform: scale(1.2) rotate(4deg); opacity: 1; }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        @keyframes shimmer-slide {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(300%); }
        }
        @keyframes dot-wave {
          0%, 80%, 100% { transform: scaleY(0.4); opacity: 0.4; }
          40%            { transform: scaleY(1.2); opacity: 1; }
        }
        @keyframes star-float {
          0%   { transform: translateY(0) scale(1);   opacity: 0.7; }
          50%  { transform: translateY(-14px) scale(1.2); opacity: 1; }
          100% { transform: translateY(0) scale(1);   opacity: 0.7; }
        }
        .plan-row {
          animation: card-reveal 0.45s cubic-bezier(0.34, 1.3, 0.64, 1) both;
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
          <div key={i} style={{
            height: 8, borderRadius: i === 4 ? 4 : '50%',
            width: i === 4 ? 24 : 8,
            background: i === 4
              ? (phase === 'reveal' ? 'var(--lf-emerald)' : 'var(--lf-purple)')
              : i < 4 ? 'rgba(139,92,246,0.5)' : 'rgba(255,255,255,0.12)',
            transition: 'all 0.5s ease',
          }} />
        ))}
      </div>

      {/* Back */}
      <div style={{ padding: '16px 20px 0' }}>
        <button style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 4,
          color: 'var(--lf-text-secondary)', fontSize: 14, padding: 0,
        }}>
          <ChevronLeft size={18} /> Back
        </button>
      </div>

      {/* ── LOADING PHASE ── */}
      {phase === 'loading' && (
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          padding: '0 32px', gap: 0,
        }}>
          {/* Orbital animation */}
          <div style={{ position: 'relative', width: 200, height: 200, marginBottom: 36 }}>
            {/* Orbiting dots */}
            {[
              { anim: 'orbit  3.2s linear infinite', size: 10, color: '#3B82F6' },
              { anim: 'orbit2 4.1s linear infinite', size: 8,  color: '#8B5CF6' },
              { anim: 'orbit3 5.3s linear infinite', size: 7,  color: '#10B981' },
            ].map((dot, i) => (
              <div key={i} style={{
                position: 'absolute', top: '50%', left: '50%',
                marginTop: -dot.size/2, marginLeft: -dot.size/2,
                width: dot.size, height: dot.size, borderRadius: '50%',
                background: dot.color,
                boxShadow: `0 0 10px ${dot.color}`,
                animation: dot.anim,
              }} />
            ))}

            {/* Outer glow rings */}
            {[100, 140, 180].map((size, i) => (
              <div key={i} style={{
                position: 'absolute',
                top: '50%', left: '50%',
                width: size, height: size,
                marginTop: -size/2, marginLeft: -size/2,
                borderRadius: '50%',
                border: `1px solid rgba(139,92,246,${0.18 - i * 0.05})`,
                animation: `lf-pulse-glow ${2 + i * 0.4}s ease-in-out infinite`,
              }} />
            ))}

            {/* Center brain orb */}
            <div style={{
              position: 'absolute', top: '50%', left: '50%',
              width: 72, height: 72,
              marginTop: -36, marginLeft: -36,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #4c1d95, #1e3a8a)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              animation: 'brain-pulse 2s ease-in-out infinite',
            }}>
              <Brain size={32} color="#c4b5fd" />
            </div>
          </div>

          {/* Loading text */}
          <div style={{ textAlign: 'center', marginBottom: 32 }}>
            <div style={{
              fontFamily: 'var(--lf-font-display)', fontSize: 20, fontWeight: 700,
              color: 'var(--lf-text-primary)', marginBottom: 8, minHeight: 28,
              animation: 'text-fade 2s ease-in-out infinite',
              key: stepIdx,
            }}>
              {loadingSteps[stepIdx]}
            </div>
            <div style={{ fontSize: 13, color: 'var(--lf-text-muted)' }}>
              Powered by LifeForge AI
            </div>
          </div>

          {/* Progress bar */}
          <div style={{ width: '100%', maxWidth: 280 }}>
            <div style={{
              display: 'flex', justifyContent: 'space-between',
              fontSize: 11, color: 'var(--lf-text-muted)', marginBottom: 8,
            }}>
              <span>Generating your plan</span>
              <span style={{ color: 'var(--lf-purple-bright)', fontWeight: 700 }}>{progress}%</span>
            </div>
            <div style={{
              height: 6, background: 'rgba(255,255,255,0.07)',
              borderRadius: 3, overflow: 'hidden', position: 'relative',
            }}>
              <div style={{
                height: '100%', width: `${progress}%`,
                background: 'var(--lf-gradient-blue-purple)',
                borderRadius: 3,
                boxShadow: '0 0 10px rgba(139,92,246,0.6)',
                transition: 'width 0.15s ease',
                position: 'relative', overflow: 'hidden',
              }}>
                {/* Shimmer */}
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                  animation: 'shimmer-slide 1.4s ease-in-out infinite',
                  width: '40%',
                }} />
              </div>
            </div>

            {/* Wave dots */}
            <div style={{
              display: 'flex', justifyContent: 'center', gap: 5, marginTop: 20,
            }}>
              {[0, 1, 2, 3, 4].map(i => (
                <div key={i} style={{
                  width: 4, height: 18, borderRadius: 2,
                  background: 'var(--lf-purple)',
                  animation: `dot-wave 1.2s ease-in-out ${i * 0.12}s infinite`,
                }} />
              ))}
            </div>
          </div>
        </div>
      )}

      {/* ── REVEAL PHASE ── */}
      {phase === 'reveal' && (
        <div style={{
          flex: 1, display: 'flex', flexDirection: 'column',
          padding: '24px 20px 0',
        }}>
          {/* Success header */}
          <div style={{
            textAlign: 'center', marginBottom: 28,
            animation: 'card-reveal 0.5s ease-out',
          }}>
            {/* Check animation */}
            <div style={{
              width: 64, height: 64, borderRadius: '50%',
              background: 'linear-gradient(135deg, rgba(16,185,129,0.2), rgba(16,185,129,0.1))',
              border: '2px solid rgba(16,185,129,0.5)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              margin: '0 auto 16px',
              boxShadow: '0 0 30px rgba(16,185,129,0.25)',
              animation: 'card-reveal 0.5s ease-out',
            }}>
              <CheckCircle2 size={32} color="#10B981" style={{ animation: 'checkmark-pop 0.4s cubic-bezier(0.34,1.56,0.64,1) 0.15s both' }} />
            </div>

            <div style={{
              fontFamily: 'var(--lf-font-display)', fontSize: 22, fontWeight: 700,
              color: 'var(--lf-text-primary)', marginBottom: 6,
            }}>
              Your plan is ready!
            </div>
            <div style={{ fontSize: 13, color: 'var(--lf-text-secondary)' }}>
              AI-personalized for your goals and schedule
            </div>
          </div>

          {/* Plan card */}
          {cardVisible && (
            <div style={{
              background: 'var(--lf-bg-card)',
              border: '1px solid var(--lf-border-bright)',
              borderRadius: 20, overflow: 'hidden',
              animation: 'card-reveal 0.5s cubic-bezier(0.34, 1.2, 0.64, 1) 0.1s both',
              boxShadow: '0 0 40px rgba(139,92,246,0.12)',
            }}>
              {/* Card header */}
              <div style={{
                background: 'linear-gradient(135deg, #1e1040, #0d1f3c)',
                padding: '18px 20px',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: 'var(--lf-gradient-blue-purple)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Sparkles size={18} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize: 12, color: 'rgba(196,181,253,0.7)', fontWeight: 600, marginBottom: 1 }}>
                      AI GENERATED PLAN
                    </div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: '#e2d9f3' }}>
                      Day 1 Starter Pack
                    </div>
                  </div>
                </div>
                <div style={{
                  display: 'flex', alignItems: 'center', gap: 4,
                  background: 'rgba(245,158,11,0.15)', border: '1px solid rgba(245,158,11,0.3)',
                  borderRadius: 20, padding: '4px 10px',
                  fontSize: 11, fontWeight: 700, color: '#FCD34D',
                }}>
                  <Zap size={11} fill="#FCD34D" /> +50 XP
                </div>
              </div>

              {/* Detail rows */}
              <div style={{ padding: '6px 0' }}>
                {planDetails.map((row, i) => {
                  const Icon = row.icon;
                  return (
                    <div
                      key={row.label}
                      className="plan-row"
                      style={{
                        display: 'flex', alignItems: 'center',
                        padding: '13px 20px',
                        borderBottom: i < planDetails.length - 1
                          ? '1px solid var(--lf-border)' : 'none',
                        animationDelay: `${0.2 + i * 0.08}s`,
                      }}
                    >
                      <div style={{
                        width: 34, height: 34, borderRadius: 10, flexShrink: 0,
                        background: `${row.color}18`,
                        border: `1px solid ${row.color}40`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginRight: 14,
                      }}>
                        <Icon size={16} color={row.color} />
                      </div>
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 11, color: 'var(--lf-text-muted)', fontWeight: 600, marginBottom: 1 }}>
                          {row.label.toUpperCase()}
                        </div>
                        <div style={{ fontSize: 15, fontWeight: 700, color: 'var(--lf-text-primary)' }}>
                          {row.value}
                        </div>
                      </div>
                      <div style={{
                        width: 8, height: 8, borderRadius: '50%',
                        background: row.color,
                        boxShadow: `0 0 8px ${row.color}`,
                      }} />
                    </div>
                  );
                })}
              </div>

              {/* Card footer */}
              <div style={{
                padding: '12px 20px',
                background: 'rgba(255,255,255,0.02)',
                borderTop: '1px solid var(--lf-border)',
                display: 'flex', alignItems: 'center', gap: 6,
              }}>
                <Brain size={13} color="var(--lf-purple-bright)" />
                <span style={{ fontSize: 11, color: 'var(--lf-text-muted)', flex: 1 }}>
                  Optimized for your Fitness + Procrastination profile
                </span>
              </div>
            </div>
          )}

          {/* AI confidence + stars */}
          {cardVisible && (
            <div style={{
              display: 'flex', alignItems: 'center', gap: 8,
              padding: '16px 4px 0',
              animation: 'card-reveal 0.5s ease-out 0.4s both',
            }}>
              <div style={{ display: 'flex', gap: 2 }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} color="#F59E0B" fill="#F59E0B"
                    style={{ animation: `star-float 1.8s ease-in-out ${i * 0.15}s infinite` }}
                  />
                ))}
              </div>
              <span style={{ fontSize: 12, color: 'var(--lf-text-secondary)' }}>
                98% plan accuracy based on 250k+ users
              </span>
            </div>
          )}
        </div>
      )}

      {/* CTA */}
      <div style={{ padding: '20px 20px 36px' }}>
        {phase === 'loading' ? (
          <div style={{
            width: '100%', padding: '16px',
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid var(--lf-border)',
            borderRadius: 20, textAlign: 'center',
            fontSize: 13, color: 'var(--lf-text-muted)',
            fontFamily: 'var(--lf-font-main)',
          }}>
            Building your personalized plan...
          </div>
        ) : (
          <button
            className="lf-btn-primary"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              fontSize: 16, fontWeight: 700,
              animation: 'card-reveal 0.5s ease-out 0.5s both',
              boxShadow: '0 0 30px rgba(59,130,246,0.3), 0 4px 20px rgba(0,0,0,0.3)',
            }}
          >
            <Zap size={18} fill="white" /> Start Day 1
          </button>
        )}
      </div>
    </div>
  );
}
