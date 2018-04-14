import React from 'react';
import { shallow } from 'enzyme';
import Credits from './Credits';

test('rendering', () => {
  const wrapper = shallow(<Credits path="/something" />);
  expect(wrapper).toMatchSnapshot();
});
