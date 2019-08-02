import Counter from "./counter"
// describe 分组
describe("counter js test", () => {
    // 数据number每次执行会互相影响，所以每一次执行该文件时都进行初始化一个对象，避免影响
    let counter = null; // 在describe内部最先执行
    console.log("counter js test")
    beforeAll(() => {
        console.log("beforeAll")
    })

    beforeEach(() => {
        console.log("beforeEach")
        counter = new Counter();
    })

    afterEach(() => {
        console.log("afterEach")
    })

    afterAll(() => {
        console.log("afterAll")
    })

    describe("counter js test add", () => {
        console.log("counter js test add")
        beforeAll(() => {
            console.log("beforeAll add")
        })
        beforeEach(() => {
            console.log("beforeEach add")
        })

        afterEach(() => {
            console.log("afterEach add")
        })

        afterAll(() => {
            console.log("afterAll  add")
        })
        test("test counter addOne", () => {
            console.log("test counter addOne")
            counter.addOne()
            expect(counter.number).toBe(1)
        })
    })

    describe("counter js test minus", () => {
        // // Applies only to tests in this describe block
        console.log("counter js test minus")
        test("test counter minusOne", () => {
            console.log("counter js test minusOne")
            counter.minusOne()
            expect(counter.number).toBe(-1)
        })
        test("test counter minusTwo", () => {
            console.log("counter js test minusTwo")
            counter.minusTwo()
            expect(counter.number).toBe(-2)
        })
    })
})

// execute order
/**
 * counter js test
 * counter js test add
 * counter js test munis
 * beforeAll
 * beforeAll add
 * beforeEach
 * beforeEach add
 * test counter addOne
 * afterEach add
 * afterEach
 * afterAll  add
 * beforeEach
 * counter js test minusOne
 * afterEach
 * beforeEach
 * counter js test minusTwo
 * afterEach
 */