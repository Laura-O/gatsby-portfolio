import React, { Component } from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import styles from './styles.module.scss';
import github from '../../assets/icons/github.svg';
import linkedin from '../../assets/icons/linkedin.svg';
import twitter from '../../assets/icons/twitter.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        <ul className={styles.list}>
          <li>
            <a href="https://github.com/Laura-O">
              <img className={styles.icon} src={github} alt="github" />
            </a>
          </li>
          <li>
            <a href="www.linkedin.com/in/lauraohrndorf">
              <img className={styles.icon} src={linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/laura_fyi">
              <img className={styles.icon} src={twitter} alt="twitter" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
