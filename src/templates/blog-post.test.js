import React from 'react';
import { render } from 'react-testing-library';

import Template from './blog-post';
import {
  frontmatterPropType,
  sitePropType,
  imagePropType,
} from '../../test/fixtures';

describe('blog', () => {
  const renderProps = {
    data: {
      site: sitePropType,
      markdownRemark: {
        ...frontmatterPropType,
      },
      indexCover: {
        sizes: imagePropType,
      },
    },
  };

  const { getByText } = render(<Template {...renderProps} />);

  test('rendering', () => {
    const title = getByText('title');
    expect(title).toBeDefined();
  });

  test('updated', () => {
    const subtitle = getByText('Updated: anotherdate');
    expect(subtitle).toBeDefined();
  });
});
