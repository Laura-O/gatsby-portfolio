import React from 'react';
import { shallow } from 'enzyme';

import ContactPage from './contact';

test('rendering', () => {
  const wrapper = shallow(<ContactPage />);
  expect(wrapper).toMatchSnapshot();
});
