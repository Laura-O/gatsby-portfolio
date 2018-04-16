import React from 'react';
import { mount } from 'enzyme';
import Head from './Head';

describe('head', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Head />);
    expect(wrapper.length).toBe(1);
  });

  test('rendering', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
