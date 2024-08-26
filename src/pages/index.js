import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import appBadgeImage from '@site/static/img/appbadge.png';
import discordLogo from '@site/static/img/discord.png'; // Import the Discord logo image

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1600); // Set breakpoint for larger desktop view
    };

    // Initial check
    handleResize();

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="hero-content-container">
        <div className="hero-content">
          <div className={styles.hero__title}>
            <Heading as="h1" className={clsx(styles.hero__title_text, styles.responsiveTitle, styles.titleAnimation)}>
              Welcome to Horizon{' '}
              <img src={appBadgeImage} alt="Horizon Badge" className={styles.hero__badge} />
            </Heading>
          </div>
          <p className={clsx(styles.hero__subtitle, styles.subtitleAnimation)}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx('button', 'button--secondary', 'button--lg', styles.buttonZoom, styles.buttonAnimation)}
              href="https://invite.horizonbot.xyz"
            >
              <img
                src={discordLogo}
                alt="Discord Logo"
                className={styles.discordLogo}
              />{' '}
              <span style={{ marginLeft: '4px', marginBottom: '-3.5px' }}>Start exploring the unknown</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  
  return (
    <Layout
      title={`Welcome`}
      description="Horizon offers a variety of space-related commands for your server using real-time data directly on your Discord server!"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <div style={{ height: '4rem' }} /> {/* Adjust the height as needed */}
      </main>
    </Layout>
  );
}
