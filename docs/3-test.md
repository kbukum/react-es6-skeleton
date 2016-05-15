### Configuration of Test Mode

#### configure test 

* Create .webpack.config.test.js  file that is include just Development Mode configurations  in root folder.

* add command ``test ``` to scripts in **package.json** to start application in Test Mode. 
        
```sh
    "test": "karma start webpack.config.test.js"
```
    
 
#### Install karma required libraries 

    npm install --save-dev karma karma-webpack mocha karma-mocha karma-bamboo-reporter karma-phantomjs-launcher karma-chrome-launcher  karma-mocha-reporter karma-sourcemap-loader phantomjs-prebuilt react-addons-test-utils 


#### add below code to webpack.config.test.js     

```ssh
npm install --save-dev chai@3.5.0
npm install --save-dev karma@0.13.22
npm install --save-dev karma-bamboo-reporter@0.1.2
npm install --save-dev karma-chrome-launcher@1.0.1
npm install --save-dev karma-mocha@1.0.1
npm install --save-dev karma-mocha-reporter@2.0.3
npm install --save-dev karma-phantomjs-launcher@1.0.0
npm install --save-dev karma-sourcemap-loader@0.3.7
npm install --save-dev karma-webpack@1.7.0
npm install --save-dev mocha@2.4.5
npm install --save-dev phantomjs-prebuilt@2.1.7
npm install --save-dev react-addons-test-utils
```


```javascript
var path = require('path');

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
commonSettings.devtool = 'eval';

module.exports = function(config) {
    config.set({
        browsers: ['PhantomJS'],
        singleRun: true,
        plugins : [
            'karma-webpack',
            'karma-mocha',
            'karma-phantomjs-launcher',
            'karma-mocha-reporter',
            'karma-bamboo-reporter'
        ],
        frameworks: ['mocha'],

        files: [
            '__test__/**/*.spec.js'
        ],
        preprocessors: {
            '__test__/**/*.spec.js': ['webpack']
        },
        reporters: ['mocha','bamboo'],

        webpack:commonSettings,
        webpackServer: {
            noInfo: true
        }
    });
};

```
