import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components';
import Header from './Header';

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
    wrapper.setState({ menuActive: true });
    wrapper.find('.hamburger').simulate('click');
    expect(wrapper.state().menuActive).toBe(false);
  });

  it('hamburger active', () => {
    wrapper.setState({ menuActive: false });
    const hamburger = wrapper.find('.hamburger');
    expect(hamburger).toHaveStyleRule('width', '30px');
  });

  it('hamburger active', () => {
    wrapper.setState({ menuActive: true });
    const hamburger = wrapper.find('.hamburger');
    expect(hamburger).toHaveStyleRule('z-index', '30');
  });
});
