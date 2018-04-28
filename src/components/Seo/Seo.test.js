import React from 'react';
import { shallow } from 'enzyme';
import Seo from './Seo';

describe('seo', () => {
  const props = {
    data: {
      title: 'title',
      description: 'description',
    },
  };

  test('post', () => {
    const wrapper = shallow(<Seo isPost {...props} />);
    expect(wrapper).toMatchSnapshot();
  });

  test('noPost', () => {
    const wrapper = shallow(<Seo isPost={false} {...props} />);
    expect(wrapper).toMatchSnapshot();
  });
});
