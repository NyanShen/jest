import timer from "./timer"

jest.useFakeTimers()
// jest.useFakeTimers() 配合 jest.runAllTimers()使用
// runOnlyPendingTimers()
// advanceTimersByTime(3000) 快进3秒
test("timer test", () => { 
    const func = jest.fn()
    timer(func)
    jest.runAllTimers()
    expect(func).toHaveBeenCalledTimes(1) //执行次数
})