const path = require('path');

module.exports = {
  entry: {
    main: './src/js/script.ts',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/js')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  devServer:{
    watchOptions: {
      ignored: /node_modules/
    },
    contentBase: [
      './dist',
      './dist/css'
      // path.resolve(__dirname, 'dist'),
      // path.resolve(__dirname, 'dist/css')
    ],
    watchContentBase: true,
    inline: true
  }
};