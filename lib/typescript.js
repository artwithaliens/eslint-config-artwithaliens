module.exports = {
  overrides: [
    {
      files: ['*.{ts,tsx}'],

      parserOptions: {
        project: ['./tsconfig.json'],
        warnOnUnsupportedTypeScriptVersion: false,
      },

      extends: [
        'airbnb-typescript',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
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
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-throw-literal': 'off',
      },
    },
  ],
};
