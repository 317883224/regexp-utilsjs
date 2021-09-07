/*
* 全局导入所有函数
* _* 和 packages/index.ts 默认不导入
*/
const fun = (r => {
	let _modules = {};
	r.keys().forEach(
		key => {
			if(!/^(\.\/)(([-_].+\/)?)(\w+\.ts)/.test(key)) _modules[key.replace(/^(.*\/)(.+)(\/.*)/, '$2')] = r(key).default;
		}
	)
	return _modules;
})(require.context('.', true, /\.ts$/));

// 以数组的结构保存组件，便于遍历
const components = [
]

// 定义 install 方法
const install = function (Vue) {
    if (install.prototype.$installed) return;
    install.prototype.$installed = true;
    // 遍历并注册全局组件
    components.map(component => {
        Vue.component(component.name, component)
    })
	// 便利并注册方法
	Vue.prototype.$RegExp = fun;
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue)
}

export default {
    // 导出的对象必须具备一个 install 方法
    install,
	// 方法
	...fun,
    // 组件列表
    ...components
}