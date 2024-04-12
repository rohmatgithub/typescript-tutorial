import { sayHello } from "../src/hello";

describe('Hello', () => { 
    it('should say hello', () => {
        expect("Hello world").toBe("Hello world");
    });
 })

 describe('sayHello', () => {
    it('should return hello name', () => {
        expect(sayHello("Rohmat")).toBe("Hello Rohmat");
    });
 })
