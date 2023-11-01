/*
 * @FileName: integerPositiveRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\integerPositiveRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:35:21
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 11:35:21
 * @Description: 正整数正则
 */
import { regexp } from '../base/index';

export default new (class extends regexp {
    constructor() {
        super(/^\d*$/, /\D/g);
    }
})();