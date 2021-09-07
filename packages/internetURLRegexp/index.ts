/*
 * 网址
 */
import regexp from '../_regexp';

class internetURLRegexp extends regexp {
	readonly testRule: any = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/;
	readonly replace = function(): void{
		console.warn('replace is not a function');
	}
}

export default new internetURLRegexp();
