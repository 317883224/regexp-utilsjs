/*
 * @FileName: integerRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\integerRegexp\index.ts
 * @Author: FYR
 * @Date: 2023-11-01 11:34:53
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 17:36:34
 * @Description: 整数正则
 */
import { test } from '../base/index';

function integerRegexp() {}

integerRegexp.testRule = /^\-?\d+$/;
integerRegexp.replaceRule = /\D/g;
integerRegexp.test = test;
integerRegexp.replace = function (value: string): string {
    value = value.toString();
    return value.replace(this.replaceRule, (item, index, value) => (item === '-' && index === 0 ? item : ''));
};

export default integerRegexp;
