/*
 * 数字正则
 */
import regexp from '../_regexp';

// 身份证
class idcardRegexp extends regexp {
	constructor(){
		super();
		this.testRule = /^[1-9]\D{5}(18|19|([23]\D))\D{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\D{3}[0-9Xx]$/;
		return this;
	}
	replace(){
		console.warn('replace is not a function');
	}
}

export default new idcardRegexp();
