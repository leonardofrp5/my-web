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
        paths: ['src']
      }
    }
  },
  rules: {
    'react/jsx-filename-extension': [1, { 'extensions': ['.js', '.jsx'] }],
    'indent': ['error', 2],
    'quotes': ['warn', 'single'],
    // 'no-console': 'off',
    // 'semi': ['error', 'always'],
    // comma-dangle": ["error", "always"],
    'import/no-extraneous-dependencies': 'off'
  },
  // overrides: [
  //   {
  //     'files': ['src/*.reportWebVitals.js'],
  //     'rules': {
  //       'no-unused-expressions': 'off'
  //     }
  //   }
  // ]
}
