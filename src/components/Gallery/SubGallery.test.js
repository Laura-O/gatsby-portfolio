import React from 'react';
import { render } from 'react-testing-library';

import { imageArray } from '../../../test/fixtures';

import Layout from '../Layout/layout';
import SubGallery from './SubGallery';

const props = {
  images: imageArray,
  title: 'Example Gallery',
};

describe('rendering', () => {
  const { container, getByText } = render(
    <Layout>
      <SubGallery {...props} />
    </Layout>
  );

  test('it renders the title', () => {
    const titleNode = getByText('Example Gallery');
    expect(titleNode).toBeDefined();
  });

  test('it renders an image', () => {
    const image = container.querySelector('img');

    expect(image).toBeDefined();
  });
});
