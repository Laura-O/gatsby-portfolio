import React from 'react';
import 'jest-styled-components';
import 'jest-dom/extend-expect';
import { render, fireEvent } from 'react-testing-library';

import Header from './Header';

describe('rendering', () => {
  const { container, getByTestId } = render(<Header />);

  test('it renders the hamburger element', () => {
    expect(container.firstChild.firstChild).toHaveClass('hamburger');
  });

  test('open menu', () => {
    fireEvent.click(getByTestId('menu'));
    const menuElement = getByTestId('fullscreen');
    expect(menuElement).toHaveStyle('display: flex');
  });

  test('close menu', () => {
    fireEvent.click(getByTestId('menu'));
    const menuElement = getByTestId('fullscreen');
    expect(menuElement).toHaveStyle('display: none');
  });

  test('key', () => {
    fireEvent.click(getByTestId('menu'));
    fireEvent.keyDown(document.body, {
      key: 'Escape',
      keyCode: 27,
      which: 27,
    });

    const menuElement = getByTestId('fullscreen');

    expect(menuElement).toHaveStyle('display: none');
  });
});
