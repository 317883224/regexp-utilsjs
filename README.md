# regexp-utilsjs

## 简要说明
```
主要是整合通用的正则
```

## 版本
*  [2.1.3]
	+ 修改打包架构，配置按需加载功能
*  [1.1.2]
	+ 修复千分符方法 bug
	+ 修复首字母大写 bug
*  [1.0.9]
	+ formatMoney 方法新增 separators 参数
 
# 文档

### 下载
```
npm i regexp-utilsjs -S
```

## 快速上手
### [推荐]按需加载
```js
// 需要引入的模块
import {
	number,
} from 'regexp-utilsjs';

console.log(number.test(123)) // true
console.log(number.replace('12323asdasd123')) // 12323123
```
 
### 全局引入
```js
// main.js
import Vue from 'vue';
import configjsutilsjs from 'configjs-utilsjs';
Vue.use(configjsutilsjs);

// 在 vue 模块中
const time = this.$configjsutilsjs.formatTimes(new Date(), 'yyyy-MM-dd');
console.log(time)
```

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
englishruleRegexp | 英文 | √ | √
emailRegexp | 邮箱 | √ | ×
phoneRegexp | 手机或电话 | √ | ×
idcardRegexp | 身份证 | √ | ×
internetURLRegexp | 网址 | √ | ×