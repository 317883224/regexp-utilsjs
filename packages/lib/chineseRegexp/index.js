/*
 * @FileName: chineseRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\chineseRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:36:16
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 11:57:48
 * @Description: 中文正则
 */
import { regexp } from '../base/index';

export default new (class extends regexp {
    constructor() {
        super(/^[\u4e00-\u9fa5]*$/, /[^\u4e00-\u9fa5]/g);
    }
})();