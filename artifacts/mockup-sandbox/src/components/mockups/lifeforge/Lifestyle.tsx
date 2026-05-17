import React, { useState, useCallback } from 'react';
import {
  ChevronLeft, ArrowRight, Sun, Moon, Clock, Zap,
  Wifi, Battery, Signal, Check, Coffee, Sunset, Star, MoonStar,
} from 'lucide-react';
import './_group.css';

// ── Types ──────────────────────────────────────────────────────
type PeakTime = 'morning' | 'afternoon' | 'evening' | 'night';

interface LifestyleData {
  dailyMinutes: number;
  wakeHour: number;
  wakeMinute: number;
  sleepHour: number;
  sleepMinute: number;
  peakTime: PeakTime;
}

// ── Helpers ────────────────────────────────────────────────────
function fmt12(h: number, m: number) {
  const ampm = h < 12 ? 'AM' : 'PM';
  const h12  = h === 0 ? 12 : h > 12 ? h - 12 : h;
  return `${h12}:${String(m).padStart(2, '0')} ${ampm}`;
}

function hoursSlept(wH: number, wM: number, sH: number, sM: number) {
  const wake  = wH * 60 + wM;
  const sleep = sH * 60 + sM;
  const diff  = wake > sleep ? wake - sleep : 24 * 60 - sleep + wake;
  return (diff / 60).toFixed(1);
}

function availLabel(m: number) {
  if (m < 60) return `${m} min`;
  if (m % 60 === 0) return `${m / 60}h`;
  return `${Math.floor(m / 60)}h ${m % 60}m`;
}

// ── Sub-components ─────────────────────────────────────────────
const DAILY_OPTIONS = [
  { minutes: 15,  label: '15 min',   sub: 'Micro sessions' },
  { minutes: 30,  label: '30 min',   sub: 'Quick habits' },
  { minutes: 60,  label: '1 hour',   sub: 'Balanced' },
  { minutes: 120, label: '2 hours',  sub: 'Deep focus' },
  { minutes: 180, label: '3 hours+', sub: 'Full commitment' },
];

const PEAK_OPTIONS: { id: PeakTime; label: string; sub: string; icon: React.FC<{ size: number; color: string }>; color: string; glow: string }[] = [
  { id: 'morning',   label: 'Early Bird',  sub: '5 AM – 10 AM',   icon: Sun,     color: '#F59E0B', glow: 'rgba(245,158,11,0.25)' },
  { id: 'afternoon', label: 'Midday Peak', sub: '10 AM – 3 PM',   icon: Coffee,  color: '#10B981', glow: 'rgba(16,185,129,0.25)' },
  { id: 'evening',   label: 'Evening Flow',sub: '3 PM – 9 PM',    icon: Sunset,  color: '#EC4899', glow: 'rgba(236,72,153,0.25)' },
  { id: 'night',     label: 'Night Owl',   sub: '9 PM – 2 AM',    icon: MoonStar,color: '#8B5CF6', glow: 'rgba(139,92,246,0.25)' },
];

// Drum-roll style time picker (visual scroll column)
function TimePicker({
  label, icon: Icon, color,
  hour, minute,
  onHour, onMinute,
}: {
  label: string; icon: typeof Sun; color: string;
  hour: number; minute: number;
  onHour: (h: number) => void; onMinute: (m: number) => void;
}) {
  const hPrev = (hour + 23) % 24;
  const hNext = (hour + 1)  % 24;
  const mPrev = minute === 0 ? 45 : minute - 15;
  const mNext = minute === 45 ? 0 : minute + 15;

  const col = (value: string, pos: 'prev'|'cur'|'next', onClick: () => void) => {
    const style: React.CSSProperties = {
      fontSize: pos === 'cur' ? 24 : 15,
      fontWeight: pos === 'cur' ? 800 : 500,
      color: pos === 'cur' ? color : 'var(--lf-text-muted)',
      lineHeight: pos === 'cur' ? '1' : '1',
      cursor: 'pointer',
      transition: 'all 0.15s ease',
      fontFamily: 'var(--lf-font-display)',
      userSelect: 'none',
    };
    return <div style={style} onClick={onClick}>{value}</div>;
  };

  return (
    <div style={{
      flex: 1, background: 'var(--lf-bg-card)',
      border: `1.5px solid ${color}40`,
      borderRadius: 16, overflow: 'hidden',
      boxShadow: `0 0 20px ${color}18`,
    }}>
      {/* Header */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 6,
        padding: '10px 14px 6px',
        borderBottom: '1px solid var(--lf-border)',
      }}>
        <Icon size={13} color={color} />
        <span style={{ fontSize: 11, fontWeight: 700, color, letterSpacing: '0.07em', textTransform: 'uppercase' }}>
          {label}
        </span>
      </div>

      {/* Columns */}
      <div style={{ display: 'flex', alignItems: 'center', padding: '12px 14px 14px', gap: 0 }}>
        {/* Hour drum */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          {col(fmt12(hPrev, 0).split(':')[0] + (hPrev < 12 ? '' : ''), 'prev', () => onHour((hour + 23) % 24))}
          <div style={{
            background: `${color}18`, borderRadius: 10, padding: '5px 12px',
            border: `1px solid ${color}40`,
          }}>
            {col(String(hour === 0 ? 12 : hour > 12 ? hour - 12 : hour), 'cur', () => onHour((hour + 1) % 24))}
          </div>
          {col(fmt12(hNext, 0).split(':')[0], 'next', () => onHour((hour + 1) % 24))}
        </div>

        <div style={{ fontSize: 22, fontWeight: 800, color: 'var(--lf-text-muted)', padding: '0 4px', marginBottom: 2 }}>:</div>

        {/* Minute drum */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4 }}>
          {col(String(mPrev).padStart(2, '0'), 'prev', () => onMinute(mPrev))}
          <div style={{
            background: `${color}18`, borderRadius: 10, padding: '5px 12px',
            border: `1px solid ${color}40`,
          }}>
            {col(String(minute).padStart(2, '0'), 'cur', () => onMinute(mNext))}
          </div>
          {col(String(mNext).padStart(2, '0'), 'next', () => onMinute(mNext))}
        </div>

        {/* AM/PM */}
        <div style={{
          display: 'flex', flexDirection: 'column', gap: 5,
          marginLeft: 8, paddingTop: 2,
        }}>
          {['AM','PM'].map(period => {
            const active = (period === 'AM') === (hour < 12);
            return (
              <div key={period} onClick={() => {
                if (period === 'AM' && hour >= 12) onHour(hour - 12);
                if (period === 'PM' && hour < 12)  onHour(hour + 12);
              }} style={{
                fontSize: 11, fontWeight: 700, cursor: 'pointer',
                color: active ? color : 'var(--lf-text-muted)',
                background: active ? `${color}20` : 'transparent',
                border: `1px solid ${active ? color + '50' : 'transparent'}`,
                borderRadius: 6, padding: '3px 6px',
                transition: 'all 0.15s ease',
              }}>
                {period}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────
export function Lifestyle() {
  const [data, setData] = useState<LifestyleData>({
    dailyMinutes: 60,
    wakeHour: 6, wakeMinute: 30,
    sleepHour: 22, sleepMinute: 30,
    peakTime: 'morning',
  });
  const [saved, setSaved] = useState(false);

  const set = useCallback(<K extends keyof LifestyleData>(key: K, val: LifestyleData[K]) => {
    setData(prev => ({ ...prev, [key]: val }));
    setSaved(false);
  }, []);

  const handleSave = () => {
    try { localStorage.setItem('lf_lifestyle', JSON.stringify(data)); } catch {}
    setSaved(true);
  };

  const sleepDuration = hoursSlept(data.wakeHour, data.wakeMinute, data.sleepHour, data.sleepMinute);
  const sleepColor    = parseFloat(sleepDuration) >= 7 ? '#10B981' : parseFloat(sleepDuration) >= 6 ? '#F59E0B' : '#EF4444';
  const activeTabIdx  = MAIN_TABS_DUMMY.indexOf(data.peakTime);

  return (
    <div className="lf-screen" style={{ minHeight: 844, paddingBottom: 36 }}>
      <style>{`
        @keyframes save-pop {
          0%   { transform: scale(0.7); opacity: 0 }
          60%  { transform: scale(1.1) }
          100% { transform: scale(1);   opacity: 1 }
        }
        @keyframes pill-select {
          0%   { transform: scale(1) }
          40%  { transform: scale(0.94) }
          100% { transform: scale(1) }
        }
        .ls-pill { cursor: pointer; transition: all 0.2s cubic-bezier(0.34,1.3,0.64,1); user-select: none; }
        .ls-pill:active { transform: scale(0.96); }
        .ls-peak { cursor: pointer; transition: all 0.2s ease; user-select: none; }
        .ls-peak:active { transform: scale(0.97); }
        .ls-section-title {
          font-size: 11px; font-weight: 700; letter-spacing: 0.08em;
          text-transform: uppercase; color: var(--lf-text-muted);
          margin-bottom: 10px;
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
      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, padding: '14px 20px 0' }}>
        {[1,2,3,4,5].map(i => (
          <div key={i} style={{
            height: 8, borderRadius: i === 4 ? 4 : '50%',
            width: i === 4 ? 24 : 8,
            background: i === 4 ? 'var(--lf-blue)' : i < 4 ? 'rgba(59,130,246,0.4)' : 'rgba(255,255,255,0.12)',
            transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

      {/* Back + Header */}
      <div style={{ padding: '16px 20px 0', animation: 'lf-slide-up 0.4s ease-out' }}>
        <button style={{
          background: 'none', border: 'none', cursor: 'pointer',
          display: 'flex', alignItems: 'center', gap: 4,
          color: 'var(--lf-text-secondary)', fontSize: 14, padding: 0, marginBottom: 16,
        }}>
          <ChevronLeft size={18} /> Back
        </button>

        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 6,
          background: 'var(--lf-blue-dim)', border: '1px solid rgba(59,130,246,0.3)',
          borderRadius: 20, padding: '4px 12px', marginBottom: 12,
          fontSize: 11, fontWeight: 700, color: 'var(--lf-blue-bright)',
          letterSpacing: '0.06em', textTransform: 'uppercase',
        }}>
          Step 4 of 5
        </div>

        <h1 style={{
          fontFamily: 'var(--lf-font-display)', fontSize: 24, fontWeight: 700,
          color: 'var(--lf-text-primary)', margin: 0, lineHeight: 1.25, marginBottom: 4,
        }}>
          Your Daily Lifestyle
        </h1>
        <p style={{ fontSize: 13, color: 'var(--lf-text-secondary)', margin: 0 }}>
          Help your AI coach plan around your real schedule.
        </p>
      </div>

      <div style={{ padding: '20px 20px 0', display: 'flex', flexDirection: 'column', gap: 20 }}>

        {/* ── SECTION 1: Available Daily Time ──────────────────── */}
        <div>
          <div className="ls-section-title">
            <Clock size={11} style={{ display: 'inline', marginRight: 5, verticalAlign: 'middle' }} />
            Available Daily Time
          </div>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {DAILY_OPTIONS.map(opt => {
              const active = data.dailyMinutes === opt.minutes;
              return (
                <div
                  key={opt.minutes}
                  className="ls-pill"
                  onClick={() => set('dailyMinutes', opt.minutes)}
                  style={{
                    padding: '10px 14px', borderRadius: 12,
                    background: active ? 'var(--lf-blue-dim)' : 'var(--lf-bg-card)',
                    border: `1.5px solid ${active ? 'var(--lf-blue)' : 'var(--lf-border)'}`,
                    boxShadow: active ? 'var(--lf-shadow-blue)' : 'none',
                    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2,
                    minWidth: 60, flex: '1 1 auto',
                    animation: active ? 'pill-select 0.2s ease-out' : undefined,
                  }}
                >
                  <span style={{
                    fontSize: 13, fontWeight: 700,
                    color: active ? 'var(--lf-blue-bright)' : 'var(--lf-text-primary)',
                  }}>
                    {opt.label}
                  </span>
                  <span style={{ fontSize: 10, color: 'var(--lf-text-muted)', fontWeight: 500 }}>
                    {opt.sub}
                  </span>
                  {active && (
                    <div style={{
                      width: 16, height: 16, borderRadius: '50%',
                      background: 'var(--lf-blue)', display: 'flex',
                      alignItems: 'center', justifyContent: 'center', marginTop: 2,
                    }}>
                      <Check size={9} color="#fff" strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Selected summary */}
          <div style={{
            marginTop: 8, fontSize: 12, color: 'var(--lf-text-muted)',
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            <Zap size={11} color="var(--lf-orange)" />
            <span>
              That's <strong style={{ color: 'var(--lf-text-secondary)' }}>{availLabel(data.dailyMinutes)}</strong> of focused improvement per day
            </span>
          </div>
        </div>

        {/* ── SECTION 2: Wake & Sleep Times ────────────────────── */}
        <div>
          <div className="ls-section-title">
            <Sun size={11} style={{ display: 'inline', marginRight: 5, verticalAlign: 'middle' }} />
            Wake & Sleep Times
          </div>

          <div style={{ display: 'flex', gap: 10 }}>
            <TimePicker
              label="Wake Up" icon={Sun} color="#F59E0B"
              hour={data.wakeHour} minute={data.wakeMinute}
              onHour={h => set('wakeHour', h)} onMinute={m => set('wakeMinute', m)}
            />
            <TimePicker
              label="Bedtime" icon={Moon} color="#8B5CF6"
              hour={data.sleepHour} minute={data.sleepMinute}
              onHour={h => set('sleepHour', h)} onMinute={m => set('sleepMinute', m)}
            />
          </div>

          {/* Sleep duration badge */}
          <div style={{
            marginTop: 8, display: 'flex', alignItems: 'center', gap: 6,
            background: `${sleepColor}12`,
            border: `1px solid ${sleepColor}40`,
            borderRadius: 10, padding: '7px 12px',
          }}>
            <Moon size={13} color={sleepColor} />
            <span style={{ fontSize: 12, color: sleepColor, fontWeight: 600 }}>
              {sleepDuration}h sleep window
            </span>
            <span style={{ fontSize: 11, color: 'var(--lf-text-muted)', marginLeft: 2 }}>
              {parseFloat(sleepDuration) >= 7
                ? '— Great for recovery!'
                : parseFloat(sleepDuration) >= 6
                  ? '— Consider more rest'
                  : '— Low. AI will adjust your plan.'}
            </span>
          </div>
        </div>

        {/* ── SECTION 3: Peak Productivity Time ───────────────── */}
        <div>
          <div className="ls-section-title">
            <Star size={11} style={{ display: 'inline', marginRight: 5, verticalAlign: 'middle' }} />
            Peak Productivity Time
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
            {PEAK_OPTIONS.map(opt => {
              const active  = data.peakTime === opt.id;
              const Icon    = opt.icon;
              return (
                <div
                  key={opt.id}
                  className="ls-peak"
                  onClick={() => set('peakTime', opt.id)}
                  style={{
                    padding: '12px 14px', borderRadius: 14,
                    background: active
                      ? `linear-gradient(135deg, ${opt.color}18, ${opt.color}08)`
                      : 'var(--lf-bg-card)',
                    border: `1.5px solid ${active ? opt.color + '70' : 'var(--lf-border)'}`,
                    boxShadow: active ? `0 0 18px ${opt.glow}` : 'none',
                    display: 'flex', alignItems: 'center', gap: 10, position: 'relative',
                  }}
                >
                  <div style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: active ? `${opt.color}25` : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${active ? opt.color + '50' : 'rgba(255,255,255,0.08)'}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Icon size={17} color={active ? opt.color : 'var(--lf-text-muted)'} />
                  </div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{
                      fontSize: 13, fontWeight: 700,
                      color: active ? opt.color : 'var(--lf-text-primary)',
                      whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
                    }}>
                      {opt.label}
                    </div>
                    <div style={{ fontSize: 10, color: 'var(--lf-text-muted)', marginTop: 1 }}>
                      {opt.sub}
                    </div>
                  </div>
                  {active && (
                    <div style={{
                      position: 'absolute', top: 8, right: 8,
                      width: 18, height: 18, borderRadius: '50%',
                      background: opt.color, display: 'flex',
                      alignItems: 'center', justifyContent: 'center',
                      animation: 'save-pop 0.25s ease-out',
                    }}>
                      <Check size={9} color="#fff" strokeWidth={3} />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* AI note */}
          <div style={{
            marginTop: 8, display: 'flex', gap: 7, alignItems: 'flex-start',
            padding: '8px 12px', borderRadius: 10,
            background: 'rgba(59,130,246,0.06)',
            border: '1px solid rgba(59,130,246,0.15)',
          }}>
            <Zap size={12} color="var(--lf-blue)" style={{ flexShrink: 0, marginTop: 1 }} />
            <span style={{ fontSize: 11, color: 'var(--lf-text-secondary)', lineHeight: 1.5 }}>
              ARIA will schedule your hardest tasks during your{' '}
              <strong style={{ color: 'var(--lf-blue-bright)' }}>
                {PEAK_OPTIONS.find(p => p.id === data.peakTime)?.label}
              </strong>{' '}
              window for maximum performance.
            </span>
          </div>
        </div>
      </div>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <div style={{ padding: '20px 20px 0', display: 'flex', flexDirection: 'column', gap: 10 }}>
        {/* Save locally button */}
        <button
          onClick={handleSave}
          style={{
            width: '100%', padding: '13px 20px',
            background: saved ? 'rgba(16,185,129,0.12)' : 'var(--lf-bg-card)',
            border: `1.5px solid ${saved ? 'rgba(16,185,129,0.5)' : 'var(--lf-border)'}`,
            borderRadius: 14, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
            fontFamily: 'var(--lf-font-main)',
            fontSize: 13, fontWeight: 600,
            color: saved ? '#34D399' : 'var(--lf-text-secondary)',
            transition: 'all 0.25s ease',
          }}
        >
          {saved ? (
            <>
              <Check size={15} strokeWidth={2.5} />
              Preferences saved locally
            </>
          ) : (
            <>
              <Clock size={14} />
              Save preferences
            </>
          )}
        </button>

        {/* Continue CTA */}
        <button className="lf-btn-primary" style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
          fontSize: 16, fontWeight: 700,
        }}>
          Continue <ArrowRight size={18} />
        </button>
      </div>
    </div>
  );
}

// dummy – only needed to suppress TS errors in this standalone file
const MAIN_TABS_DUMMY: string[] = ['morning', 'afternoon', 'evening', 'night'];
