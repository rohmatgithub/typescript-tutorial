import { CustomerType, getTypeOf } from "../src/type-data";

describe("Data Type", () => {
  it("should must declare", () => {
    let name: string = "Rohmatullah";
    let age: number = 21;
    let isMale: boolean = true;

    console.info(`Name: ${name}`);
    console.info(`Age: ${age}`);
    console.info(`Is Male: ${isMale}`);

    // expect(name).toBe("Rohmatullah");
    // expect(age).toBe(21);
    // expect(isMale).toBe(true);
  });
});

describe("Array", () => {
  it("should array", () => {
    const laptops: string[] = ["Dell", "HP", "Lenovo"];
    const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    console.info(`Laptops ${laptops}`);
    console.info(`Numbers ${numbers}`);

    // READONLY ARRAY
    const hp: ReadonlyArray<string> = ["Samsung", "Google", "Realme"];
    console.info(`HP : ${hp}`);

    console.info(`HP : ${hp[5]}`);
  });
});

// TUPLE : tipe data array yang sudah ditentukan jumlah & type valuenya
describe("Tuple", () => {
  it("should tuple", () => {
    const tuple: readonly [string, number] = ["Rohmatullah", 21];

    console.info(`Tuple: ${tuple}`);
  });

  //   tuple[0] = "Rohmat";
  //   console.info(`Tuple: ${tuple}`);
});

// TYPE DATA ANY

describe("Any", () => {
  it("should type data any", () => {
    const any: any = "Rohmatullah";

    console.info(`Any: ${any}`);

    const obj: any = {
      name: "Rohmatullah",
      age: 21,
      isMale: true,
    };

    console.info(`Name: ${obj.name}`);
  });
});

// UNION TYPE

describe("Union Type", () => {
  it("should type data union type", () => {
    let sample: number | string | boolean = 32;
    console.info(`Sample: ${sample}`);

    sample = "Rohmatullah";
    console.info(`Sample: ${sample}`);

    expect(getTypeOf("hello")).toBe("HELLO");
    expect(getTypeOf(32)).toBe(37);
    expect(getTypeOf(false)).toBe(true);
  });
});

describe("Type Enum", () => {
  it("should type data enum", () => {
    console.info(`Diamond : ${CustomerType.DIAMOND}`);
    console.info(`Gold : ${CustomerType.GOLD}`);
    console.info(`Platinum : ${CustomerType.PLATINUM}`);
    console.info(`Silver : ${CustomerType.SILVER}`);
  });
});

// TYPE DATA NULL OR UNDIFIED

describe("Null Or Undefined", () => {
  it("should null or undefined", () => {
    function printHello(name?: string | null) {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info("Hi");
      }
    }

    printHello();
    printHello("Rohmatullah");
    printHello(undefined);
    printHello(null);
  });
});
