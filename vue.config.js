const path = require('path');
const join = path.join;
const fs = require('fs');


function resolve(dir) {
    return path.resolve(__dirname, dir)
}

function getEntries(path) {
	let files = fs.readdirSync(resolve(path));
	const entries = files.filter(item => !/^[-_]/.test(item)).reduce((ret, item) => {
		const itemPath = join(path, item)
		const isDir = fs.statSync(itemPath).isDirectory();
		if (isDir) {
			ret[item] = resolve(join(itemPath, 'index.ts'))
		} else {
			const [name] = item.split('.')
			ret[name] = resolve(`${itemPath}`)
		}
		return ret
	}, {})
	return entries
}

// 开发独有配置
let devConfig = {
	
}

// 生产独有配置
let proConfig = {
	configureWebpack: {
		entry: getEntries('packages'),
		output: {
			filename: '[name]/index.js',
			libraryTarget: 'commonjs2',
		}
	},
	css: { extract: false },
	productionSourceMap: false,
}

// 全部配置
module.exports = {
	pages: {
		index: {
			entry: 'examples/main.ts',
			template: 'public/index.html',
			filename: 'index.html'
		}
	},
	outputDir: 'lib',
	chainWebpack: config => {
		config.module
			.rule('js')
			.include
			.add('/packages')
			.end()
			.use('babel')
			.loader('babel-loader')
			.tap(options => {
				// 修改它的选项...
				return options
			})
		config.optimization.delete('splitChunks');
		config.plugins.delete('copy');
		config.plugins.delete('html');
		config.plugins.delete('preload');
		config.plugins.delete('prefetch');
		config.plugins.delete('hmr');
		config.entryPoints.delete('app');
	},
	lintOnSave: false,
	...(process.env.NODE_ENV === 'development'? devConfig : proConfig),
}
