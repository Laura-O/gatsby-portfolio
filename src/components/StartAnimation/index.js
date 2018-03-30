import React, { Component } from 'react';
import Link from 'gatsby-link';

import styles from './styles.module.scss';

class StartAnimation extends Component {
  render() {
    return (
      <div>
        <svg viewBox="0 0 600 300">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="50%" dy=".35em">
              Hi!
            </text>
          </symbol>

          <use xlinkHref="#s-text" className={styles.text} />
          <use xlinkHref="#s-text" className={styles.text} />
          <use xlinkHref="#s-text" className={styles.text} />
          <use xlinkHref="#s-text" className={styles.text} />
          <use xlinkHref="#s-text" className={styles.text} />
        </svg>
      </div>
    );
  }
}

export default StartAnimation;
