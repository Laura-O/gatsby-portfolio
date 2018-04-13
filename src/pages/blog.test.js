import React from 'react';
import { shallow } from 'enzyme';

import Index from './blog';
import {
  sitePropType,
  imagePropType,
  markdownRemarkPropType,
} from '../../test/fixtures';

describe('blog', () => {
  test('rendering', () => {
    const renderProps = {
      data: {
        site: sitePropType,
        allMarkdownRemark: {
          edges: [markdownRemarkPropType],
        },
        indexCover: {
          sizes: imagePropType,
        },
      },
    };
    const wrapper = shallow(<Index {...renderProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('no post', () => {
    const noProps = {
      data: {
        site: sitePropType,
        allMarkdownRemark: {
          edges: [],
        },
        indexCover: {
          sizes: imagePropType,
        },
      },
    };
    const wrapper = shallow(<Index {...noProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
