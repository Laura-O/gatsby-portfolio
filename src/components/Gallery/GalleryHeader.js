import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const GalleryHeader = ({ gallery }) => <div>das</div>;

export default GalleryHeader;

GalleryHeader.propTypes = {
  project: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
  }),
};
