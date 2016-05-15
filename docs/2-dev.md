### Configuration of Development Mode

### configure dev-server

* Create .webpack.config.dev.js  file that is include just Development Mode configurations  in root folder.

* add command ``start ``` to scripts in **package.json** to start application in Development Mode. 
        
```sh
    "start": "webpack-dev-server --config webpack.config.dev.js --colors --port 8080"
```
    
* Install webpack-dev-server library
    
```sh 
    npm install --save-dev webpack-dev-server
```
    
    * type http://localhost:8080 and now you can see the folder structure of root path.  
    That's mean webpack-server is running now.


#### install eslint

```ssh
npm install eslint eslint-config-airbnb eslint-import-resolver-webpack eslint-loader eslint-plugin-babel eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react --save-dev
```  

#### eslint configuration 
* add eslint loader to dev configuration file as a preloader.

```javascript
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
```


* create .eslintrc file in root directory and add below json code to the file. 

```json
{
    "extends": ["eslint-config-airbnb"],
    "env": {
        "browser": true,
        "node": true
    },
    "ecmaFeatures": {
        "jsx": true
    },
    "parser": "babel-eslint",
    "plugins": [
        "react",
        "babel",
        "flowtype"
    ],
    "rules": {
        "quotes": [2, "double", "avoid-escape"],
        "constructor-super": 2,
        "comma-dangle": 0,
        "eqeqeq": [2, "allow-null"],
        "id-length": 0,
        "indent": [2, 4],
        "no-eq-null": 0,
        "one-var": [2, { "initialized": "never" }],
        "prefer-const": 0,
        "no-param-reassign": 0,
        "no-this-before-super": 2,
        "babel/object-shorthand": 2,
        "react/jsx-boolean-value": 2,
        "react/jsx-indent": [1,4],
        "react/jsx-no-duplicate-props": 2,
        "react/sort-comp": 0,
        "react/prop-types": [2, { "ignore": [
            "children",
            "className",
            "style",
            "bsStyle",
            "bsClass",
            "bsSize"
        ]
        }],
        "flowtype/require-parameter-type": 1,
        "flowtype/require-return-type": [
            1,
            "always",
            {
                "annotateUndefined": "never"
            }
        ],
        "flowtype/space-after-type-colon": [
            1,
            "always"
        ],
        "flowtype/space-before-type-colon": [
            1,
            "never"
        ],
        "flowtype/type-id-match": [
            1,
            "^([A-Z][a-z0-9]+)+Type$"
        ]
    },
    "settings": {
        "import/resolver":{
            "webpack": {
                "config": "webpack.config.common.js"
            }
        }
    }
}
```

#### install flowcheck 

```ssh
npm install flowcheck flowcheck-loader --save-dev
```

#### integrate flowcheck with eslint

```ssh
npm install eslint-plugin-flowtype --save-dev
```

#### 
#### install html-webpack-plugin
```ssh
npm install html-webpack-plugin --save-dev
```   
     
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


