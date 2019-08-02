## 配置文件初始化
npx jest --init
将jest配置文暴露出来，可以修改配置

## 代码测试覆盖率
npx jest --coverage

## 使js文件支持es6规范写法
npm install @babel/core@7.4.5 @babel/preset-env@7.4.5 -D

```
{
    "presets": [
        [
            "@babel/preset-env",
            {
                "targets": {
                    "node": "current"
                }
            }
        ]
    ]
}
```
在当前node环境下做es6转换