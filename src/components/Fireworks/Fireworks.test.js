import React from 'react';
import { mount } from 'enzyme';
import Fireworks from './Fireworks';
import 'jest-canvas-mock';

test('rendering', () => {
  const wrapper = mount(<Fireworks />);
  expect(wrapper).toMatchSnapshot();
});
