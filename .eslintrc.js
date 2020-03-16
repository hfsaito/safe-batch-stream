module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/warnings',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  ignorePatterns: ['*.js', '*.jsx', 'node_modules/'],
  rules: {
    'jsx-quotes': ['error', 'prefer-single'],
    quotes: ['error', 'single'],
    'no-throw-literal': 'error',
    'no-undef-init': 'error',
    'no-shadow': [
      'error',
      {
        hoist: 'all',
      },
    ],
    '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'],
    '@typescript-eslint/array-type': [
      'warn',
      {
        arrayOption: 'array',
      },
    ],
    '@typescript-eslint/ban-types': [
      'error',
      {
        types: {
          Array: null,
          Object: 'Use {} instead',
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },
        },
      },
    ],
    '@typescript-eslint/consistent-type-assertions': [
      'warn',
      {
        assertionStyle: 'as',
        objectLiteralTypeAssertions: 'never',
      },
    ],
    'space-before-function-paren': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        caughtErrorsIgnorePattern: '^_',
        ignoreRestSiblings: true,
      },
    ],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/class-name-casing': [
      'error',
      {
        allowUnderscorePrefix: true,
      },
    ],
    'no-useless-escape': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    'no-prototype-builtins': 'off',
    'prefer-spread': 'off',
    'prefer-const': 'error',
    '@typescript-eslint/no-inferrable-types': 'warn',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/type-annotation-spacing': 'off',
    'no-unexpected-multiline': 'off',
    '@typescript-eslint/interface-name-prefix': [
      'error',
      {
        prefixWithI: 'never',
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-empty-function': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/semi': 'error',
    complexity: 'error',
    curly: 'error',
    'dot-notation': 'error',
    'eol-last': 'error',
    eqeqeq: ['error', 'smart'],
    'guard-for-in': 'error',
    'max-classes-per-file': ['error', 1],
    'no-caller': 'error',
    'no-console': 'error',
    'no-eval': 'error',
    'import/no-default-export': 'error'
  }
};