module.exports = {
  root: true,
  parser: 'babel-eslint',
  env: {
    browser: true,
    jquery: true
  },
  // extends: [
  //   'standard'
  // ],
  rules: {
    'array-bracket-spacing': 'error',
    'brace-style': 'error',
    'camelcase': 'warn',
    'comma-style': ['error', 'last'],
    'curly': 'error',
    'dot-notation': 'error',
    'eol-last': 'error',
    'eqeqeq': 'error',
    'indent': ['error', 4],
    'keyword-spacing': 'error',
    'new-cap': 'warn',
    'no-array-constructor': 'warn',
    'no-eval': 'warn',
    'no-loop-func': 'warn',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': 'error',
    'no-new-func': 'error',
    'no-new-object': 'error',
    'no-param-reassign': 'warn',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'warn',
    'no-unneeded-ternary': 'error',
    'no-useless-escape': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'one-var': ['error', 'never'],
    'padded-blocks': ['error', 'never'],
    'quotes': ['error', 'single'],
    'semi': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': 'error',
    'space-in-parens': 'error',
    'space-infix-ops': 'error',
    'spaced-comment': ['error', 'always'],
    'wrap-iife': 'error'
  }
}
