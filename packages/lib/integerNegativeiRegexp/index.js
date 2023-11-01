/*
 * @FileName: integerNegativeiRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\integerNegativeiRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:35:41
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 11:35:42
 * @Description: 负整数正则
 */
import { regexp } from '../base/index';

export default new (class extends regexp {
    constructor() {
        super(/^\-\d+$/, /\D/g);
    }
})();