/*
 * @FileName: integerNegativeiRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\integerNegativeiRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:35:41
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 16:50:53
 * @Description: 负整数正则
 */
import { test, replace } from '../base/index';

function integerNegativeiRegexp() {}

integerNegativeiRegexp.testRule = /^\-\d+$/;
integerNegativeiRegexp.replaceRule = /\D/g;
integerNegativeiRegexp.test = test;
integerNegativeiRegexp.replace = replace;

export default integerNegativeiRegexp;
