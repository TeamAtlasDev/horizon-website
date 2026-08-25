import React, { useMemo } from 'react';
import Layout from '@theme/Layout';
import { CallToAction } from '@site/src/components/HomepageFeatures';

import Link from '@docusaurus/Link';
import clsx from 'clsx';
import styles from './automations.module.css';
import indexStyles from '../index.module.css'; // Borrowing the space background CSS

// Re-using the minimal space background from the homepage
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

function InteractiveAISummary() {
  const [stage, setStage] = React.useState(0);
  
  React.useEffect(() => {
    const interval = setInterval(() => {
      setStage(s => (s + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ background: '#313338', borderRadius: '8px', padding: '16px', width: '100%', maxWidth: '450px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)', fontFamily: "'gg sans', 'Noto Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif" }}>

       <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
         <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#5865F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>H</div>
         <div style={{ flex: 1 }}>
           <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
             <span style={{ color: '#F2F3F5', fontWeight: '500' }}>Horizon</span>
             <span style={{ background: '#5865F2', color: '#fff', fontSize: '10px', padding: '2px 4px', borderRadius: '4px' }}>APP</span>
           </div>
           <div style={{ color: '#DBDEE1', fontSize: '14px', marginTop: '4px', background: '#2B2D31', padding: '12px', borderRadius: '4px', borderLeft: '4px solid #5865F2' }}>
             <div style={{ fontWeight: 'bold', color: '#fff', marginBottom: '8px' }}>🚀 Upcoming Launch: Falcon 9 Block 5</div>
             <p style={{ margin: 0, fontSize: '13px' }}>SpaceX is targeting Thursday, August 28 for a Falcon 9 launch of 21 Starlink satellites to low-Earth orbit from Space Launch Complex 40 (SLC-40) at Cape Canaveral Space Force Station in Florida. This mission will...</p>
           </div>
           
           <div style={{ marginTop: '8px' }}>
             <button style={{ 
               background: stage > 0 ? '#4752C4' : '#5865F2', 
               color: '#fff', 
               border: 'none', 
               padding: '6px 12px', 
               borderRadius: '4px', 
               cursor: 'pointer', 
               display: 'inline-flex', 
               alignItems: 'center', 
               gap: '6px',
               fontSize: '14px',
               fontWeight: '500',
               transition: 'background 0.2s'
             }}>
               <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
               AI Summary
             </button>
           </div>
         </div>
       </div>


       {stage > 0 && (
         <div style={{ display: 'flex', gap: '16px', marginTop: '16px', position: 'relative' }}>
           <div style={{ position: 'absolute', top: '-16px', left: '18px', width: '2px', height: '24px', background: '#4E5058' }}></div>
           <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#5865F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>H</div>
           <div style={{ flex: 1 }}>
             <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}>
               <span style={{ color: '#F2F3F5', fontWeight: '500' }}>Horizon AI</span>
               <span style={{ background: '#5865F2', color: '#fff', fontSize: '10px', padding: '2px 4px', borderRadius: '4px' }}>APP</span>
             </div>
             
             {stage === 1 ? (
               <div style={{ color: '#DBDEE1', fontSize: '14px', marginTop: '4px', display: 'flex', gap: '4px', alignItems: 'center', height: '24px' }}>
                 <div style={{ width: '8px', height: '8px', background: '#A855F7', borderRadius: '50%', animation: 'pulse 1s infinite' }}></div>
                 <div style={{ width: '8px', height: '8px', background: '#A855F7', borderRadius: '50%', animation: 'pulse 1s infinite 0.2s' }}></div>
                 <div style={{ width: '8px', height: '8px', background: '#A855F7', borderRadius: '50%', animation: 'pulse 1s infinite 0.4s' }}></div>
               </div>
             ) : (
               <div className={styles.animateSlideIn} style={{ color: '#DBDEE1', fontSize: '14px', marginTop: '4px', background: '#2B2D31', padding: '12px', borderRadius: '4px', borderLeft: '4px solid #A855F7' }}>
                 <div style={{ fontWeight: 'bold', color: '#fff', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                   <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                   Summary
                 </div>
                 <ul style={{ margin: 0, paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                   <li><strong>Falcon 9</strong> launching 21 Starlink satellites.</li>
                   <li>Target date: <strong>August 28</strong>.</li>
                   <li>Location: <strong>SLC-40, Cape Canaveral</strong>.</li>
                 </ul>
               </div>
             )}
           </div>
         </div>
       )}
    </div>
  );
}

export default function Automations() {
  return (
    <Layout
      title="Automations"
      description="Deliver real-time space news, launch alerts, and astronomy events directly to your Discord server."
    >
      <main className={styles.automationsPage}>

        <header className={styles.heroSection}>
          <SpaceBackground />
          <div className={styles.heroGrid} />
          <div className={styles.heroGlow} />
          <div className={clsx("container", styles.heroContainer)}>
            
            <h1 className={styles.heroTitle}>
              Automated Space <span className={styles.textGradient}>Notifications.</span>
            </h1>
            <p className={styles.heroSubtitle}>
              Horizon's event-driven automation system delivers real-time space news, rocket launches, and celestial events directly into your Discord server.
            </p>
          </div>
        </header>


        <section className={styles.modulesSection}>
          <div className={clsx("container", styles.modulesContainer)}>
            <div className={styles.modulesSidebar}>
              <FadeIn><h2 className={styles.sectionTitleLeft}>Seven Specialized Modules</h2></FadeIn>
              <FadeIn delay={0.1}><p className={styles.sectionDescLeft}>Customize exactly what space content your community receives.</p></FadeIn>
            </div>
            <div className={styles.stackedGrid}>
              <div className={styles.stackedCard} style={{ '--card-index': 1 }}>
                <h3>
                  <div style={{ color: '#5865F2', display: 'flex' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                  </div>
                  APOD
                </h3>
                <p>NASA's Astronomy Picture of the Day, posted daily with high-res imagery.</p>
              </div>
              <div className={styles.stackedCard} style={{ '--card-index': 2 }}>
                <h3>
                  <div style={{ color: '#a855f7', display: 'flex' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                  </div>
                  Articles
                </h3>
                <p>Breaking spaceflight news and articles from top aerospace outlets.</p>
              </div>
              <div className={styles.stackedCard} style={{ '--card-index': 3 }}>
                <h3>
                  <div style={{ color: '#ec4899', display: 'flex' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                  </div>
                  Blogs
                </h3>
                <p>In-depth community blogs and opinion pieces about the cosmos.</p>
              </div>
              <div className={styles.stackedCard} style={{ '--card-index': 4 }}>
                <h3>
                  <div style={{ color: '#3b82f6', display: 'flex' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
                  </div>
                  Reports
                </h3>
                <p>Daily situational reports and updates straight from the ISS and NASA.</p>
              </div>
              <div className={styles.stackedCard} style={{ '--card-index': 5 }}>
                <h3>
                  <div style={{ color: '#f59e0b', display: 'flex' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
                  </div>
                  Space Weather
                </h3>
                <p>Critical alerts for solar flares, geomagnetic storms, and planetary weather.</p>
              </div>
              <div className={styles.stackedCard} style={{ '--card-index': 6 }}>
                <h3>
                  <div style={{ color: '#ef4444', display: 'flex' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                  </div>
                  Next Launch
                </h3>
                <p>Never miss a liftoff. Get live T-minus alerts for upcoming rocket launches.</p>
              </div>
              <div className={styles.stackedCard} style={{ '--card-index': 7 }}>
                <h3>
                  <div style={{ color: '#10b981', display: 'flex' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                  </div>
                  Next Event
                </h3>
                <p>Notifications for eclipses, spacewalks, and live-streamed astronomical events.</p>
              </div>
            </div>
          </div>
        </section>

        


        <section className={styles.featuresSection}>
          <div className="container">
            <FadeIn>
              <h2 className={styles.sectionTitle} style={{ marginBottom: '4rem' }}>Beyond the Basics</h2>
            </FadeIn>
            
            <div className={styles.bentoGrid}>
              

              <FadeIn delay={0.2} className={clsx(styles.bentoCard, styles.bentoCol2, styles.bentoAIGlow)}>
                <div className={styles.bentoHeader}>
                  <div className={styles.bentoIconWrapper}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
                  </div>
                  <h3>Horizon AI Integration</h3>
                  <p>
                    Nobody likes reading massive walls of text inside Discord. That's why Horizon Automations seamlessly integrate with our LLMs. Every long news article or ISS report includes an interactive <strong>AI Summary</strong> button directly on the alert. With one click, the bot instantly generates a bite-sized, bulleted summary for you to read without ever leaving the app.
                  </p>
                </div>
              </FadeIn>


              <FadeIn delay={0.3} className={styles.bentoCard}>
                <div className={styles.bentoHeader}>
                  <div className={styles.bentoIconWrapper}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#b5bac1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
                  </div>
                  <h3>Total Control</h3>
                  <p>Server admins have granular control over every aspect of delivery.</p>
                </div>
                <ul className={styles.bentoList}>
                  <li className={styles.bentoListItem}>
                    <div className={styles.bentoListIcon}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div className={styles.bentoListText}>
                      <strong>Route Channels</strong>
                      Send NASA pictures to <code>#general</code> and rocket launches to <code>#space-news</code>.
                    </div>
                  </li>
                  <li className={styles.bentoListItem}>
                    <div className={styles.bentoListIcon}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div className={styles.bentoListText}>
                      <strong>Role Pinging</strong>
                      Automatically <code>@mention</code> specific roles like <code>@SpaceNerds</code>.
                    </div>
                  </li>
                </ul>
              </FadeIn>


              <FadeIn delay={0.4} className={styles.bentoCard}>
                <div className={styles.bentoHeader}>
                  <div className={styles.bentoIconWrapper}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#b5bac1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 17l6-6-6-6M12 19h8"></path></svg>
                  </div>
                  <h3>Dynamic Messaging</h3>
                  <p>Personalize your delivery with powerful variable injection.</p>
                </div>
                <ul className={styles.bentoList}>
                  <li className={styles.bentoListItem}>
                    <div className={styles.bentoListIcon}><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div>
                    <div className={styles.bentoListText}>
                      <strong>Custom Prefixes</strong>
                      Inject variables like <code>{'{title}'}</code> or <code>{'{date}'}</code> directly above embeds.
                    </div>
                  </li>
                </ul>
              </FadeIn>


              <FadeIn delay={0.5} className={clsx(styles.bentoCard, styles.bentoCol2)}>
                <div className={styles.bentoHeader}>
                  <div className={styles.bentoIconWrapper}>
                    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#b5bac1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                  </div>
                  <h3>Global Localization</h3>
                  <p>Horizon natively translates all automation data into multiple languages. Provide your community with space news in French, German, Greek, Spanish, and more.</p>
                </div>
              </FadeIn>

            </div>
          </div>
        </section>


        <section className={styles.apiHeroSection}>
          
          <div className={styles.apiGridBackground}></div>
          <div className={styles.apiGlowCore}></div>
          <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 10 }}>
            <div className={styles.cinematicQuoteOnly}>
              <h3>"Automating the cosmos,<br/>one server at a time."</h3>
              <p>— The Horizon Team</p>
            </div>
          </div>
        </section>


        <section style={{ marginBottom: '4rem' }}>
          <div className="container" style={{ maxWidth: '1200px' }}>
             <FadeIn delay={0.4}>
                <CallToAction />
             </FadeIn>
          </div>
        </section>
      </main>
    </Layout>
  );
}
