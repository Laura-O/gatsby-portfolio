import React from 'react';
import { shallow } from 'enzyme';
import Project from './Project';

import projects from '../../assets/projects.json';

const first = projects[0];

test('rendering', () => {
  const wrapper = shallow(<Project project={first} />);
  expect(wrapper).toMatchSnapshot();
});
