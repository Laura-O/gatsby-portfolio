import React from 'react';
import { mount } from 'enzyme';
import 'jest-canvas-mock';
import Fireworks from './Fireworks';

describe('make fireworks', () => {
  test('rendering', () => {
    const component = mount(<Fireworks width="" />);
    expect(component).toMatchSnapshot();
  });
});
