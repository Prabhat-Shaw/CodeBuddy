import * as React from 'react';
import Particles from 'react-particles-js';

const CubicParticleWrapper = () => (
  <Particles
    className="cubic-particles"
    style={{
      width: '100vw',
      height: '100vh',
    }}
    params={{
      particles: {
        number: {
          value: 33,
          density: {
            enable: true,
            value_area: 1183.721462448409,
          },
        },
        color: {
          value: '#848484',
        },
        shape: {
          type: 'polygon',
          stroke: {
            width: 0,
            color: '#000',
          },
          polygon: {
            nb_sides: 6,
          },
          image: {
            src: 'img/github.svg',
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.3,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 10,
          random: true,
          anim: {
            enable: true,
            speed: 10,
            size_min: 40,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 200,
          color: '#ffffff',
          opacity: 1,
          width: 2,
        },
        move: {
          enable: true,
          speed: 3,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: true,
            rotateX: 400,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: false,
            mode: 'grab',
          },
          onclick: {
            enable: false,
            mode: 'push',
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      // @ts-ignore
      retina_detect: true,
    }}
  />
);

export default CubicParticleWrapper;