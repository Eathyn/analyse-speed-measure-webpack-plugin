const path = require('path')
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const smp = new SpeedMeasurePlugin()
const webpackConfig = smp.wrap({
  mode: 'development',

  devtool: 'source-map',

  entry: path.resolve(__dirname, 'src', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].module.js',
  },

  plugins: [
    new CleanWebpackPlugin(),
  ],
})

module.exports = webpackConfig
