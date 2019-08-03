import { generateConfig } from "./snapshot";

test("test generateConfig", () => {
  //expect(generateConfig()).toMatchSnapshot() //static
  expect(generateConfig()).toMatchSnapshot({
    time: expect.any(Date) // time只要是Date类型的数据即可通过测试
  });
});

// prettier
test("test inline snapshot", () => {
  expect(generateConfig()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 8080,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
