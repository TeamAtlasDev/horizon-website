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

const DocumentationList = [
  {
    title: 'Welcome to Horizon',
    subtitle: 'Explore Horizon and its features.',
    description: 'Get started with Horizon. Learn about its features, how to use it, and much more.',
    link: '/docs/information',
  },
  {
    title: 'Horizon Automations',
    subtitle: 'Setup notifications for next space launches and events.',
    description: 'Learn how Automations in Horizon streamline notifications and explore the basics of Horizon\'s API.',
    link: '/docs/automations/introduction',
  },
  {
    title: 'Horizon Settings',
    subtitle: 'Manage and customize your server settings and notifications.',
    description: 'Discover how to efficiently customize Horizon\'s automations and manage your server through Horizon Settings.',
    link: '/docs/automations/configuration',
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

import NewImage from '@site/static/img/new.png';
function Documentation({ title, subtitle, description, link }) {
  return (
    <div className={clsx(styles.documentationSection)}>
      <div className="text--center">
        <Heading as="h3" className={styles.documentationTitle}>
          Documentation
          <img src={NewImage} alt="New Feature" className={styles.newFeatureImage} />
        </Heading>
        <p className={styles.documentationCategory}>Learn more about Horizon's features and setup.</p>
      </div>
      <div className={clsx('documentationContainer', styles.documentationContainer)}>
        {DocumentationList.map((props, idx) => (
          <DocumentationBox key={idx} {...props} />
        ))}
      </div>
    </div>
  );
}


function DocumentationBox({ title, subtitle, description, link }) {
  return (
    <div className={clsx(styles.documentationBox)}>
      <Heading as="h4">{title}</Heading>
      <p className={styles.documentationSubtitle}>{subtitle}</p>
      <p>{description}</p>
      <a className={styles.docLink} href={link}>
        Read more
      </a>
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
          <Documentation />
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
