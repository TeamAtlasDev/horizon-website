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
import Icon from '@site/static/img/rocket.png';


function CallToAction() {
  return (
    <div className={clsx('col col--12', styles.callToActionContainer)}>
      {/* Star PNG image at bottom left */}

      
      <div className={clsx('text--center', styles.callToActionBox)}>
        {/* Icon to the left */}
        <img src={Icon} alt="Icon" className={styles.ctaIcon} />
        
        <div className={styles.callToActionText}>
          <Heading as="h3" className={styles.callToActionTitle}>Level up your server!</Heading>
          <p className={styles.callToActionDescription}>
            Add Horizon to your Discord server and start your astronomical journey today.
          </p>
          <a
            className={clsx('button', 'button--primary', 'button--lg', styles.callToActionButton)}
            href="https://invite.horizonbot.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
          
            Invite Horizon
          </a> 
          <a
            className={clsx('button', 'button--primary', 'button--lg', styles.callToActionButton)}
            href="https://support.horizonbot.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
          
            Support Server
          </a>
        </div>
      </div>

      {/* Star PNG image at top right */}
    </div>
  );
}




function SpecialThanks() {
  const contributors = [
    { name: 'Fyber', role: 'Head Developer', image: Developer },
    { name: 'Alexander', role: 'S. Administrator', image: Alex },
    { name: 'CuriousAnalyst', role: 'Graphics Designer', image: curious },
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


function ExploreThinkLearn() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [visibleBlogs, setVisibleBlogs] = useState(2);

  useEffect(() => {
    fetch('https://api.spaceflightnewsapi.net/v4/blogs/?limit=6')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
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

  const handleShowMore = () => {
    setVisibleBlogs(visibleBlogs + 4);
  };

  const handleShowLess = () => {
    setVisibleBlogs(2);
  };

  if (loading) {
    return (
      <div className={styles.blogSection}>
        <div className="text--center">
          <h3 className={styles.blogTitle}>Explore & Learn with Horizon</h3>
          <p className={styles.blogCategory}>Delve into thought-provoking blogs about space and astronomy.</p>
        </div>
        <div className={styles.loadingText}>
          <h4>🕝 Preparing some things for you..</h4>
          <p>We're loading the content now. Depending on your connection and device. <br></br>This may take a moment. Please be patient.</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.blogSection}>
        <div className="text--center">
          <h3 className={styles.blogTitle}>Explore & Learn with Horizon</h3>
          <p className={styles.blogCategory}>Delve into thought-provoking blogs about space and astronomy.</p>
        </div>
        <div className={styles.errorText}>
          <h4>⚠️ Something went wrong..</h4>
          <p>We encountered issues while loading Horizon data, please try again later.</p>
          <p>If the problem persists, contact us at <a href="mailto:info@teamatlas.dev">info@teamatlas.dev</a></p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.blogSection}>
      <div className="text--center">
        <h3 className={styles.blogTitle}>Explore & Learn with Horizon</h3>
        <p className={styles.blogCategory}>Delve into thought-provoking blogs about space and astronomy.</p>
      </div>
      <div className={`blogContainer ${styles.blogContainer}`}>
        <div className={styles.blogGrid}>
          {blogs.slice(0, visibleBlogs).map((blog, idx) => (
            <div key={idx} className={styles.blogBox}>
              <div className={styles.imageContainer}>
                <img src={blog.image_url} alt={blog.title} className={styles.blogImage} />
              </div>
              <div className={styles.blogContent}>
  <h4 className={styles.blogTitle}>{blog.title}</h4>
  <p className={styles.blogDescription}>{blog.summary}</p>
  <a href={blog.url} target="_blank" rel="noopener noreferrer" className={styles.blogLink}>Learn More</a>
</div>
            </div>
          ))}
        </div>
      </div>
      {visibleBlogs < blogs.length && (
        <button onClick={handleShowMore} className={styles.showMoreButton}>More Blogs</button>
      )}
      {visibleBlogs > 2 && (
        <>
          <button className={styles.showMoreButton} onClick={handleShowLess}>Less Blogs</button>
          <p className={styles.showMoreText}>
            Want to see more? Add Horizon! <br />
            <a href="https://spaceflightnewsapi.net" target="_blank" rel="noopener noreferrer" className={styles.showMoreLink}>Data Credits</a> • <a href="https://horizonbot.xyz/web-policy" target="_blank" rel="noopener noreferrer" className={styles.showMoreLink}>Website Policy</a>
          </p>
        </>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <div className="container">
      <main>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
              <Feature key={idx} {...props} />
            ))}
          </div>
          <ExploreThinkLearn />
          <CallToAction />
          <SpecialThanks />
        </div>
      </main>
    </div>
  );
}
