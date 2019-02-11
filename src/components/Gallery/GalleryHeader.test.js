import React from 'react';
import { render, cleanup } from 'react-testing-library'

import GalleryHeader from './GalleryHeader';

afterEach(cleanup)

describe('rendering', () => {
    test('it renders the title', () => {
        const props = {
            title: 'Title',
            hero: {
                file: {
                    url: "bls"
                }
            }
        }

        const { getByText } = render(<GalleryHeader {...props} />)

        const titleNode = getByText(props.title)
        expect(titleNode).toBeDefined()
    })
});
