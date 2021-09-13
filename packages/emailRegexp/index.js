/*
 * 邮箱
 */
import regexp from '../_regexp';

class emailRegexp extends regexp {
	constructor() {
		super();
	    this.testRule = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		return this;
	}
	replace(){
		console.warn('replace is not a function');
	}
}

export default new emailRegexp();
