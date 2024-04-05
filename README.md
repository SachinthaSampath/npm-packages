# Create your own NPM package with types and publish

This repository guides on how to create an NPM typescript package and publish it to be shared by other repositories via `npm`.

## Step1: Setup the workspace. Create `package`, `package/src` and `test`  directories.
```files
├───package
│   └───src
│           index.ts
│           sayHello.ts
│           person.types.ts
│           employee.types.ts
│   └───package.json
├───test
    └───script.js

```
- Use ```npm init``` inside the `package` directory to initialize the package
- Use ``` npm init --scope={scope-name}``` to make it scoped package by default if wanted. 
- The `package.json` file should look like follows.
  
```json
{
  "name": "@sachinthasampath/types",
  "version": "1.0.1",
  "description": "This is a package to store ts types",
  "main": "dist/index",
  "typings": "dist/index",
  "scripts": {
    "prebuild": "rimraf dist",
    "build": "tsc",
    "prepare": "npm run build",
    "test": "jest -w"
  },
  "devDependencies": {
    "rimraf": "^3.0.2",
    "typescript": "^4.7.4"
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
### Use the `index.ts` as a barrel file to handle the exports
```ts
> package/src/index.ts

export * from './sayHello';
export * from "./employee.types";
export * from "./person.types";
```
```ts
> package/src/sayHello.ts

export function sayHello(name = "World") {
  return `Hello ${name}!`;
}
```
```ts
> package/src/employee.types.ts

export type Employee = {
  name: string;
  age: number;
  address: string;
  jobTitle: string;
};

```
```ts
> package/src/person.types.ts

export type Person = {
  name: string;
  age: number;
  address: string;
};
```


## Step 2: Create `.gitignore` file in the root directory

```.gitignore
/**/node_modules
/**/dist
```

## Step 3: Create `tsconfig.json` file in the root directory

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "rootDir": "./package/src",
    "declaration": true,
    "declarationMap": true,
    "outDir": "./package/dist",
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "skipLibCheck": true
  }
}
```

## Step 4: Initialize the outer repository in the root directory
Use `npm init`. The `package.json` file should have the following

```jsonc
{
  ...
  "scripts": {
    "build": "tsc"
  },
  ...
}
```

## Step 5: Build the package
- Use `npm run build` in the `root` directory. 
- Go to `build` directory and use `npm link` to make it available in local machine.

###  ``` npm link ``` to link package

- Use `npm link` inside the package folder to create a link for the package in  npm and when trying to install it from another location, it's going to install from this location.
- Use `npm link {package-name}` in another local repository to link the package and use it.

### ``` npm publish ``` to publish the package
- Should have an npm account and use `npm login` to login via command line.
- Use `npm publish` inside the package directory to publish the package to npm.
- Use scoped package names to create unique package names `@{username}/{packagename}`.
- Use `npm publish --access=public` to make scoped packages public. By default it will be private.


An example code may look like follows in the `test` directory
```js
JavaScript Example
> test/index.js

const package = require("say-hello");

console.log(package.sayHello());

```

```ts
TypeScript Example
> test/index.ts

import { sayHello } from "say-hello";

console.log(sayHello());
```
### Note :
The TypeScript example may not work like expected in the `test` directory. But after publishing as an `npm` library, can use in a separate repository as follows within a component file.

```TypeScript
import { Employee, Person, sayHello } from "@sachinthasampath/types";

const person: Person = {
  name: "Sachintha Sampath",
  age: 25,
  address: "Colombo",
};

console.log(person);

return (<div>...</div>)
```