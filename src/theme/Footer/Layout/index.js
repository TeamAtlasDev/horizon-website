import React, { useState } from 'react';
import clsx from 'clsx';
import {ThemeClassNames} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function FooterLayout({style, links, logo, copyright}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const contributors = [
    { name: 'Fyber', role: 'Head Developer', image: useBaseUrl('/img/developer.png') },
    { name: 'Alexander', role: 'S. Administrator', image: useBaseUrl('/img/alex.png') },
    { name: 'Comfy', role: 'Graphics Designer', image: useBaseUrl('/img/curious.png') },
    { name: 'JohnPapath', role: 'Contributor', image: useBaseUrl('/img/john.png') },
    { name: 'Michael', role: 'Contributor', image: useBaseUrl('/img/michael.png') },
    { name: 'Giorgos', role: 'Contributor', image: useBaseUrl('/img/giorgos.gif') },
  ];

  return (
    <>
      <footer
        className={clsx(ThemeClassNames.layout.footer.container, 'footer', {
          'footer--dark': style === 'dark',
        })}>
        <div className="footer-glow-overlay" />
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
            <a href="https://teamatlas.dev" target="_blank" rel="noopener noreferrer" className="footer-atlas-credit">
              Developed by <img src="/img/atlas.png" alt="Atlas" className="footer-atlas-logo" /> Atlas Team
            </a>
          </div>

          <div className="custom-footer-links-only" style={{width: '100%', marginBottom: '4rem'}}>
            {links}
          </div>
          
          <div className="footer-bottom-bar">
            <div 
              className="footer-contributors" 
              onClick={() => setIsModalOpen(true)}
              style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', transition: 'transform 0.2s' }}
              onMouseOver={e => e.currentTarget.style.transform = 'scale(1.02)'}
              onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
            >
              <div style={{ display: 'flex' }}>
                {contributors.slice(0, 4).map((c, i) => (
                  <img 
                    key={c.name}
                    src={c.image} 
                    style={{ 
                      width: 32, height: 32, borderRadius: '50%', 
                      border: '2px solid #101114', 
                      marginLeft: i > 0 ? '-12px' : '0',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.3)',
                      backgroundColor: '#1a1b23'
                    }} 
                    alt={c.name} 
                  />
                ))}
              </div>
              <span style={{ color: '#a1a1aa', fontSize: '0.95rem', fontWeight: 500, transition: 'color 0.2s' }} onMouseOver={e => e.currentTarget.style.color = '#fff'} onMouseOut={e => e.currentTarget.style.color = '#a1a1aa'}>
                View Contributors
              </span>
            </div>
            <div className="footer-copyright">
              {copyright || "Copyright © 2026 Horizon Bot, Inc."}
            </div>
          </div>
        </div>
      </footer>

      {isModalOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          animation: 'modalOverlayFade 0.4s cubic-bezier(0.2, 0.8, 0.2, 1) forwards'
        }} onClick={() => setIsModalOpen(false)}>
          <div className="custom-glass-modal" style={{ maxWidth: '750px' }} onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setIsModalOpen(false)}
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

            <div style={{ textAlign: 'center', marginBottom: '3.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-50%', left: '50%', transform: 'translateX(-50%)', width: '200px', height: '100px', background: 'rgba(88, 101, 242, 0.4)', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none' }} />
              <h3 style={{ position: 'relative', zIndex: 1, color: '#ffffff', marginTop: 0, fontSize: '2.4rem', fontWeight: 900, letterSpacing: '-0.03em' }}>
                Key Contributors
              </h3>
              <p style={{ position: 'relative', zIndex: 1, color: '#949ba4', fontSize: '1.1rem', margin: '0 auto', maxWidth: '520px', lineHeight: 1.6 }}>
                Horizon is brought to life by the incredible dedication of our core team and community contributors.
              </p>
            </div>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
              gap: '1.25rem' 
            }}>
              {contributors.map((c) => {
                const getRoleColor = (role) => {
                  if (role.includes('Head Developer')) return '#f59e0b';
                  if (role.includes('Administrator')) return '#ef4444';
                  if (role.includes('Designer')) return '#ec4899';
                  return '#818cf8'; // default
                };
                const roleColor = getRoleColor(c.role);

                return (
                  <div 
                    key={c.name}
                    className="contributor-card"
                    style={{ 
                      display: 'flex', alignItems: 'center', gap: '1.25rem', padding: '1.25rem', 
                      background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.04)', 
                      borderRadius: '16px', transition: 'all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)', cursor: 'default',
                      position: 'relative', overflow: 'hidden'
                    }}
                    onMouseOver={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                      e.currentTarget.style.transform = 'translateY(-3px)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.3)';
                    }}
                    onMouseOut={e => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.02)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }}
                  >
                    <div style={{ position: 'relative', display: 'flex' }}>
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: roleColor, filter: 'blur(15px)', opacity: 0.2, zIndex: 0 }} />
                      <img src={c.image} alt={c.name} style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', border: `2px solid rgba(255,255,255,0.1)`, zIndex: 1 }} />
                    </div>
                    <div style={{ flex: 1, zIndex: 1 }}>
                      <div style={{ color: '#ffffff', fontWeight: 800, fontSize: '1.15rem', letterSpacing: '-0.01em' }}>{c.name}</div>
                      <div style={{ display: 'inline-block', color: roleColor, fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px', marginTop: '6px', background: 'rgba(0,0,0,0.3)', padding: '2px 8px', borderRadius: '12px', border: `1px solid ${roleColor}33` }}>
                        {c.role}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>
        </div>
      )}
    </>
  );
}