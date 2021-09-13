/*
 * 负整数
 */
import regexp from '../_regexp';

class integerNegativeiRegexp extends regexp {
	constructor(){
		super();
		this.replaceRule = /\D/g;
		this.testRule = /^\-\d+$/;
		return this;
	}
}


export default new integerNegativeiRegexp();
