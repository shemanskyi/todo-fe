const webpack = require('webpack');

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');

const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

const FileManagerPlugin = require('filemanager-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, '..', 'build');
const PUBLIC_DIR = path.resolve(__dirname, '..', 'public');
const STATIC_DIR = path.resolve(__dirname, '..', 'static');
const plugins = [new FileManagerPlugin({
  events: {
    onEnd: {
      // Copy static files
      copy: [{
        destination: BUILD_DIR,
        source: STATIC_DIR
      }]
    },
    // Remove build dir
    onStart: {
      delete: [BUILD_DIR]
    }
  }
}), new HtmlWebpackPlugin({
  filename: 'index.html',
  template: path.join(PUBLIC_DIR, 'index.html')
}), //
new FaviconsWebpackPlugin({
  cache: false // Disallow caching the assets across webpack builds.
  ,
  favicons: {
    icons: {
      // Apple startup images.
      android: false,
      appleIcon: false,
      // Apple touch icons.
      appleStartup: false,
      // Regular favicons.
      coast: false,
      // Android homescreen icon.
      favicons: true,
      // Opera Coast icon.
      firefox: false,
      // Firefox OS icons.
      windows: false,
      // Windows 8 tile icons.
      yandex: false // Yandex browser icon.

    }
  },
  // Injecting into all HTML Files or separately (for an every instance of HtmlWebpackPlugin)
  // inject: true,
  inject: htmlPlugin => path.basename(htmlPlugin.options.filename) === 'index.html',
  logo: path.resolve(PUBLIC_DIR, 'favicon.svg'),
  mode: 'webapp',
  outputPath: path.resolve(BUILD_DIR, 'favicons'),
  prefix: '/favicons/'
}), new webpack.HotModuleReplacementPlugin()];

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

const devServer = {
  allowedHosts: 'all',
  // Reload the page after changes saved (HotModuleReplacementPlugin)
  client: {
    // Shows a full-screen overlay in the browser when there are compiler errors or warnings
    overlay: {
      errors: true,
      warnings: true
    },
    progress: true // Prints compilation progress in percentage in the browser.

  },
  compress: true,

  /**
   * Writes files to output path (default: false)
   * Build dir is not cleared using <output: {clean:true}>
   * To resolve should use FileManager
   */
  devMiddleware: {
    writeToDisk: false
  },
  historyApiFallback: true,
  hot: true,
  // Apply HTML5 History API if routes are used
  open: true,
  port: 9000,
  static: [// Required to use favicons located in a separate directory as assets
    // Should use with historyApiFallback, to avoid of 404 for routes
    {
      directory: path.join(BUILD_DIR, 'favicons')
    }]
};

module.exports = {
  devServer,
  entry: path.join(__dirname, '..', 'src', 'index.tsx'),
  module: {
    // Strict mod to avoid of importing non-existent objects
    rules: [// --- JS | TS USING BABEL
      {
        exclude: /node_modules/,
        test: /\.[jt]sx?$/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true // Using a cache to avoid of recompilation

          }
        }
      }, // --- HTML
      {
        test: /\.(html)$/,
        use: ['html-loader']
      }, // --- S/A/C/SS
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          // translates css into CommonJS
          options: {
            esModule: true,
            // css modules
            modules: {
              localIdentName: '[name]__[local]__[hash:base64:5]',
              // format of output
              namedExport: false // named exports instead of default

            },
            sourceMap: true
          }
        }, {
          // autoprefixer
          loader: 'postcss-loader',
          options: {
            postcssOptions: {
              plugins: [['postcss-preset-env', {// Options
              }],
              [
                'autoprefixer',
                {
                  // Options
                },
              ]],
            }
          }
        }]
      }, // --- S/A/SS
      {
        test: /\.(s[ac])ss$/i,
        use: ['sass-loader']
      }, // --- IMG
      {
        generator: {
          filename: 'assets/img/[hash][ext]'
        },
        test: /\.(png|jpe?g|gif|svg|webp|ico)$/i,
        type: 'asset/resource'
      }, // --- FONTS
      {
        exclude: /node_modules/,
        generator: {
          filename: 'assets/fonts/[hash][ext]'
        },
        test: /\.(woff2?|eot|ttf|otf)$/i,
        type: 'asset/resource'
      }],
    strictExportPresence: true
  },
  output: {
    path: BUILD_DIR,

    /**
     * Helps to avoid of MIME type ('text/html') is not a supported stylesheet
     * And sets address in html imports
     */
    publicPath: '/'
  },
  // Checking the maximum weight of the bundle is disabled
  performance: {
    hints: false
  },
  plugins,
  // Modules resolved
  resolve: {
    alias: {
      assets: path.resolve(__dirname, '../src/assets'),
      config: path.resolve(__dirname, '../src/config'),
      constants: path.resolve(__dirname, '../src/constants'),
      i18n: path.resolve(__dirname, '../src/i18n'),
      pages: path.resolve(__dirname, '../src/pages'),
      utils: path.resolve(__dirname, '../src/utils'),
    },
    extensions: ['.tsx', '.ts', '.js']
  }
};