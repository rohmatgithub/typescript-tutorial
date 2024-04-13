# TYPE DATA

## Primtif

```
let name: string = "Rohmatullah";
let age: number = 21;
let isMale: boolean = true;
```

## Array

```
const laptops: string[] = ["Dell", "HP", "Lenovo"];
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const hp: ReadonlyArray<string> = ["Samsung", "Google", "Realme"];
const laptops: readonly string[] = ["Dell", "HP", "Lenovo"];
```

## Tuple

```
const tuple: [string, number] = ["Rohmatullah", 21];
const tuple: readonly [string, number] = ["Rohmatullah", 21];
```

## Any

```
const any: any = "Rohmatullah";
const obj: any = {
      name: "Rohmatullah",
      age: 21,
      isMale: true,
    };
```

## Union Type

```
let sample: number | string | boolean = 32;
sample = "Rohmatullah";

// FOR CHECKING TYPE DATA
function getTypeOf(val: string | number | boolean) {
  switch (typeof val) {
    case "string":
      return val.toUpperCase();
    case "number":
      return val + 5;
    case "boolean":
      return !val;
  }
}
```

## Type Alias

```
export type ID = string | number;
export type Category = {
  id: ID;
  name: string;
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  category: Category;
};
```

## Object Type

```
const user: {
    name: string;
    age: number;
} = {
    name: "John",
    age: 30,
};
```

## Optional Properties

Use ?

```
export type Product = {
  id: ID;
  name: string;
  price: number;
  description?: string;
  category: Category;
};

const user: {
    name: string;
    age: number;
    email?: string;
} = {
    name: "John",
    age: 30,
};
```

## Type Data Enum

```
export enum CustomerType {
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
  DIAMOND = "DIAMOND",
  SILVER = "SILVER",
}
```
