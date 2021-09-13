/*
 * 整数
 */
import regexp from '../_regexp';

class integerRegexp extends regexp {
	constructor(){
		super();
		this.replaceRule = /\D/g;
		this.testRule = /^\-?\d+$/;
		return this;
	}
	replace(value) {
		value = value.toString();
		return value.replace(this.replaceRule, (item, index, value) => item === '-' && index === 0 ? item : '');
	}
}

export default new integerRegexp();
