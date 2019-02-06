import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import agua from '../../assets/aqua.mp4';

const VideoHeader = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 500px;
  overflow: hidden;

  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Overlay = styled.div`
  background: rgba(255, 255, 255, 0.9);
  position: absolute;
  top: 400px;
  width: 100%;
  padding: 2em;
  line-height: 1.5;
  text-align: center;
`;

export default class GalleryHeader extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <VideoHeader>
          <video autoPlay loop>
            <source type="video/mp4" src={agua} />
          </video>
          <Overlay>dsada</Overlay>
        </VideoHeader>
      </div>
    );
  }
}

GalleryHeader.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};
