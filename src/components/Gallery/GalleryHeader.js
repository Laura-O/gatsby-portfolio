import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

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

function GalleryHeader(gallery) {
    return (
      <div>
        <VideoHeader>
          <video autoPlay loop>
            <source type="video/mp4" src={gallery.hero.file.url} />
          </video>
          <Overlay>{gallery.title}</Overlay>
        </VideoHeader>
      </div>
    );
  
}

export default GalleryHeader;

GalleryHeader.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};
