const path = require('path');

module.exports = function(env) {
  return [
    {
      context: __dirname,
      entry: {
        index: path.join(__dirname, 'src/index.js'),
      },
      mode: 'none',
      module: {
        rules: [
          {
            include: [
              path.join(__dirname, 'src'),
              require.resolve('a')
            ],
            test: /\.js$/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  // NOTE: why cannot apply options to babel-loader from .babelrc.js?
                  babelrc: false,
                  ...require('./.babelrc.js')
                }
              }
            ]
          },
        ],
      },
      output: {
        chunkFilename: 'chunk-[id]-[hash].js',
        filename: '[name].js',
        path: __dirname,
        publicPath: './',
      },
      target: 'web',
    },
  ];
};
