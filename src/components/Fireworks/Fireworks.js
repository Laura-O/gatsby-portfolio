import React, { Component } from 'react';
import anime from 'animejs';

export default class Fireworks extends Component {
  constructor(props) {
    super(props);
    this.canvas = React.createRef();
  }

  componentDidMount() {
    window.human = false;

    const canvasEl = this.canvas.current;
    const ctx = canvasEl.getContext('2d');
    const numberOfParticules = 30;
    let pointerX = 0;
    let pointerY = 0;
    const tap =
      'ontouchstart' in window || navigator.msMaxTouchPoints
        ? 'touchstart'
        : 'mousedown';
    const colors = ['#dc0073', '#2ec4b6', '#f5b700', '#04e762'];

    function setCanvasSize() {
      canvasEl.width = window.innerWidth * 2;
      canvasEl.height = window.innerHeight * 2;
      canvasEl.style.width = `${window.innerWidth}px`;
      canvasEl.style.height = `${window.innerHeight}px`;
      canvasEl.getContext('2d').scale(2, 2);
    }

    function updateCoords(e) {
      pointerX = e.clientX || e.touches[0].clientX;
      pointerY = e.clientY || e.touches[0].clientY;
    }

    function setParticuleDirection(p) {
      const angle = anime.random(0, 360) * Math.PI / 180;
      const value = anime.random(30, 400);
      const radius = [-1, 1][anime.random(0, 1)] * value;
      return {
        x: p.x + radius * Math.cos(angle),
        y: p.y + radius * Math.sin(angle),
      };
    }

    function createParticule(x, y) {
      const p = {};
      p.x = x;
      p.y = y;
      p.color = colors[anime.random(0, colors.length - 1)];
      p.radius = anime.random(8, 16);
      p.endPos = setParticuleDirection(p);
      p.draw = function() {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, 2 * Math.PI, true);
        ctx.fillStyle = p.color;
        ctx.fill();
      };
      return p;
    }

    function renderParticule(anim) {
      for (let i = 0; i < anim.animatables.length; i++) {
        anim.animatables[i].target.draw();
      }
    }

    function animateParticules(x, y) {
      const particules = [];
      for (let i = 0; i < numberOfParticules; i++) {
        particules.push(createParticule(x, y));
      }
      anime.timeline().add({
        targets: particules,
        x(p) {
          return p.endPos.x;
        },
        y(p) {
          return p.endPos.y;
        },
        radius: 0.1,
        duration: anime.random(500, 1800),
        easing: 'easeOutExpo',
        update: renderParticule,
      });
    }

    const render = anime({
      duration: Infinity,
      update() {
        ctx.clearRect(0, 0, canvasEl.width, canvasEl.height);
      },
    });

    document.addEventListener(
      tap,
      e => {
        window.human = true;
        render.play();
        updateCoords(e);
        animateParticules(pointerX, pointerY);
      },
      false
    );

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    setCanvasSize();
    window.addEventListener('resize', setCanvasSize, false);
  }

  render() {
    return <canvas className="fireworks" ref={this.canvas} />;
  }
}
