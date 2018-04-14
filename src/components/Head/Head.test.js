import React from 'react';
import { shallow } from 'enzyme';
import Head from './Head';

test('rendering', () => {
  const wrapper = shallow(<Head path="/something" />);
  expect(wrapper).toMatchSnapshot();
});
