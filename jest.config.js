/* eslint-disable no-dupe-keys */
/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  testEnvironmentOptions: {
    customExportConditions: [] // don't load "browser" field
  },
  verbose: true,
  collectCoverage: true,
  coverageReporters: ['lcov', 'text'],
  coverageDirectory: 'coverage',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/test/jest/__mocks__/fileMock.js',
    '\\.(css|less)$': '<rootDir>/test/jest/__mocks__/styleMock.js',
  },
  setupFilesAfterEnv: ['<rootDir>/tests/setupTest.tsx'],
  coverageReporters: [
    'clover',
    'html',
    'json',
    'lcov',
    ['text', { skipFull: true }],
  ],
  coverageThreshold: {
    global: {
      lines: 80,
      functions: 50,
      branches: 60,
      statements: 80,
    },
  },
};
