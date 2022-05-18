/* eslint-disable no-template-curly-in-string */
module.exports = {
  extends: [
    'standard-with-typescript'
  ],
  parserOptions: {
    project: [
      './tsconfig.json'
    ]
  },
  plugins: ['eslint-plugin-import-helpers'],
  rules: {
    '@typescript-eslint/strict-boolean-expressions': 'off',
    '@typescript-eslint/no-misused-promises': 'off',
    'import-helpers/order-imports': [
      'warn',
      { // example configuration
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index']
        ],
        alphabetize: { order: 'asc', ignoreCase: true }
      }
    ]
  }
}
