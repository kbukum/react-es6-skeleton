### Create React & ES6 Project


#### Configuration Package.json
 
* **init package.json**

    ```ssh
    npm init
    ```

* `package.json`

    ```javascipt
    {
      "name": "react-es6-skeleton",
      "version": "1.0.0",
      "description": "React ES6 Skeleton",
      "main": "index.js",
      "scripts": {
       },
      "keywords": [
        "react",
        "es6",
        "eslint",
        "flowcheck",
        "karma",
        "dev",
        "test",
        "prod"
      ],
      "license": "MIT"
    }
    ```

#### Configuration Babel for ES6

* install babel code libraries & loaders & presets

```ssh 
npm install --save-dev babel-core@6.8.0, babel-loader@6.2.4 babel-preset-es2015@6.6.0 babel-preset-react@6.5.0 babel-preset-stage-0@6.5.0
```
* Add following lines in babel file. 
    - react (npm install ---save-dev babel-preset-react) : babel preset for transform react code.
    - es2015 (npm install ---save-dev babel-preset-es2015) : babel preset for transform ES5.
    - stage-0 (npm install ---save-dev  babel-preset-stage-0) : babel preset for transform ES6 code.

```json  

{
  presets": [

     "react",

     "es2015",

     "stage-0"

  ]
}

```
  
       

#### Configuration Webpack 


##### install webpack library 

```ssh 
npm install --save-dev webpack@1.13.0
```    
    
##### install file loaders which format will import in the code .
 
###### babel-loader  

```ssh 
npm install --save-dev babel-loader
```    
 
###### react-hot-loader 

```ssh 
npm install --save-dev react-hot-loader
```    

###### json-loader  

```ssh 
npm install --save-dev json-loader
```    
   
      
###### file-loader  

```ssh 
npm install --save-dev file-loader@0.8.5
```    
   
###### style-loader  

```ssh 
npm install --save-dev style-loader
```    
  
  
##### install React libraries in save mode
 
```ssh 
npm install --save react react-addons-shallow-compare react-dom
```        
            
* create **webpack.config.common.js** file to root directory to use in **dev**,**test**,**prod** configurations as common configuration.

###### configure webpack.config.common.js
 

* add below code to `webpack.config.common.js`

```javascript
var path = require("path");

/**
 *
 * @type {{root: (string|*), node_modules: (string|*)}}
 */
const  paths = {
    root : path.join(__dirname, "/src"), // application base path
    mock_db : path.join(__dirname, "/data/db"), // mock rest server json path
    node_modules: path.join(__dirname, '/node_modules') // modules path
};

/**
 * application path
 * @type {string|*}
 */
paths.app =  path.join(paths.root, "/app"); // app path in base path

/**
 * application lib path
 * @type {string|*}
 */
paths.lib =  path.join(paths.root, "/lib"); // library path in base path

/**
 * assets path
 * @type {string|*}
 */
paths.assets = path.join(paths.root,"/assets"); // assets path in base path

/**
 * build path
 * @type {string|*}
 */
paths.build = path.join(__dirname,"/build"); // build path in base path

module.exports = {
        paths : paths, // reference path variable
        /**
         * @link https://webpack.github.io/docs/configuration.html
         * The base path directory for resolving the entry option if output.pathinfo is set the include shortened to this directory.
         */
        context: paths.app,
        /* add resolve.extensions */
    /**
     *
     * @link https://webpack.github.io/docs/configuration.html
     */
    resolve: {
        /**
         * The directory (absolute path) that contains your modules.
         * May also be an array of directories. This setting should be used to add individual directories to the search path.
         * It must be an absolute path! Don’t pass something like ./app/modules.
         */
            root: [paths.root],
        /**
         * An array of extensions that should be used to resolve modules.
         * For example, in order to discover react jsx files, your array should contain the string ".jsx".
         */
            extensions: ['', '.jsx', '.js', '.json'],
        /**
         * An array of directory names to be resolved to the current directory as well as its ancestors, and searched for modules.
         * This functions similarly to how node finds “node_modules” directories.
         * For example, if the value is ["mydir"], webpack will look in “./mydir”, “../mydir”, “../../mydir”, etc.
         */
            modulesDirectories: [paths.node_modules]
        },
        module: {
            preLoaders: [
            ],
            loaders: [
                {
                    /**
                     * @link https://github.com/gaearon/react-hot-loader
                     * npm install react-hot-loader --save-dev
                     */
                    test: /\.js?$|\.jsx?$/,
                    loaders: ["react-hot"],
                    exclude: /(node_modules|bower_components|fonts)/,
                    include: [paths.app,paths.lib]
                },
                {
                    /**
                     * @link https://github.com/babel/babel-loader
                     * npm install babel-loader --save-dev
                     */
                    test: /\.(js|jsx)$/,
                    exclude: /(node_modules|bower_components|fonts)/,
                    loader: 'babel-loader',
                    query: {
                        "presets": ["es2015", "react", "stage-0"]
                    }
                },
                {
                    /**
                     * @link https://github.com/webpack/json-loader
                     * npm install json-loader --save-dev
                     */
                    test: /\.json$/,
                    loader: 'json-loader'
                },
                {
                    /**
                     * @link https://github.com/webpack/style-loader
                     * npm install style-loader --save-dev
                     */
                    test: /\.s?css$/,
                    loader: 'style-loader!css-loader'
                },
                {
                    /**
                     * @link https://github.com/webpack/file-loader
                     * npm install file-loader --save-dev
                     */
                    test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                    loader: 'file-loader',
                    include: /fonts/
                }
            ]
        },
    /**
     * will added by environment mode.
     */
    plugins: []
};
```
