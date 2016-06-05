# React-ES6-Skeleton

#### A skeleton project with vital configurations and lots of explanations.


RES = React-ES6-Skeleton

##### Motivation

Modern Javascript ecosystem caused complicated but vital application configurations. Sometimes we need to known a lot to configure a project. Most of the developers exhausted before even running the application for the first time. 
RES aims to configure and explain all vital structural concepts for starting to develop code with React by using ES6 on webpack. 

##### What's inside
* [Webpack](https://webpack.github.io/) for all development (server,hotload etc.) and build (package, optimize, etc.) needs.
* [Babel](https://babeljs.io/flow) for writing codes with ES6 syntax and transpiling them browser compatible codes. 
* [ESLint](http://eslint.org/) for protecting our nice formatted codes.
* [Flow](http://flowtype.org/) for type checking.
* [Karma](https://karma-runner.github.io/0.13/index.html) for testing.
* [React](https://facebook.github.io/react/) for ui.

#####  Requirements

* Mac OS X, Windows, or Linux
* Node.js v5.0 or newer
* npm v3.3 or newer (new to npm?)

##### Directory Layout

```
.
├── /__test__/                      # Unit tests folder
├── /build/                         # The folder for compiled output
├── /docs/                          # Documentation files for the project
├── /node_modules/                  # 3rd-party libraries and utilities
├── /src/                           # The source code of the application
│   ├── app                         # application path
│   ├── ├── index.js                # React starter file 
│   ├── ├── component               # Application Components
│   ├── ├──  └── Main.js            # Main React Component
│   ├──assets                       # Static assets like index.html
│   ├── └── index.html              # index page for Single Page application.
│   ├──lib                          # Core Framework Library
│   ├── ├── core                    # Core framework and utility functions
│   ├── ├── component               # React components
│   └── └── └── BaseComponent.jsx   # All Component should extend from BaseComponent  
├── .babelrc                        # The list of 3rd party libraries and utilities
├── .editorconfig                   # editorconfig configuration file
├── .eslintrc                       # eslint configuration file
├── .gitignore                      # gitignore file
├── file-changer.js                 # webpack plugin
├── LICENSE                         # npm configuration file
├── package.json                    # The list of 3rd party libraries and utilities
├── README.md                       # Readme file
├── webpack.config.common.js        # common configuration
├── webpack.config.dev.js           # webpack development mode configuration
├── webpack.config.prod.js          # webpack production mode configuration
└── webpack.config.test.js          # webpack test mode configuration
```


### Quick Start


#### 1. Get the latest version
You can start by cloning the latest version of RES.

#### 2. Run `npm install`
This will install both run-time project dependencies and developer tools listed
in [package.json](./package.json) file.

#### 3. How to start project in Development Mode

```shell
$ npm start
```
  
Open Browser and enter `http:/localhost:8080` (default) 

### How to Build for Production

If you need just to build the app (without running a dev server), simply run:

```shell
$ npm run-script build
```
 
#####  How to run Unit Tests.

```shell
$ npm test              # Run unit tests with Mocha
```
 
  
### Understanding Configuration Detail
    
#### Common Configuration ( React  & ES6 )

Common configuration file is `webpack.config.common.js`

Common configuration include base settings for Development , Test and Production Modes.

[Read more!](docs/1-common.md)

#### Development Mode ( ESLINT , FACEBOOK/FLOW )
 
 * Common configuration must be configured before the Development Mode configuration  [common settings!](docs/1-common.md)

 * Set up configurations for Development Mode .
 
[Read more!](docs/2-dev.md)
    
#### Test Mode ( KARMA ) 

* Common configuration must be configured before the Test Mode configuration [common settings!](docs/1-common.md)

* Set up configurations for Test Mode .

[Read more!](docs/3-test.md)    
    
#### Production Mode ( OPTIMIZE & MINIFY & BUILD )

* Common configuration must be configured before the Production Mode configuration   [common settings!](docs/1-common.md)

* Set up configurations for Production Mode .

[Read more!](docs/4-prod.md)
    
    
