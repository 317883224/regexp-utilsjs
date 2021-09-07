/*
 * 负整数
 */
import regexp from '../_regexp';

class integerNegativeiRegexp extends regexp {
	readonly replaceRule: any = /\D/g;
	readonly testRule: any = /^\-\d+$/;
}


export default new integerNegativeiRegexp();
