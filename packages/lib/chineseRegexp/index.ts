/*
 * @FileName: chineseRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\chineseRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:36:16
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 16:49:20
 * @Description: 中文正则
 */
import { test, replace } from '../base/index';

function chineseRegexp() {}

chineseRegexp.testRule = /^[\u4e00-\u9fa5]*$/;
chineseRegexp.replaceRule = /[^\u4e00-\u9fa5]/g;
chineseRegexp.test = test;
chineseRegexp.replace = replace;

export default chineseRegexp;
