module.exports = {
  root: true,
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: './',
  },
  plugins: ['prettier', '@typescript-eslint', 'jest', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'import/no-unresolved': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': ['error', 'ignorePackages', { js: 'never', ts: 'never' }],
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-multiple-empty-lines': 'error',
  },
};
