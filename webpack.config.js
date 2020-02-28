const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (_, { mode = 'development' }) => {
  return {
    mode,
    entry: './src/index.pcss',
    output: {
      path: path.join(__dirname, 'www'),
    },
    module: {
      rules: [
        {
          test: /\.p?css$/,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: '../',
              },
            },
            { loader: 'css-loader', options: { importLoaders: 1 } },
            'postcss-loader',
          ],
        },
        {
          test: /\.(svg|png|ico|jpe?g|gif)(\?.*)?$/i,
          use: {
            loader: 'url-loader',
            // options: {
            //   // limit: 50,
            //   name: 'images/[name].[ext]',
            // },
          },
        },
        {
          test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
          use: {
            loader: 'url-loader',
            // options: {
            //   // limit: 50,
            //   name: 'fonts/[name].[ext]',
            // },
          },
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new MiniCssExtractPlugin(),
    ],
  };
};
