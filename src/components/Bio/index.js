import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Bio = () => {
  return (
    <div className={styles.bio}>
      <div className={styles.headline}>
        I am a full-stack developer based in Germany.
      </div>
      <div className={styles.paragraph}>
        I started developing around 1996 when I started my very first website on
        <a
          className="highlight-link"
          href="https://en.wikipedia.org/wiki/Yahoo!_GeoCities"
        >
          {' '}
          Geocities
        </a>. I later had a weblog which I used to post exciting stories from my
        life (*cough, cough*).
      </div>
      <div className={styles.paragraph}>
        My excitement for web technologies hasn't changed since then, but it got
        a bit more serious: I have a degree in computer science and also a Ph.D.
        in computer science education now.
      </div>
      <div className={styles.paragraph}>
        I have experience with several JavaScript frameworks, but I mainly focus
        on React. React has a simple but awesome API, which provides a lot of
        flexibility. By the way, this website was built with
        <a href="https://www.gatsbyjs.org/">Gatsby.js</a>, which is a static
        site generator for React.
      </div>
    </div>
  );
};

export default Bio;
