import React from 'react';
import { shallow } from 'enzyme';
import Menu from './Menu';

test('rendering', () => {
  const wrapper = shallow(<Menu active toggleNav={jest.fn()} />);
  expect(wrapper).toMatchSnapshot();
});
