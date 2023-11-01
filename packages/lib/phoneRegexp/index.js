/*
 * @FileName: phoneRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\phoneRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:38:14
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 16:58:30
 * @Description: 手机号正则
 */
import { test } from '../base/index';

function phoneRegexp() {}

phoneRegexp.testRule = /^((\+?86|0086)\-)?1[3,4,5,7,8,9]\d{9}$/;
phoneRegexp.test = test;

export default phoneRegexp;