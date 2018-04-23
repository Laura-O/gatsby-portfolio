import React from 'react';
import { shallow } from 'enzyme';

import TemplateWrapper from './index';

describe('rendering', () => {
  const props = {
    children: () => 'children',
  };

  it('it renders in production', () => {
    process.env.NODE_ENV = 'production';
    const wrapper = shallow(<TemplateWrapper {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('renders outside production', () => {
    process.env.NODE_ENV = 'test';
    const wrapper = shallow(<TemplateWrapper {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  afterEach(() => {
    delete process.env.NODE_ENV;
  });
});
