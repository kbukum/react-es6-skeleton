# React ES6 Skeleton

#### initial REACT & ES6 webpack project with support DEV , TEST and PROD environment configurations


##### Motivation

The javascript configurations can be complicated and sometimes we need to known a lot of thing to configure the project. 
React ES6 Skeleton project is base configuration for starting to develop code with React by using ES6 style on webpack. 

#####  Requirements

* Mac OS X, Windows, or Linux
* Node.js v5.0 or newer
* npm v3.3 or newer (new to npm?)

##### Directory Layout

```
.
├── /__test__/                      # Unit tests folder
├── /build/                         # The folder for compiled output
├── /data/                          # json-server mock data models
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
You can start by cloning the latest version of React ES6 Skeleton (RES).

     
#### 2. Run `npm install`
This will install both run-time project dependencies and developer tools listed
in [package.json](./package.json) file.

    
#### 3. Run `npm start`
 This command will startup application on http:/localhost:8080
  
### How to Build for Production

If you need just to build the app (without running a dev server), simply run:

```shell
$ npm run-script build
```
 
#####  How to run Unit Tests.

```shell
$ npm test              # Run unit tests with Mocha
```
 
  
  
### Configuration Detail 
    
#### Common Configuration ( React  & ES6 )

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
    
    
