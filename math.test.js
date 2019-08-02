// node 遵循CommonJs规范, 需要babel内部转化
//const math = require("./math");
//const { add, minus, multi } = math;
import { add, minus, multi } from "./math";

test("test add method 4 + 6 expect to 10", () => {
    expect(add(4, 6)).toBe(10)
})

test("test minus method 4 - 6 expect to -2", () => {
    expect(minus(4, 6)).toBe(-2)
})

test("test add method 4 * 6 expect to 24", () => {
    expect(multi(4, 6)).toBe(24)
})