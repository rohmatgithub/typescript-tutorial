import { DataDetail, User } from "../src/interface";
// INTERFACE
describe("Interface", () => {
  it("test-interface", () => {
    const user: User = {
      id: 1,
      name: "Jhon",
      email: "jhon@gmail.com",
    };

    user.name = "Jhons";
    // user.email = "jhons@gmail.com";

    console.info(user);
  });

  it("test-extend", () => {
    const data: DataDetail = {
      id: 2,
      name: "Rohmatullah",
      //   code: "32",
      email: "jhon@gmail.com",
      phone: "08123456789",
    };

    console.info(data);
  });

  it("test-function-interface", () => {
    interface addNumber {
      (val1: number, val2: number): number;
    }
    const add: addNumber = (val1: number, val2: number): number => {
      return val1 + val2;
    };

    expect(add(2, 4)).toBe(6);
  });

  it("test-interface-array", () => {
    interface StringArray {
      [index: number]: string;
    }
    const arrName: StringArray = ["Jhon", "Mike", "Shan"];

    console.info(arrName);
  });

  it("test-key-map", () => {
    interface KeyMap {
      [key: string]: string;
    }
    const keyMap: KeyMap = {
      name: "Rohmatullah",
      age: "21",
      isMale: "true",
    };

    console.info(keyMap);
  });

  it("test-function-in-interface", () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: "Rohmatullah",
      sayHello(name: string): string {
        return `Hello ${name}`;
      },
      //   sayHello: function (name: string): string {
      //     return `Hello ${name}`;
      //   },
    };

    console.info(person.sayHello(person.name));
  });

  it("test-intersection-types", () => {
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

    console.info(human);
  });

  it("test-type-assertions", () => {
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
    console.info(person2);
  });
});
