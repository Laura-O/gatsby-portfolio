import React from 'react';
import { shallow } from 'enzyme';
import { render, cleanup } from 'react-testing-library'

import TemplateWrapper from './layout';

afterEach(cleanup)


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

  it(`renders a header`, () => {
    const { getByText } = render(<TemplateWrapper />)

    const headerElement = getByText('About')
    expect(headerElement).toBeDefined()
})
});
