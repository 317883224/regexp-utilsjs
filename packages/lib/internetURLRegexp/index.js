/*
 * @FileName: internetURLRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\internetURLRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:39:34
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 16:54:53
 * @Description: 网址正则
 */
import { test } from '../base/index';

function internetURLRegexp() {}

internetURLRegexp.testRule = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/;
internetURLRegexp.test = test;

export default internetURLRegexp;