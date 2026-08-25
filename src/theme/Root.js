import React, { useState, useEffect } from 'react';
import { useLocation } from '@docusaurus/router';

export default function Root({children}) {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // Only trigger on docs pages
    if (location.pathname.startsWith('/docs')) {
      const lastClosed = localStorage.getItem('horizon_donate_modal_closed');
      const now = new Date().getTime();
      
      // If never closed, or closed more than 4 days ago (4 days * 24h * 60m * 60s * 1000ms)
      if (!lastClosed || now - parseInt(lastClosed) > 4 * 24 * 60 * 60 * 1000) {
        // Wait 1.5s after they open the docs before showing it so it's not too jarring
        const timer = setTimeout(() => setShowModal(true), 1500);
        return () => clearTimeout(timer);
      }
    } else {
      setShowModal(false);
    }
  }, [location.pathname]);

  const handleClose = () => {
    // Save current timestamp to local storage
    localStorage.setItem('horizon_donate_modal_closed', new Date().getTime().toString());
    setShowModal(false);
  };

  return (
    <>
      {children}
      {showModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'modalOverlayFade 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards'
        }} onClick={handleClose}>
          <div className="custom-glass-modal" style={{ maxWidth: '600px' }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={handleClose}
              style={{
                position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'transparent',
                border: 'none', color: '#a1a1aa', cursor: 'pointer', padding: '0.5rem',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                borderRadius: '50%', transition: 'all 0.2s', zIndex: 50
              }}
              onMouseOver={e => {e.currentTarget.style.color = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}}
              onMouseOut={e => {e.currentTarget.style.color = '#a1a1aa'; e.currentTarget.style.background = 'transparent'}}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>

            <div style={{ textAlign: 'center', marginBottom: '2.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '100px', background: 'rgba(88, 101, 242, 0.4)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />
              
              <div style={{ fontSize: '3rem', marginBottom: '1rem', position: 'relative', zIndex: 1 }}>💖</div>
              
              <h3 style={{ position: 'relative', zIndex: 1, color: '#ffffff', marginTop: 0, fontSize: '2.2rem', fontWeight: 900, letterSpacing: '-0.03em' }}>
                Enjoying Horizon?
              </h3>
              <p style={{ position: 'relative', zIndex: 1, color: '#949ba4', fontSize: '1.1rem', margin: '1rem auto 0', lineHeight: 1.6 }}>
                Help us keep running free! High-performance infrastructure costs real money, and your support allows us to continue providing the absolute best astronomy data to the community.
              </p>
            </div>
            
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a 
                href="https://www.patreon.com/profile/creators?u=109763047" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleClose}
                style={{
                  background: '#5865F2', color: '#fff', textDecoration: 'none',
                  padding: '1rem 2rem', borderRadius: '12px', fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: '8px',
                  boxShadow: '0 4px 15px rgba(88, 101, 242, 0.4)',
                  transition: 'transform 0.2s',
                  fontSize: '1.05rem'
                }}
                onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M15.386.524c-4.764 0-8.64 3.876-8.64 8.64 0 4.75 3.876 8.613 8.64 8.613 4.75 0 8.614-3.864 8.614-8.613C24 4.4 20.136.524 15.386.524M.003 23.537h4.22V.524H.003"/></svg>
                Support on Patreon
              </a>
              <a 
                href="https://top.gg/bot/1183177251316047983/vote" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleClose}
                style={{
                  background: 'rgba(255,255,255,0.05)', color: '#fff', textDecoration: 'none',
                  padding: '1rem 2rem', borderRadius: '12px', fontWeight: 700,
                  border: '1px solid rgba(255,255,255,0.1)',
                  display: 'flex', alignItems: 'center', gap: '8px',
                  transition: 'background 0.2s',
                  fontSize: '1.05rem'
                }}
                onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
              >
                Free Support (Vote)
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
