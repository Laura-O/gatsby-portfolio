export const imagePropType = {
  sizes: 'image',
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
          sizes: imagePropType,
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
