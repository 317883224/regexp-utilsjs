/*
 * 手机或电话
 */
import regexp from '../_regexp';

class phoneRegexp extends regexp {
	readonly testRule: any = /^(0\d{2,3}\-)?([2-9]\d{6,7})(\-\d{1,4})?$|^((\+?86|0086)\-)?1[3,4,5,7,8,9]\d{9}$/;
	readonly replace = function(): void{
		console.warn('replace is not a function');
	}
}

export default new phoneRegexp();
