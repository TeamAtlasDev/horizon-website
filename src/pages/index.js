import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css'; // Ensure this imports your updated CSS

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();

  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.heroContent}>
        <div className={styles.newsBadgeContainer}>
          <Link
            className={clsx('button', 'button--secondary', styles.newsBadge)}
            href="https://horizonbot.xyz/blog/horizon-first-anniversary"
          >
            New: Horizon Anniversary
          </Link>
        </div>
        <Heading as="h1" className={clsx(styles.heroTitle)}>
          Explore New Galaxies <br /> and Stellar Horizons!
        </Heading>
        <p className={clsx(styles.heroSubtitle)}>
          Horizon offers a variety of space-related commands for your server using real-time data.
        </p>
        <div className={clsx(styles.buttons)}>
          <Link className={clsx(styles.button, styles.buttonPrimary)} href="https://invite.horizonbot.xyz">
            Add To Discord
          </Link>
          <Link className={clsx(styles.button, styles.buttonSecondary)} href="https://top.gg/bot/1183177251316047983/vote">
            Vote Horizon
          </Link>
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
