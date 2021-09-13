/*
 * 正整数
 */
import regexp from '../_regexp';

class integerPositiveRegexp extends regexp {
	constructor(){
		super();
		this.replaceRule = /\D/g;
		this.testRule = /^\d*$/;
		return this;
	}
}

export default new integerPositiveRegexp();
