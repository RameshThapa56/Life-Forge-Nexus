import React, { useState, useEffect, useRef } from 'react';
import { Wifi, Battery, Signal } from 'lucide-react';
import './_group.css';

// ── Analysis steps ─────────────────────────────────────────────
const STEPS = [
  { id: 0, label: 'Reading your goals & challenges',       icon: '🧠', duration: 1800 },
  { id: 1, label: 'Mapping your lifestyle patterns',       icon: '🗺️', duration: 1600 },
  { id: 2, label: 'Designing optimal habit sequences',     icon: '⚙️', duration: 2000 },
  { id: 3, label: 'Calibrating difficulty progressions',   icon: '📈', duration: 1400 },
  { id: 4, label: 'Scheduling around your peak hours',     icon: '⏰', duration: 1500 },
  { id: 5, label: 'Generating personalised AI plan',       icon: '✨', duration: 2200 },
];

// ── Particle data ──────────────────────────────────────────────
interface Particle {
  id: number; angle: number; radius: number; size: number;
  speed: number; color: string; opacity: number;
}
const COLORS = ['#3B82F6','#8B5CF6','#10B981','#F59E0B','#EC4899'];
function makeParticles(n: number): Particle[] {
  return Array.from({ length: n }, (_, i) => ({
    id: i,
    angle:   (360 / n) * i,
    radius:  60 + (i % 3) * 22,
    size:    3 + (i % 4),
    speed:   0.3 + (i % 5) * 0.15,
    color:   COLORS[i % COLORS.length],
    opacity: 0.6 + (i % 3) * 0.13,
  }));
}
const PARTICLES = makeParticles(16);

// ── Pulse rings data ───────────────────────────────────────────
const RINGS = [
  { r: 52,  delay: 0,    color: 'rgba(59,130,246,0.18)' },
  { r: 74,  delay: 0.6,  color: 'rgba(139,92,246,0.12)' },
  { r: 96,  delay: 1.2,  color: 'rgba(16,185,129,0.08)' },
];

// ── SVG Orb ────────────────────────────────────────────────────
function OrbCanvas({ step }: { step: number }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frame     = useRef(0);
  const angleRef  = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const W = canvas.width, H = canvas.height;
    const cx = W / 2, cy = H / 2;

    function draw() {
      ctx.clearRect(0, 0, W, H);
      angleRef.current += 0.008;
      const a = angleRef.current;

      // Pulse rings
      RINGS.forEach(ring => {
        const pulse = 1 + 0.06 * Math.sin(a * 2 + ring.delay);
        ctx.beginPath();
        ctx.arc(cx, cy, ring.r * pulse, 0, Math.PI * 2);
        ctx.strokeStyle = ring.color;
        ctx.lineWidth   = 1.5;
        ctx.stroke();
      });

      // Core glow
      const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, 40);
      grad.addColorStop(0,   'rgba(59,130,246,0.9)');
      grad.addColorStop(0.5, 'rgba(139,92,246,0.6)');
      grad.addColorStop(1,   'rgba(139,92,246,0)');
      ctx.beginPath();
      ctx.arc(cx, cy, 40, 0, Math.PI * 2);
      ctx.fillStyle = grad;
      ctx.fill();

      // Brain icon approximation via arcs (two hemispheres)
      const t = a * 0.5;
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(Math.sin(t) * 0.08);
      ctx.strokeStyle = 'rgba(255,255,255,0.9)';
      ctx.lineWidth   = 2;
      ctx.lineCap     = 'round';
      // left hemisphere
      ctx.beginPath(); ctx.arc(-7, 0, 12, Math.PI * 0.55, Math.PI * 2.45); ctx.stroke();
      // right hemisphere
      ctx.beginPath(); ctx.arc( 7, 0, 12, Math.PI * -0.45, Math.PI * 0.45 + Math.PI); ctx.stroke();
      // centre join
      ctx.beginPath(); ctx.moveTo(-2, -4); ctx.lineTo(2, -4); ctx.stroke();
      ctx.restore();

      // Orbiting particles
      PARTICLES.forEach((p, i) => {
        const speed  = p.speed * (1 + step * 0.05);
        const theta  = (p.angle * Math.PI / 180) + a * speed;
        const wobble = Math.sin(a * 2.5 + i) * 4;
        const px     = cx + Math.cos(theta) * (p.radius + wobble);
        const py     = cy + Math.sin(theta) * (p.radius + wobble) * 0.55;

        // Trail
        ctx.beginPath();
        ctx.arc(px, py, p.size * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(')', ',0.15)').replace('rgb', 'rgba');
        ctx.fill();

        // Particle
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.opacity;
        ctx.fill();
        ctx.globalAlpha = 1;
      });

      // Connecting lines between nearby particles (step-gated)
      if (step >= 2) {
        for (let i = 0; i < PARTICLES.length; i++) {
          for (let j = i + 1; j < PARTICLES.length; j++) {
            const pi = PARTICLES[i], pj = PARTICLES[j];
            const thetaI = (pi.angle * Math.PI / 180) + a * pi.speed;
            const thetaJ = (pj.angle * Math.PI / 180) + a * pj.speed;
            const px1    = cx + Math.cos(thetaI) * (pi.radius + Math.sin(a * 2.5 + i) * 4);
            const py1    = cy + Math.sin(thetaI) * (pi.radius + Math.sin(a * 2.5 + i) * 4) * 0.55;
            const px2    = cx + Math.cos(thetaJ) * (pj.radius + Math.sin(a * 2.5 + j) * 4);
            const py2    = cy + Math.sin(thetaJ) * (pj.radius + Math.sin(a * 2.5 + j) * 4) * 0.55;
            const dist   = Math.hypot(px2 - px1, py2 - py1);
            if (dist < 55) {
              ctx.beginPath();
              ctx.moveTo(px1, py1); ctx.lineTo(px2, py2);
              ctx.strokeStyle = `rgba(139,92,246,${0.25 * (1 - dist / 55)})`;
              ctx.lineWidth   = 0.8;
              ctx.stroke();
            }
          }
        }
      }

      frame.current = requestAnimationFrame(draw);
    }

    draw();
    return () => cancelAnimationFrame(frame.current);
  }, [step]);

  return (
    <canvas
      ref={canvasRef}
      width={240} height={240}
      style={{ display: 'block', width: 240, height: 240 }}
    />
  );
}

// ── Main Component ─────────────────────────────────────────────
export function AiLoading() {
  const [currentStep,    setCurrentStep]    = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [progress,       setProgress]       = useState(0);
  const [done,           setDone]           = useState(false);
  const [blink,          setBlink]          = useState(true);

  // Advance through steps
  useEffect(() => {
    if (done) return;
    if (currentStep >= STEPS.length) { setDone(true); setProgress(100); return; }

    const t = setTimeout(() => {
      setCompletedSteps(prev => [...prev, currentStep]);
      setCurrentStep(prev => prev + 1);
      setProgress(Math.round(((currentStep + 1) / STEPS.length) * 100));
    }, STEPS[currentStep].duration);

    return () => clearTimeout(t);
  }, [currentStep, done]);

  // Cursor blink
  useEffect(() => {
    const t = setInterval(() => setBlink(b => !b), 530);
    return () => clearInterval(t);
  }, []);

  // Loop after done (mockup)
  useEffect(() => {
    if (!done) return;
    const t = setTimeout(() => {
      setCurrentStep(0); setCompletedSteps([]); setProgress(0); setDone(false);
    }, 2800);
    return () => clearTimeout(t);
  }, [done]);

  const displayStep   = Math.min(currentStep, STEPS.length - 1);
  const activeLabel   = STEPS[displayStep].label;
  const progressColor = done ? '#10B981' : '#3B82F6';

  return (
    <div className="lf-screen" style={{
      minHeight: 844, display: 'flex', flexDirection: 'column',
      background: 'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(59,130,246,0.06) 0%, var(--lf-bg) 70%)',
    }}>
      <style>{`
        @keyframes ail-step-in {
          0%   { opacity: 0; transform: translateX(-12px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        @keyframes ail-check-pop {
          0%   { transform: scale(0); opacity: 0; }
          60%  { transform: scale(1.25); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes ail-progress {
          0%   { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes ail-shimmer {
          0%   { opacity: 0.5; }
          50%  { opacity: 1; }
          100% { opacity: 0.5; }
        }
        @keyframes ail-done-glow {
          0%   { box-shadow: 0 0 20px rgba(16,185,129,0.3); }
          50%  { box-shadow: 0 0 40px rgba(16,185,129,0.6); }
          100% { box-shadow: 0 0 20px rgba(16,185,129,0.3); }
        }
        .ail-step-row  { animation: ail-step-in 0.35s ease-out; }
        .ail-check     { animation: ail-check-pop 0.28s cubic-bezier(0.34,1.5,0.64,1); }
        .ail-shimmer   { animation: ail-shimmer 1.8s ease-in-out infinite; }
      `}</style>

      {/* Status Bar */}
      <div className="lf-status-bar">
        <span>9:41</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <Signal size={14} /><Wifi size={14} /><Battery size={14} />
        </div>
      </div>

      {/* Header */}
      <div style={{ padding: '28px 24px 0', textAlign: 'center' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'var(--lf-blue-dim)', border: '1px solid rgba(59,130,246,0.3)',
          borderRadius: 20, padding: '4px 14px', marginBottom: 14,
          fontSize: 11, fontWeight: 700, color: 'var(--lf-blue-bright)',
          letterSpacing: '0.07em', textTransform: 'uppercase',
        }}>
          ARIA is working
        </div>

        <h1 style={{
          fontFamily: 'var(--lf-font-display)', fontSize: 26, fontWeight: 700,
          color: 'var(--lf-text-primary)', margin: '0 0 6px', lineHeight: 1.2,
        }}>
          {done ? 'Your Plan is Ready!' : 'Generating Your AI Plan'}
        </h1>
        <p style={{ fontSize: 13, color: 'var(--lf-text-secondary)', margin: 0 }}>
          {done
            ? 'Personalised just for you based on your profile.'
            : 'Analysing your profile and building a plan tailored to you.'}
        </p>
      </div>

      {/* Orb */}
      <div style={{
        display: 'flex', justifyContent: 'center',
        padding: '20px 0 10px', position: 'relative',
      }}>
        <div style={{ position: 'relative' }}>
          <OrbCanvas step={displayStep} />
          {/* Glow backdrop */}
          <div style={{
            position: 'absolute', inset: 0, borderRadius: '50%',
            background: done
              ? 'radial-gradient(circle, rgba(16,185,129,0.18) 0%, transparent 70%)'
              : 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
            transition: 'background 0.8s ease',
          }} />
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ padding: '0 28px', marginBottom: 6 }}>
        <div style={{
          height: 6, borderRadius: 3,
          background: 'rgba(255,255,255,0.07)',
          overflow: 'hidden',
        }}>
          <div style={{
            height: '100%', borderRadius: 3,
            width: `${progress}%`,
            background: done
              ? '#10B981'
              : 'linear-gradient(90deg, #3B82F6, #8B5CF6, #3B82F6)',
            backgroundSize: '200% 100%',
            animation: done ? undefined : 'ail-progress 2s linear infinite',
            transition: 'width 0.5s ease, background 0.5s ease',
            boxShadow: `0 0 8px ${progressColor}80`,
          }} />
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          marginTop: 6, fontSize: 11, color: 'var(--lf-text-muted)',
        }}>
          <span style={{ color: done ? '#10B981' : 'var(--lf-blue-bright)', fontWeight: 600 }}>
            {progress}%
          </span>
          <span>Step {Math.min(currentStep + 1, STEPS.length)} of {STEPS.length}</span>
        </div>
      </div>

      {/* Active status line */}
      <div style={{ padding: '0 28px 14px' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 8,
          padding: '10px 14px', borderRadius: 12,
          background: done ? 'rgba(16,185,129,0.08)' : 'var(--lf-blue-dim)',
          border: `1px solid ${done ? 'rgba(16,185,129,0.3)' : 'rgba(59,130,246,0.25)'}`,
          transition: 'all 0.4s ease',
        }}>
          <span style={{ fontSize: 16 }}>{done ? '✅' : STEPS[displayStep].icon}</span>
          <span style={{
            fontSize: 13, fontWeight: 600,
            color: done ? '#34D399' : 'var(--lf-blue-bright)',
            flex: 1,
          }}>
            {done ? 'Analysis complete!' : activeLabel}
            {!done && <span style={{ opacity: blink ? 1 : 0, marginLeft: 1 }}>|</span>}
          </span>
          {!done && (
            <div style={{
              width: 16, height: 16,
              border: '2px solid rgba(59,130,246,0.3)',
              borderTopColor: 'var(--lf-blue)',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
              flexShrink: 0,
            }} />
          )}
        </div>
      </div>

      {/* Steps list */}
      <div style={{ padding: '0 24px', display: 'flex', flexDirection: 'column', gap: 0, flex: 1 }}>
        {STEPS.map((step, i) => {
          const isComplete = completedSteps.includes(i);
          const isActive   = i === displayStep && !done;
          const isPending  = !isComplete && !isActive;

          return (
            <div
              key={step.id}
              className={isActive ? 'ail-step-row' : undefined}
              style={{
                display: 'flex', alignItems: 'center', gap: 12,
                padding: '10px 12px', borderRadius: 12,
                background: isActive ? 'rgba(59,130,246,0.05)' : 'transparent',
                border: `1px solid ${isActive ? 'rgba(59,130,246,0.15)' : 'transparent'}`,
                marginBottom: 2, transition: 'all 0.3s ease',
              }}
            >
              {/* Indicator */}
              <div style={{
                width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: isComplete
                  ? 'rgba(16,185,129,0.15)'
                  : isActive
                    ? 'rgba(59,130,246,0.15)'
                    : 'rgba(255,255,255,0.04)',
                border: `1.5px solid ${
                  isComplete ? 'rgba(16,185,129,0.5)'
                  : isActive  ? 'rgba(59,130,246,0.5)'
                  :            'rgba(255,255,255,0.08)'
                }`,
                transition: 'all 0.3s ease',
              }}>
                {isComplete ? (
                  <span className="ail-check" style={{ fontSize: 13 }}>✓</span>
                ) : isActive ? (
                  <div style={{
                    width: 8, height: 8, borderRadius: '50%',
                    background: 'var(--lf-blue)',
                    animation: 'ail-shimmer 1s ease-in-out infinite',
                  }} />
                ) : (
                  <span style={{ fontSize: 10, color: 'var(--lf-text-muted)', fontWeight: 700 }}>
                    {i + 1}
                  </span>
                )}
              </div>

              {/* Label */}
              <span style={{
                fontSize: 13,
                fontWeight: isActive || isComplete ? 600 : 400,
                color: isComplete
                  ? '#34D399'
                  : isActive
                    ? 'var(--lf-text-primary)'
                    : 'var(--lf-text-muted)',
                transition: 'color 0.3s ease',
                flex: 1,
              }}>
                {step.icon} {step.label}
              </span>

              {/* Time badge */}
              {isComplete && (
                <span style={{
                  fontSize: 10, color: '#34D399', fontWeight: 600,
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.2)',
                  borderRadius: 6, padding: '2px 7px',
                  animation: 'ail-check-pop 0.25s ease-out',
                }}>
                  done
                </span>
              )}
            </div>
          );
        })}
      </div>

      {/* Done CTA */}
      {done && (
        <div style={{
          padding: '14px 24px 32px',
          animation: 'ail-step-in 0.4s ease-out',
        }}>
          <button className="lf-btn-primary" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontSize: 16, fontWeight: 700,
            background: 'linear-gradient(135deg, #10B981, #3B82F6)',
            animation: 'ail-done-glow 2s ease-in-out infinite',
          }}>
            ✨ View My Personalised Plan
          </button>
        </div>
      )}

      {/* Subtle loading note */}
      {!done && (
        <div style={{
          padding: '10px 24px 28px', textAlign: 'center',
          fontSize: 11, color: 'var(--lf-text-muted)',
        }}>
          <span className="ail-shimmer">
            ARIA is analysing 1,200+ data points from your profile…
          </span>
        </div>
      )}
    </div>
  );
}
