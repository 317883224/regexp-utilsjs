/*
 * 网址
 */
import regexp from '../_regexp';

class internetURLRegexp extends regexp {
	constructor(){
		super();
		this.testRule = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/;
		return this;
	}
	replace(){
		console.warn('replace is not a function');
	}
}

export default new internetURLRegexp();
