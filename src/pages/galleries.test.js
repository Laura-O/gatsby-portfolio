import React from 'react';
import { render, cleanup } from 'react-testing-library'

import Galleries from './galleries';

afterEach(cleanup)

describe('rendering', () => {
    const data =
    { 
          "allContentfulExtendedGallery": {
            "edges": [
              {
                "node": {
                  "id": "randomId",
                  "slug": "gallerySlud",
                  "title": "galleryTitle",
                  "preview": {
                    "fluid": {
                      "base64": "base64",
                      "aspectRatio": 1.5,
                      "src": "src",
                      "srcSet": "srcSet",
                      "srcWebp": "srcWebp",
                      "srcSetWebp": "srcSetWebp",
                      "sizes": "(max-width: 400px) 100vw, 400px"
                    }
                  }
                },
                
              }
            ]
          }
        }
      
         
    
    test('it renders the link to the gallery', () => {
        const { getByText } = render(<Galleries data = {data}/>)

        const galleryTitle = getByText("galleryTitle")
        expect(galleryTitle).toBeDefined()
    })

    test('it renders a message when there is no gallery', () => {
        const { getByText } = render(<Galleries/>)

        const none = getByText("There are not galleries available.")
        expect(none).toBeDefined()
    })
});
