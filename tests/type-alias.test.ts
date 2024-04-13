import { Category, Product } from "../src/type-data";

describe("Type Alias", () => {
  it("should alias", () => {
    const category: Category = {
      id: "1",
      name: "Books",
    };

    const product: Product = {
      id: 1,
      name: "TypeScript",
      price: 100,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});

describe("Object Type", () => {
  it("should create an object type", () => {
    const user: {
      name: string;
      age: number;
      email?: string;
    } = {
      name: "John",
      age: 30,
    };
    console.info(user);

    user.name = "John Doe";
    user.age = 21;
    console.info(user);
  });
});
