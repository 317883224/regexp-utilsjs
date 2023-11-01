/*
 * @FileName: integerRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\integerRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:34:53
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 11:59:19
 * @Description: 整数正则
 */
import { regexp } from '../base/index';

export default new (class extends regexp {
    constructor() {
        super(/^\-?\d+$/, /\D/g);
    }

    replace(value) {
        value = value.toString();
        return value.replace(this.replaceRule, (item, index, value) => (item === '-' && index === 0 ? item : ''));
    }
})();