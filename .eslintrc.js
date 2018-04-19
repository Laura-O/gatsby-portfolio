module.exports = {
  env: {
    jest: true,
    browser: true,
  },
  extends: ['airbnb', 'prettier', 'prettier/react'],
  globals: {
    graphql: true,
  },
  rules: {
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: [],
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    treatUndefinedAsUnspecified: 0,
    'react/prop-types': 0,
    'react/require-default-props': 0,
  },
  settings: {
    'import/core-modules': ['react', 'react-helmet'],
  },
};
