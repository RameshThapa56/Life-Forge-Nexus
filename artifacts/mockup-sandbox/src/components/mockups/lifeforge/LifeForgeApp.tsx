import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Home, Calendar, CheckSquare, BarChart2, User, ChevronLeft } from 'lucide-react';

import { Splash } from './Splash';
import { Onboarding } from './Onboarding';
import { GoalSelect } from './GoalSelect';
import { Problem } from './Problem';
import { HabitCreate } from './HabitCreate';
import { AiPlan } from './AiPlan';
import { Auth } from './Auth';
import { Dashboard } from './Dashboard';
import { Routine } from './Routine';
import { Habits } from './Habits';
import { Analytics } from './Analytics';
import { Diet } from './Diet';
import { Learning } from './Learning';
import { AiCoach } from './AiCoach';
import { Gamification } from './Gamification';
import { Social } from './Social';
import { Settings } from './Settings';
import { Premium } from './Premium';
import './_group.css';

type ScreenId =
  | 'splash' | 'onboarding' | 'goalSelect' | 'problem'
  | 'habitCreate' | 'aiPlan' | 'auth'
  | 'dashboard' | 'routine' | 'habits' | 'analytics' | 'diet'
  | 'learning' | 'aiCoach' | 'gamification' | 'social' | 'settings' | 'premium';

const ONBOARDING_FLOW: ScreenId[] = [
  'splash', 'onboarding', 'goalSelect', 'problem', 'habitCreate', 'aiPlan', 'auth',
];

const MAIN_TABS: ScreenId[] = ['dashboard', 'routine', 'habits', 'analytics', 'gamification'];

const TAB_CONFIG = [
  { id: 'dashboard' as ScreenId,    label: 'Home',    Icon: Home },
  { id: 'routine' as ScreenId,      label: 'Routine', Icon: Calendar },
  { id: 'habits' as ScreenId,       label: 'Habits',  Icon: CheckSquare },
  { id: 'analytics' as ScreenId,    label: 'Stats',   Icon: BarChart2 },
  { id: 'gamification' as ScreenId, label: 'Profile', Icon: User },
];

const SCREEN_MAP: Record<ScreenId, React.ComponentType> = {
  splash: Splash, onboarding: Onboarding, goalSelect: GoalSelect,
  problem: Problem, habitCreate: HabitCreate, aiPlan: AiPlan, auth: Auth,
  dashboard: Dashboard, routine: Routine, habits: Habits, analytics: Analytics,
  diet: Diet, learning: Learning, aiCoach: AiCoach,
  gamification: Gamification, social: Social, settings: Settings, premium: Premium,
};

// How long to block the CTA tap zone before activating navigation
const CTA_DELAY: Partial<Record<ScreenId, number>> = {
  splash: 800,
  aiPlan: 3200,
};

// Height of the CTA tap zone (px from bottom). 'full' = entire screen.
const CTA_HEIGHT: Partial<Record<ScreenId, number | 'full'>> = {
  splash: 'full',
};

export function LifeForgeApp() {
  const [current, setCurrent]         = useState<ScreenId>('splash');
  const [prev, setPrev]               = useState<ScreenId | null>(null);
  const [dir, setDir]                 = useState<'forward' | 'back'>('forward');
  const [busy, setBusy]               = useState(false);
  const [ctaReady, setCtaReady]       = useState(false);
  const [showHint, setShowHint]       = useState(true);
  const timerRef                      = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isOnboarding = ONBOARDING_FLOW.includes(current);
  const activeTabIdx = MAIN_TABS.indexOf(current);

  // Arm the CTA tap zone after per-screen delay
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCtaReady(false);
    const delay = CTA_DELAY[current] ?? 0;
    timerRef.current = setTimeout(() => setCtaReady(true), delay);
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [current]);

  // Dismiss swipe hint after 2 s
  useEffect(() => {
    const t = setTimeout(() => setShowHint(false), 2200);
    return () => clearTimeout(t);
  }, [current]);

  const navigate = useCallback((to: ScreenId, direction: 'forward' | 'back' = 'forward') => {
    if (busy) return;
    setPrev(current);
    setDir(direction);
    setBusy(true);
    setCurrent(to);
    setTimeout(() => { setPrev(null); setBusy(false); }, 340);
  }, [current, busy]);

  const advance = useCallback(() => {
    if (!ctaReady || busy) return;
    const idx = ONBOARDING_FLOW.indexOf(current);
    if (idx >= 0 && idx < ONBOARDING_FLOW.length - 1) {
      navigate(ONBOARDING_FLOW[idx + 1], 'forward');
    } else if (current === 'auth') {
      navigate('dashboard', 'forward');
    }
  }, [current, ctaReady, busy, navigate]);

  const goBack = useCallback(() => {
    const idx = ONBOARDING_FLOW.indexOf(current);
    if (idx > 0) navigate(ONBOARDING_FLOW[idx - 1], 'back');
  }, [current, navigate]);

  const tabNavigate = useCallback((to: ScreenId) => {
    const toIdx   = MAIN_TABS.indexOf(to);
    const fromIdx = MAIN_TABS.indexOf(current);
    navigate(to, toIdx >= fromIdx ? 'forward' : 'back');
  }, [current, navigate]);

  const Component     = SCREEN_MAP[current];
  const PrevComponent = prev ? SCREEN_MAP[prev] : null;

  const slideIn  = dir === 'forward'
    ? 'lfa-slideInRight 0.32s cubic-bezier(0.25,0.46,0.45,0.94) forwards'
    : 'lfa-slideInLeft  0.32s cubic-bezier(0.25,0.46,0.45,0.94) forwards';
  const slideOut = dir === 'forward'
    ? 'lfa-slideOutLeft  0.32s cubic-bezier(0.25,0.46,0.45,0.94) forwards'
    : 'lfa-slideOutRight 0.32s cubic-bezier(0.25,0.46,0.45,0.94) forwards';

  const onboardingStep = ONBOARDING_FLOW.indexOf(current); // -1 if main app
  const ctaH = CTA_HEIGHT[current] === 'full' ? 844 : 110;

  return (
    <div style={{
      width: 390, height: 844, overflow: 'hidden',
      position: 'relative', background: 'var(--lf-bg)',
      fontFamily: 'var(--lf-font-main)',
    }}>
      <style>{`
        @keyframes lfa-slideInRight  { from { transform:translateX( 100%) } to { transform:translateX(0) } }
        @keyframes lfa-slideInLeft   { from { transform:translateX(-100%) } to { transform:translateX(0) } }
        @keyframes lfa-slideOutLeft  { from { transform:translateX(0) }     to { transform:translateX(-28%) } }
        @keyframes lfa-slideOutRight { from { transform:translateX(0) }     to { transform:translateX( 100%) } }
        @keyframes lfa-bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        @keyframes lfa-dot    { 0%,80%,100%{opacity:.3;transform:scale(.85)} 40%{opacity:1;transform:scale(1)} }
        @keyframes lfa-glow   { 0%,100%{opacity:.5} 50%{opacity:1} }
        @keyframes lfa-hint   {
          0%   { opacity:0; transform:translateY(6px) }
          15%  { opacity:1; transform:translateY(0) }
          80%  { opacity:1; transform:translateY(0) }
          100% { opacity:0; transform:translateY(-4px) }
        }
      `}</style>

      {/* ── PREV SCREEN (sliding out) ── */}
      {PrevComponent && busy && (
        <div style={{
          position:'absolute', inset:0, zIndex:1,
          animation: slideOut, pointerEvents:'none',
        }}>
          <PrevComponent />
        </div>
      )}

      {/* ── CURRENT SCREEN (sliding in) ── */}
      <div style={{
        position:'absolute', inset:0, zIndex:2,
        animation: busy ? slideIn : undefined,
      }}>
        <Component />
      </div>

      {/* ══════════════════════════════════════
          ONBOARDING OVERLAY LAYER
      ══════════════════════════════════════ */}
      {isOnboarding && (
        <div style={{ position:'absolute', inset:0, zIndex:10, pointerEvents:'none' }}>

          {/* Back button intercept (skip on splash & first onboarding) */}
          {current !== 'splash' && current !== 'onboarding' && (
            <div onClick={goBack} style={{
              position:'absolute', top:34, left:0,
              width:88, height:44,
              cursor:'pointer', pointerEvents:'all',
            }} />
          )}

          {/* CTA tap zone */}
          <div
            onClick={advance}
            style={{
              position:'absolute', bottom:0, left:0, right:0,
              height: ctaH,
              cursor: ctaReady ? 'pointer' : 'default',
              pointerEvents:'all',
            }}
          />

          {/* Loading dots overlay (only while CTA locked + not full-screen tap) */}
          {!ctaReady && ctaH < 844 && (
            <div style={{
              position:'absolute', bottom:36, left:20, right:20,
              height:54, borderRadius:20,
              background:'rgba(255,255,255,0.03)',
              border:'1px solid rgba(255,255,255,0.07)',
              display:'flex', alignItems:'center', justifyContent:'center', gap:6,
              pointerEvents:'none',
            }}>
              {[0,1,2].map(i => (
                <div key={i} style={{
                  width:7, height:7, borderRadius:'50%',
                  background:'var(--lf-purple)',
                  animation:`lfa-dot 1.2s ease-in-out ${i*0.18}s infinite`,
                }} />
              ))}
            </div>
          )}

          {/* Step pill (top-center, above the screen's own indicator) */}
          {current !== 'splash' && (
            <div style={{
              position:'absolute', bottom: isOnboarding ? 108 : 20,
              left:'50%', transform:'translateX(-50%)',
              pointerEvents:'none',
            }} />
          )}

          {/* "Tap to continue" hint on splash */}
          {current === 'splash' && ctaReady && showHint && (
            <div style={{
              position:'absolute', bottom:52, left:0, right:0,
              display:'flex', flexDirection:'column', alignItems:'center', gap:8,
              pointerEvents:'none',
              animation:'lfa-hint 2.2s ease-in-out forwards',
            }}>
              <div style={{ display:'flex', gap:5 }}>
                {[0,1,2].map(i => (
                  <div key={i} style={{
                    width:5, height:5, borderRadius:'50%',
                    background:'rgba(255,255,255,0.5)',
                    animation:`lfa-bounce 1s ease-in-out ${i*0.15}s infinite`,
                  }} />
                ))}
              </div>
              <span style={{
                fontSize:11, fontWeight:600, color:'rgba(255,255,255,0.35)',
                letterSpacing:'0.1em', textTransform:'uppercase',
              }}>
                Tap to begin
              </span>
            </div>
          )}
        </div>
      )}

      {/* ══════════════════════════════════════
          MAIN APP — FUNCTIONAL BOTTOM NAV
      ══════════════════════════════════════ */}
      {!isOnboarding && (
        <div style={{
          position:'absolute', bottom:0, left:0, right:0, zIndex:20,
          background:'rgba(8,11,20,0.96)',
          backdropFilter:'blur(24px)',
          WebkitBackdropFilter:'blur(24px)',
          borderTop:'1px solid rgba(255,255,255,0.07)',
          padding:'8px 4px 26px',
          display:'flex', justifyContent:'space-around', alignItems:'flex-start',
        }}>
          {/* Active indicator bar */}
          <div style={{
            position:'absolute', top:0, left:0, right:0, height:2,
            background:'transparent', overflow:'hidden',
          }}>
            <div style={{
              height:'100%', width:`${100/5}%`,
              background:'var(--lf-gradient-blue-purple)',
              borderRadius:'0 0 2px 2px',
              transform:`translateX(${activeTabIdx >= 0 ? activeTabIdx * 100 : 0}%)`,
              transition:'transform 0.28s cubic-bezier(0.34,1.2,0.64,1)',
              boxShadow:'0 2px 8px rgba(59,130,246,0.4)',
            }} />
          </div>

          {TAB_CONFIG.map(({ id, label, Icon }) => {
            const active = current === id;
            return (
              <button
                key={id}
                onClick={() => tabNavigate(id)}
                style={{
                  background:'none', border:'none', cursor:'pointer',
                  display:'flex', flexDirection:'column', alignItems:'center', gap:3,
                  padding:'6px 10px', borderRadius:14, minWidth:64,
                  fontFamily:'var(--lf-font-main)',
                  transition:'transform 0.15s ease',
                }}
              >
                <div style={{
                  width:46, height:28, borderRadius:14,
                  background: active ? 'rgba(59,130,246,0.14)' : 'transparent',
                  display:'flex', alignItems:'center', justifyContent:'center',
                  transition:'all 0.22s ease',
                  boxShadow: active ? '0 0 12px rgba(59,130,246,0.2)' : 'none',
                }}>
                  <Icon
                    size={20}
                    color={active ? '#60A5FA' : '#475569'}
                    strokeWidth={active ? 2.2 : 1.6}
                  />
                </div>
                <span style={{
                  fontSize:9.5, fontWeight: active ? 700 : 500,
                  color: active ? '#60A5FA' : '#475569',
                  letterSpacing:'0.03em', lineHeight:1,
                }}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* ══════════════════════════════════════
          FLOW PROGRESS STRIP (onboarding only)
          Thin colored line at very bottom of screen
      ══════════════════════════════════════ */}
      {isOnboarding && current !== 'splash' && (
        <div style={{
          position:'absolute', bottom:0, left:0, right:0, height:3,
          background:'rgba(255,255,255,0.05)', zIndex:15, pointerEvents:'none',
        }}>
          <div style={{
            height:'100%',
            width:`${((onboardingStep) / (ONBOARDING_FLOW.length - 1)) * 100}%`,
            background:'var(--lf-gradient-blue-purple)',
            transition:'width 0.4s cubic-bezier(0.34,1.2,0.64,1)',
            boxShadow:'0 0 8px rgba(139,92,246,0.5)',
          }} />
        </div>
      )}
    </div>
  );
}
