/*
 * @FileName: englishRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\englishRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:36:54
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 11:36:54
 * @Description: 英文正则
 */
import { regexp } from '../base/index';

export default new (class extends regexp {
    constructor() {
        super(/^[A-z]*$/, /[^A-z]/g);
    }
})();