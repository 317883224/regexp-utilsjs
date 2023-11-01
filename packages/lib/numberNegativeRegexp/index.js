/*
 * @FileName: numberNegativeRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\numberNegativeRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:34:28
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 16:57:54
 * @Description: 负数正则
 */
import { test } from '../base/index';

function numberNegativeRegexp() {}

numberNegativeRegexp.testRule = /^\-(\d+|\d+\.\d+)$/;
numberNegativeRegexp.replaceRule = /\D/g;
numberNegativeRegexp.test = test;
numberNegativeRegexp.replace = function (value) {
    let decimalPointIndex; // 小数点的位置
    value = value.toString();
    decimalPointIndex = value.indexOf('.');
    value = value.replace(this.replaceRule, (item, index, value) =>
        (item === '-' && index === 0) || index === decimalPointIndex ? item : ''
    );
    return value < 0 ? value : '';
};

export default numberNegativeRegexp;
