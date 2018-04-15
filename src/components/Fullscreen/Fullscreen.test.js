import React from 'react';
import { mount } from 'enzyme';
import Fullscreen from './Fullscreen';

describe('fullscreen mode', () => {
  test('active', () => {
    const wrapper = mount(<Fullscreen active={true} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('active', () => {
    const wrapper = mount(<Fullscreen active={false} />);
    expect(wrapper).toMatchSnapshot();
  });
});
