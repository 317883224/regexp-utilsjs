class regexp {
	// 正则判断
	test(value) {
		if(!this.testRule) return console.warn('test is not a function');
		return value ? this.testRule.test(value) : true;
	};
	// 正则替换
	replace(value) {
		if(!this.replaceRule) return console.warn('replace is not a function');
		if (value) {
			return value.replace(this.replaceRule, '');
		}else{
			return false;
		}
	};
}

export default regexp;