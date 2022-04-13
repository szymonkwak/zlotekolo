const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true,
  coveragePathIgnorePatterns: ['/node_modules/', '/test/'],
  modulePaths: [compilerOptions.baseUrl],
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};

process.env = Object.assign(process.env, {
  GOOGLE_CLIENT_ID: '12',
  GOOGLE_CLIENT_SECRET: '122',
  SECRET_TOKEN: 'token',
  CLIENT_URL: '//url',
});
