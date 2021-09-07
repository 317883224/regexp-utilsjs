/*
 * 数字正则
 */
import regexp from '../_regexp';

class numberRegexp extends regexp {
	readonly replaceRule: any = /\D/g;
	readonly testRule: any = /^\-?(\d+|\d+\.\d+)$/;
	readonly replace = function(value: string | number) {
		let decimalPointIndex: number; // 小数点的位置
		value = value.toString();
		decimalPointIndex = value.indexOf('.');
		
		/* 
		* 过滤
		* 1.非0位的负号
		* 2.非第一个小数点
		* 3.非数字
		 */
		return value.replace(this.replaceRule, (item, index, value) => ((item === '-' && index === 0) || index === decimalPointIndex ? item : ''));
	};
}

export default new numberRegexp();
