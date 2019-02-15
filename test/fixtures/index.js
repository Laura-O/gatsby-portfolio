export const imagePropType = {
  "base64": "base64",
  "aspectRatio": 1.5,
  "src": "src",
  "srcSet": "srcSet",
  "sizes": "(max-width: 600px) 100vw, 600px"
};

export const frontmatterPropType = {
  frontmatter: {
    title: 'title',
    date: 'date',
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