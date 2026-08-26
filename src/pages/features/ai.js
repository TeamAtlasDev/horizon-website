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
            <div className={styles.bentoGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
              
              {/* CORE PLAN */}
              <FadeIn delay={0} className={styles.bentoCard}>
                <div className={styles.planHeader}>
                  <div className={styles.planBadge} style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.2)' }}>Free</div>
                  <h3 style={{ fontSize: '2rem', marginTop: '1rem', color: '#fff' }}>Core Edition</h3>
                  <p style={{ color: '#a1a1aa', fontStyle: 'italic', fontSize: '0.9rem' }}>"Instant Aerospace Knowledge for Everyone."</p>
                  <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>The daily, lightning-fast guide to space. Offers direct access to Horizon's database, covering the basic needs of every server.</p>
                  <a href="https://invite.horizonbot.xyz" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', width: '100%', padding: '0.75rem', background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e', border: '1px solid rgba(34, 197, 94, 0.3)', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s', marginTop: '0.5rem' }}>
                    Start Free Now →
                  </a>
                </div>
                <div className={styles.planFeatures}>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>Horizon AI V1:</strong> Lightning-fast answers (~1.5s) focused on facts (e.g., "What time is the SpaceX launch?").
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>Live Database Access:</strong> Horizon DB with real-time data on upcoming launches, Breaking News, Space Weather, and the ISS crew.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon}>✓</span>
                    <div>
                      <strong>Multilingual & Secure:</strong> Speaks your language fluently and is strictly locked to astrophysics topics.
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* PLUS PLAN */}
              <FadeIn delay={0.15} className={clsx(styles.bentoCard, styles.bentoAIGlow)} style={{ borderColor: 'rgba(88, 101, 242, 0.4)' }}>
                <div className={styles.planHeader}>
                  <div className={styles.planBadge} style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', border: '1px solid rgba(168, 85, 247, 0.2)' }}>Partner Access</div>
                  <h3 style={{ fontSize: '2rem', marginTop: '1rem', color: '#fff' }}>Plus Edition</h3>
                  <p style={{ color: '#a1a1aa', fontStyle: 'italic', fontSize: '0.9rem' }}>"Deep Scientific Reasoning Unleashed."</p>
                  <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>Upgrade your server with advanced memory architecture and visual recognition.</p>
                </div>
                <div className={styles.planFeatures}>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon} style={{color: '#5865F2'}}>✓</span>
                    <div>
                      <strong>Horizon Lens V1:</strong> The simple but powerful "eye" of Horizon. Upload an image and Lens V1 will recognize the rocket, celestial body, or equipment.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon} style={{color: '#5865F2'}}>✓</span>
                    <div>
                      <strong>Smart Memory Compression:</strong> Instead of forgetting, it summarizes past conversations. It always remembers your name, preferences, and history for up to the past 10 messages, and older ones through summarization.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon} style={{color: '#5865F2'}}>✓</span>
                    <div>
                      <strong>Includes Core Features:</strong> Everything included in the Core Edition.
                    </div>
                  </div>
                </div>
              </FadeIn>

              {/* PRO PLAN */}
              <FadeIn delay={0.3} className={styles.bentoCard} style={{ borderColor: 'rgba(168, 85, 247, 0.3)' }}>
                <div className={styles.planHeader}>
                  <div className={styles.planBadge} style={{ background: 'rgba(168, 85, 247, 0.1)', color: '#a855f7', border: '1px solid rgba(168, 85, 247, 0.2)' }}>Partner Access</div>
                  <h3 style={{ fontSize: '2rem', marginTop: '1rem', color: '#fff' }}>Pro Edition</h3>
                  <p style={{ color: '#a1a1aa', fontStyle: 'italic', fontSize: '0.9rem' }}>"The Ultimate Horizon AI Suite."</p>
                  <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>The ultimate package. Combines V2's deep analysis with autonomous internet browsing and advanced visual recognition.</p>
                </div>
                <div className={styles.planFeatures}>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon} style={{color: '#a855f7'}}>✓</span>
                    <div>
                      <strong>Horizon AI V2 (Deep Reasoning):</strong> The V1 upgrade. Silently analyzes data on complex questions to give you flawless answers with a captivating narrative.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon} style={{color: '#a855f7'}}>✓</span>
                    <div>
                      <strong>Horizon Web Search (Autonomous):</strong> If you ask about something breaking, V2 goes out to the internet autonomously, scans top articles, and cites sources.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon} style={{color: '#a855f7'}}>✓</span>
                    <div>
                      <strong>Horizon Lens V2:</strong> Combinatorial Analysis combines image context with the Live Database.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon} style={{color: '#a855f7'}}>✓</span>
                    <div>
                      <strong>Smart Suggestions:</strong> Recognizes extremely complex anomalies and suggests ready, smart questions to continue exploring.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon} style={{color: '#a855f7'}}>✓</span>
                    <div>
                      <strong>Extended Smart Memory:</strong> Up to 5x more memory capacity than the Plus Edition for deeper context retention.
                    </div>
                  </div>
                  <div className={styles.featureItem}>
                    <span className={styles.checkIcon} style={{color: '#a855f7'}}>✓</span>
                    <div>
                      <strong>Includes Plus Features:</strong> Everything included in the Plus Edition.
                    </div>
                  </div>
                </div>
              </FadeIn>


            </div>
            
            {/* Early Access Program Banner */}
            <div style={{ maxWidth: "800px", margin: "6rem auto 0", textAlign: "center", position: "relative" }}>
              <FadeIn>
                <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '3rem', position: 'relative', overflow: 'visible' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '1px', background: 'linear-gradient(90deg, transparent, rgba(168, 85, 247, 0.8), transparent)', boxShadow: '0 0 30px 2px rgba(168, 85, 247, 0.4)' }}></div>
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', color: '#fff' }}>Early Access Program</h3>
                  <p style={{ color: '#a1a1aa', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
                    Horizon AI is actively in beta. Advanced capabilities are currently limited and only available upon request for eligible communities, organizations, and schools.
                  </p>
                  <a href="#" onClick={(e) => { e.preventDefault(); const b = atob("aW5mb0B0ZWFtYXRsYXMuZGV2"); setTimeout(() => { window.location.href = "mailto:" + b + "?subject=Horizon%20AI%20Early%20Access%20Request"; }, Math.floor(Math.random() * 300) + 100); }} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: '#fff', color: '#000', padding: '0.8rem 1.5rem', borderRadius: '8px', fontWeight: '600', textDecoration: 'none', transition: 'all 0.2s', fontSize: '1.05rem' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    Request Access
                  </a>
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
              <h3>"Understanding the universe requires<br/>a mind as vast as the stars."</h3>
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
