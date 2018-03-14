import React, { Component } from 'react'
import Link from 'gatsby-link'
import classNames from 'classnames'
import Menu from '../Menu'
import styles from './styles.module.scss'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menuActive: false,
    }

    this.toggleMenu = this.toggleMenu.bind(this)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress)
  }

  toggleMenu() {
    console.log(this.state.menuActive)
    this.setState({ menuActive: !this.state.menuActive })
  }

  handleKeyPress(event) {
    if (event.keyCode === 27) {
      this.toggleMenu(false)
    }
  }
  render() {
    const { menuActive } = this.state

    const barStyle = this.state.menuActive ? 'animate' : ''
    console.log(barStyle)

    return (
      <header className={styles.header}>
        <div
          className={menuActive ? styles.active : styles.icon}
          onClick={() => this.toggleMenu()}
        >
          <span />
          <span />
          <span />
          <span />
        </div>
        <Menu toggleNav={() => this.toggleMenu()} active={menuActive} />
      </header>
    )
  }
}
