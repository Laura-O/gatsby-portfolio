import React from 'react';
import { shallow } from 'enzyme';

import NotFoundPage from './404';

test('rendering', () => {
  const wrapper = shallow(<NotFoundPage />);
  expect(wrapper).toMatchSnapshot();
});
