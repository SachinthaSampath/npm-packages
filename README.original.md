# Say Hello to NPM Packages

This repository aims to provide a simple guide into how you can create and use your own NPM packages using Typescript.

## Development Process

### Step 1: Setup your workspace to have the following directories: `package`, `package/src` and `test`.

```files
├───package
│   └───src
└───test
```

Make sure to add the following inside `package.json`:

```jsonc
> package.json

...
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
...
```


### Step 2: Create `.gitignore` file in the root of your project to exclude the following from Git commits:

```.gitignore
/**/node_modules
/**/dist
```

### Step 3: Create `tsconfig.json` file in the root of your project and set the following options:

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

### Step 4: Create `package.json` and `npm init` inside `/package`.

```files
│   .gitignore
│   tsconfig.json
│
├───package
│   │   package.json
│   │
│   └───src
│           index.ts
│
└───test
```

_Make sure to provide the name of the package to suit the name you need to use for installation. You might need to decide whether it needs to be a scoped pacakge (e.g. `@nestjs/core`). [Read more...](https://docs.npmjs.com/about-scopes)_

### Step 5: Create `build` script inside `package.json`.

```jsonc
> package.json

{
  ...
  "scripts": {
    "build": "tsc"
  },
  ...
}
```

### Step 6: Create your source files inside `package/src`.

_Using `index.ts` as a barrel file to handle youe exports will make things easier for you when you're trying to use the package later -- your choice._

_Here's a simple example..._

```files
│   .gitignore
│   tsconfig.json
│
├───package
│   │   package.json
│   │
│   └───src
│           index.ts
│           sayHello.ts
│
└───test
```

```ts
> package/src/sayHello.ts

export function sayHello(name = "World") {
  return `Hello ${name}!`;
}
```

```ts
> package/src/index.ts

export * from './sayHello';
```

### Step 7: Build your package using `npm run build` and try `npm link` to make it available on your local machine.

_Now you can use the NPM package you just built by creating a new directory and using `npm link { Name of your package }` inside it. You just need to import the package in the source code._

_Here's how the previous example would be used..._

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
```# Say Hello to NPM Packages

This repository aims to provide a simple guide into how you can create and use your own NPM packages using Typescript.

## Development Process

### Step 1: Setup your workspace to have the following directories: `package`, `package/src` and `test`.

```files
├───package
│   └───src
└───test
```

Make sure to add the following inside `package.json`:

```jsonc
> package.json

...
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
...
```


### Step 2: Create `.gitignore` file in the root of your project to exclude the following from Git commits:

```.gitignore
/**/node_modules
/**/dist
```

### Step 3: Create `tsconfig.json` file in the root of your project and set the following options:

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

### Step 4: Create `package.json` and `npm init` inside `/package`.

```files
│   .gitignore
│   tsconfig.json
│
├───package
│   │   package.json
│   │
│   └───src
│           index.ts
│
└───test
```

_Make sure to provide the name of the package to suit the name you need to use for installation. You might need to decide whether it needs to be a scoped pacakge (e.g. `@nestjs/core`). [Read more...](https://docs.npmjs.com/about-scopes)_

### Step 5: Create `build` script inside `package.json`.

```jsonc
> package.json

{
  ...
  "scripts": {
    "build": "tsc"
  },
  ...
}
```

### Step 6: Create your source files inside `package/src`.

_Using `index.ts` as a barrel file to handle youe exports will make things easier for you when you're trying to use the package later -- your choice._

_Here's a simple example..._

```files
│   .gitignore
│   tsconfig.json
│
├───package
│   │   package.json
│   │
│   └───src
│           index.ts
│           sayHello.ts
│
└───test
```

```ts
> package/src/sayHello.ts

export function sayHello(name = "World") {
  return `Hello ${name}!`;
}
```

```ts
> package/src/index.ts

export * from './sayHello';
```

### Step 7: Build your package using `npm run build` and try `npm link` to make it available on your local machine.

_Now you can use the NPM package you just built by creating a new directory and using `npm link { Name of your package }` inside it. You just need to import the package in the source code._

_Here's how the previous example would be used..._

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