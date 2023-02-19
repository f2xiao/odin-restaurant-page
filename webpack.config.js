const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    page: './src/page.js',
  },
  devtool: 'inline-source-map',
 devServer: {
   static: './dist',
 },
  plugins: [
    new HtmlWebpackPlugin({
      title:`Mei's`,
      inject: false,
      templateContent: ({ htmlWebpackPlugin }) => `
      <!DOCTYPE html>
        <html>
          <head>
            ${htmlWebpackPlugin.tags.headTags}
            <title>${htmlWebpackPlugin.options.title}</title>
          </head>
          <body>
            <div id="content"></div>
            ${htmlWebpackPlugin.tags.bodyTags}
          </body>
        </html>
      `
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
 optimization: {
   runtimeChunk: 'single',
 },
};