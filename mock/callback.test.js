import { runCallback, runCallbackWithParam, creatObject } from "./callback"
 // mock 函数， 捕获函数的调用，console.log(func.mock) to see more data
test("runCallback expect to be called", () => {
    const func = jest.fn();
    runCallback(func)
    expect(func).toBeCalled()
})

test("runCallback expect to be called twice", () => {
    const func = jest.fn();
    runCallback(func)
    runCallback(func)
    expect(func.mock.calls.length).toBe(2)
})

test("runCallbackWithParam return expect to be 'test'", () => {
    const func = jest.fn();
    func.mockReturnValueOnce("test") // mock a return
    runCallbackWithParam(func)
    expect(func.mock.calls[0]).toEqual(["test"]);
    expect(func.mock.results[0].value).toBe("test")
})