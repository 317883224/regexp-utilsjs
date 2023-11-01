/*
 * @FileName: base
 * @FilePath: \regexp-utilsjs\packages\lib\base\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:31:31
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 11:40:17
 * @Description: 基本方法
 */
export class regexp {
    constructor(testRule, replaceRule) {
        this.replaceRule = replaceRule || '';
        this.testRule = testRule || '';
    }

    // 正则判断
    test(value) {
        if (!this.testRule || this.testRule === '') return console.warn('test is not a function');
        return value ? this.testRule.test(value) : true;
    }

    // 正则替换
    replace(value) {
        if (!this.replaceRule || this.replaceRule === '') return console.warn('replace is not a function');
        if (value) {
            return value.replace(this.replaceRule, '');
        } else {
            return false;
        }
    }
}

/*
 * @description: 正则判断
 * @param {string} value 判断内容
 * @return {boolean} 判断结果
 */
export function test(value) {
    return value ? this.testRule.test(value) : true;
}

/*
 * @description: 正则替换
 * @param {string} value 内容
 * @return {string} 替换后的内容
 */
export function replace(value) {
    if (value) {
        return value.replace(this.replaceRule, '');
    } else {
        return '';
    }
}
