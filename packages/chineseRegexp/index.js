/*
 * 中文
 */
import regexp from '../_regexp';

class chineseRegexp extends regexp {
	constructor(){
		super();
		this.replaceRule = /[^\u4e00-\u9fa5]/g;
		this.testRule = /^[\u4e00-\u9fa5]*$/;
		return this;
	}
}

export default new chineseRegexp();
