import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Gallery from 'react-photo-gallery';
import Lightbox from 'react-images';

import {Divider} from '../StyledComponents/index'

const SubGalleryWrapper = styled.div`
  padding: 10px 20px;
`;

export default class SubGallery extends Component {
  constructor() {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  makeGallery() {
    const { images } = this.props;

    const galleryImageSet = images.map(image =>
      Object.assign(
        {},
        {
          key: image.id,
          src: image.fluid.src,
          srcSet: image.fluid.srcSet,
          width: image.fixed.width,
          height: image.fixed.height,
          caption: image.title
        }
      )
    );

    return galleryImageSet;
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    const { currentImage } = this.state;

    this.setState({
      currentImage: currentImage - 1,
    });
  }

  gotoNext() {
    const { currentImage } = this.state;

    this.setState({
      currentImage: currentImage + 1,
    });
  }

  render() {
    const photos = this.makeGallery();
    const { currentImage, lightboxIsOpen } = this.state;
    
    return (
      <SubGalleryWrapper>
        <Gallery photos={photos} onClick={this.openLightbox} margin={5} />

        <Lightbox
          images={photos}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={currentImage}
          isOpen={lightboxIsOpen}
        />
        <Divider>bla</Divider>
      </SubGalleryWrapper>
    );
  }
}

SubGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired
  ),
};
