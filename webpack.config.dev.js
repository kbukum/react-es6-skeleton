var webpack = require("webpack");

/**
 * import common webpack settings
 */
const commonSettings = require('./webpack.config.common.js');

/**
 * @link https://webpack.github.io/docs/configuration.html#cache
 * Cache generated modules and chunks to improve performance for multiple incremental builds.
 This is enabled by default in watch mode.
 * @type {boolean}
 */
commonSettings.cache = true;

/**
 * @link https://webpack.github.io/docs/configuration.html#debug
 * Switch loaders to debug mode.
 * @type {boolean}
 */
commonSettings.debug = true;

/**
 * @link https://webpack.github.io/docs/configuration.html#devtool
 * Choose a developer tool to enhance debugging.
 * source-map - A SourceMap is emitted. See also output.sourceMapFilename.
 * @type {string}
 */
commonSettings.devtool = 'source-map';

/**
 * @link https://webpack.github.io/docs/configuration.html#entry
 * The entry point for the bundle.
 * If you pass a string: The string is resolved to a module which is loaded upon startup.
**/
commonSettings.entry = {
    app:[commonSettings.paths.app]
};


/**
 * @link https://github.com/MoOx/eslint-loader
 * added eslint-loader plugin for check the syntax of code by rules
 */

commonSettings.module.preLoaders.push({ test: /\.jsx?$/, loaders: ['eslint'], exclude: /node_modules/ });
commonSettings.eslint = {
        configFile: '.eslintrc',
        failOnWarning: false,
        failOnError: true
};


/**
 * @link https://webpack.github.io/docs/hot-module-replacement-with-webpack.html
 * @type {HotModuleReplacementPlugin}
 */
commonSettings.plugins.push(new webpack.HotModuleReplacementPlugin());

/**
 *
 * @link https://github.com/ampedandwired/html-webpack-plugin
 * @type {HtmlWebpackPlugin|exports|module.exports}
 */
var HtmlWebpackPlugin = require('html-webpack-plugin');

commonSettings.plugins.push(new HtmlWebpackPlugin({
    template: commonSettings.paths.assets + '/index.html'
}));

module.exports = commonSettings;
