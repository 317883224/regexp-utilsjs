class regexp {
	// 正则判断
	protected test = function(value: any) {
		return value ? this.testRule.test(value) : true;
	};
	// 正则替换
	protected replace = function(value: any) {
		if (value) {
			return value.replace(this.replaceRule, '');
		}else{
			return false;
		}
	};
}

export default regexp;