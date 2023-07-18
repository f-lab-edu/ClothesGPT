module.exports = {
  rootDir: './',
  testEnvironment: 'jsdom',
  preset: 'ts-jest',
  // setupFiles: ['<rootDir>/__tests__/setup.js'],
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node'],
  testMatch: ['**/?(*.)+(spec|test).(js|ts|tsx)'],
  clearMocks: true,
  transformIgnorePatterns: ['<rootDir>/../node_modules/'],
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/node_modules/**',
    '!**/types/**/*',
  ],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy',
    '^.+.(svg|png|jpg)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/$1',
    '^@/components/(.*)$': '<rootDir>/components/$1',
    '^@/modules/(.*)$': '<rootDir>/modules/$1',
    '^@/types/(.*)$': '<rootDir>/$1',
  },
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  coveragePathIgnorePatterns: ['/node_modules/'],
  testPathIgnorePatterns: ['/node_modules/'],
};
