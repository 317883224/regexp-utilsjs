/*
 * @FileName: englishRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\englishRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:36:54
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 16:49:46
 * @Description: 英文正则
 */
import { test, replace } from '../base/index';

function englishRegexp() {}

englishRegexp.testRule = /^[A-z]*$/;
englishRegexp.replaceRule = /[^A-z]/g;
englishRegexp.test = test;
englishRegexp.replace = replace;

export default englishRegexp;
