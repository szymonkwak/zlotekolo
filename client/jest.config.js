const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  setupFilesAfterEnv: ['<rootDir>/src/tests/setup.ts'],
  testEnvironment: 'jest-environment-jsdom',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};
