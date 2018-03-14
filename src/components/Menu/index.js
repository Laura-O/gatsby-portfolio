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
      <div>
        <nav>
          <ul>
            <li className={styles.item}>
              <Link {...linkProps} to="/">
                Home
              </Link>
            </li>
            <li className={styles.item}>
              <Link {...linkProps} to="/About">
                About
              </Link>
            </li>
            <li className={styles.item}>
              <Link {...linkProps} to="/Projects">
                Projects
              </Link>
            </li>
            <li className={styles.item}>
              <Link {...linkProps} to="/Contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Fullscreen>
  )
}

export default Menu
