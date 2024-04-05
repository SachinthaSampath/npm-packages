# Create your own NPM package and publish
This repository guides on how to create an NPM package and publish it to be accessed by other via `npm`.

## Setup the workspace 
```files
├───package
│   └───index.js
│   └───package.json
├───test-folder
|   └───script.js
└───
```
- Use ```npm init``` inside the `package` directory to initialize the package
- The `package.json` file will look like follows.
  
```json
{
  "name": "@sachinthasampath/sn-types",
  "version": "1.0.1",
  "description": "This is a package to store ts types",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/SachinthaSampath/npm-packages.git"
  },
  "keywords": [
    "TS"
  ],
  "author": "SachinthaSampath",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/SachinthaSampath/npm-packages/issues"
  },
  "homepage": "https://github.com/SachinthaSampath/npm-packages#readme"
}
```
  
### Create scoped package 
- Use ``` npm init --scope={scope-name}``` to make it scoped package by default. 

##  ``` npm link ``` to link package

- Use `npm link` inside the package folder to create a link for the package in  npm and when trying to install it from another location, it's going to install from this location.
- Use `npm link {package-name}` in the test folder to link the package and use it.

## ``` npm publish ``` to publish the package
- Should have an npm account and use `npm login` to login via command line.
- Use `npm publish` inside the package directory to publish the package to npm.
- Use scoped package names to create unique package names `@{username}/{packagename}`.
- Use `npm publish --access=public` to make scoped packages public. By default it will be private.

