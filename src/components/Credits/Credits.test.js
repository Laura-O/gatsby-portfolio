import React from 'react';
import { shallow } from 'enzyme';
import Imprint from './Imprint';

test('rendering', () => {
  const wrapper = shallow(<Imprint path="/something" />);
  expect(wrapper).toMatchSnapshot();
});
