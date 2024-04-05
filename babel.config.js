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
            '.android.jsx',
            '.android.tsx',
            '.ios.js',
            '.ios.jsx',
            '.ios.tsx',
            '.native.js',
            '.native.jsx',
            '.native.tsx',
            '.web.js',
            '.web.jsx',
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
