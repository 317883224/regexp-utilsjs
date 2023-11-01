# regexp-utilsjs

## 介绍

regexp-utilsjs 是317883224开源的正则方法库, 包含：数字，联系方式等。

## 特性

- 纯 js

## 版本
*  [2.0.0]
	+ 修改打包架构，改用gulp打包

## 安装
```
npm i regexp-utilsjs -S
```

## 快速上手
```
import {
	numberRegexp,
} from 'regexp-utilsjs';

numberRegexp.test(123) // true
```

## 文档
### 类型
|        正则类型        |              说明              |                  test                  |                replace                 |
| :--------------------: | :----------------------------: | :------------------------------------: | :------------------------------------: |
|      numberRegexp      |              数字              | <span style="color: #409EFF;">√</span> | <span style="color: #409EFF;">√</span> |
|  numberPositiveRegexp  |              正数              | <span style="color: #409EFF;">√</span> | <span style="color: #409EFF;">√</span> |
|  numberNegativeRegexp  |              负数              | <span style="color: #409EFF;">√</span> | <span style="color: #409EFF;">√</span> |
|     integerRegexp      |              整数              | <span style="color: #409EFF;">√</span> | <span style="color: #409EFF;">√</span> |
| integerPositiveRegexp  |             正整数             | <span style="color: #409EFF;">√</span> | <span style="color: #409EFF;">√</span> |
| integerNegativeiRegexp |             负整数             | <span style="color: #409EFF;">√</span> | <span style="color: #409EFF;">√</span> |
|     chineseRegexp      |              中文              | <span style="color: #409EFF;">√</span> | <span style="color: #409EFF;">√</span> |
|     englishRegexp      |              英文              | <span style="color: #409EFF;">√</span> | <span style="color: #409EFF;">√</span> |
|      emailRegexp       |              邮箱              | <span style="color: #409EFF;">√</span> | <span style="color: #F56C6C;">×</span> |
|     contactRegexp      | 联系方式，包括手机号和固定电话 | <span style="color: #409EFF;">√</span> | <span style="color: #F56C6C;">×</span> |
|      phoneRegexp       |             手机号             | <span style="color: #409EFF;">√</span> | <span style="color: #F56C6C;">×</span> |
|     landlineRegexp     |            固定电话            | <span style="color: #409EFF;">√</span> | <span style="color: #F56C6C;">×</span> |
|      idcardRegexp      |             身份证             | <span style="color: #409EFF;">√</span> | <span style="color: #F56C6C;">×</span> |
|   internetURLRegexp    |              网址              | <span style="color: #409EFF;">√</span> | <span style="color: #F56C6C;">×</span> |

## 联系方式

- qq 317883224@qq.com

## 链接

- [NPM](https://www.npmjs.com/package/configjs-utilsjs)
- [GITHUB](https://github.com/317883224/configjs-utilsjs)
