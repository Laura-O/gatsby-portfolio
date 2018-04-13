module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}', '!src/components/icons/*'],
  coveragePathIgnorePatterns: ['Contact.js'],
  moduleNameMapper: {
    '\\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': '<rootDir>/test/__mocks__/styleMock.js',
  },
  testPathIgnorePatterns: ['/.cache/'],
  setupFiles: ['./test/setup.js', 'jest-canvas-mock'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
