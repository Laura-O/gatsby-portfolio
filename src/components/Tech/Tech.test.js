import React from 'react';
import { shallow } from 'enzyme';
import Tech from './Tech';

test('rendering', () => {
  const wrapper = shallow(<Tech path="/something" />);
  expect(wrapper).toMatchSnapshot();
});
