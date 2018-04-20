import React, { Component } from 'react';
import styled from 'styled-components';
import Menu from '../Menu/Menu';
import * as constants from '../../layouts/shared/style-constants';

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  background: ${constants.darkBackground};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  padding: 1.5rem;
  height: ${constants.headerHeight};
  z-index: ${constants.zIndexHeader};
`;

const Hamburger = styled.div`
  width: 30px;
  height: 25px;
  position: relative;
  transform: rotate(0deg);
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 20%;
    width: 100%;
    background: white;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.1);
    z-index: 3;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2),
    &:nth-child(3) {
      top: 40%;
    }

    &:nth-child(4) {
      top: 80%;
    }
  }
  ${props => {
    if (props.active) {
      return `
      z-index: ${constants.zIndexHamburger};
    
      span {
        &:nth-child(1) {
          top: 18px;
          width: 0%;
          left: 50%;
        }
    
        &:nth-child(2) {
          transform: rotate(45deg);
        }
    
        &:nth-child(3) {
          transform: rotate(-45deg);
        }
    
        &:nth-child(4) {
          top: 18px;
          width: 0%;
          left: 50%;
        }
      }
      `;
    }
    return null;
  }};
`;

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }

  toggleMenu() {
    this.setState({ menuActive: !this.state.menuActive });
  }

  handleKeyPress(event) {
    if (event.keyCode === 27) {
      this.toggleMenu(false);
    }
  }
  render() {
    const { menuActive } = this.state;

    return (
      <HeaderWrapper>
        <Hamburger
          active={menuActive}
          onClick={() => this.toggleMenu()}
          className="hamburger"
        >
          <span />
          <span />
          <span />
          <span />
        </Hamburger>

        <Menu toggleNav={() => this.toggleMenu()} active={menuActive} />
      </HeaderWrapper>
    );
  }
}
