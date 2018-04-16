import React from 'react';
import { shallow, mount } from 'enzyme';
import 'jest-styled-components';
import Header from './Header';
import Menu from '../Menu/Menu';

describe('header', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Header />);
    expect(wrapper.length).toBe(1);
  });

  it('should render', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should react to keypress', () => {
    const instance = wrapper.instance();
    wrapper.setState({ menuActive: false });
    instance.handleKeyPress({ keyCode: 27 });
    expect(wrapper.state().menuActive).toBe(true);
  });

  it('should react to click', () => {
    const instance = wrapper.instance();
    wrapper.setState({ menuActive: true });
    wrapper.find('.hamburger').simulate('click');
    expect(wrapper.state().menuActive).toBe(false);
  });

  it('hamburger active', () => {
    const instance = wrapper.instance();
    wrapper.setState({ menuActive: false });
    let hamburger = wrapper.find('.hamburger');
    expect(hamburger).toHaveStyleRule('width', '30px');
  });

  it('hamburger active', () => {
    const instance = wrapper.instance();
    wrapper.setState({ menuActive: true });
    let hamburger = wrapper.find('.hamburger');
    expect(hamburger).toHaveStyleRule('z-index', '30');
  });
});
