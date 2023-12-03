const {
  merge
} = require('webpack-merge');

const common = require('./common.config.js');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ImageMinimizerPlugin = require('image-minimizer-webpack-plugin');

const TerserPlugin = require('terser-webpack-plugin');

const plugins = [new MiniCssExtractPlugin({
  filename: '[contenthash].css'
}), // Compress images
new ImageMinimizerPlugin({
  minimizer: {
    implementation: ImageMinimizerPlugin.imageminMinify,
    options: {
      plugins: [['gifsicle', {
        interlaced: true
      }], ['jpegtran', {
        progressive: true
      }], ['optipng', {
        optimizationLevel: 8
      }], ['svgo', {
        plugins: [{
          name: 'preset-default',
          params: {
            overrides: {
              addAttributesToSVGElement: {
                params: {
                  attributes: [{
                    xmlns: 'http://www.w3.org/2000/svg'
                  }]
                }
              },
              removeViewBox: false
            }
          }
        }]
      }]]
    }
  }
})];
module.exports = merge(common, {
  devtool: false,
  mode: 'production',
  optimization: {
    minimize: true,
    // Affects Terser Plugin
    minimizer: [new TerserPlugin({
      extractComments: false,
      terserOptions: {
        compress: true,
        mangle: false,
        output: {
          beautify: true,
          comments: false
        }
      }
    })],
    usedExports: false
  },
  output: {
    filename: '[fullhash].js'
  },
  plugins,
  target: 'browserslist'
});