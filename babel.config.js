module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      '@babel/plugin-transform-export-namespace-from',
      [
        'module-resolver',
        {
          root: '.',
          extensions: [
            '.cjs',
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
            '.android.js',
            '.android.tsx',
            '.ios.js',
            '.ios.tsx',
            '.native.js',
            '.native.tsx',
            '.web.js',
            '.web.tsx',
          ],
          alias: {
            '~': './src',
          },
        },
      ],
    ],
  };
};
