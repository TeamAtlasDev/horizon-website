import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

const STORAGE_KEY = 'horizon_announcement_dismissed_v1';
const EXPIRY_MS = 2 * 24 * 60 * 60 * 1000; // 2 days

function shouldShow() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return true;
    return Date.now() - parseInt(stored, 10) >= EXPIRY_MS;
  } catch (e) {
    return true;
  }
}

function isMobile() {
  return window.innerWidth < 768;
}

function createBar() {
  if (!shouldShow()) return;
  if (document.getElementById('horizon-announcement')) return;

  const mobile = isMobile();

  const bar = document.createElement('div');
  bar.id = 'horizon-announcement';
  Object.assign(bar.style, {
    position: 'fixed',
    top: '80px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '9998',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: mobile ? '0.3rem 0.75rem 0.3rem 0.9rem' : '0.35rem 0.9rem 0.35rem 1.1rem',
    borderRadius: '999px',
    background: 'rgba(22, 23, 29, 0.88)',
    backdropFilter: 'blur(20px)',
    webkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(168, 85, 247, 0.4)',
    boxShadow: '0 0 20px rgba(168, 85, 247, 0.14)',
    fontFamily: "'Orbitron', sans-serif",
    fontSize: mobile ? '0.55rem' : '0.66rem',
    fontWeight: '500',
    letterSpacing: '0.03em',
    color: '#fff',
    maxWidth: mobile ? '88vw' : 'none',
    whiteSpace: mobile ? 'normal' : 'nowrap',
    textAlign: mobile ? 'center' : 'left',
    userSelect: 'none',
    boxSizing: 'border-box',
  });

  const text = document.createElement('span');
  text.textContent = mobile
    ? 'Features shown are from the Rewrite update — mid-September.'
    : 'Features shown are from the Rewrite update — available mid-September.';
  text.style.flex = '1';

  const btn = document.createElement('button');
  btn.textContent = '×';
  btn.setAttribute('aria-label', 'Close announcement');
  Object.assign(btn.style, {
    background: 'none',
    border: 'none',
    color: 'rgba(255,255,255,0.55)',
    fontSize: '1.1rem',
    lineHeight: '1',
    cursor: 'pointer',
    padding: '0',
    flexShrink: '0',
    fontFamily: 'sans-serif',
  });
  btn.addEventListener('mouseover', () => { btn.style.color = '#fff'; });
  btn.addEventListener('mouseout', () => { btn.style.color = 'rgba(255,255,255,0.55)'; });
  btn.addEventListener('click', () => {
    bar.remove();
    try { localStorage.setItem(STORAGE_KEY, String(Date.now())); } catch (e) {}
  });

  bar.appendChild(text);
  bar.appendChild(btn);
  document.body.appendChild(bar);

  // Update on resize
  window.addEventListener('resize', () => {
    const m = isMobile();
    bar.style.fontSize = m ? '0.55rem' : '0.66rem';
    bar.style.maxWidth = m ? '88vw' : 'none';
    bar.style.whiteSpace = m ? 'normal' : 'nowrap';
    bar.style.padding = m ? '0.3rem 0.75rem 0.3rem 0.9rem' : '0.35rem 0.9rem 0.35rem 1.1rem';
    text.textContent = m
      ? 'Features shown are from the Rewrite update — mid-September.'
      : 'Features shown are from the Rewrite update — available mid-September.';
  }, { passive: true });
}

if (ExecutionEnvironment.canUseDOM) {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', createBar);
  } else {
    createBar();
  }
}

export function onRouteDidUpdate() {
  if (ExecutionEnvironment.canUseDOM) {
    if (!document.getElementById('horizon-announcement')) {
      createBar();
    }
  }
}
