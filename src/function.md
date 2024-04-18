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

## Rest Parameters Functions

```
const func1 = function (...val: number[]): number {
    return val.reduce((a, b) => a + b);
};
```

## Function Overloading

```
function func1(a: string): string;

function func1(a: number): number;

function func1(a: any) {
    if (typeof a === "number") {
    return a * 10;
    }

    return a.toUpperCase();
}
```
