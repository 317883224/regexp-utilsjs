/*
 * @FileName: numberPositiveRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\numberPositiveRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:33:35
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 16:40:21
 * @Description: 正数正则
 */
import { test } from '../base/index';

function numberPositiveRegexp() {}
numberPositiveRegexp.testRule = /^\d+(\.\d+)?$/;
numberPositiveRegexp.replaceRule = /\D/g;
numberPositiveRegexp.test = test;
numberPositiveRegexp.replace = function (value: string): string {
    let decimalPointIndex: number; // 小数点的位置
        value = value.toString();
        decimalPointIndex = value.indexOf('.');
        return value.replace(this.replaceRule, (item, index) => (index === decimalPointIndex ? item : ''));
};

export default numberPositiveRegexp;