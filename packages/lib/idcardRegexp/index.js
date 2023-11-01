/*
 * @FileName: idcardRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\idcardRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:39:08
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 11:39:14
 * @Description: 身份证正则
 */
import { regexp } from '../base/index';

export default new (class extends regexp {
    constructor() {
        super(/^[1-9]\D{5}(18|19|([23]\D))\D{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\D{3}[0-9Xx]$/);
    }
})();