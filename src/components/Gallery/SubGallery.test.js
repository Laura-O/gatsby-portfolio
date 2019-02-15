import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library'

import SubGallery from './SubGallery';

afterEach(cleanup)


const props = 
            {
                "images": [
                  {
                    "title": "Image1",
                    "fluid": {
                      "base64": "base64",
                      "aspectRatio": 1.5,
                      "src": "//images",
                      "srcSet": "//images",
                      "srcWebp": "//images",
                      "srcSetWebp": "//images",
                      "sizes": "(max-width: 1000px) 100vw, 1000px"
                    },
                    "fixed": {
                      "height": 267,
                      "width": 400
                    }
                  },
                  {
                    "title": "Northern Lights",
                    "fluid": {
                      "base64": "base64",
                      "aspectRatio": 1.5,
                      "src": "//images",
                      "srcSet": "//images",
                      "srcWebp": "//images",
                      "srcSetWebp": "//images",
                      "sizes": "(max-width: 1000px) 100vw, 1000px"
                    },
                    "fixed": {
                      "height": 267,
                      "width": 400
                    }
                  }
                ],
                "title": "Example Gallery"
              }

describe('rendering', () => {
    test('it renders the title', () => {

        const { getByText } = render(<SubGallery {...props} />)

        const titleNode = getByText("Example Gallery")
        expect(titleNode).toBeDefined()
    })
});
