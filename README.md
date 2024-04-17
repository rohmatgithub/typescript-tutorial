# typescript-tutorial

## setup

init node js

https://babeljs.io/docs/usage

```
npm init
npm install --save-dev jest @types/jest
npm install --save-dev babel=jest @babel/preset-env
```

setup typescript

https://jestjs.io/docs/getting-started

```
npm install --save-dev typescript
npx tsc --init

npm install --save-dev @babel/preset-typescript
npm install --save-dev ts-jest
npm install --save-dev @jest/globals
npm install --save-dev @types/jest
```

## Compile

for compile with

```
npx tsc

// for automation compile use
npx tsc --watch
```

https://www.typescriptlang.org/tsconfig#types

for execept file to compile use exclude & exclude at tsconfig.json

```
{
    "exclude": ["tests/**/*"],
    "include": ["src/**/*"]
}

```

## Unit Tests

With Jest

```
npx jest

// only one file
npx jest hello.test.ts

// only one unit test
npx jest -it "Interface Array" type-data.test.ts
```
