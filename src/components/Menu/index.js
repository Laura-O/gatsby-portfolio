import React, { Component } from 'react'
import Link from 'gatsby-link'

import Fullscreen from '../Fullscreen'

import styles from './styles.module.scss'

export default class Menu extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const linkProps = {
      onClick: this.props.toggleNav,
    }

    return (
      <Fullscreen className={this.props.active ? styles.menu : styles.disable}>
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
}
