/*
 * @FileName: numberNegativeRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\numberNegativeRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:34:28
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 15:03:26
 * @Description: 负数正则
 */
import { regexp } from '../base/index';

export default new (class extends regexp {
    constructor() {
        super(/^\-(\d+|\d+\.\d+)$/, /\D/g);
    }

    replace(value) {
        let decimalPointIndex; // 小数点的位置
        value = value.toString();
        decimalPointIndex = value.indexOf('.');
        value = value.replace(this.replaceRule, (item, index, value) =>
            (item === '-' && index === 0) || index === decimalPointIndex ? item : ''
        );
        return value < 0 ? value : '';
    }
})();