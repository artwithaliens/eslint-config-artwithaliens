module.exports = {
  root: true,

  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
  ],

  reportUnusedDisableDirectives: true,

  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.mjs', '.jsx', '.json', '.ts', '.tsx'],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },

  rules: {
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__typename', '_sys'],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],

    'jsx-a11y/anchor-is-valid': 'off',

    'promise/always-return': 'off',
    'promise/catch-or-return': 'off',
    'promise/no-nesting': 'off',
    'promise/no-return-wrap': ['error', { allowReject: true }],
    'promise/prefer-await-to-then': 'error',

    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'react/jsx-handler-names': [
      'error',
      {
        eventHandlerPrefix: 'handle',
        eventHandlerPropPrefix: 'on',
      },
    ],
    'react/jsx-props-no-spreading': 'off',
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        ignoreCase: true,
        noSortAlphabetically: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    'react/no-unknown-property': ['error', { ignore: ['css', 'global', 'jsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',

    'unicorn/filename-case': 'off',
    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/prefer-module': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
};
