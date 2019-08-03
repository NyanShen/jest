import axios from "axios"
import { fetchData } from "./axios-mock"

jest.mock("axios")

test("test fetchData", () => {
    // 前端请求代码，只需测试是否发送成功，数据返回可以通过mock变成同步返回数据，测试请求是否发送成功
    axios.get.mockResolvedValue({
        data: "(function() {return 'test'})()"
    })
    return fetchData().then(data => {
        expect(eval(data)).toEqual("test")
    })
})