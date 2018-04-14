import React from 'react';
import { shallow } from 'enzyme';

import LegalPage from './legal';

test('rendering', () => {
  const wrapper = shallow(<LegalPage />);
  expect(wrapper).toMatchSnapshot();
});
