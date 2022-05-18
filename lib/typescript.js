module.exports = {
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

  overrides: [
    {
      files: ['*.{ts,tsx}'],

      parser: '@typescript-eslint/parser',

      extends: ['plugin:@typescript-eslint/recommended'],

      rules: {
        camelcase: 'off',
        'no-restricted-globals': 'off',
        'no-shadow': 'off',
        'no-use-before-define': 'off',
        'spaced-comment': ['error', 'always', { markers: ['/'] }],

        'import/extensions': ['error', 'never', { json: 'always' }],
        'import/no-extraneous-dependencies': [
          'error',
          {
            devDependencies: [
              'test/**/*.{ts,tsx}',
              'tests/**/*.{ts,tsx}',
              '**/*.test.{ts,tsx}',
              '**/*.{story,stories}.{ts,tsx}',
            ],
            optionalDependencies: false,
          },
        ],

        'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
        'react/prop-types': 'off',
        'react/require-default-props': 'off',

        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/naming-convention': [
          'error',
          {
            selector: 'variable',
            format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
          },
          {
            selector: 'function',
            format: ['camelCase', 'PascalCase'],
          },
          {
            selector: 'typeLike',
            format: ['PascalCase'],
          },
        ],
        '@typescript-eslint/no-empty-function': 'off',
        '@typescript-eslint/no-explicit-any': [
          'error',
          {
            fixToUnknown: true,
            ignoreRestArgs: true,
          },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            args: 'none',
            ignoreRestSiblings: true,
            vars: 'all',
          },
        ],
        '@typescript-eslint/no-use-before-define': 'error',
      },
    },
  ],
};
