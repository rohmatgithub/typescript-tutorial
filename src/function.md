# FUNCTIONS

## Function

```
const func1 = function (name: string): string {
    return `Hello ${name}`;
};

const func2 = function (name: string): void {
    console.log(`Hai ${name}`);
};
```

## Parameters Functions

```
const func1 = function (name: string = "World", age?: number): string {
    return `Hello ${name}` + (age !== undefined ? `, I am ${age} old` : "");
};
```
