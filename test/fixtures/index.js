export const imagePropType = {
  sizes: 'image',
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
