import Head from "@docusaurus/Head";
import React, { useMemo, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import latestBlog from '@site/src/latestBlog.json';
// Minimal space background
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

  useEffect(() => {
    console.log(
      "%cHey astronomer! 🌌\n%cIf you see any red errors down here, don't panic.\nThey're just red dwarf stars... just look the other way! 🔭",
      "color: #f2f3f5; font-size: 20px; font-weight: 900; padding-bottom: 8px; display: block; font-family: 'Inter', sans-serif;",
      "color: #a855f7; font-size: 16px; font-weight: 600; padding-bottom: 4px; display: block; font-family: 'Inter', sans-serif;"
    );

    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeyDown = (e) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          document.body.classList.toggle('hyperdrive');
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={styles.starsContainer}>
      {stars.map(star => (
        <div
          key={star.id}
          className={styles.star}
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
      <div className={styles.shootingStar} />
    </div>
  );
}

// Cinematic sticky scroll component
function CinematicHero() {
  const containerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { top, height } = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate how far we've scrolled through the container
      // Container is 200vh tall. 
      // Start (0) when top of container hits top of viewport
      // End (1) when bottom of container hits bottom of viewport
      const scrollPx = -top;
      const maxScrollPx = height - windowHeight;
      
      let progress = scrollPx / maxScrollPx;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    // trigger once on mount
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate animation values based on scroll progress (0 to 1)
  
  // Hero fades out and moves up from 0 to 0.4
  const heroOpacity = Math.max(0, 1 - (scrollProgress / 0.4));
  const heroTranslateY = -(scrollProgress / 0.4) * 100;

  // Quote fades in and scales up from 0.4 to 0.7, stays until 1.0
  let quoteOpacity = 0;
  let quoteScale = 0.9;
  
  if (scrollProgress > 0.4 && scrollProgress <= 0.7) {
    const quoteProgress = (scrollProgress - 0.4) / 0.3;
    quoteOpacity = quoteProgress;
    quoteScale = 0.9 + (quoteProgress * 0.1); // 0.9 to 1.0
  } else if (scrollProgress > 0.7) {
    quoteOpacity = 1;
    quoteScale = 1.0;
  }

  // Fade out the quote right at the very end (0.9 to 1.0) so it transitions nicely to features
  if (scrollProgress > 0.9) {
     const fadeOutProgress = (scrollProgress - 0.9) / 0.1;
     quoteOpacity = 1 - fadeOutProgress;
  }

  return (
    <div ref={containerRef} className={styles.cinematicContainer}>
      <div id="quote" style={{ position: 'absolute', top: '120vh' }} />
      <div className={styles.stickyContent}>
        
        <div className={styles.topPurpleGradient} />
        <SpaceBackground />
        

        <div style={{ opacity: heroOpacity, pointerEvents: scrollProgress > 0.4 ? 'none' : 'auto' }}>
          <div className={styles.donateArrowContainer}>
            <span className={styles.donateText}>Support education!</span>
            <svg className={styles.donateArrowSvg} width="60" height="60" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10,50 C 30,50 40,30 50,10" />
              <path d="M35,15 L50,10 L48,25" />
            </svg>
          </div>
        </div>


        <div 
          className={styles.heroWrapper}
          style={{ 
            opacity: heroOpacity, 
            transform: `translateY(${heroTranslateY}px)`,
            pointerEvents: scrollProgress > 0.4 ? 'none' : 'auto'
          }}
        >
          <div className={styles.heroContainer}>
            <Link to={latestBlog.url} className={styles.aiBadge}>
              NEW: {latestBlog.title}
            </Link>
            
            <Heading as="h1" className={clsx(styles.heroTitle)}>
              Explore the Universe <br /> With Your Server!
            </Heading>
            <p className={clsx(styles.heroSubtitle)}>
              A highly customizable astronomy bot offering daily space pictures, launch tracking, interactive commands, and real-time cosmic data...
            </p>
            
            <div className={clsx(styles.buttons)}>
              <Link 
                className={clsx(styles.button, styles.gradientButton)} 
                href="https://invite.horizonbot.xyz"
                aria-label="Invite Horizon Discord Bot to your server"
                title="Invite Horizon Discord Bot"
              >
                <svg width="20" height="20" viewBox="0 0 127.14 96.36" fill="currentColor" role="img" aria-label="Discord Logo">
                  <title>Discord Logo</title>
                  <path d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.31,60,73.31,53s5-12.74,11.43-12.74S96.2,46,96.12,53,91.08,65.69,84.69,65.69Z"/>
                </svg>
                Add To Discord
              </Link>
              <Link 
                className={clsx(styles.button, styles.darkGreyButton)} 
                href="#quote" 
                aria-label="Learn more about Horizon astronomy features"
                onClick={(e) => {
                e.preventDefault();
                document.getElementById('quote').scrollIntoView({ behavior: 'smooth' });
              }}>
                Learn More
              </Link>
            </div>
            
            <div className={styles.trustedByContainer}>
              <div className={styles.trustedAvatars}>
                <img src="/img/pfp1.png" alt="User 1" className={styles.trustedAvatar} width="1024" height="1024" />
                <img src="/img/pfp2.png" alt="User 2" className={styles.trustedAvatar} width="1024" height="1024" />
                <img src="/img/pfp3.png" alt="User 3" className={styles.trustedAvatar} width="1024" height="1024" />
              </div>
              <span className={styles.trustedText}>Trusted by <strong>100,000+</strong> users</span>
            </div>
          </div>
        </div>


        <div 
          className={styles.quoteWrapper}
          style={{ 
            opacity: quoteOpacity,
            transform: `translate(-50%, -50%) scale(${quoteScale})`,
            pointerEvents: 'none'
          }}
        >
          <div className={styles.quoteGlow} />
          <h2 className={styles.quoteText}>
            "Our horizon isn't the edge of the Earth,<br/>but the endless expanse of the stars."
          </h2>
          <p className={styles.quoteAuthor}>— The Horizon Team</p>
        </div>
        
      </div>
    </div>
  );
}


export default function Home() {
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "name": "Horizon",
      "applicationCategory": "UtilitiesApplication",
      "operatingSystem": "Discord",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "description": "The premier space and astronomy bot for Discord. Track live rocket launches, fetch NASA APODs, explore planets, and receive real-time cosmic news.",
      "url": "https://horizonbot.xyz",
      "image": "https://horizonbot.xyz/img/horizonimg.png"
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Horizon | Discord Astronomy Bot",
      "url": "https://horizonbot.xyz"
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Horizon Team",
      "url": "https://horizonbot.xyz",
      "logo": "https://horizonbot.xyz/img/horizonimg.png",
      "sameAs": [
        "https://twitter.com/horizonbyatlas",
        "https://support.teamatlas.dev"
      ]
    }
  ];

  return (
    <Layout
      title="The Premier Discord Astronomy Bot"
      description="Bring the universe to your Discord server! Horizon offers real-time astronomy data, NASA APODs, live rocket launch tracking, and interactive space commands."
    >
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <CinematicHero />
      <main id="features">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
