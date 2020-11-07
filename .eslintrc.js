module.exports = {
  settings: {
    'import/resolver': {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx"]
      }
    }
  },
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb-typescript',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json'
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    "no-param-reassign": 0,
    "react/require-default-props": "off",
    // "react/prop-types": 0,
    // "no-use-before-define": "off",
    // "@typescript-eslint/no-use-before-define": ["error"],
    // "@typescript-eslint/no-unused-vars": ["error"],
    // "no-shadow": "off",
    // "@typescript-eslint/no-shadow": ["error"],
    // 'react/jsx-filename-extension': [2, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    // "import/extensions": [
    //   "error",
    //   "ignorePackages",
    //   {
    //     "js": "never",
    //     "jsx": "never",
    //     "ts": "never",
    //     "tsx": "never"
    //   }
    // ]
  },
  'overrides': [
    {
      'files': ['*.tsx', '*.ts']
    }
  ],
};
