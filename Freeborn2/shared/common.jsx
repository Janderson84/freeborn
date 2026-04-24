/* Shared components for the Freeborn funnel prototype */

const { useState, useEffect, useRef } = React;

/* ---------- countdown hook ---------- */
function useCountdown(initialSeconds = 15 * 60, storageKey = 'fb_cd') {
  const [remaining, setRemaining] = useState(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const { endAt } = JSON.parse(saved);
        const left = Math.max(0, Math.floor((endAt - Date.now()) / 1000));
        if (left > 0) return left;
      }
    } catch (e) {}
    const endAt = Date.now() + initialSeconds * 1000;
    try { localStorage.setItem(storageKey, JSON.stringify({ endAt })); } catch (e) {}
    return initialSeconds;
  });

  useEffect(() => {
    const t = setInterval(() => setRemaining(r => (r > 0 ? r - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, []);

  const m = String(Math.floor(remaining / 60)).padStart(2, '0');
  const s = String(remaining % 60).padStart(2, '0');
  return { remaining, mm: m, ss: s };
}

/* ---------- stars ---------- */
function Stars({ color = '#b08525', size = 14 }) {
  return (
    <span aria-hidden="true" style={{ color, letterSpacing: '4px', fontSize: size, lineHeight: 1 }}>
      ★★★★★
    </span>
  );
}

/* ---------- placeholder image ---------- */
function PH({ label, h = 160, w, dark = false, style = {} }) {
  return (
    <div
      className={'ph ' + (dark ? 'dark' : '')}
      style={{ height: h, width: w || '100%', ...style }}
    >
      {label}
    </div>
  );
}

/* ---------- nav across funnel steps ---------- */
function StepNav({ theme = 'a', step, total = 4 }) {
  const isA = theme === 'a';
  const base = isA ? '#0f2033' : '#1a1410';
  const accent = isA ? '#a4182a' : '#8a1420';
  const dots = Array.from({ length: total });
  return (
    <div style={{
      display: 'flex', gap: 8, alignItems: 'center', justifyContent: 'center',
      padding: '10px 16px',
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
      fontSize: 10, letterSpacing: '0.18em', textTransform: 'uppercase',
      color: base, opacity: 0.75
    }}>
      <span>Step {step} of {total}</span>
      <span style={{ display: 'inline-flex', gap: 4, marginLeft: 8 }}>
        {dots.map((_, i) => (
          <span key={i} style={{
            width: 22, height: 3,
            background: i < step ? accent : 'rgba(0,0,0,0.15)'
          }} />
        ))}
      </span>
    </div>
  );
}

/* ---------- bottom / footer ---------- */
function Footer({ theme = 'a' }) {
  const isA = theme === 'a';
  const ink = isA ? '#2a2e3d' : '#3a2f26';
  const paper = isA ? '#ece3cf' : '#f2ecdd';
  return (
    <footer style={{
      background: paper, color: ink,
      padding: '36px 24px 48px',
      fontFamily: '"Libre Caslon Text", Georgia, serif',
      fontSize: 13, lineHeight: 1.6, textAlign: 'center'
    }}>
      <div style={{
        fontFamily: 'Oswald, Impact, sans-serif',
        fontSize: 20, letterSpacing: '0.3em', marginBottom: 8
      }}>FREEBORN</div>
      <div style={{ opacity: 0.75, fontSize: 12, maxWidth: 680, margin: '0 auto 14px' }}>
        Results mentioned are not typical. Individual results will vary based on your specific situation,
        effort applied, and local energy rates. This product is for educational purposes and does not
        constitute financial or legal advice.
      </div>
      <div style={{
        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
        fontSize: 11, letterSpacing: '0.1em', opacity: 0.6
      }}>
        © 2026 FREEBORN · PRIVACY · TERMS · CONTACT · EARNINGS DISCLAIMER
      </div>
    </footer>
  );
}

/* ---------- Tweaks host protocol ---------- */
function useTweaks(defaults) {
  const [values, setValues] = useState(defaults);
  const [open, setOpen] = useState(false);
  const [available, setAvailable] = useState(false);

  useEffect(() => {
    function onMsg(e) {
      if (!e.data || typeof e.data !== 'object') return;
      if (e.data.type === '__activate_edit_mode') setOpen(true);
      if (e.data.type === '__deactivate_edit_mode') setOpen(false);
    }
    window.addEventListener('message', onMsg);
    setAvailable(true);
    try { window.parent.postMessage({ type: '__edit_mode_available' }, '*'); } catch (e) {}
    return () => window.removeEventListener('message', onMsg);
  }, []);

  function update(patch) {
    setValues(v => ({ ...v, ...patch }));
    try {
      window.parent.postMessage({
        type: '__edit_mode_set_keys',
        edits: patch
      }, '*');
    } catch (e) {}
  }

  return { values, update, open, available };
}

Object.assign(window, { useCountdown, Stars, PH, StepNav, Footer, useTweaks });
