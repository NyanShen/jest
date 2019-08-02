test("toBe matcher", () => {
    // toBe 匹配引用类型
    const a = 10
    expect(a).toBe(10)
})

test("toEqual matcher", () => {
    // toEqual匹配内容
    const a = {a: "1"}
    expect(a).toEqual({a: "1"})
})

test("toBeUndefined matcher", () => {
    const a = undefined
    expect(a).toBeUndefined()
})

test("toBeTruthy matcher", () => {
    const a = 1
    expect(a).toBeTruthy()
})

test("not matcher", () => {
    const a = 0
    expect(a).not.toBeTruthy()
})

test("toBeGreaterThan matcher", () => {
    const a = 12
    expect(a).toBeGreaterThan(1)
})

test("toBeLessThan matcher", () => {
    const a = 12
    expect(a).toBeLessThan(15)
})

test("toBeGreaterThanOrEqual matcher", () => {
    const a = 12
    expect(a).toBeGreaterThanOrEqual(12)
})

test("toBeCloseTo matcher", () => {
    const a = 0.1
    const b = 0.2
    expect(a + b).toBeCloseTo(0.3)
})

test("toMatch matcher", () => {
    const a = "Nyan test asws"
    expect(a).toMatch("test")
})

// Array Set
test("toContain matcher", () => {
    const arr = ["Nyan test asws", "matchwe", "list"]
    const data = new Set(arr);
    //expect(arr).toContain("list")
    expect(data).toContain("list")
})

const throwNewErrorFunc = () => {
    throw new Error("this is a error");
}
test("toThrow matcher", () => {
    expect(throwNewErrorFunc).toThrow("this is a error")
})