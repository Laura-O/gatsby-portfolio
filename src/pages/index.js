import React, { Component } from 'react';
import Link from 'gatsby-link';
import anime from 'animejs';

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
      <div>
        <div className="animate" />
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <canvas />
      </div>
    );
  }
}

export default IndexPage;
