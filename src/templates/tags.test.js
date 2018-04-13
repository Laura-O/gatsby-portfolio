import React from 'react';
import { shallow } from 'enzyme';

import Tags from './tags';
import {
  frontmatterPropType,
  sitePropType,
  imagePropType,
  markdownRemarkPropType,
} from '../../test/fixtures';

describe('blog', () => {
  test('1 tag', () => {
    const renderProps = {
      data: {
        allMarkdownRemark: {
          edges: [
            {
              node: {
                ...frontmatterPropType,
              },
            },
          ],
          totalCount: 1,
        },
      },
      pathContext: {
        tag: 'tag1',
      },
    };
    const wrapper = shallow(<Tags {...renderProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('2 tags', () => {
    const renderProps = {
      data: {
        allMarkdownRemark: {
          edges: [
            {
              node: {
                ...frontmatterPropType,
              },
            },
          ],
          totalCount: 2,
        },
      },
      pathContext: {
        tag: 'tag1',
      },
    };
    const wrapper = shallow(<Tags {...renderProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
