module.exports = {
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/resolver': {
      node: {
        extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  overrides: [
    {
      files: ['*.{ts,tsx}'],

      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
      ],

      rules: {
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

        'react/prop-types': 'off',
        'react/require-default-props': 'off',

        '@typescript-eslint/ban-types': 'off',
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-explicit-any': [
          'error',
          {
            fixToUnknown: true,
            ignoreRestArgs: true,
          },
        ],
        '@typescript-eslint/no-non-null-assertion': 'error',
      },
    },
  ],
};
