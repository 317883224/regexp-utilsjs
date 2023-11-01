/*
 * @FileName: phoneRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\phoneRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:38:14
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 13:17:10
 * @Description: 手机号正则
 */
import { regexp } from '../base/index';

export default new (class extends regexp {
    constructor() {
        super(/^((\+?86|0086)\-)?1[3,4,5,7,8,9]\d{9}$/);
    }
})();