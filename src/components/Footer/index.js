import React, { Component } from 'react';
import Link from 'gatsby-link';
import classNames from 'classnames';
import styles from './styles.module.scss';
import github from '../../assets/icons/039-github.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li>
          <img className={styles.icon} src={github} alt="" />
          <a href="/">bla</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
