import React from 'react';
import { shallow } from 'enzyme';

import IndexPage from './index';

test('rendering', () => {
  const wrapper = shallow(<IndexPage />);
  expect(wrapper).toMatchSnapshot();
});
