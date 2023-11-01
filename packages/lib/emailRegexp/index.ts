/*
 * @FileName: emailRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\emailRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:37:16
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 16:48:54
 * @Description: 邮箱正则
 */
import { test } from '../base/index';

function emailRegexp() {}

emailRegexp.testRule = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
emailRegexp.test = test;

export default emailRegexp;
