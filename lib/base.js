module.exports = {
  root: true,

  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/unicorn',
  ],

  plugins: ['prettier'],

  globals: {
    workbox: true,
  },

  env: {
    browser: true,
    node: true,
  },

  reportUnusedDisableDirectives: true,

  settings: {
    'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx'],
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
      },
    },
  },

  rules: {
    'no-underscore-dangle': [
      'error',
      {
        allow: ['__typename', '__WB_MANIFEST'],
        allowAfterThis: false,
        allowAfterSuper: false,
        enforceInMethodNames: true,
      },
    ],

    'jsx-a11y/anchor-is-valid': 'off',

    'prettier/prettier': 'error',

    'promise/always-return': 'off',
    'promise/catch-or-return': 'off',
    'promise/no-nesting': 'off',
    'promise/no-return-wrap': ['error', { allowReject: true }],

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
        noSortAlphabetically: true,
        reservedFirst: true,
        shorthandFirst: true,
      },
    ],
    'react/state-in-constructor': 'off',
    'react/static-property-placement': 'off',

    'unicorn/no-nested-ternary': 'off',
    'unicorn/no-null': 'off',
    'unicorn/no-useless-undefined': 'off',
    'unicorn/prefer-node-remove': 'off',
    'unicorn/prefer-number-properties': 'off',
    'unicorn/prevent-abbreviations': 'off',
  },
};
