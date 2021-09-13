/*
 * 数字正则
 */
import regexp from '../_regexp';

class numberRegexp extends regexp {
	constructor(){
		super();
		this.replaceRule = /\D/g;
		this.testRule = /^\-?(\d+|\d+\.\d+)$/;
		return this;
	}
	replace(value) {
		let decimalPointIndex; // 小数点的位置
		value = value.toString();
		decimalPointIndex = value.indexOf('.');
		
		/* 
		* 过滤
		* 1.非0位的负号
		* 2.非第一个小数点
		* 3.非数字
		 */
		return value.replace(this.replaceRule, (item, index, value) => ((item === '-' && index === 0) || index === decimalPointIndex ? item : ''));
	};
}

export default new numberRegexp();
