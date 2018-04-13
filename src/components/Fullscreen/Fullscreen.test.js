import React from 'react';
import { shallow } from 'enzyme';
import Fullscreen from './Fullscreen';

test('rendering', () => {
  const wrapper = shallow(<Fullscreen />);
  expect(wrapper).toMatchSnapshot();
});
