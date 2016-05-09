##### WEBPACK CONFIGURATION

###### configure webpack.config.dev.js
    
* add below code to webpack.config.dev.js   

    ```javascript
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
        eslint: {
            failOnWarning: false,
            failOnError: true
        }
    };
    
    /**
     *
     * @link https://github.com/typicode/json-server
     * @type {jsonServer|exports|module.exports}
     * start to configure mock rest server
     */
    
    /** will added mock server after
    var jsonServer = require("json-server");
    var server = jsonServer.create();
    
    server.use(jsonServer.defaults());
    
    var router = jsonServer.router(commonSettings.paths.mock_db);
    
    server.use('/api',router);
    
    server.listen(3000);
    **/
    /**
     * end to configure mock rest server
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

    ```


