import React from 'react';
import { render, cleanup } from 'react-testing-library'

import AboutPage from './about';

afterEach(cleanup)

describe('rendering', () => {


  test('it renders the link to the gallery', () => {
    const { getByText } = render(<AboutPage />)

    const title = getByText("Hi, I am Laura!")
    expect(title).toBeDefined()
  })

});
