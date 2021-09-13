/*
 * 正数
 */
import regexp from '../_regexp';

class numberPositiveRegexp extends regexp{
	constructor(){
		super();
		this.replaceRule = /\D/g;
		this.testRule = /^\d+|\d+\.\d+$/;
		return this;
	}
	replace(value) {
		let decimalPointIndex; // 小数点的位置
		value = value.toString();
		decimalPointIndex = value.indexOf('.');
		return value.replace(this.replaceRule, (item, index, value) => index === decimalPointIndex ? item : '');
	}
}

export default new numberPositiveRegexp();
