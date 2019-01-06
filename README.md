# 去除 HAR 返回content中的debug字段

> api 返回的接口里有debug字段，内容是php调试信息，其内容较大，且前端调试不需要，去除之后再使用调试工具，可提升性能与响应速度

> debug 为最后一个 key

使用了三种方式：

## normal.js

JSON.parse 之后 delete obj.debug

```javascript
node normal.js
```
trimRaw 10000次用时: 553.462ms

## withTry.js

截取字符串，拼接结束的 `'}'` 尝试 JSON.parse, 成功则乐观认为为需要的值

```javascript
node withTry.js
```
trimRaw 10000次用时: 112.077ms

## withIsJson.js

替换 tryCatch 为 is-json

```javascript
node withIsJson.js
```
trimRaw (10000 * 100)次用时: 664.764ms

最后一种方法，大约是第一种方法的 10^2 量级