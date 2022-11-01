module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: 'airbnb-base',
  rules: {
    'max-len': ['error', { code: 120, ignoreComments: true }],
    semi: [
      'error',
      'never',
    ],
  },
  parserOptions: {
    ecmaVersion: 2022,
  },
}
