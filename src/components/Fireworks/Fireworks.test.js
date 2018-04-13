import React from 'react';
import { mount } from 'enzyme';
import Fireworks from './Fireworks';
import 'jest-canvas-mock';

describe('make fireworks', () => {
  test('rendering', () => {
    const component = mount(<Fireworks width="" />);
    expect(component).toMatchSnapshot();
  });
});
