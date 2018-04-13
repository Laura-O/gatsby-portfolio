import React from 'react';
import { shallow } from 'enzyme';
import StartAnimation from './StartAnimation';

test('rendering', () => {
  const wrapper = shallow(<StartAnimation path="/something" />);
  expect(wrapper).toMatchSnapshot();
});
