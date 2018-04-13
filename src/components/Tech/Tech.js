import React from 'react';
import Link from 'gatsby-link';

import styles from './styles.module.scss';

const Tech = ({ stack }) => {
  const frontEnd = ['React', 'Redux', 'Gatsby', 'Vue.js', 'HTML5', 'SCSS'];
  const backEnd = ['Node', 'Express', 'PostgreSQL'];
  const other = ['Git', 'R'];

  return (
    <div className={styles.tech}>
      <h2>Skills</h2>
      <div className={styles.techbox}>
        <h1>Frontend</h1>
        <ul className={styles.tags}>
          {frontEnd.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
      <div className={styles.techbox}>
        <h1>Backend</h1>
        <ul className={styles.tags}>
          {backEnd.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
      <div className={styles.techbox}>
        <h1>Other</h1>
        <ul className={styles.tags}>
          {other.map(tech => <li key={tech}>{tech}</li>)}
        </ul>
      </div>
    </div>
  );
};

export default Tech;
