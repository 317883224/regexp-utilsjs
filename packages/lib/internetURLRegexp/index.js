/*
 * @FileName: internetURLRegexp
 * @FilePath: \regexp-utilsjs\packages\lib\internetURLRegexp\index.js
 * @Author: FYR
 * @Date: 2023-11-01 11:39:34
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 11:39:35
 * @Description: 网址正则
 */
import { regexp } from '../base/index';

export default new (class extends regexp {
    constructor() {
        super(/^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/);
    }
})();