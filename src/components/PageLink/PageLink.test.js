import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library'

import PageLink from './PageLink';

afterEach(cleanup)

describe('rendering', () => {
    
    test('it renders the link', () => {
        const { getByText } = render(<PageLink><div>Hi!</div></PageLink>)

        const titleNode = getByText("Hi!")
        expect(titleNode).toBeDefined()
    })
});
