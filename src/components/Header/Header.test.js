import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
    expect(wrapper.length).toBe(1);
  });

  test('rendering', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('keypress', () => {
    const instance = wrapper.instance();
    wrapper.setState({ menuActive: false });
    instance.handleKeyPress({ keyCode: 27 });
    expect(wrapper.state().menuActive).toBe(true);
  });
});
