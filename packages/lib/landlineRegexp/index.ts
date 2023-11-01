/*
 * @FileName: landlineRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\landlineRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:38:44
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 11:38:44
 * @Description: 固定电话正则
 */
import { test } from '../base/index';

function landlineRegexp() {}

landlineRegexp.testRule = /^(0\d{2,3}\-?)?([2-9]\d{6,7})(\-\d{1,4})?$/;
landlineRegexp.test = test;

export default landlineRegexp;
