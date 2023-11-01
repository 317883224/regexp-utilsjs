# regexp-utilsjs

## 介绍

regexp-utilsjs 是纯 js 正则方法库, 包含：数字，联系方式等。

## 特性

-   纯 js

## 更新日志

<!-- 更新日志的标记 -->

## 安装

```bash
# npm：
npm i regexp-utilsjs -S
```

## 引入方法

### 方式一. 自动按需引入 (推荐)
babel-plugin-import 是一款 babel 插件，它会在编译过程中将 import 的写法自动转换为按需引入的方式。

```js
// 安装插件
npm i babel-plugin-import -D

// 在 babel.config.js 中配置
plugins: [
    [
        'import',
        {
            libraryName: 'regexp-utilsjs',
            libraryDirectory: 'lib',
            camel2DashComponentName: false
        },
        'regexp-utilsjs'
    ]
];

// 接着你可以在代码中直接使用
import { numberRegexp } from 'regexp-utilsjs';

numberRegexp.test(123) // true
```

### 方式二. 手动按需引入
```js
import numberRegexp from 'regexp-utilsjs/lib/numberRegexp';

numberRegexp.test(123) // true
```

### 方式三. 导入所有
```js
import regexpUtilsjs from 'regexp-utilsjs';

regexpUtilsjs.numberRegexp.test(123); // true
```

## 文档

<!-- 通过nodejs生成的文档的标记 -->

## 联系方式

- qq 317883224@qq.com

## 链接

- [NPM](https://www.npmjs.com/package/configjs-utilsjs)
- [GITHUB](https://github.com/317883224/configjs-utilsjs)
