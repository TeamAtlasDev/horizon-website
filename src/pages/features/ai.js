import React, { useMemo } from 'react';
import Layout from '@theme/Layout';
import { CallToAction } from '@site/src/components/HomepageFeatures';

import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './ai.module.css';
import indexStyles from '../index.module.css'; 

function SpaceBackground() {
  const stars = useMemo(() => {
    return Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: `${Math.random() * 2 + 1}px`,
      duration: `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * 5}s`,
      opacity: Math.random() * 0.5 + 0.2,
    }));
  }, []);

  return (
    <div className={indexStyles.starsContainer}>
      {stars.map(star => (
        <div
          key={star.id}
          className={indexStyles.star}
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            '--duration': star.duration,
            '--delay': star.delay,
            '--max-opacity': star.opacity,
          }}
        />
      ))}
      <div className={indexStyles.shootingStar} />
      <div className={indexStyles.eclipseGlow} />
    </div>
  );
}

function FadeIn({ children, delay = 0, className = '' }) {
  const [isVisible, setIsVisible] = React.useState(false);
  const ref = React.useRef();

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={ref} 
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
        transition: `all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

function ScrollHero() {
  const [scrollY, setScrollY] = React.useState(0);
  const words = ["aerospace", "communities", "exploration", "you"];

  React.useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const progress = typeof window !== "undefined" ? Math.min(Math.max(scrollY / (window.innerHeight * 1.5), 0), 1) : 0;
  
  const wordIndex = Math.min(Math.floor(progress * words.length), words.length - 1);

  return (
    <div className={styles.scrollTrack}>
      <div className={styles.stickyHero}>
        <div className={styles.heroGlowBg}></div>
        <SpaceBackground />
        <div className={styles.heroGrid}></div>
        
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div className={styles.heroSplitLayout}>
            {/* Left Side: Text */}
            <div className={styles.heroLeft}>
              <h1 className={styles.heroTitle} style={{ marginBottom: '1.5rem' }}>
                Meet the ultimate AI for
                <br />
                <span className={styles.scrollWordWrapper} style={{ display: 'inline-block', position: 'relative', width: '100%', minWidth: '300px', height: '1.2em', verticalAlign: 'bottom', textAlign: 'inherit' }}>
                  {words.map((word, i) => (
                    <span 
                      key={word} 
                      className={clsx(styles.scrollWord, {
                        [styles.scrollWordActive]: i === wordIndex,
                        [styles.scrollWordPast]: i < wordIndex
                      })}
                      style={{
                        position: 'absolute',
                        left: 0,
                        right: 0,
                        textAlign: 'inherit',
                        opacity: i === wordIndex ? 1 : 0,
                        transform: i === wordIndex ? 'translateY(0)' : (i < wordIndex ? 'translateY(-20px)' : 'translateY(20px)'),
                        transition: 'all 0.4s cubic-bezier(0.2, 0.8, 0.2, 1)',
                        color: '#a855f7',
                        fontWeight: '700',
                        pointerEvents: i === wordIndex ? 'auto' : 'none',
                        visibility: i === wordIndex ? 'visible' : 'hidden'
                      }}
                    >
                      {word}.
                    </span>
                  ))}
                </span>
              </h1>
              <div className={styles.heroSubtitle} style={{ fontSize: "1.2rem", color: "#a1a1aa", maxWidth: '500px', margin: 0 }}>
                The Cosmos, Decoded. Choose your path to the stars.
                <div className={styles.privacyBadge}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4" ></path></svg> 100% Privacy Guaranteed.
                </div>
              </div>
            </div>
            
            {/* Right Side: Visual Element */}
            <div className={styles.heroRight}>
              <FadeIn delay={0.2}>
                <div className={styles.glowingOrbWrapper}>
                  <div className={styles.glowingOrb}></div>
                  <div className={styles.glowingOrbCore}></div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CapabilitiesSection() {
  return (
    <section className={styles.capabilitiesSection}>
      <div className="container">
        
        <div className={styles.premiumCapabilities}>
          <div className={styles.premiumRow}>
            <div className={styles.premiumText}>
              <FadeIn delay={0.1}>
                <h2 className={styles.premiumTitle}>Deep Scientific Reasoning.</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className={styles.premiumDesc}>
                  Horizon AI V2 doesn't just parrot facts. It acts as your digital astrophysicist, silently analyzing data on orbital mechanics, quantum physics, and stellar phenomena before crafting a flawless, captivating narrative for your community.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.3} className={styles.premiumVisual}>
              <div className={styles.ringsContainer}>
                <div className={styles.ring1}></div>
                <div className={styles.ring2}></div>
                <div className={styles.ring3}></div>
              </div>
            </FadeIn>
          </div>

          <div className={clsx(styles.premiumRow, styles.premiumRowReverse)}>
            <div className={styles.premiumText}>
              <FadeIn delay={0.1}>
                <h2 className={styles.premiumTitle}>Autonomous Web Search.</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className={styles.premiumDesc}>
                  Space moves fast. If you ask about a breaking launch or a sudden solar flare, Horizon V2 breaks out of its training data and autonomously navigates the live internet, scanning top articles in milliseconds to bring you cited, up-to-the-second answers.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.3} className={styles.premiumVisual}>
              <div className={styles.nodeContainer}>
                <div className={styles.pulseWave} style={{ animationDelay: '0s' }}></div>
                <div className={styles.pulseWave} style={{ animationDelay: '1s' }}></div>
                <div className={styles.pulseWave} style={{ animationDelay: '2s' }}></div>
                <div className={styles.coreNode}></div>
              </div>
            </FadeIn>
          </div>

          <div className={styles.premiumRow}>
            <div className={styles.premiumText}>
              <FadeIn delay={0.1}>
                <h2 className={styles.premiumTitle}>Horizon Lens.</h2>
              </FadeIn>
              <FadeIn delay={0.2}>
                <p className={styles.premiumDesc}>
                  The ultimate visual AI. Upload any image, and Lens V2 will perform combinatorial analysis, matching what it sees against Horizon's Live Database to identify rockets, celestial bodies, or equipment, and instantly suggesting smart follow-up questions.
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.3} className={styles.premiumVisual}>
              <div className={styles.lensContainer}>
                <div className={styles.lensScanner}></div>
                <div className={styles.lensCore}></div>
              </div>
            </FadeIn>
          </div>
        </div>

      </div>
    </section>
  );
}

export default function AIPlansPage() {
  return (
    <Layout
      title="Meet Horizon AI"
      description="Horizon's flagship artificial intelligence features.">
      
      <main className={styles.automationsPage}>
        <ScrollHero />
        
        <CapabilitiesSection />

        <section className={styles.featuresSection}>
          <div className="container">
            <div style={{ maxWidth: "900px", margin: "4rem auto 2rem auto", textAlign: "center", position: "relative" }}>
              <FadeIn>
                <style>{`
                  @keyframes slideRight {
                    0%, 100% { transform: translateX(0); }
                    50% { transform: translateX(6px); }
                  }
                  @keyframes cardFloatIn {
                    0% { opacity: 0; transform: translateY(20px); }
                    100% { opacity: 1; transform: translateY(0); }
                  }
                  .featureCard {
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.05);
                    padding: 1.2rem;
                    border-radius: 16px;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                    animation: cardFloatIn 0.6s cubic-bezier(0.4, 0, 0.2, 1) backwards;
                  }
                  .featureCard:hover {
                    background: rgba(255,255,255,0.05);
                    border-color: rgba(255,255,255,0.15);
                    transform: translateY(-4px);
                    box-shadow: 0 14px 28px -12px rgba(0,0,0,0.5);
                  }
                  .featureIcon {
                    min-width: 44px;
                    height: 44px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                  }
                  .featureCard:hover .featureIcon {
                    transform: scale(1.1);
                  }
                  .featureText {
                    color: #f4f4f5;
                    font-weight: 500;
                    font-size: 1.05rem;
                    line-height: 1.4;
                  }
                `}</style>
                <div style={{ padding: '2rem 1rem' }}>
                  <div style={{ width: '80px', height: '80px', margin: '0 auto 1.5rem auto' }}>
                    <svg width="80" height="80" viewBox="0 0 24 24" fill="url(#discordGradient)">
                      <defs>
                        <linearGradient id="discordGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#5865F2" />
                          <stop offset="100%" stopColor="#a855f7" />
                        </linearGradient>
                      </defs>
                      <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
                    </svg>
                  </div>
                  
                  <h3 style={{ fontSize: '3.5rem', marginBottom: '1.2rem', color: '#fff', fontWeight: 'bold', letterSpacing: '-0.02em' }}>Scale Your Potential</h3>
                  <p style={{ color: '#a1a1aa', fontSize: '1.25rem', lineHeight: 1.6, marginBottom: '3.5rem', maxWidth: '750px', margin: '0 auto 3.5rem auto' }}>
                    Every community is unique. Our dynamic pricing lets you choose the exact AI capacity you need. <strong style={{ color: '#fff' }}>The more credits you choose, the more exclusive features you unlock.</strong>
                  </p>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem', maxWidth: '850px', margin: '0 auto 3.5rem auto', textAlign: 'left' }}>
                    
                    <div className="featureCard" style={{ animationDelay: '0.1s' }}>
                      <div className="featureIcon" style={{ background: 'rgba(88, 101, 242, 0.1)', color: '#5865F2' }}>
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/></svg>
                      </div>
                      <div className="featureText">Horizon Voice<br/>Analysis</div>
                    </div>

                    <div className="featureCard" style={{ animationDelay: '0.2s' }}>
                      <div className="featureIcon" style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                      </div>
                      <div className="featureText">Horizon Document<br/>Analysis</div>
                    </div>

                    <div className="featureCard" style={{ animationDelay: '0.3s' }}>
                      <div className="featureIcon" style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7' }}>
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" x2="22" y1="12" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                      </div>
                      <div className="featureText">Autonomous Web<br/>Search</div>
                    </div>

                    <div className="featureCard" style={{ animationDelay: '0.4s' }}>
                      <div className="featureIcon" style={{ background: 'rgba(234, 179, 8, 0.1)', color: '#eab308' }}>
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
                      </div>
                      <div className="featureText">Zero-Lag Priority<br/>Routing</div>
                    </div>

                    <div className="featureCard" style={{ animationDelay: '0.5s' }}>
                      <div className="featureIcon" style={{ background: 'rgba(236, 72, 153, 0.1)', color: '#ec4899' }}>
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
                      </div>
                      <div className="featureText">Horizon Lens<br/>Vision System</div>
                    </div>

                    <div className="featureCard" style={{ animationDelay: '0.6s' }}>
                      <div className="featureIcon" style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8' }}>
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
                      </div>
                      <div className="featureText">Live Horizon<br/>Database</div>
                    </div>

                  </div>
                  
                  <a href="https://plans.horizonbot.xyz" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'linear-gradient(90deg, #5865F2, #8b5cf6)', color: '#fff', padding: '1.2rem 3rem', borderRadius: '12px', fontWeight: 'bold', textDecoration: 'none', transition: 'all 0.2s', fontSize: '1.3rem', boxShadow: '0 4px 25px 0 rgba(88, 101, 242, 0.4)' }}>
                    Login via Discord
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'slideRight 1.5s ease-in-out infinite' }}>
                      <path d="M5 12h14"></path><path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                  
                  <p style={{ color: '#71717a', fontSize: '0.9rem', marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.4rem' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                    Secured with Polar.sh
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Cinematic Quote */}
        <section className={styles.apiHeroSection}>
          <div className={styles.apiGridBackground}></div>
          <div className={styles.apiGlowCore}></div>
          <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 10 }}>
            <div className={styles.cinematicQuoteOnly}>
              <h3>"The universe is constantly expanding.<br/>It's time your community did, too."</h3>
              <p>— The Horizon Team</p>
            </div>
          </div>
        </section>

        <section style={{ marginBottom: "4rem" }}>
          <div className="container" style={{ maxWidth: "1200px" }}>
             <FadeIn delay={0.4}>
                <CallToAction />
             </FadeIn>
          </div>
        </section>
      </main>
    </Layout>
  );
}
