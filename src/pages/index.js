import React, { Component } from 'react';
import Link from 'gatsby-link';
import anime from 'animejs';
import StartAnimation from '../components/StartAnimation';
import Fireworks from '../components/Fireworks';

class IndexPage extends Component {
  componentDidMount() {
    anime({
      targets: '.animate',
      translateX: [{ value: 100, duration: 1200 }, { value: 0, duration: 800 }],
      rotate: '1turn',
      backgroundColor: '#000',
      duration: 2000,
      loop: true,
    });
  }

  render() {
    return (
      <div className="container">
        <StartAnimation />
        <Fireworks />
      </div>
    );
  }
}

export default IndexPage;
