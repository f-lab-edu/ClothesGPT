const path = require('path');

module.exports = {
  root: true,
  parserOptions: {
    project: ['./packages/*/tsconfig.json'],
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'prettier', 'jest'],
  parser: '@typescript-eslint/parser',

  extends: [
    'plugin:@next/next/recommended',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  rules: {
    '@typescript-eslint/no-floating-promises': 'error',
    '@typescript-eslint/no-unused-vars': ['warn', { args: 'none' }],
    '@typescript-eslint/no-empty-function': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-var-requires': 0,
    '@typescript-eslint/interface-name-prefix': 0,
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/no-non-null-assertion': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/no-explicit-any': 0,
    'react/display-name': 0,
    'react/self-closing-comp': 'error',
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [
      'error',
      { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'react/no-unescaped-entities': 0,
    'react/prop-types': 0,
    'no-undef': 0,
    'no-constant-condition': 1,
    'prettier/prettier': [
      'error',
      {
        bracketSpacing: true,
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'none',
        tabWidth: 2,
        useTabs: false,
        bracketSameLine: false,
        semi: true
      }
    ]
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      parser: '@typescript-eslint/parser',
      extends: [
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
      parserOptions: {
        project: ['tsconfig.json', './packages/**/tsconfig.json'],
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2018,
        sourceType: 'module'
      }
    },
    {
      files: [
        'packages/clothes_gpt/**/*.ts?(x)',
        'packages/clothes_gpt/**/*.js?(x)'
      ],
      rules: {
        /* img 는 next/image Image 를 사용하여야 함
           next/image Image 는 width, height의 Prop을 강제하고 있음 */
        '@next/next/no-img-element': 'off'
      },

      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts', '.tsx']
        },
        'import/resolver': {
          typescript: {
            project: path.resolve(
              `${__dirname}/packages/clothes_gpt/tsconfig.json`
            )
          }
        }
      }
    }
  ],
  env: {
    browser: true,
    es6: true,
    jest: true
  }
};
