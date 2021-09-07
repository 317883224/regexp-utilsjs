/*
 * 正数
 */
import regexp from '../_regexp';

class numberPositiveRegexp extends regexp{
	readonly replaceRule: any = /\D/g;
	readonly testRule:any = /^\d+|\d+\.\d+$/;
	readonly replace = function(value: string | number) {
		let decimalPointIndex: number; // 小数点的位置
		value = value.toString();
		decimalPointIndex = value.indexOf('.');
		return value.replace(this.replaceRule, (item, index, value) => index === decimalPointIndex ? item : '');
	}
}

export default new numberPositiveRegexp();
