import React from 'react';
import { shallow, mount } from 'enzyme';
import Contact from './Contact';
import encode from './Contact';

describe('contactform', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Contact />);
    expect(wrapper.length).toBe(1);
  });

  test('rendering', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('Testing handleChange events', () => {
    const instance = wrapper.instance();

    instance.handleChange({ target: { name: 'email', value: 'myemail' } });

    expect(wrapper.state().email).toBe('myemail');
  });
});
