/*
 * 中文
 */
import regexp from '../_regexp';

class chineseRegexp extends regexp {
	readonly replaceRule: any = /[^\u4e00-\u9fa5]/g;
	readonly testRule:any = /^[\u4e00-\u9fa5]*$/;
}

export default new chineseRegexp();
