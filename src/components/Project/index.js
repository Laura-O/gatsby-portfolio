import React from 'react';
import Link from 'gatsby-link';

import styles from './styles.module.scss';

const Project = ({ project }) => {
  const listItems = project.techs.map(tech => (
    <span className={styles.tag} key={tech}>
      {tech}
    </span>
  ));

  return (
    <div className={styles.project}>
      <div className={styles.left}>
        <img src={project.thumbnail} alt={project.name} />
      </div>
      <div className={styles.right}>
        <h3>{project.name}</h3>
        <div className={styles.description}>{project.description}</div>
        <ul>{listItems}</ul>
      </div>
    </div>
  );
};

export default Project;
