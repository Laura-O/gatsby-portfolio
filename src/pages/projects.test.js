import React from 'react';
import { shallow } from 'enzyme';

import ProjectsPage from './projects';

test('rendering', () => {
  const wrapper = shallow(<ProjectsPage />);
  expect(wrapper).toMatchSnapshot();
});
