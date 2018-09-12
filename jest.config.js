module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/components/icons/*'],
  coverageDirectory: './coverage/',
  coveragePathIgnorePatterns: ['Contact.js', 'Fireworks.js'],
  transform: {
    '^.+\\.jsx?$': '<rootDir>/jest-preprocess.js',
  },
  testRegex: '/.*(__tests__\\/.*)|(.*(test|spec))\\.jsx?$',
  moduleNameMapper: {
    '\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
  },
  testPathIgnorePatterns: ['node_modules', '.cache'],
  transformIgnorePatterns: ['node_modules/(?!(gatsby)/)'],
  globals: {
    __PATH_PREFIX__: '',
  },
  testURL: 'http://localhost',
  setupFiles: ['./test/setup.js', 'jest-canvas-mock'],
};
