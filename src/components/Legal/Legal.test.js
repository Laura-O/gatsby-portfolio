import React from 'react';
import { shallow } from 'enzyme';
import Legal from './Legal';

test('rendering', () => {
  const wrapper = shallow(<Legal />);
  expect(wrapper).toMatchSnapshot();
});
