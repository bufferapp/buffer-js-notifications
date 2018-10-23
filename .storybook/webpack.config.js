module.exports = {
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules(?!\/@bufferapp\/components)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
}
