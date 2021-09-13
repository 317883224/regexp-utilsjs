/*
 * 负数
 */
import regexp from '../_regexp';

class numberNegativeRegexp extends regexp {
	constructor(){
		super();
		this.replaceRule = /\D/g;
		this.testRule = /^\-(\d+|\d+\.\d+)$/;
		return this;
	}
	replace(value) {
		let decimalPointIndex; // 小数点的位置
		value = value.toString();
		decimalPointIndex = value.indexOf('.');
		value = value.replace(this.replaceRule, (item, index, value) => (item === '-' && index === 0) || index === decimalPointIndex ? item : '');
		return value < 0 ? value : '';
	}
}

export default new numberNegativeRegexp();
