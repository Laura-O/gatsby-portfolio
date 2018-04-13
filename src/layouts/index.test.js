import React from 'react';
import { shallow } from 'enzyme';

import TemplateWrapper from './index';

test('rendering', () => {
  const props = {
    children: () => 'children',
  };
  const wrapper = shallow(<TemplateWrapper {...props} />);
  expect(wrapper).toMatchSnapshot();
});
