import React from 'react';
import { shallow, mount } from 'enzyme';
import Header from './Header';
import Menu from '../Menu/Menu';

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

  test('click', () => {
    const instance = wrapper.instance();
    wrapper.setState({ menuActive: true });
    wrapper.find('div').simulate('click');
    expect(wrapper.state().menuActive).toBe(false);
  });
});
