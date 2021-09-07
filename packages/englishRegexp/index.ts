/*
 * 英文
 */
import regexp from '../_regexp';

class englishRegexp extends regexp {
	readonly replaceRule: any = /[^A-z]/g;
	readonly testRule: any = /^[A-z]*$/;
}

export default new englishRegexp();
