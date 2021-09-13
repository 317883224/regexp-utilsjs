/*
 * 英文
 */
import regexp from '../_regexp';

class englishRegexp extends regexp {
	constructor(){
		super();
		this.replaceRule = /[^A-z]/g;
		this.testRule = /^[A-z]*$/;
		return this;
	}
}

export default new englishRegexp();
