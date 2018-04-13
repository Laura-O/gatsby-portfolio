import React from 'react';
import { shallow } from 'enzyme';

import AboutPage from './about';

test('rendering', () => {
  const wrapper = shallow(<AboutPage />);
  expect(wrapper).toMatchSnapshot();
});
