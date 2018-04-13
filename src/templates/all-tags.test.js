import React from 'react';
import { shallow } from 'enzyme';

import AllTags from './all-tags';

describe('blog', () => {
  test('two tags', () => {
    const renderProps = {
      pathContext: {
        tags: ['tag1', 'tag2'],
      },
    };
    const wrapper = shallow(<AllTags {...renderProps} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('no tags', () => {
    const renderProps = {
      pathContext: {},
    };
    const wrapper = shallow(<AllTags {...renderProps} />);
    expect(wrapper).toMatchSnapshot();
  });
});
