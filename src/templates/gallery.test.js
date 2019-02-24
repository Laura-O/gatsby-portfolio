import React from 'react';
import { render, cleanup } from 'react-testing-library'

import GalleryTemplate from './gallery';

afterEach(cleanup)

const props =
{
    "data": {
        "contentfulExtendedGallery": {
            "title": "Example Gallery",
            "id": "id",
            "slug": "example",
            "publishDate": "January 31, 2019",
            "publishDateISO": "2019-01-31",
            "hero": {
                "title": "Hero movie",
                "file": {
                    "url": "//1.mp4"
                }
            },
            "galleries": [
                {
                    "id": "332d2900-fe75-500f-9a42-e0a8ff04c513",
                    "slug": "first",
                    "title": "First Sub",
                    "images": [
                        {
                            "title": "Christmas lights in Selfoss",
                            "fluid": {
                                "base64": "data:image/jpeg;base64,/bla",
                                "aspectRatio": 1.5,
                                "src": "//imagesbla",
                                "srcSet": "//images.ctfassets.netbla",
                                "srcWebp": "//imagesbla&fm=webp",
                                "srcSetWebp": "//images.ctfassets.netbla&q",
                                "sizes": "(max-width: 1000px) 100vw, 1000px"
                            },
                            "fixed": {
                                "height": 267,
                                "width": 400
                            }
                        },
                        {
                            "title": "New Year's eve in Selfoss",
                            "fluid": {
                                "base64": "data:image/jpeg;base64,/bla",
                                "aspectRatio": 1.5,
                                "src": "//images.ctfassets",
                                "srcSet": "//images.ctfassets.net/",
                                "srcWebp": "//images.ctfassets&fm=webp",
                                "srcSetWebp": "//images.ctfassets.net/po1xkkbe5qk0",
                                "sizes": "(max-width: 1000px) 100vw, 1000px"
                            },
                            "fixed": {
                                "height": 267,
                                "width": 400
                            }
                        }
                    ]
                },
                {

                    "id": "2",
                    "slug": "second",
                    "title": "Second Sub",
                    "images": [
                        {
                            "title": "Christmas lights in Selfoss",
                            "fluid": {
                                "base64": "data:image/jpeg;base64,/bla",
                                "aspectRatio": 1.5,
                                "src": "//imagesbla",
                                "srcSet": "//images.ctfassets.netbla",
                                "srcWebp": "//imagesbla&fm=webp",
                                "srcSetWebp": "//images.ctfassets.netbla&q",
                                "sizes": "(max-width: 1000px) 100vw, 1000px"
                            },
                            "fixed": {
                                "height": 267,
                                "width": 400
                            }
                        }
                    ]
                }
            ]
        },
    },
}

describe('rendering', () => {
    test('it renders the title', () => {

        const { getByText } = render(<GalleryTemplate data={props.data} />)

        const titleNode = getByText("Example Gallery")
        expect(titleNode).toBeDefined()

    })
});