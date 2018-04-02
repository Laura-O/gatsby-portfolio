import React, { Component } from 'react';
import Link from 'gatsby-link';
import anime from 'animejs';
import StartAnimation from '../components/StartAnimation';
import Fireworks from '../components/Fireworks';

class IndexPage extends Component {
  render() {
    return (
      <div className="container">
        <StartAnimation />
        <div className="about-me">
          I'm Laura, a full-stack developer based in Germany.
        </div>
        <Fireworks />
        <div className="start-buttons">
          <div className="start-button">
            <Link to="/about">
              <button className="pulse">About</button>
            </Link>
          </div>
          <div className="start-button">
            <Link to="/projects">
              <button className="pulse">Projects</button>
            </Link>
          </div>
          <div className="start-button">
            <Link to="/blog">
              <button className="pulse">Blog</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default IndexPage;
