import React from 'react';
import { shallow } from 'enzyme';
import { sitePropType, tagsPropType } from '../../test/fixtures';
import TagsPage from './tags';

test('rendering', () => {
  const props = {
    data: {
      site: sitePropType,
      allMarkdownRemark: {
        group: [tagsPropType],
      },
    },
  };
  const wrapper = shallow(<TagsPage {...props} />);
  expect(wrapper).toMatchSnapshot();
});
