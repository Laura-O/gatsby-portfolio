import React from 'react';
import { render, cleanup } from 'react-testing-library'

import GalleryTemplate from './gallery';

afterEach(cleanup)

const props = 
            {
                "contentfulExtendedGallery": {
                    "galleries": {

                    }
                },
              }

describe('rendering', () => {
    test('it renders the title', () => {

        const { getByText } = render(<GalleryTemplate data={props} />)

        const titleNode = getByText("Example Gallery")
        expect(titleNode).toBeDefined()

    })
});