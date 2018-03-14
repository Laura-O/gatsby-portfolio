import React from 'react'
import Link from 'gatsby-link'

import Fullscreen from '../Fullscreen'

import styles from './styles.module.scss'

const Menu = ({ active, toggleNav }) => {
  const linkProps = {
    onClick: toggleNav,
  }

  return (
    <Fullscreen className={active ? styles.menu : styles.disable}>
      <nav className={styles.nav}>
        <div className={styles.item}>
          <Link {...linkProps} to="/">
            Home
          </Link>
        </div>
        <div className={styles.item}>
          <Link {...linkProps} to="/about">
            About
          </Link>
        </div>
        <div className={styles.item}>
          <Link {...linkProps} to="/projects">
            Projects
          </Link>
        </div>
        <div className={styles.item}>
          <Link {...linkProps} to="/contact">
            Contact
          </Link>
        </div>
      </nav>
    </Fullscreen>
  )
}

export default Menu
