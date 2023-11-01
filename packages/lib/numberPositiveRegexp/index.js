/*
 * @FileName: numberPositiveRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\numberPositiveRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:33:35
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 11:33:36
 * @Description: 正数正则
 */
import { regexp } from '../base/index';

export default new (class extends regexp {
    constructor() {
        super(/^\d+|\d+\.\d+$/, /\D/g);
    }

    replace(value) {
        let decimalPointIndex; // 小数点的位置
        value = value.toString();
        decimalPointIndex = value.indexOf('.');
        return value.replace(this.replaceRule, (item, index) => (index === decimalPointIndex ? item : ''));
    }
})();