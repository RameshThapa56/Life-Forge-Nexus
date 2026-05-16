import React, { useState } from 'react';
import { Search, Plus, Check, ArrowRight, ChevronLeft, Dumbbell, BookOpen, Droplets, BookMarked, Sparkles, Wifi, Signal, Battery, X } from 'lucide-react';
import './_group.css';

const suggestions = [
  { id: 's1', label: '10 min workout', icon: Dumbbell, color: '#10B981', xp: '+50 XP' },
  { id: 's2', label: '20 min study', icon: BookOpen, color: '#3B82F6', xp: '+60 XP' },
  { id: 's3', label: 'Drink 2L water', icon: Droplets, color: '#06B6D4', xp: '+30 XP' },
  { id: 's4', label: 'Read 10 pages', icon: BookMarked, color: '#8B5CF6', xp: '+40 XP' },
  { id: 's5', label: 'Meditate 5 min', icon: Sparkles, color: '#EC4899', xp: '+35 XP' },
];

export function HabitCreate() {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState<string[]>(['s1', 's3']);
  const [showCustom, setShowCustom] = useState(false);
  const [customValue, setCustomValue] = useState('');

  const toggle = (id: string) => {
    setSelected(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const filtered = suggestions.filter(s =>
    s.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="lf-screen" style={{ background: 'var(--lf-bg)', minHeight: '844px', display: 'flex', flexDirection: 'column' }}>
      <style>{`
        @keyframes chip-bounce {
          0% { transform: scale(0.85); opacity: 0; }
          60% { transform: scale(1.05); }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes custom-slide {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .chip {
          cursor: pointer;
          transition: all 0.18s cubic-bezier(0.34, 1.4, 0.64, 1);
          user-select: none;
        }
        .chip:active { transform: scale(0.95); }
        .chip.selected-chip { animation: chip-bounce 0.25s ease-out; }
        .search-input {
          background: var(--lf-bg-card);
          border: 1.5px solid var(--lf-border);
          border-radius: 14px;
          color: var(--lf-text-primary);
          font-family: var(--lf-font-main);
          font-size: 15px;
          outline: none;
          transition: border-color 0.2s ease, box-shadow 0.2s ease;
          width: 100%;
          padding: 13px 16px 13px 44px;
        }
        .search-input:focus {
          border-color: var(--lf-blue);
          box-shadow: 0 0 0 3px var(--lf-blue-dim);
        }
        .search-input::placeholder { color: var(--lf-text-muted); }
        .custom-input {
          background: transparent;
          border: none;
          outline: none;
          color: var(--lf-text-primary);
          font-family: var(--lf-font-main);
          font-size: 14px;
          flex: 1;
        }
        .custom-input::placeholder { color: var(--lf-text-muted); }
        .xp-badge {
          font-size: 10px;
          font-weight: 700;
          padding: 2px 7px;
          border-radius: 10px;
          letter-spacing: 0.04em;
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
            height: 8, borderRadius: i === 3 ? 4 : '50%',
            width: i === 3 ? 24 : 8,
            background: i === 3 ? 'var(--lf-emerald)' : i < 3 ? 'rgba(16,185,129,0.4)' : 'rgba(255,255,255,0.12)',
            transition: 'all 0.3s ease',
          }} />
        ))}
      </div>

      {/* Header */}
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
            background: 'var(--lf-emerald-dim)', border: '1px solid rgba(16,185,129,0.3)',
            borderRadius: 20, padding: '4px 12px', marginBottom: 14,
            fontSize: 11, fontWeight: 700, color: 'var(--lf-emerald-bright)', letterSpacing: '0.06em',
            textTransform: 'uppercase'
          }}>
            Step 3 of 5
          </div>
          <h1 style={{
            fontFamily: 'var(--lf-font-display)', fontSize: 26, fontWeight: 700,
            color: 'var(--lf-text-primary)', margin: 0, lineHeight: 1.25, marginBottom: 6
          }}>
            Let's build your<br />first streak
          </h1>
          <p style={{ fontSize: 13, color: 'var(--lf-text-secondary)', margin: 0 }}>
            Pick habits to start — or create your own.
          </p>
        </div>
      </div>

      {/* Search Input */}
      <div style={{ padding: '20px 20px 0', position: 'relative', animation: 'lf-slide-up 0.42s ease-out 0.06s both' }}>
        <div style={{ position: 'relative' }}>
          <Search size={17} style={{
            position: 'absolute', left: 14, top: '50%',
            transform: 'translateY(-50%)',
            color: 'var(--lf-text-muted)',
          }} />
          <input
            className="search-input"
            placeholder="Search habits..."
            value={query}
            onChange={e => setQuery(e.target.value)}
          />
          {query && (
            <button onClick={() => setQuery('')} style={{
              position: 'absolute', right: 14, top: '50%', transform: 'translateY(-50%)',
              background: 'none', border: 'none', cursor: 'pointer', color: 'var(--lf-text-muted)',
              padding: 0, display: 'flex',
            }}>
              <X size={15} />
            </button>
          )}
        </div>
      </div>

      {/* Suggestion Chips */}
      <div style={{ padding: '16px 20px 0', animation: 'lf-slide-up 0.45s ease-out 0.1s both' }}>
        <div style={{
          fontSize: 11, fontWeight: 700, color: 'var(--lf-text-muted)',
          textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 10,
        }}>
          Suggested Habits
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {filtered.map((s) => {
            const isSelected = selected.includes(s.id);
            const Icon = s.icon;
            return (
              <div
                key={s.id}
                className={`chip${isSelected ? ' selected-chip' : ''}`}
                onClick={() => toggle(s.id)}
                style={{
                  display: 'flex', alignItems: 'center', gap: 12,
                  padding: '12px 14px',
                  background: isSelected ? `${s.color}12` : 'var(--lf-bg-card)',
                  border: `1.5px solid ${isSelected ? s.color + '70' : 'var(--lf-border)'}`,
                  borderRadius: 12,
                  boxShadow: isSelected ? `0 0 16px ${s.color}20` : 'none',
                }}
              >
                {/* Icon */}
                <div style={{
                  width: 36, height: 36, borderRadius: 10, flexShrink: 0,
                  background: isSelected ? `${s.color}25` : 'rgba(255,255,255,0.05)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: `1px solid ${isSelected ? s.color + '50' : 'rgba(255,255,255,0.07)'}`,
                }}>
                  <Icon size={17} color={isSelected ? s.color : 'var(--lf-text-secondary)'} />
                </div>

                {/* Label */}
                <span style={{
                  flex: 1, fontSize: 14, fontWeight: 600,
                  color: isSelected ? s.color : 'var(--lf-text-primary)',
                }}>
                  {s.label}
                </span>

                {/* XP badge */}
                <div className="xp-badge" style={{
                  background: isSelected ? `${s.color}22` : 'rgba(255,255,255,0.05)',
                  color: isSelected ? s.color : 'var(--lf-text-muted)',
                  border: `1px solid ${isSelected ? s.color + '40' : 'transparent'}`,
                }}>
                  {s.xp}
                </div>

                {/* Checkmark */}
                <div style={{
                  width: 22, height: 22, borderRadius: '50%', flexShrink: 0,
                  background: isSelected ? s.color : 'rgba(255,255,255,0.06)',
                  border: `1.5px solid ${isSelected ? s.color : 'rgba(255,255,255,0.15)'}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'all 0.2s ease',
                }}>
                  {isSelected && <Check size={12} color="#fff" strokeWidth={3} />}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom Habit */}
      <div style={{ padding: '12px 20px 0', animation: 'lf-slide-up 0.5s ease-out 0.15s both' }}>
        {!showCustom ? (
          <button
            onClick={() => setShowCustom(true)}
            style={{
              width: '100%', padding: '13px 16px',
              background: 'none',
              border: '1.5px dashed rgba(255,255,255,0.15)',
              borderRadius: 12, cursor: 'pointer',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              color: 'var(--lf-text-secondary)', fontSize: 14, fontWeight: 600,
              transition: 'all 0.2s ease',
              fontFamily: 'var(--lf-font-main)',
            }}
          >
            <div style={{
              width: 22, height: 22, borderRadius: '50%',
              background: 'var(--lf-gradient-blue-purple)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <Plus size={13} color="#fff" strokeWidth={2.5} />
            </div>
            Create custom habit
          </button>
        ) : (
          <div style={{
            background: 'var(--lf-bg-card)',
            border: '1.5px solid var(--lf-blue)',
            borderRadius: 12, padding: '12px 14px',
            display: 'flex', alignItems: 'center', gap: 10,
            boxShadow: '0 0 16px var(--lf-blue-dim)',
            animation: 'custom-slide 0.2s ease-out',
          }}>
            <div style={{
              width: 32, height: 32, borderRadius: 9,
              background: 'var(--lf-blue-dim)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Plus size={16} color="var(--lf-blue-bright)" />
            </div>
            <input
              className="custom-input"
              placeholder="e.g. Journal for 5 minutes"
              value={customValue}
              onChange={e => setCustomValue(e.target.value)}
              autoFocus
            />
            {customValue && (
              <button style={{
                background: 'var(--lf-gradient-blue-purple)',
                border: 'none', borderRadius: 8, cursor: 'pointer',
                width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Check size={15} color="#fff" />
              </button>
            )}
          </div>
        )}
      </div>

      {/* Selected count indicator */}
      {selected.length > 0 && (
        <div style={{ padding: '10px 20px 0', display: 'flex', alignItems: 'center', gap: 6 }}>
          <div style={{
            fontSize: 12, color: 'var(--lf-emerald-bright)', fontWeight: 600,
            display: 'flex', alignItems: 'center', gap: 5,
          }}>
            <div style={{
              width: 18, height: 18, borderRadius: '50%',
              background: 'var(--lf-emerald)', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span style={{ fontSize: 10, color: '#fff', fontWeight: 800 }}>{selected.length}</span>
            </div>
            habit{selected.length !== 1 ? 's' : ''} selected
          </div>
          <div style={{ flex: 1, height: 1, background: 'var(--lf-border)' }} />
          <div style={{ fontSize: 11, color: 'var(--lf-text-muted)' }}>
            +{selected.length * 40} XP/day potential
          </div>
        </div>
      )}

      {/* CTA */}
      <div style={{ padding: '16px 20px 36px', marginTop: 'auto', animation: 'lf-slide-up 0.5s ease-out 0.2s both' }}>
        <button
          className="lf-btn-primary"
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            fontSize: 16, fontWeight: 700,
            opacity: selected.length === 0 ? 0.5 : 1,
          }}
        >
          {selected.length === 0 ? 'Select at least 1 habit' : `Start my ${selected.length} habit${selected.length !== 1 ? 's' : ''}`}
          {selected.length > 0 && <ArrowRight size={18} />}
        </button>
      </div>
    </div>
  );
}
