# INTERFACE

## Interface

```
export interface User {
  id: number;
  name: string;
  address?: string;
}
```

## Readonly Properties

```
export interface User {
  id: number;
  name: string;
  address?: string;
  readonly email: string;
}
```

## Function Interfaces

```
  interface addNumber {
    (val1: number, val2: number): number;
  }

  const add: addNumber = (val1: number, val2: number): number => {
      return val1 + val2;
    };
```

## Interface Array

```
interface StringArray {
    [index: number]: string;
}
const arrName: StringArray = ["Jhon", "Mike", "Shan"];
```

## Interface Key Map

```
interface KeyMap {
    [key: string]: string;
}

const maps: KeyMap = {
    name: "Rohmatullah",
    age: "21",
    isMale: "true",
};
```

## Function In Interface

```
interface Person {
    name: string;
    sayHello(name: string): string;
}

const person: Person = {
    name: "Rohmatullah",
    sayHello(name: string): string {
    return `Hello ${name}`;
    },
};
```

## Intersection Types

```
interface HasName {
    name: string;
}

interface HasAge {
    age: number;
}

type Human = HasName & HasAge;
const human: Human = {
    name: "Rohmatullah",
    age: 21,
};

```

## Type Assertions

```
interface Person {
    name: string;
    age: number;
    isMale: boolean;
}

const person: any = {
    name: "Jhon",
    age: 21,
};

const person2: Person = person as Person;
```
