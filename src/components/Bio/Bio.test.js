import React from 'react';
import { shallow } from 'enzyme';
import Bio from './Bio';

test('rendering', () => {
  const wrapper = shallow(<Bio />);
  expect(wrapper).toMatchSnapshot();
});
