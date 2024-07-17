
import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Stay Informed about everything!',
    image: require('@site/static/img/automations.png').default,
    description: (
      <>
        Get notified about upcoming launches, events and many more. Never miss an astronomical event again!
      </>
    ),
  },
  {
    title: 'Explore the unknown!',
    image: require('@site/static/img/apod.png').default,
    description: (
      <>
        New space pictures, Mars rover snapshots, and more directly on your server. 
        Explore the universe with your community!
      </>
    ),
  },
  {
    title: 'Interaction Commands made simple!',
    image: require('@site/static/img/interactions.png').default,
    description: (
      <>
        Interaction commands are here to make your life just a bit easier. Need a fast-forward short response? Give it a try!
      </>
    ),
  },
  {
    title: 'Customize your notifications!',
    image: require('@site/static/img/settings.png').default,
    description: (
      <>
        It's not one-size-fits-all. Why not customize your own notifications behavior? Easily configure them on Horizon.
      </>
    ),
  },
];


function Feature({ image, title, description }) {
  return (
    <div className={clsx('col col--12', styles.feature)}>
      <div className="text--center">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
      <div className="text--center">
        <img src={image} alt={title} className={styles.featureSvg} />
      </div>
    </div>
  );
}


// Import star SVG images
import StarLeftBottom from '@site/static/img/star.png';
import StarRightTop from '@site/static/img/star.png';

// Import logo image for special thanks section
import Developer from '@site/static/img/developer.png';
import Alex from '@site/static/img/alex.png';
import curious from '@site/static/img/curious.png';
import michael from '@site/static/img/michael.png';
import john from '@site/static/img/john.png';

function CallToAction() {
  return (
    <div className={clsx('col col--12', styles.callToActionContainer)}>
      {/* Star PNG image at bottom left */}
      <img src={StarLeftBottom} alt="Star" className={styles.starLeftBottom} />
      
      <div className={clsx('text--center', styles.callToActionBox)}>
        <Heading as="h3">Join the Adventure!</Heading>
        <p>Add Horizon to your Discord server and start your astronomical journey today.</p>
        <a
          className={clsx('button', 'button--primary', 'button--lg', styles.zoomOnHover)}
          href="https://invite.horizonbot.xyz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Invite Horizon
        </a>
      </div>

      {/* Star PNG image at top right */}
      <img src={StarRightTop} alt="Star" className={styles.starRightTop} />
    </div>
  );
}

function SpecialThanks() {
  const contributors = [
    { name: 'Fyber', role: 'Head Developer', image: Developer },
    { name: 'Alexander', role: 'Server Administrator', image: Alex },
    { name: 'CuriousAnalyst', role: 'Graphics Designer', image: curious },
    { name: 'JohnPapath', role: 'Developer & Tester', image: john },
    { name: 'Michael', role: 'Developer & Tester', image: michael },

  ];

  return (
    <div className={styles.specialThanksContainer}>
      <div className={styles.specialThanks}>
        <Heading as="h3" className={styles.specialThanksTitle}>Key Contributors</Heading>
        <div className={styles.contributorsContainer}>
          {contributors.map((contributor, idx) => (
            <div key={idx} className={styles.contributorBox}>
              <img src={contributor.image} alt={contributor.name} className={styles.contributorImage} />
              <h4>{contributor.name}</h4>
              <p>{contributor.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function NewsArticles() {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visibleArticles, setVisibleArticles] = useState(3);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/articles/?limit=6&news_site_exclude=SpaceNews')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then(data => {
        setArticles(data.results);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(true);
        setLoading(false);
      });
  }, []);

  const showMoreArticles = () => {
    setVisibleArticles(prev => prev + 3);
  };

  const showLessArticles = () => {
    setVisibleArticles(3);
  };

  if (loading) {
    return (
      <div className={styles.newsSection}>
        <div className="text--center">
          <h3 className={styles.newsTitle}>Latest News</h3>
          <p className={styles.newsCategory}>Stay updated with the latest news in spaceflight.</p>
        </div>
          <div className={styles.loadingText}>
            <h4>🕝 Preparing some things for you..</h4>
            <p>We're loading the content now. <br> </br> Depending on your connection and device, this may take a moment.</p>
          </div>
        </div>
    );
  }

  if (error) {
    return (
      <div className={styles.newsSection}>
        <div className="text--center">
          <h3 className={styles.newsTitle}>Latest News</h3>
          <p className={styles.newsCategory}>Stay updated with the latest news in spaceflight.</p>
        </div>
          <div className={styles.errorText}>
            <h4>⚠️ Something went wrong..</h4>
            <p>We encountered issues while loading Horizon news data, please try again later.</p>
            <p>If the problem persists, contact us at <a href="mailto:info@teamatlas.dev">info@teamatlas.dev</a></p>
          </div>
        </div>
    );
  }

  return (
    <div className={styles.newsSection}>
      <div className="text--center">
        <h3 className={styles.newsTitle}>Latest News</h3>
        <p className={styles.newsCategory}>Stay updated with the latest news in spaceflight.</p>
      </div>
      <div className={`newsContainer ${styles.newsContainer}`}>
        {articles.slice(0, visibleArticles).map((article, idx) => (
          <div key={idx} className={styles.articleBox}>
            <div className={styles.imageContainer}>
              <img src={article.image_url} alt={article.title} className={styles.articleImage} />
            </div>
            <div className={styles.articleContent}>
              <h4 className={styles.articleTitle}>{article.title}</h4>
              <p className={styles.articleDescription}>{article.summary}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.articleLink}>Learn More</a>
            </div>
          </div>
        ))}
      </div>
      {visibleArticles <= articles.length && (
        <div className="text--center">
          {visibleArticles === 3 ? (
            <button className={styles.showMoreButton} onClick={showMoreArticles}>More Articles</button>
          ) : (
            <>
              <button className={styles.showMoreButton} onClick={showLessArticles}>Less Articles</button>
              <p className={styles.showMoreText}>
                Want to see more? Add Horizon! <br />
                <a href="https://spaceflightnewsapi.net" target="_blank" rel="noopener noreferrer" className={styles.showMoreLink}>Data Credits</a> • <a href="https://horizonbot.xyz/web-policy" target="_blank" rel="noopener noreferrer" className={styles.showMoreLink}>Website Policy</a>
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}




export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={clsx('header', 'container')}>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
        <div className="row">
          <NewsArticles />
        </div>
        <div className="row">
          <CallToAction />
        </div>
        <div className="row">
          <SpecialThanks />
        </div>
      </div>
    </section>
  );
}
