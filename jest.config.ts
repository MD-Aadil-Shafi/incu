import type { Config } from 'jest';

const config: Config = {
  testEnvironment: 'jsdom', // Required for React DOM testing
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript and TSX files
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1', // Adjust based on your alias setup
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // For RTL setup
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  testMatch: ['**/?(*.)+(spec|test).[tj]s?(x)'], // Match test files
};

export default config;
