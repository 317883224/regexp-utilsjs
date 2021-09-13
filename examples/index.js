/* ******************************** 规则方法使用说明 **********************************
 * 
 * 根据不同的正则方法，传入值后得到对应的结果
 * 
 * ***********************************************************************************/

// 父类
class regexp {
	// 正则判断
	test(value) {
		console.log(1)
		if (!this.testRule) return console.warn('test is not a function');
		return value ? this.testRule.test(value) : true;
	};
	// 正则替换
	replace(value) {
		if (!this.replaceRule) return console.warn('replace is not a function');
		if (value) {
			return value.replace(this.replaceRule, '');
		} else {
			return false;
		}
	};
}

// 数字
export const numberRegexp = new class extends regexp {
	constructor() {
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
		return value.replace(this.replaceRule, (item, index, value) => ((item === '-' && index === 0) || index ===
			decimalPointIndex ? item : ''));
	};
}


// 正数
export const numberPositiveRegexp = new class extends regexp {
	constructor() {
		super();
		this.replaceRule = /\D/g;
		this.testRule = /^\d+|\d+\.\d+$/;
		return this;
	}
	replace(value) {
		let decimalPointIndex; // 小数点的位置
		value = value.toString();
		decimalPointIndex = value.indexOf('.');
		return value.replace(this.replaceRule, (item, index, value) => index === decimalPointIndex ? item : '');
	}
}


// 负数
export const numberNegativeRegexp = new class extends regexp {
	constructor() {
		super();
		this.replaceRule = /\D/g;
		this.testRule = /^\-(\d+|\d+\.\d+)$/;
		return this;
	}
	replace(value) {
		let decimalPointIndex; // 小数点的位置
		value = value.toString();
		decimalPointIndex = value.indexOf('.');
		value = value.replace(this.replaceRule, (item, index, value) => (item === '-' && index === 0) || index ===
			decimalPointIndex ? item : '');
		return value < 0 ? value : '';
	}
}


// 整数
export const integerRegexp = new class extends regexp {
	constructor() {
		super();
		this.replaceRule = /\D/g;
		this.testRule = /^\-?\d+$/;
		return this;
	}
	replace(value) {
		value = value.toString();
		return value.replace(this.replaceRule, (item, index, value) => item === '-' && index === 0 ? item : '');
	}
}

// 正整数
export const integerPositiveRegexp = new class extends regexp {
	constructor() {
		super();
		this.replaceRule = /\D/g;
		this.testRule = /^\d*$/;
		return this;
	}
}

// 负整数
export const integerNegativeiRegexp = new class extends regexp {
	constructor() {
		super();
		this.replaceRule = /\D/g;
		this.testRule = /^\-\d+$/;
		return this;
	}
}

// 中文
export const chineseRegexp = new class extends regexp {
	constructor() {
		super();
		this.replaceRule = /[^\u4e00-\u9fa5]/g;
		this.testRule = /^[\u4e00-\u9fa5]*$/;
		return this;
	}
}

// 英文
export const englishRegexp = new class extends regexp {
	constructor() {
		super();
		this.replaceRule = /[^A-z]/g;
		this.testRule = /^[A-z]*$/;
		return this;
	}
}


// 邮箱
export const emailRegexp = new class extends regexp {
	constructor() {
		super();
		this.testRule =
			/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
		return this;
	}
}

// 手机或电话
export const phoneRegexp = new class extends regexp {
	constructor() {
		super();
		this.testRule = /^(0\d{2,3}\-)?([2-9]\d{6,7})(\-\d{1,4})?$|^((\+?86|0086)\-)?1[3,4,5,7,8,9]\d{9}$/;
		return this;
	}
}

// 身份证
export const idcardRegexp = new class extends regexp {
	constructor() {
		super();
		this.testRule =
			/^[1-9]\D{5}(18|19|([23]\D))\D{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\D{3}[0-9Xx]$/;
		return this;
	}
}

// 网址
export const internetURLRegexp = new class extends regexp {
	constructor() {
		super();
		this.testRule = /^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/;
		return this;
	}
}