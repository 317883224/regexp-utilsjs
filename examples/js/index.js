/*
 * @FileName: index
 * @Author: FYR
 * @Date: 2022-05-18 09:48:02
 * @LastEditors: FYR
 * @LastEditTime: 2022-05-18 11:18:21
 * @Description: js主入口
 */
/* ******************************** 规则方法使用说明 **********************************
 * 
 * 根据不同的正则方法，传入值后得到对应的结果
 * 
 * ***********************************************************************************/

// 父类
class regexp {
	constructor(testRule, replaceRule) {
		this.replaceRule = replaceRule || '';
		this.testRule = testRule || '';
	}

	// 正则判断
	test(value) {
		if (!this.testRule || this.testRule === '') return console.warn('test is not a function');
		return value ? this.testRule.test(value) : true;
	};

	// 正则替换
	replace(value) {
		if (!this.replaceRule || this.replaceRule === '') return console.warn('replace is not a function');
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
		super(/^\-?(\d+|\d+\.\d+)$/, /\D/g);
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
		super(/^\d+|\d+\.\d+$/, /\D/g);
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
		super(/^\-?\d+$/, /\D/g);
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
		super(/^\d*$/, /\D/g);
		return this;
	}
}

// 负整数
export const integerNegativeiRegexp = new class extends regexp {
	constructor() {
		super(/^\-\d+$/, /\D/g);
		return this;
	}
}

// 中文
export const chineseRegexp = new class extends regexp {
	constructor() {
		super(/^[\u4e00-\u9fa5]*$/, /[^\u4e00-\u9fa5]/g);
		return this;
	}
}

// 英文
export const englishRegexp = new class extends regexp {
	constructor() {
		super(/^[A-z]*$/, /[^A-z]/g);
		return this;
	}
}


// 邮箱
export const emailRegexp = new class extends regexp {
	constructor() {
		super(/^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/);
		return this;
	}
}

// 联系方式，包括手机号和固定电话
export const contactRegexp = new class extends regexp {
	constructor() {
		super(/^(0\d{2,3}\-?)?([2-9]\d{6,7})(\-\d{1,4})?$|^((\+?86|0086)\-)?1[3,4,5,7,8,9]\d{9}$/);
		return this;
	}
}

// 手机号
export const phoneRegexp = new class extends regexp {
	constructor() {
		super(/^((\+?86|0086)\-)?1[3,4,5,7,8,9]\d{9}$/);
		return this;
	}
}

// 固定电话
export const landlineRegexp = new class extends regexp {
	constructor() {
		super(/^(0\d{2,3}\-?)?([2-9]\d{6,7})(\-\d{1,4})?$/);
		return this;
	}
}

// 身份证
export const idcardRegexp = new class extends regexp {
	constructor() {
		super(/^[1-9]\D{5}(18|19|([23]\D))\D{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\D{3}[0-9Xx]$/);
		return this;
	}
}

// 网址
export const internetURLRegexp = new class extends regexp {
	constructor() {
		super(/^(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?$/);
		return this;
	}
}