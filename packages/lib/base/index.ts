/*
 * @FileName: base
 * @FilePath: \regexp-utilsjs\packages\lib\base\index.ts
 * @Author: FYR
 * @Date: 2023-11-01 11:31:31
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 17:22:40
 * @Description: 基本方法
 */
/*
 * @description: 正则判断
 * @param {string} value 判断内容
 * @return {boolean} 判断结果
 */
export function test(value: string): boolean {
    return value ? this.testRule.test(value) : true;
}

/*
 * @description: 正则替换
 * @param {string} value 内容
 * @return {string} 替换后的内容
 */
export function replace(value: string): string {
    if (value) {
        return value.replace(this.replaceRule, '');
    } else {
        return '';
    }
}
