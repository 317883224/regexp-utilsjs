/*
 * @FileName: integerPositiveRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\integerPositiveRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:35:21
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 16:51:24
 * @Description: 正整数正则
 */
import { test, replace } from '../base/index';

function integerPositiveRegexp() {}

integerPositiveRegexp.testRule = /^\d*$/;
integerPositiveRegexp.replaceRule = /\D/g;
integerPositiveRegexp.test = test;
integerPositiveRegexp.replace = replace;

export default integerPositiveRegexp;
