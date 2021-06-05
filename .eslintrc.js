module.exports = {
  root: true,
  plugins: ['jsx-a11y'],
  extends: [
    'react-app',
    'plugin:jsx-a11y/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  rules: {},
  overrides: [
    {
      files: ['*.test.ts?(x)'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
  ],
  settings: {
    react: {
      version: '17',
    },
  },
};
