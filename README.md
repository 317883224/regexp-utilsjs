# regexp-utilsjs

### 介绍

regexp-utilsjs 是317883224开源的正则方法库, 包含：数字，联系方式等。

## 特性

- 纯 js

## 版本
*  [2.0.0]
	+ 修改打包架构，改用gulp打包
*  [1.*.*]
	+ 略

### 安装
```
npm i regexp-utilsjs -S
```

### 快速上手
```
import {
	numberRegexp,
} from 'regexp-utilsjs';

numberRegexp.test(123) // true
```

## 文档
### 类型
正则类型 | 说明 | test | replace
:-: | :-: | :-: | :-:
numberRegexp | 数字 | √ | √
numberPositiveRegexp | 正数 | √ | √
numberNegativeRegexp | 负数 | √ | √
integerRegexp | 整数 | √ | √
integerPositiveRegexp | 正整数 | √ | √
integerNegativeiRegexp | 负整数 | √ | √
chineseRegexp | 中文 | √ | √
englishRegexp | 英文 | √ | √
emailRegexp | 邮箱 | √ | ×
contactRegexp | 联系方式，包括手机号和固定电话 | √ | ×
phoneRegexp | 手机号 | √ | ×
landlineRegexp | 固定电话 | √ | ×
idcardRegexp | 身份证 | √ | ×
internetURLRegexp | 网址 | √ | ×
 
## 联系方式

- qq 317883224@qq.com

## 链接

- [NPM](https://www.npmjs.com/package/configjs-utilsjs)
- [GITHUB](https://github.com/317883224/configjs-utilsjs)
