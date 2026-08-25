import React from 'react';
import Link from '@docusaurus/Link';
import styles from '../styles.module.css';

export default function NotFoundContent() {
  return (
    <main className={styles.notFoundContainer}>
      <div className={styles.notFoundGlow} />
      

      <div className={styles.floatingStar} style={{top: '15%', left: '20%', animationDelay: '0s'}} />
      <div className={styles.floatingStar} style={{top: '25%', right: '15%', animationDelay: '1s'}} />
      <div className={styles.floatingStar} style={{top: '65%', left: '10%', animationDelay: '2s'}} />
      <div className={styles.floatingStar} style={{top: '80%', right: '25%', animationDelay: '0.5s'}} />
      
      <div className={styles.notFoundContent}>
        <h1 className={styles.errorCode}>404</h1>
        <h2 className={styles.errorTitle}>Lost in the Cosmos</h2>
        <p className={styles.errorDesc}>
          It looks like this page has drifted beyond our observable universe. 
          Don't worry, even the best astronauts get lost sometimes.
        </p>
        <div className={styles.actions}>
          <Link to="/" className={styles.homeButton}>
            Return to Base
          </Link>
        </div>
      </div>
    </main>
  );
}
