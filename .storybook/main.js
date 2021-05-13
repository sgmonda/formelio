const path = require('path');

module.exports = {
  stories: ['../src/**/*.stories.tsx'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/preset-create-react-app',
    // 'storybook-css-modules-preset',
  ],
  webpackFinal: (config) => ({
    ...config,
    module: {
      rules: [
        {
          test: /\.(sass|css)$/,
          use: ['style-loader', 'css-loader?modules=true', 'sass-loader'],
          include: [path.resolve(__dirname, '../')],
        },
        {
          test: /\.(ts|tsx)$/,
          loader: require.resolve('babel-loader'),
          options: {
            presets: [['react-app', { flow: false, typescript: true }]],
          },
        },
      ],
    },
  }),
  typescript: {
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  babel: async (options) => ({
    ...options,
    presets: ['@babel/preset-react'],
  }),
};
