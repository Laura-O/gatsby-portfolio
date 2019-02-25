import React from 'react';
import { render } from 'react-testing-library';

import { mount } from 'enzyme';
import Fullscreen from './Fullscreen';

import 'jest-dom/extend-expect';

describe('fullscreen mode', () => {
  const props = {
    children: [],
  };

  test('active', () => {
    const { getByTestId } = render(<Fullscreen active {...props} />);

    expect(getByTestId('fullscreen')).toHaveStyle('position: fixed');
  });

  test('not active', () => {
    const { getByTestId } = render(<Fullscreen active={false} />);

    expect(getByTestId('fullscreen')).toHaveStyle('display: flex');
  });
});
