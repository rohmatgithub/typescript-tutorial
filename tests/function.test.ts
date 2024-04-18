describe("FUNCTION", () => {
  it("test-funtions", () => {
    const func1 = function (name: string): string {
      return `Hello ${name}`;
    };

    const func2 = function (name: string): void {
      console.log(`Hai ${name}`);
    };

    expect(func1("Jhon")).toBe(`Hello Jhon`);
    func2("Jhon");
  });

  it("test-parameters", () => {
    const func1 = function (name: string = "World", age?: number): string {
      return `Hello ${name}` + (age !== undefined ? `, I am ${age} old` : "");
    };

    expect(func1("Rohmat")).toBe(`Hello Rohmat`);
    expect(func1()).toBe(`Hello World`);
    expect(func1("Rohmat", 21)).toBe(`Hello Rohmat, I am 21 old`);
  });

  it("test-rest-parameter", () => {
    const func1 = function (...val: number[]): number {
      return val.reduce((a, b) => a + b);
    };

    expect(func1(1, 2, 3)).toBe(6);
    expect(func1(1, 2, 3, 4)).toBe(10);
    expect(func1(1, 2, 3, 4, 5)).toBe(15);
    expect(func1(1, 2, 3, 4, 5, 6)).toBe(21);
    expect(func1(1, 2, 3, 4, 5, 6, 7)).toBe(28);
    expect(func1(1, 2, 3, 4, 5, 6, 7, 8)).toBe(36);
    expect(func1(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
  });

  it("test-function-overloading", () => {
    function func1(a: string): string;

    function func1(a: number): number;

    function func1(a: any) {
      if (typeof a === "number") {
        return a * 10;
      }

      return a.toUpperCase();
    }

    expect(func1("jhon")).toBe("JHON");
    expect(func1(21)).toBe(210);
  });

  it("test-function-as-parameter", () => {
    const func1 = function (
      name: string,
      func: (name: string) => string
    ): string {
      return `Hello ${func(name)}`;
    };

    expect(func1("Rohmat", (name: string) => name)).toBe(`Hello Rohmat`);

    // Arrow function
    expect(func1("Rohmat", (name: string) => name.toUpperCase())).toBe(
      `Hello ROHMAT`
    );

    // anonymous function
    expect(
      func1("Rohmat", function (name: string): string {
        return name.toLowerCase();
      })
    ).toBe(`Hello rohmat`);
  });
});
