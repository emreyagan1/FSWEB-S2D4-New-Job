/** @type {import('jest').Config} */
const config = {
  verbose: false,
  watchPathIgnorePatterns: ['./resultz.json'],
  testEnvironment: 'jsdom',
  setupFiles: ['./jest.setup.js'],
};

module.exports = config;
