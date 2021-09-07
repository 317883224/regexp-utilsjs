/*
 * 负数
 */
import regexp from '../_regexp';

class numberNegativeRegexp extends regexp {
	readonly replaceRule: any = /\D/g;
	readonly testRule: any = /^\-(\d+|\d+\.\d+)$/;
	readonly replace = function(value: string | number) {
		let decimalPointIndex: number; // 小数点的位置
		value = value.toString();
		decimalPointIndex = value.indexOf('.');
		value = value.replace(this.replaceRule, (item, index, value) => (item === '-' && index === 0) || index === decimalPointIndex ? item : '');
		return Number(value) < 0 ? value : '';
	}
}

export default new numberNegativeRegexp();
