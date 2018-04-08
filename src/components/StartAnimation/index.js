import React, { Component } from 'react';
import Link from 'gatsby-link';

import styles from './styles.module.scss';

class StartAnimation extends Component {
  render() {
    return (
      <div className="hello">
        <svg viewBox="0 0 600 300">
          <symbol id="s-text">
            <text textAnchor="left" x="15%" y="25%" dy=".45em">
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
