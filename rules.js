/* ******************************** 规则方法使用说明 **********************************
 * 
 * 根据不同的正则方法，传入值后得到对应的结果
 * 
 * ***********************************************************************************/

// 正则判断
function test(value) {
	return value ? this.testRule.test(value) : true;
};

// 正则替换
function replace(value) {
	if (value) {
		return value.replace(this.replaceRule, '');
	}else{
		return false;
	}
};


// 数字
export const numberRegexp = {
	replaceRule: /\D/g,
	testRule: /^\-?(\d+|\d+\.\d+)$/,
	test: test,
	replace: function(value) {
		let i = value.indexOf('.');
		return value.replace(this.replaceRule, (item, index, value) => (item === '-' && index === 0) || index === i ? item :
			'');
	},
}


// 正数
export const numberPositiveRegexp = {
	replaceRule: /\D/g,
	testRule: /^\d+|\d+\.\d+$/,
	test: test,
	replace: function(value) {
		let i = value.indexOf('.');
		return value.replace(this.replaceRule, (item, index, value) => index === i ? item : '');
	},
}


// 负数
export const numberNegativeRegexp = {
	replaceRule: /\D/g,
	testRule: /^\-(\d+|\d+\.\d+)$/,
	test: test,
	replace: function(value) {
		let i = value.indexOf('.');
		value = value.replace(this.replaceRule, (item, index, value) => (item === '-' && index === 0) || index === i ? item :
			'');
		return value < 0 ? value : '';
	},
}


// 整数
export const integerRegexp = {
	replaceRule: /\D/g,
	testRule: /^\-?\d+$/,
	test: test,
	replace: function(value) {
		return value.replace(this.replaceRule, (item, index, value) => item === '-' && index === 0 ? item : '');
	},
}

// 正整数
export const integerPositiveRegexp = {
	replaceRule: /\D/g,
	testRule: /^\d*$/,
	test: test,
	replace: replace,
}

// 负整数
export const integerNegativeiRegexp = {
	replaceRule: /\D/g,
	testRule: /^\-\d+$/,
	test: test,
	replace: function(value) {
		return value.replace(this.replaceRule, (item, index, value) => item === '-' && index === 0 ? item : '');
	},
}

// 中文
export const chineseRegexp = {
	replaceRule: /[^\u4e00-\u9fa5]/g,
	testRule: /^[\u4e00-\u9fa5]*$/,
	test: test,
	replace: replace,
}

// 英文
export const englishruleRegexp = {
	replaceRule: /[^A-z]/g,
	testRule: /^[A-z]*$/,
	test: test,
	replace: replace,
}


// 邮箱
export const emailRegexp = {
	testRule: /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/,
	test: test,
}

// 手机或电话
export const phoneRegexp = {
	testRule: /^(0\d{2,3}\-)?([2-9]\d{6,7})(\-\d{1,4})?$|^((\+?86|0086)\-)?1[3,4,5,7,8,9]\d{9}$/,
	test: test,
}

// 身份证
export const idcardRegexp = {
	testRule: /^[1-9]\D{5}(18|19|([23]\D))\D{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\D{3}[0-9Xx]$/,
	test: test,
}

// 网址
export const internetURLRegexp = {
	testRule: /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/,
	test: test,
}
