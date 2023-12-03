module.exports = {
  moduleDirectories: ['../node_modules', '../src'],
  // Modules are meant for code which is repeating in each test file
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/mocks/filesMock.js'
  },
  roots: ['../__tests__', '../src'],
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  // Finds test files named like abc.test|spec.ts?tsx|js|jsx in roots:[] prop.
  testEnvironment: 'jsdom' // To avoid of js DOM errors
  ,
  testMatch: ['**/?(*.)(spec|test).[jt]s?(x)'],
  transform: {
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules-transform' // To work with CSS like modules
    ,
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.tsx?$': ['ts-jest', {
      diagnostics: {
        ignoreCodes: [151001]
      },
      // Compile each file separately. It's lose type-checking ability and some features such as const enum
      // At the current config it helps to avoid of errors with importing css modules
      isolatedModules: true,
      tsconfig: 'tsconfig.json'
    }]
  }
};