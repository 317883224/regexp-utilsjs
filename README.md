# regexp-utilsjs

## 简要说明
```
主要是整合通用的正则
```

# 文档

### 下载
```
npm i regexp-utilsjs -S
```

### 使用方法
```
import {
	number,
} from 'regexp-utilsjs';

number.test(123) // true
或
number.replace('12323asdasd123') // 12323123
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