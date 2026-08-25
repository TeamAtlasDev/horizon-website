
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const FeatureList = [
  {
    badge: 'NOTIFICATIONS',
    title: 'Automated Space Notifications',
    image: require('@site/static/img/automations.png').default,
    description: (
      <>
        Get notified about upcoming launches, events, and many more. Never miss an astronomical event again!
      </>
    ),
  },
  {
    badge: 'ASTRONOMY',
    title: 'Daily Astronomy Discoveries',
    image: require('@site/static/img/apod.png').default,
    description: (
      <>
        New space pictures, Mars rover snapshots, and more directly on your server. Explore the universe with your community!
      </>
    ),
  },
  {
    badge: 'COMMANDS',
    title: 'Powerful Interactions',
    image: require('@site/static/img/interactions.png').default,
    description: (
      <>
        Interaction commands are here to make your life just a bit easier. Need a fast-forward short response? Give it a try!
      </>
    ),
  },
  {
    badge: 'CUSTOMIZATION',
    title: 'Fully Customizable Experience',
    image: require('@site/static/img/settings.png').default,
    description: (
      <>
        It's not one-size-fits-all. Why not customize your own notifications behavior? Easily configure them on Horizon.
      </>
    ),
  },
];

function FeatureCard({ image, badge, title, description, index }) {
  const stickyTop = `calc(15vh + ${index * 40}px)`;
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  return (
    <>
      <div className={clsx(styles.stackedCard)} style={{ top: stickyTop }}>
        <div className={styles.textBlock}>
          {badge && (
            <div className={styles.featureBadge}>
              <div className={styles.featureBadgeIcon}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="9" x2="15" y2="15"></line></svg>
              </div>
              {badge}
            </div>
          )}
          <Heading as="h3" className={styles.featureTitle}>
            {title}
          </Heading>
          <p className={styles.featureDescription}>{description}</p>
        </div>
        <div className={styles.imageBlock} onClick={() => setIsLightboxOpen(true)}>
          <img loading="lazy" decoding="async" src={image} alt={title} className={styles.featureSvg} width="1500" height="800" />
          <div className={styles.magnifyingGlass}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>
      </div>
      
      {isLightboxOpen && typeof document !== 'undefined' && createPortal(
        <div className={styles.lightboxOverlay} onClick={() => setIsLightboxOpen(false)}>
          <span className={styles.lightboxClose} onClick={() => setIsLightboxOpen(false)}>✕</span>
          <img loading="lazy" decoding="async" src={image} alt={title} className={styles.lightboxImage} onClick={(e) => e.stopPropagation()} />
        </div>,
        document.body
      )}
    </>
  );
}

const TRANSLATIONS = {
  en: {
    titlePrefix: "Powered by ",
    titleHighlight: "Horizon AI",
    desc: "Get instant cosmic summaries, ask complex astronomical questions, and analyze real-time space data with our next-generation intelligence model. Communicate seamlessly in your native language."
  },
  el: {
    titlePrefix: "Με την υποστήριξη του ",
    titleHighlight: "Horizon AI",
    desc: "Λάβετε άμεσες κοσμικές περιλήψεις, κάντε σύνθετες αστρονομικές ερωτήσεις και αναλύστε διαστημικά δεδομένα σε πραγματικό χρόνο με το μοντέλο νοημοσύνης επόμενης γενιάς. Επικοινωνήστε άμεσα στη μητρική σας γλώσσα."
  },
  fr: {
    titlePrefix: "Propulsé par ",
    titleHighlight: "Horizon AI",
    desc: "Obtenez des résumés cosmiques instantanés, posez des questions astronomiques complexes et analysez des données spatiales en temps réel avec notre modèle d'intelligence de nouvelle génération. Communiquez instantanément dans votre langue maternelle."
  },
  de: {
    titlePrefix: "Angetrieben von ",
    titleHighlight: "Horizon AI",
    desc: "Erhalten Sie sofortige kosmische Zusammenfassungen, stellen Sie komplexe astronomische Fragen und analysieren Sie Raumfahrtdaten in Echtzeit mit unserem Intelligenzmodell der nächsten Generation. Kommunizieren Sie sofort in Ihrer Muttersprache."
  }
};

const LANGUAGES = [
  { code: 'en', label: '🇬🇧 English' },
  { code: 'el', label: '🇬🇷 Greek' },
  { code: 'fr', label: '🇫🇷 French' },
  { code: 'de', label: '🇩🇪 German' }
];

const translations = {
  en: {
    title: "Powered by Horizon AI",
    desc: "Experience seamless AI translations. Communicate, ask complex astronomy questions, and analyze space data directly in your native language."
  },
  el: {
    title: "Με την υποστήριξη του Horizon AI",
    desc: "Ζήστε την εμπειρία των απρόσκοπτων μεταφράσεων AI. Επικοινωνήστε, κάντε ερωτήσεις αστρονομίας και αναλύστε δεδομένα στη μητρική σας γλώσσα."
  },
  fr: {
    title: "Propulsé par Horizon AI",
    desc: "Faites l'expérience de traductions d'IA fluides. Communiquez, posez des questions complexes et analysez les données dans votre langue maternelle."
  },
  de: {
    title: "Angetrieben von Horizon AI",
    desc: "Erleben Sie nahtlose KI-Übersetzungen. Kommunizieren Sie, stellen Sie komplexe Fragen und analysieren Sie Daten in Ihrer Muttersprache."
  }
};

function HorizonAIReveal() {
  const [langIndex, setLangIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [displayedDesc, setDisplayedDesc] = useState('');
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (!entry.isIntersecting) {
        setLangIndex(0); // Reset to English when scrolled out of view
      }
    }, { threshold: 0.3 });
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isHovered || !isVisible) return;
    const interval = setInterval(() => {
      setLangIndex((prev) => (prev + 1) % LANGUAGES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered, isVisible]);

  const currentLang = LANGUAGES[langIndex];
  const fullText = translations[currentLang.code].desc;
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth <= 996) {
      setDisplayedDesc(fullText);
      return;
    }
    let i = 0;
    setDisplayedDesc('');
    const typingInterval = setInterval(() => {
      if (i <= fullText.length) {
        setDisplayedDesc(fullText.slice(0, i));
        i += 2;
      } else {
        clearInterval(typingInterval);
      }
    }, 30);
    return () => clearInterval(typingInterval);
  }, [fullText]);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(100, ((e.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(0, Math.min(100, ((e.clientY - rect.top) / rect.height) * 100));
    const eyeX = 30 + (x * 0.4);
    const eyeY = 30 + (y * 0.4);
    setMousePos({ x: eyeX, y: eyeY });
  };

  return (
    <div 
      className={styles.aiFullWidthRevealContainer} 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      style={{
        '--mouse-x': `${mousePos.x}%`,
        '--mouse-y': `${mousePos.y}%`
      }}
    >
      <div className={styles.aiSpotlight} />
      <div className={styles.aiParticles} />
      <div className={styles.aiTwoColumn}>
        <div className={styles.aiTextSide}>
          <Heading as="h2" className={styles.aiRevealTitle}>
            {translations[currentLang.code].title.split('Horizon AI')[0]} 
            <span className={styles.aiHighlight}>Horizon AI</span>
            {translations[currentLang.code].title.split('Horizon AI')[1]}
          </Heading>
          <p className={styles.aiRevealDescription}>
            {displayedDesc}
            <span className={styles.cursorBlink}>|</span>
          </p>
          
          <div 
            className={styles.timelineSelector}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            {LANGUAGES.map((lang, idx) => (
              <div 
                key={lang.code}
                onClick={() => setLangIndex(idx)}
                className={clsx(styles.timelineDash, { [styles.timelineDashActive]: idx === langIndex })}
              >
                {idx === langIndex && (
                  <div 
                    className={styles.timelineDashFill} 
                    style={{ animationPlayState: isHovered ? 'paused' : 'running' }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.aiImageSide}>
          <div className={styles.aiOrbWrapper}>
            <div className={styles.aiOrbRing1}></div>
            <div className={styles.aiOrbRing2}></div>
            <div 
              className={styles.aiOrbCore} 
              style={{
                background: `radial-gradient(circle at ${mousePos.x}% ${mousePos.y}%, #ffffff 0%, #a855f7 40%, #4338ca 100%)`
              }}
            ></div>
            <div className={styles.aiOrbSparkle1}></div>
            <div className={styles.aiOrbSparkle2}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ExploreThinkLearn() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
const ref = useRef(null);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=10')
      .then(response => {
        if (!response.ok) throw new Error('Failed to fetch');
        return response.json();
      })
      .then(data => {
        setBlogs(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (loading || error) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0, rootMargin: '200px' }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [loading, error]);

  if (loading || error) return null;

  // Duplicate blogs for seamless infinite marquee loop
  const marqueeBlogs = [...blogs, ...blogs, ...blogs, ...blogs];

  return (
    <div className={styles.blogSection}>
      <div className="container" style={{maxWidth: '1200px'}}>
        <div 
          className={clsx(styles.learnHeaderCentered, { [styles.learnHeaderVisible]: isVisible })}
          ref={ref}
        >
          <h3 className={styles.learnTitle}>Learn with <span className={styles.aiBurpleText}>Horizon</span></h3>
          <p className={styles.learnDescription}>
            Horizon boosts education on Discord by delivering real-time astronomy articles and space flight news from trusted scientific sources directly to your community.
          </p>

          <div className={styles.learnPerksBox}>
            <span className={styles.perksIcon}>🎓</span>
            <span className={styles.perksText}><strong>For Universities, Schools & Communities:</strong> Unlock exclusive features and extended access for your learning institution upon request.</span>
            <a href="#" onClick={(e) => { e.preventDefault(); const b = atob("aW5mb0B0ZWFtYXRsYXMuZGV2"); setTimeout(() => { window.location.href = "mailto:" + b + "?subject=Horizon%20Education%20Application"; }, Math.floor(Math.random() * 300) + 100); }} className={styles.perksLink}>Apply Now →</a>
          </div>
        </div>
      </div>
      
      <div 
        className={styles.blogMarqueeWrapper}
        ref={(el) => {
          if (el) {
            let isDown = false;
            let startX;
            let scrollLeft;
            
            el.onmousedown = (e) => {
              isDown = true;
              el.style.cursor = 'grabbing';
              startX = e.pageX - el.offsetLeft;
              scrollLeft = el.scrollLeft;
            };
            el.onmouseleave = () => {
              isDown = false;
              el.style.cursor = 'grab';
            };
            el.onmouseup = () => {
              isDown = false;
              el.style.cursor = 'grab';
            };
            el.onmousemove = (e) => {
              if (!isDown) return;
              e.preventDefault();
              const x = e.pageX - el.offsetLeft;
              const walk = (x - startX) * 2;
              el.scrollLeft = scrollLeft - walk;
            };
            el.onscroll = () => {
              const halfWidth = el.scrollWidth / 4;
              if (el.scrollLeft >= halfWidth) {
                el.scrollLeft -= halfWidth;
              } else if (el.scrollLeft <= 0 && isDown) {
                // Only bump forward if they are actively dragging left past 0
                el.scrollLeft += halfWidth;
              }
            };
          }
        }}
        style={{ cursor: 'grab' }}
      >
        <div className={styles.blogMarqueeTrack}>
          {marqueeBlogs.map((blog, idx) => (
            <a key={idx} href={blog.url} target="_blank" rel="noopener noreferrer" className={styles.sleekArticleCard}>
              <div className={styles.sleekArticleImage}>
                <img loading="lazy" decoding="async" src={blog.image_url?.replace(/^http:\/\//i, 'https://')} alt={blog.title} />
              </div>
              <div className={styles.sleekArticleContent}>
                <div className={styles.sleekArticleSource}>{blog.news_site || 'Trusted Source'}</div>
                <h4 className={styles.sleekArticleTitle}>{blog.title}</h4>
                <div className={styles.sleekArticleFooter}>Read Article →</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

function PremiumAccess() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeChannel, setActiveChannel] = useState('image-analysis');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasClickedMenu, setHasClickedMenu] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0, rootMargin: '200px' }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div id="discord-demo-section" className={styles.premiumEpicSection} ref={ref}>
       <div className={styles.premiumEpicBackground}>
          <div className={styles.epicGlowTop} />
          <div className={styles.epicGlowBottom} />
       </div>
       
       <div className={clsx(styles.massiveBgText, { [styles.massiveBgTextVisible]: isVisible })}>
          GET FULL ACCESS
       </div>
       
       <div className="container" style={{position: 'relative', zIndex: 5}}>
          <div className={clsx(styles.epicHeader, { [styles.epicFadeIn]: isVisible })}>
             <h2 className={styles.epicTitle}>Get <span className={styles.aiBurpleText}>Full Access</span></h2>
             <p className={styles.epicDesc}>
               All in one place. Space is cool with the right tools. Supercharge your community's learning experience and start your astronomical journey.
             </p>
          </div>

          <div className={clsx(styles.discordMockup, { [styles.discordMockupVisible]: isVisible })} style={{position: 'relative'}}>
             {isMobileMenuOpen && (
               <div className={styles.discordMobileOverlay} onClick={() => setIsMobileMenuOpen(false)}></div>
             )}
             <div className={`${styles.discordSidebar} ${isMobileMenuOpen ? styles.discordSidebarMobileOpen : ''}`}>
                <div className={styles.discordServerHeader}>Horizon APP</div>
                <div className={styles.discordChannelList}>
                   <div className={styles.discordChannelCategory}>TEXT CHANNELS</div>
                   <div 
                      className={activeChannel === 'general' ? styles.discordChannelActive : styles.discordChannel}
                      onClick={() => { setActiveChannel('general'); setIsMobileMenuOpen(false); }}
                      style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}
                   >
                     <span># general</span>
                     <span className={styles.discordChannelBadge}>1</span>
                   </div>
                   <div 
                      className={activeChannel === 'image-analysis' ? styles.discordChannelActive : styles.discordChannel}
                      onClick={() => { setActiveChannel('image-analysis'); setIsMobileMenuOpen(false); }}
                   ># image-analysis</div>
                   <div 
                      className={activeChannel === 'launches' ? styles.discordChannelActive : styles.discordChannel}
                      onClick={() => { setActiveChannel('launches'); setIsMobileMenuOpen(false); }}
                      style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative'}}
                   >
                     
                     <span># launches</span>
                     <span className={styles.discordChannelBadge}>1</span>
                   </div>
                   <div 
                      className={activeChannel === 'feet-pics' ? styles.discordChannelActive : styles.discordChannel}
                      onClick={() => { setActiveChannel('feet-pics'); setIsMobileMenuOpen(false); }}
                   ># feet-pics</div>
                </div>
             </div>
             
             <div className={styles.discordChatArea}>
                <div className={styles.discordChatTopBar}>
                   <span className={clsx(styles.discordMobileMenuIcon, !hasClickedMenu && styles.menuIconPulse)} onClick={() => { setIsMobileMenuOpen(true); setHasClickedMenu(true); }}>☰</span>
                   <span className={styles.discordHashtag}>#</span> {activeChannel}
                </div>
                
                <div className={styles.discordChatFeed}>
                   {activeChannel === 'image-analysis' && (
                     <>

                       <div className={styles.discordMessage}>
                          <div className={styles.discordAvatar} style={{backgroundColor: '#5865F2'}}>F</div>
                          <div className={styles.discordMessageContent}>
                             <div className={styles.discordMsgHeader}>
                                <span className={styles.discordUsername}>Fyber</span>
                                <span className={styles.discordTime}>Today at 8:42 PM</span>
                             </div>
                             <div className={styles.discordText}><span className={styles.discordMention}>@Horizon</span> Can you analyze this capture from our university telescope?</div>
                             <div className={styles.discordAttachment}>
                                <img loading="lazy" decoding="async" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS29bKqOPVg5AAuYq1I3lSFA-7OKJXz0Y-PVgkDFMVWw&s" alt="Saturn Capture" className={styles.discordImage} />
                             </div>
                          </div>
                       </div>

                       <div className={styles.discordMessage}>
                          <img loading="lazy" decoding="async" src="/img/hrz.png" alt="Horizon AI" className={styles.discordAvatarBot} width="1000" height="1000" />
                          <div className={styles.discordMessageContent}>
                             <div className={styles.discordMsgHeader}>
                                <span className={styles.discordUsernameBot}>Horizon</span>
                                <span className={styles.discordBotTag}>✔ APP</span>
                                <span className={styles.discordTime}>Today at 8:42 PM</span>
                             </div>
                             <div className={styles.discordText}>
                                Using Horizon Lens, the image reveals a stunning capture of the planet Saturn, the second-largest planet in our solar system, famous for its magnificent ring system. The photograph, likely taken through a consumer telescope, clearly shows the gas giant's spherical body and its prominent rings tilted relative to our line of sight. You can even make out the Cassini Division, which is the dark gap separating the main ring groups. Additionally, a few faint pinpricks of light in the surrounding dark space could be some of Saturn's larger moons, such as Titan, Rhea, or Tethys, depending on the exposure and alignment at the time of your observation. It's an excellent amateur astrophotography shot!
                             </div>
                          </div>
                       </div>
                     
                     </>
                   )}
                   {activeChannel === 'general' && (
                     <>


                         <div className={styles.discordCommandBlock}>

                           <div className={styles.discordSlashSpine}></div>
                           <div className={styles.discordSlashInvocation}>
                             <div className={styles.discordAvatarMicro} style={{backgroundColor: '#3CB371'}}>G</div>
                             <span className={styles.discordCommandUser}>&nbsp;George</span>
                             <span className={styles.discordCommandText}>&nbsp;used&nbsp;<span className={styles.discordCommandName}>⠿ apod</span></span>
                           </div>
                           <div className={styles.discordMessage}>
                             <img loading="lazy" decoding="async" src="/img/hrz.png" alt="Horizon AI" className={styles.discordAvatarBot} width="1000" height="1000" />
                             <div className={styles.discordMessageContent}>
                               <div className={styles.discordMsgHeader}>
                                 <span className={styles.discordUsernameBot}>Horizon</span>
                                 <span className={styles.discordBotTag}>✔ APP</span>
                                 <span className={styles.discordTime}>Today at 17:56</span>
                               </div>
                               <div className={styles.discordEmbed}>
                                 <div className={styles.discordEmbedAuthor}>🌌 Astronomy Picture of the Day</div>
                                 <div className={styles.discordEmbedTitle}><strong>Title:</strong> Comet 220P in Outburst</div>
                                 <div className={styles.discordEmbedImageWrapper}>
                                   <img loading="lazy" decoding="async" src="https://apod.nasa.gov/apod/image/2608/Comet220P_SA_4104.jpg" alt="Comet 220P in Outburst" className={styles.discordEmbedImage} />
                                 </div>
                                 <div className={styles.discordEmbedFooter}>© Horizon Dev v2.4</div>
                               </div>
                               <div className={styles.discordActionRow}>
                                 <button className={styles.discordButtonBlurple}><span className={styles.discordButtonIcon}>📄</span> Explanation</button>
                                 <button className={styles.discordButtonGray}><span className={styles.discordButtonIcon}>🖼️</span> HD Image <span className={styles.discordExternalIcon}>↗</span></button>
                               </div>
                             </div>
                           </div>
                         </div>

                         <div className={styles.discordMessage}>
                           <div className={styles.discordAvatar} style={{backgroundColor: '#3CB371'}}>G</div>
                           <div className={styles.discordMessageContent}>
                             <div className={styles.discordMsgHeader}>
                               <span className={styles.discordUsername}>George</span>
                               <span className={styles.discordTime}>Today at 17:56</span>
                             </div>
                             <div className={styles.discordText}>Such an amazing photo.</div>
                           </div>
                         </div>

                         <div className={styles.discordMessage}>
                           <div className={styles.discordAvatar} style={{backgroundColor: '#3498DB'}}>A</div>
                           <div className={styles.discordMessageContent}>
                             <div className={styles.discordMsgHeader}>
                               <span className={styles.discordUsername}>AlexanderOF</span>
                               <span className={styles.discordTime}>Today at 17:57</span>
                             </div>
                             <div className={styles.discordText}>Indeed.</div>
                           </div>
                         </div>

                         <div className={`${styles.discordMessage} ${styles.discordMessageMentioned}`}>
                           <div className={styles.discordAvatar} style={{backgroundColor: '#3498DB'}}>A</div>
                           <div className={styles.discordMessageContent}>
                             <div className={styles.discordMsgHeader}>
                               <span className={styles.discordUsername}>AlexanderOF</span>
                               <span className={styles.discordTime}>Today at 17:57</span>
                             </div>
                             <div className={styles.discordText}><span className={styles.discordMentionYellow}>@Fyber</span> look at this.</div>
                           </div>
                         </div>
                       
                     </>
                   )}
                   {activeChannel === 'launches' && (
                     <>


                         <div className={styles.discordCommandBlock} style={{marginBottom: '16px'}}>
                           <div className={styles.discordSlashSpine}></div>
                           <div className={styles.discordSlashInvocation}>
                             <div className={styles.discordAvatarMicro} style={{backgroundColor: '#E74C3C'}}>J</div>
                             <span className={styles.discordCommandUser}>&nbsp;JohnPapath</span>
                             <span className={styles.discordCommandText}>&nbsp;used&nbsp;<span className={styles.discordCommandName}>⠿ nextlaunch</span></span>
                           </div>
                           <div className={styles.discordMessage}>
                             <img loading="lazy" decoding="async" src="/img/hrz.png" alt="Horizon AI" className={styles.discordAvatarBot} width="1000" height="1000" />
                             <div className={styles.discordMessageContent}>
                               <div className={styles.discordMsgHeader}>
                                 <span className={styles.discordUsernameBot}>Horizon</span>
                                 <span className={styles.discordBotTag}>✔ APP</span>
                                 <span className={styles.discordTime}>Today at 18:17</span>
                               </div>
                               <div className={styles.discordEmbed} style={{position: 'relative'}}>
                                 <div className={styles.discordEmbedClose}>✕</div>
                                 <div className={styles.discordEmbedAuthor}>🚀 Launch • Ariane 62 | MTG-I2</div>
                                 <div className={styles.discordEmbedDesc} style={{marginBottom: '12px'}}>
                                   Third of EUMETSAT's third generation of weather satellite.
                                 </div>
                                 <div className={styles.discordEmbedDesc}>
                                   <strong>Information,</strong>
                                 </div>
                                 <ul className={styles.discordEmbedList}>
                                   <li className={styles.discordEmbedListItem}>Status, <strong>Go for Launch</strong></li>
                                   <li className={styles.discordEmbedListItem}>Launch time, <span className={styles.discordTimePill}>in 3 days</span></li>
                                   <li className={styles.discordEmbedListItem}>Sent to, <strong>Geostationary Transfer Orbit</strong></li>
                                   <li className={styles.discordEmbedListItem}>Ran by, <strong>Arianespace</strong></li>
                                   <li className={styles.discordEmbedListItem}>Launching at, <strong>Guiana Space Centre, French Guiana</strong></li>
                                 </ul>
                                 <div className={styles.discordEmbedImageWrapper}>
                                   <img loading="lazy" decoding="async" src="https://thespacedevs-prod.nyc3.digitaloceanspaces.com/media/images/ariane_62_lifto_image_20240711132056.jpeg" alt="Rocket Launch" className={styles.discordEmbedImage} />
                                 </div>
                                 <div className={styles.discordEmbedFooter}>© Horizon Dev v2.4 • Result 4 of 10</div>
                               </div>
                               <div className={styles.discordPaginationRow}>
                                 <button className={styles.discordPaginationBtn}>◀</button>
                                 <button className={styles.discordPaginationBtn}>📄</button>
                                 <button className={`${styles.discordPaginationBtn} ${styles.discordPaginationBtnActive}`} style={{color: '#f1c40f'}}>✨</button>
                                 <button className={styles.discordPaginationBtn}>▶</button>
                               </div>
                               
                             </div>
                           </div>
                         </div>

                         <div className={styles.discordCommandBlock}>

                           <div className={styles.discordSlashSpine}></div>
                           <div className={styles.discordSlashInvocation}>
                             <img loading="lazy" decoding="async" src="/img/hrz.png" className={styles.discordAvatarMicro} alt="Horizon" width="1000" height="1000" />
                             <span className={styles.discordBotTagMicro}>APP</span>
                             <span className={styles.discordCommandUser} style={{color: '#c9cdfb'}}>&nbsp;Horizon</span>
                             <span className={styles.discordCommandText}>&nbsp;<i>Click to see command</i></span>
                           </div>
                           <div className={`${styles.discordMessage} ${styles.discordMessageEphemeral}`}>
                             <img loading="lazy" decoding="async" src="/img/hrz.png" alt="Horizon AI" className={styles.discordAvatarBot} width="1000" height="1000" />
                             <div className={styles.discordMessageContent}>
                               <div className={styles.discordMsgHeader}>
                                 <span className={styles.discordUsernameBot}>Horizon</span>
                                 <span className={styles.discordBotTag}>✔ APP</span>
                                 <span className={styles.discordTime}>Today at 18:18</span>
                               </div>
                               <div className={styles.discordEmbed}>
                                 <div className={styles.discordEmbedAuthor}>✨ Horizon AI Summary</div>
                                 <div className={styles.discordEmbedDesc}>
                                   Arianespace is operating the commercial launch of an Ariane 62 rocket carrying the MTG-I2 payload, which is the third of EUMETSAT's third generation of weather satellites. The liftoff is scheduled to occur from Ariane Launch Area 4 at the Guiana Space Centre in French Guiana, with a launch window opening on August 27, 2026, at 20:10 UTC and closing at 22:40 UTC. The payload is targeted for a Geostationary Transfer Orbit. This Earth Science mission is significant for advancing meteorological observation capabilities through EUMETSAT's advanced satellite infrastructure.
                                 </div>
                               </div>
                               <div className={styles.discordEphemeralNotice}>
                                 <span style={{marginRight: '6px'}}>👁️</span> Only you can see this • <span className={styles.discordDismiss}>Dismiss message</span>
                               </div>
                             </div>
                           </div>
                         </div>

                         <div className={`${styles.discordMessage} ${styles.discordMessageMentioned}`}>
                           <div className={styles.discordAvatar} style={{backgroundColor: '#E74C3C'}}>J</div>
                           <div className={styles.discordMessageContent}>
                             <div className={styles.discordMsgHeader}>
                               <span className={styles.discordUsername}>JohnPapath</span>
                               <span className={styles.discordTime}>Today at 18:18</span>
                             </div>
                             <div className={styles.discordText}><span className={styles.discordMentionYellow}>@Fyber</span> let's, gooo!</div>
                           </div>
                         </div>

                     </>
                   )}
                   {activeChannel === 'feet-pics' && (
                     <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', textAlign: 'center', color: '#dbdee1'}}>
                        <div style={{fontSize: '48px', marginBottom: '16px'}}>🤨</div>
                        <h3 style={{color: '#f2f3f5', marginBottom: '8px'}}>Caught you!</h3>
                        <p style={{maxWidth: '400px', lineHeight: '1.5', color: '#b5bac1'}}>
                          Stop looking for feet pics and invite Horizon to your server to actually learn something about the universe!
                        </p>
                        <a 
                          href="https://invite.horizonbot.xyz" 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '8px',
                            marginTop: '24px', 
                            backgroundColor: '#5865F2', 
                            color: '#ffffff',
                            border: 'none',
                            padding: '12px 28px',
                            fontSize: '1.05rem',
                            fontWeight: '700',
                            borderRadius: '8px',
                            textDecoration: 'none',
                            boxShadow: '0 8px 24px rgba(88, 101, 242, 0.4)',
                            transition: 'all 0.2s cubic-bezier(0.2, 0.8, 0.2, 1)',
                            cursor: 'pointer'
                          }}
                          onMouseOver={e => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.boxShadow = '0 12px 28px rgba(88, 101, 242, 0.6)';
                            e.currentTarget.style.backgroundColor = '#4752c4';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                          onMouseOut={e => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.boxShadow = '0 8px 24px rgba(88, 101, 242, 0.4)';
                            e.currentTarget.style.backgroundColor = '#5865F2';
                            e.currentTarget.style.color = '#ffffff';
                          }}
                        >
                          <svg width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor">
                            <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                          </svg>
                          Redeem yourself
                        </a>
                     </div>
                   )}
                </div>
                
                <div className={styles.discordInputWrapper}>
                   <div className={styles.discordInputBox}>
                      <span className={styles.discordInputPlus}>+</span>
                      Message #{activeChannel}
                   </div>
                </div>
             </div>
          </div>
          <div className={styles.premiumDisclaimer}>
            * Image analysis is only available upon request for eligible communities and schools.
          </div>
       </div>
    </div>
  );
}

// Import logo image for special thanks section
import Developer from '@site/static/img/developer.png';
import Alex from '@site/static/img/alex.png';
import curious from '@site/static/img/curious.png';
import michael from '@site/static/img/michael.png';
import john from '@site/static/img/john.png';
import Icon from '@site/static/img/rocket.png';

export function CallToAction() {
  return (
    <div className={clsx('col col--12', styles.callToActionContainer)}>

      
      <div className={clsx('text--center', styles.callToActionBox)}>

        <img loading="lazy" decoding="async" src={Icon} alt="Icon" className={styles.ctaIcon} width="512" height="512" />
        
        <div className={styles.callToActionText}>
          <Heading as="h3" className={styles.callToActionTitle}>Level up your server!</Heading>
          <p className={styles.callToActionDescription}>     
          Over 100,000 users trust Horizon, add it to your Discord server and start your astronomical journey today.
          </p>
          <div className={styles.buttonContainer}>
            <a
              className={clsx('button', styles.callToActionButton)}
              href="https://invite.horizonbot.xyz"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" style={{marginRight: "8px"}} xmlns="http://www.w3.org/2000/svg"><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z"/></svg> Invite Horizon
            </a>
          </div>
        </div>
      </div>


    </div>
  );
}

function SpecialThanks() {
  const contributors = [
    { name: 'Fyber', role: 'Head Developer', image: Developer },
    { name: 'Alexander', role: 'S. Administrator', image: Alex },
    { name: 'Comfy', role: 'Graphics Designer', image: curious },
    { name: 'JohnPapath', role: 'Contributor', image: john },
    { name: 'Michael', role: 'Contributor', image: michael },
  ];

  return (
    <div className={styles.specialThanksContainer}>
      <div className={styles.specialThanks}>
        <Heading as="h3" className={styles.specialThanksTitle}>Key Contributors</Heading>
        <div className={styles.contributorsContainer}>
          {contributors.map((contributor, idx) => (
            <div key={idx} className={styles.contributorBox}>
              <img loading="lazy" decoding="async" src={contributor.image} alt={contributor.name} className={styles.contributorImage} />
              <p className={styles.contributorName}>{contributor.name}</p>
              <p className={styles.contributorRole}>{contributor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HomeFeatures() {
  return (
    <div className={styles.featuresStackContainer}>
      <div className="container" style={{maxWidth: '1200px', marginTop: '4rem'}}>
        <HorizonAIReveal />

      <div className="container" style={{maxWidth: '1200px'}}>
        <ExploreThinkLearn />
      </div>
      </div>

      <div id="features-section" className="container" style={{maxWidth: '1200px', marginTop: '6rem', marginBottom: '4rem'}}>
        <div className={styles.stackedCardsWrapper}>
          {FeatureList.map((feature, index) => (
            <FeatureCard
              key={index}
              index={index}
              {...feature}
            />
          ))}
        </div>
      </div>
      
      <PremiumAccess />

      <div className="container" style={{maxWidth: '1200px', marginTop: '4rem'}}>
        <CallToAction />
      </div>

    </div>
  );
}
