import React from 'react';
import { render, cleanup } from 'react-testing-library'

import {imageArray} from "../../../test/fixtures"

import Layout from "../Layout/layout"
import SubGallery from './SubGallery';


afterEach(cleanup)


const props = 
            {
                "images": imageArray,
                "title": "Example Gallery"
              }

describe('rendering', () => {
    test('it renders the title', () => {

        const { getByText } = render(<Layout><SubGallery {...props} /></Layout>)

        const titleNode = getByText("Example Gallery")
        expect(titleNode).toBeDefined()

    })
});