module.exports = {
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    coverageReporters: ['json', 'text', 'lcov', 'clover'],
    setupFilesAfterEnv: ['./jest.setup.js'],
  };