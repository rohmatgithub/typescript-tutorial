export function getTypeOf(val: string | number | boolean) {
  switch (typeof val) {
    case "string":
      return val.toUpperCase();
    case "number":
      return val + 5;
    case "boolean":
      return !val;
  }
}

export type ID = string | number;
export type Category = {
  id: ID;
  name: string;
};

export type Product = {
  id: ID;
  name: string;
  price: number;
  description?: string;
  category: Category;
};

export enum CustomerType {
  GOLD = "GOLD",
  PLATINUM = "PLATINUM",
  DIAMOND = "DIAMOND",
  SILVER = "SILVER",
}
