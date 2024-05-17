const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js',
  },    
  devServer: {
    static: {
	    directory: path.join(__dirname, 'dist'),
	},
    compress: true,
    port: 9000,
    hot: true,
    },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        minify: {
            collapseWhitespace: true,
        }
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
};