const path = require('path')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    alias: {
      'jesus': path.resolve(__dirname, '/home/seanitzel/Documents/Programming/Web/JESUS'),
     },
  },
}