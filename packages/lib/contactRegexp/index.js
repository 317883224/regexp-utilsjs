/*
 * @FileName: contactRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\contactRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:37:51
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 11:37:51
 * @Description: 联系方式，包括手机号和固定电话正则
 */
import { regexp } from '../base/index';

export default new (class extends regexp {
    constructor() {
        super(/^(0\d{2,3}\-?)?([2-9]\d{6,7})(\-\d{1,4})?$|^((\+?86|0086)\-)?1[3,4,5,7,8,9]\d{9}$/);
    }
})();