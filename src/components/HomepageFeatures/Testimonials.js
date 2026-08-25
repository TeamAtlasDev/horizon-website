import React from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const TestimonialList = [
  {
    quote: "Horizon completely changed how our community tracks space launches. It's incredibly fast and the slash commands are flawless.",
    name: "AstroGamer",
    server: "Space Enthusiasts Hub",
    avatar: "https://ui-avatars.com/api/?name=Astro+Gamer&background=ff5733&color=fff",
  },
  {
    quote: "The APOD command is a daily ritual in my server. We love discussing the daily astronomy pictures. Best bot ever!",
    name: "NebulaWatcher",
    server: "Stargazers Lounge",
    avatar: "https://ui-avatars.com/api/?name=Nebula+Watcher&background=4f46e5&color=fff",
  },
  {
    quote: "Automated notifications for ISS passes have been a game changer. The UI and setup process on Horizon is so clean.",
    name: "CosmicDave",
    server: "Orbital Tracking",
    avatar: "https://ui-avatars.com/api/?name=Cosmic+Dave&background=7c3aed&color=fff",
  },
];

export default function Testimonials() {
  return (
    <div className={styles.testimonialsContainer}>
      <Heading as="h3" className={styles.testimonialsTitle}>Trusted by Space Enthusiasts</Heading>
      <p className={styles.testimonialsSubtitle}>See what our community has to say about Horizon</p>
      
      <div className={styles.testimonialsGrid}>
        {TestimonialList.map((testimonial, idx) => (
          <div key={idx} className={styles.testimonialCard}>
            <div className={styles.quoteIcon}>"</div>
            <p className={styles.quoteText}>{testimonial.quote}</p>
            <div className={styles.testimonialAuthor}>
              <img src={testimonial.avatar} alt={testimonial.name} className={styles.authorAvatar} />
              <div className={styles.authorInfo}>
                <span className={styles.authorName}>{testimonial.name}</span>
                <span className={styles.authorServer}>{testimonial.server}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
