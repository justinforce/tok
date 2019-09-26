module.exports = {
  entry: ['react-hot-loader/patch', './src'],
  module: {
    rules: [
      {
        test: /.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['*', '.js', '.jsx']
  },
  devServer: {
    contentBase: 'dist',
    inline: true,
    hot: true
  }
}
