/*
 * @FileName: gulpfile
 * @Author: FYR
 * @Date: 2022-05-18 09:48:02
 * @LastEditors: FYR
 * @LastEditTime: 2022-05-18 10:05:34
 * @Description: gulp配置文件
 */

var gulp = require('gulp');
var clean = require("gulp-clean"); // 清理之前文件和文件夹
var jshint = require('gulp-jshint'); // js检测
var uglify = require("gulp-uglify"); // 压缩js
var stripDebug = require("gulp-remove-logging"); // 移除console语句
var notify = require('gulp-notify'); // 提示信息
var connect = require('gulp-connect');
var gutil = require('gulp-util');
var watch = require('gulp-watch');

const env = process.argv.includes('serve') ? 'serve' : 'build'; // 当前环境 serve：本地环境 build：打包环境
const convertFolder = env === 'serve' ? 'serve' : 'lib'; // 转换文件夹

/* 
 * 本地调试环境local
 */
gulp.task('serve', function () {
	connect.server({
		root: convertFolder,
		port: 10000,
		livereload: true,
	});

	watch('examples/**/*.html', gulp.series('html'));
	watch('examples/**/*.js', gulp.series('js'));
});

/**
 * 处理 html 文件
*/
gulp.task('html', function () {
	gutil.log('开始处理 html');

	return gulp.src('./examples/**/*.html')
		.pipe(gulp.dest(convertFolder))
		.pipe(connect.reload())
});


/* 
 * 处理 js 文件
 */
gulp.task('js', gulp.series(function () {
	gutil.log('开始处理 js');

	return gulp.src(env === 'serve' ? ['examples/**/*.js'] : ['examples/js/**/*.js'])
		.pipe(
			uglify({
				mangle: true, //类型：Boolean 默认：true 是否修改变量名
				compress: false, //类型：Boolean 默认：true 是否完全压缩
				//preserveComments: all //保留所有注释
			})
		)
		.pipe(stripDebug({
			methods: env === 'serve' ? [] : ['log']
		}))
		.pipe(gulp.dest(convertFolder))
		.pipe(connect.reload())
}))

/**
 * 清空目标目录
 */
gulp.task('clean', function () {
	return gulp.src(convertFolder, {
		allowEmpty: true
	}).pipe(clean())
})

/* 
 * 检测
 */
gulp.task('jshint', function () {
	gutil.log('开始检测');

	return gulp.src('./examples/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(jshint.reporter('fail'))
});


/**
 * 使用 gulp.task('default') 定义默认任务
 * 在命令行使用 gulp 启动 script 任务和 auto 任务
 */
gulp.task('serve', gulp.series('clean', 'html', 'js', 'serve'))
gulp.task('build', gulp.series('clean', 'js'))