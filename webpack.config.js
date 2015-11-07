module.exports = {
  context: __dirname + '/src',
  entry: {
    javascript: './index.jsx',
    html: './index.html'
  },
  output: {
    filename: 'bundle.js',
    path: __dirname + '/build'
  },
  module: {
    preloaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: 'jshint-loader'
      }
    ],
    loaders: [
      {
        test: [/\.js$/, /\.es6$/, /\.jsx$/],
        exclude: /node_modules/,
        loaders: ['react-hot', 'babel-loader']
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        loaders: ["file?name=[name].[ext]"]
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6', '.jsx']
  }
}