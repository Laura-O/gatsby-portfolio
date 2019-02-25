export const imagePropType = {
  base64: 'base64',
  aspectRatio: 1.5,
  src: 'src',
  srcSet: 'srcSet',
  sizes: '(max-width: 600px) 100vw, 600px',
};

export const frontmatterPropType = {
  frontmatter: {
    title: 'title',
    date: 'date',
    updated: 'anotherdate',
    excerpt: 'excerpt',
    timeToRead: 10,
    path: 'path',
    tags: ['tag1', 'tag2'],
    image: {
      childImageSharp: {
        fluid: imagePropType,
      },
    },
  },
};

export const markdownRemarkPropType = {
  node: {
    frontmatter: {
      title: 'title',
      date: 'date',
      excerpt: 'excerpt',
      timeToRead: 10,
      path: 'path',
      image: {
        childImageSharp: {
          fluid: imagePropType,
        },
      },
    },
    id: 'id',
  },
};

export const sitePropType = {
  siteMetadata: {
    title: 'title',
  },
};

export const tagsPropType = {
  fieldValue: 'test1',
  totalCount: 1,
};

export const imageArray = [
  {
    id: 'bla',
    title: 'Image Subtitle',
    fluid: {
      base64:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBXgFeAAD/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEP...',
      aspectRatio: 1.4981273408239701,
      src:
        '//images.ctfassets.net/po1xkkbe5qk0/1uRSPYJuhQhm4OJvg7iR1f/0596a8c3d9a9bfa589a6ffebb590680a/SAM_1172.jpg?w=1000&q=75',
      srcSet:
        '//images.ctfassets.net/po1xkkbe5qk0/1uRSPYJuhQhm4OJvg7iR1f/0596a8c3d9a9bfa589a6ffebb590680a/SAM_1172.jpg?w=250&h=167&q=75 250w,\n//images.ctfassets.net/po1xkkbe5qk0/1uRSPYJuhQhm4OJvg7iR1f/0596a8c3d9a9bfa589a6ffebb590680a/SAM_1172.jpg?w=500&h=334&q=75 500w,\n//images.ctfassets.net/po1xkkbe5qk0/1uRSPYJuhQhm4OJvg7iR1f/0596a8c3d9a9bfa589a6ffebb590680a/SAM_1172.jpg?w=1000&h=668&q=75 1000w,\n//images.ctfassets.net/po1xkkbe5qk0/1uRSPYJuhQhm4OJvg7iR1f/0596a8c3d9a9bfa589a6ffebb590680a/SAM_1172.jpg?w=1200&h=...',
      srcWebp:
        '//images.ctfassets.net/po1xkkbe5qk0/1uRSPYJuhQhm4OJvg7iR1f/0596a8c3d9a9bfa589a6ffebb590680a/SAM_1172.jpg?w=1000&q=75&fm=webp',
      srcSetWebp:
        '//images.ctfassets.net/po1xkkbe5qk0/1uRSPYJuhQhm4OJvg7iR1f/0596a8c3d9a9bfa589a6ffebb590680a/SAM_1172.jpg?w=250&h=167&q=75&fm=webp 250w,\n//images.ctfassets.net/po1xkkbe5qk0/1uRSPYJuhQhm4OJvg7iR1f/0596a8c3d9a9bfa589a6ffebb590680a/SAM_1172.jpg?w=500&h=334&q=75&fm=webp 500w,\n//images.ctfassets.net/po1xkkbe5qk0/1uRSPYJuhQhm4OJvg7iR1f/0596a8c3d9a9bfa589a6ffebb590680a/SAM_1172.jpg?w=1000&h=668&q=75&fm=webp 1000w,\n//images.ctfassets.net/po1xkkbe5qk0/1uRSPYJuhQhm4OJvg7iR1f/0596a8c3d9a9bfa589a6ffebb590680...',
      sizes: '(max-width: 1000px) 100vw, 1000px',
    },
    fixed: {
      height: 267,
      width: 400,
    },
  },
  {
    id: 'bla2',
    title: 'Nothern Lights',
    fluid: {
      base64:
        'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEBXgFeAAD/4gxYSUNDX1BST0ZJTEUAAQEAAAxITGlubwIQAABtbnRyUkdCIFhZWiAHzgACAAkABgAxAABhY3NwTVNGVAAAAABJRUMgc1JHQgAAAAAAAAAAAAAAAAAA9tYAAQAAAADTLUhQICAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABFjcHJ0AAABUAAAADNkZXNjAAABhAAAAGx3dHB0AAAB8AAAABRia3B0AAACBAAAABRyWFlaAAACGAAAABRnWFlaAAACLAAAABRiWFlaAAACQAAAABRkbW5kAAACVAAAAHBkbWRkAAACxAAAAIh2dWVkAAADTAAAAIZ2aWV3AAAD1AAAACRsdW1pAAAD+AAAABRtZWFzAAAEDAAAACR0ZWNoAAAEMAAAAAxyVFJDAAAEPAAACAxnVFJDAAAEP...',
      aspectRatio: 1.4981273408239701,
      src:
        '//images.ctfassets.net/po1xkkbe5qk0/5Z1ZrOoTCNFnVlLPs1w0YW/adaf038f08b8a816210d60b03563b9ba/SAM_1125.jpg?w=1000&q=75',
      srcSet:
        '//images.ctfassets.net/po1xkkbe5qk0/5Z1ZrOoTCNFnVlLPs1w0YW/adaf038f08b8a816210d60b03563b9ba/SAM_1125.jpg?w=250&h=167&q=75 250w,\n//images.ctfassets.net/po1xkkbe5qk0/5Z1ZrOoTCNFnVlLPs1w0YW/adaf038f08b8a816210d60b03563b9ba/SAM_1125.jpg?w=500&h=334&q=75 500w,\n//images.ctfassets.net/po1xkkbe5qk0/5Z1ZrOoTCNFnVlLPs1w0YW/adaf038f08b8a816210d60b03563b9ba/SAM_1125.jpg?w=1000&h=668&q=75 1000w,\n//images.ctfassets.net/po1xkkbe5qk0/5Z1ZrOoTCNFnVlLPs1w0YW/adaf038f08b8a816210d60b03563b9ba/SAM_1125.jpg?w=1200&h=...',
      srcWebp:
        '//images.ctfassets.net/po1xkkbe5qk0/5Z1ZrOoTCNFnVlLPs1w0YW/adaf038f08b8a816210d60b03563b9ba/SAM_1125.jpg?w=1000&q=75&fm=webp',
      srcSetWebp:
        '//images.ctfassets.net/po1xkkbe5qk0/5Z1ZrOoTCNFnVlLPs1w0YW/adaf038f08b8a816210d60b03563b9ba/SAM_1125.jpg?w=250&h=167&q=75&fm=webp 250w,\n//images.ctfassets.net/po1xkkbe5qk0/5Z1ZrOoTCNFnVlLPs1w0YW/adaf038f08b8a816210d60b03563b9ba/SAM_1125.jpg?w=500&h=334&q=75&fm=webp 500w,\n//images.ctfassets.net/po1xkkbe5qk0/5Z1ZrOoTCNFnVlLPs1w0YW/adaf038f08b8a816210d60b03563b9ba/SAM_1125.jpg?w=1000&h=668&q=75&fm=webp 1000w,\n//images.ctfassets.net/po1xkkbe5qk0/5Z1ZrOoTCNFnVlLPs1w0YW/adaf038f08b8a816210d60b03563b9b...',
      sizes: '(max-width: 1000px) 100vw, 1000px',
    },
    fixed: {
      height: 267,
      width: 400,
    },
  },
];
