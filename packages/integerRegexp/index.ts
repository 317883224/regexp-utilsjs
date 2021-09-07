/*
 * 整数
 */
import regexp from '../_regexp';

class integerRegexp extends regexp {
	readonly replaceRule: any = /\D/g;
	readonly testRule: any = /^\-?\d+$/;
	readonly replace =  function(value: string | number) {
		value = value.toString();
		return value.replace(this.replaceRule, (item, index, value) => item === '-' && index === 0 ? item : '');
	}
}

export default new integerRegexp();
