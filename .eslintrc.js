module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  globals: {
    window: true,
    define: true,
    require: true,
    module: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
      es6: true,
    },
    sourceType: 'module',
  },
  plugins: ['babel', 'react', 'simple-import-sort', 'prettier'],
  rules: {
    'padding-line-between-statements': ['warn', { blankLine: 'never', prev: 'import', next: 'import' }],
    'linebreak-style': ['warn', 'unix'],
    'lines-between-class-members': ['warn', 'always'],
    'react/destructuring-assignment': ['warn', 'always'],
    'react/prop-types': ['warn'],
    'no-console': ['warn'],
    'no-fallthrough': ['warn'],
    'no-unused-vars': ['warn'],
    'no-debugger': ['warn'],
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'lf',
      },
    ],
    'simple-import-sort/sort': [
      'warn',
      {
        groups: [
          [
            // Side effect imports.
            '^\\u0000',
            // Packages.
            // Things that start with a letter (or digit or underscore), or `@` followed by a letter.
            '^@?\\w',
            // Absolute imports and other imports such as Vue-style `@/foo`.
            // Anything that does not start with a dot.
            '^[^.]',
            // Relative imports.
            // Anything that starts with a dot.
            '^\\.',
          ],
        ],
      },
    ],
    'react/self-closing-comp': [
      'warn',
      {
        component: true,
        html: true,
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
