import React from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import styles from './styles.module.scss';

const Bio = () => {
  return (
    <div className={styles.bio}>
      <h3>About me</h3>
      <div className={styles.paragraph}>
        I started developing around 1996 when I maintained my very first website
        on
        <a
          className="highlight-link"
          href="https://en.wikipedia.org/wiki/Yahoo!_GeoCities"
        >
          {' '}
          Geocities
        </a>. A few years later, I had a weblog. Believe me, it was an exciting
        time when there were less than 100 weblogs in Germany and{' '}
        <a
          className="highlight-link"
          href="https://en.wikipedia.org/wiki/Movable_Type"
        >
          Movable Type
        </a>{' '}
        was the state of the art.
      </div>
      <div className={styles.paragraph}>
        After school, I started studying computer science at the university and
        after graduating, I worked as a research assistant in computer science
        education. I wrote my Ph.D. thesis about misconceptions in computer
        science.
      </div>
      <div className={styles.paragraph}>
        My excitement for web technologies hasn't changed since the early years
        - I am more and more excited about the fast developing technologies and
        tools. I have experience with several JavaScript frameworks, especially
        with React. React has a simple but great API, which provides a lot of
        flexibility and there is so much awesome stuff you can do with it. By
        the way, this website was built with{' '}
        <a className="highlight-link" href="https://www.gatsbyjs.org/">
          Gatsby.js
        </a>, which is a static site generator for React.
      </div>
    </div>
  );
};

export default Bio;
