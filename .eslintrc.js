module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': ['warn', { extensions: ['.js', '.jsx'] }],
    indent: ['error', 2],
    quotes: ['warn', 'single'],
    semi: ['error', 'always'],
    'no-console': 'warn',
    'eol-last': 'error',
    eqeqeq: 'error',
    'no-var': 'off',
    'no-trailing-spaces': 2,
    'space-before-blocks': ['warn', { keywords: 'always' }],
    'arrow-spacing': [2, { before: true, after: true }],
    'comma-spacing': [2, { before: false, after: true }],
    'import/no-extraneous-dependencies': 'off',
    'semi-spacing': 2,
    'no-mixed-spaces-and-tabs': 1,
    'object-curly-spacing': [2, 'always'],
    'no-multiple-empty-lines': [2, { max: 2 }],
    'jsx-quotes': [1, 'prefer-double'],
    'react/no-did-mount-set-state': 1,
    'react/no-did-update-set-state': 1,
    'react/no-direct-mutation-state': 1,
    'react/no-unknown-property': 1,
    'react/self-closing-comp': 1,
    'react/sort-comp': 2,
  },
};
