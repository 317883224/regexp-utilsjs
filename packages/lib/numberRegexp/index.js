/*
 * @FileName: numberRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\numberRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:32:32
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 11:32:38
 * @Description: 数字正则
 */
import { regexp } from '../base/index';

export default new (class extends regexp {
    constructor() {
        super(/^\-?(\d+|\d+\.\d+)$/, /\D/g);
    }

    replace(value) {
        let decimalPointIndex; // 小数点的位置
        value = value.toString();
        decimalPointIndex = value.indexOf('.');

        /*
         * 过滤
         * 1.非0位的负号
         * 2.非第一个小数点
         * 3.非数字
         */
        return value.replace(this.replaceRule, (item, index, value) =>
            (item === '-' && index === 0) || index === decimalPointIndex ? item : ''
        );
    }
})();