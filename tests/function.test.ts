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
});
