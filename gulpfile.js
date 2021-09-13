var gulp = require('gulp');
var clean = require("gulp-clean"); //清理之前文件和文件夹
var jshint = require('gulp-jshint'); //js检测
var uglify = require("gulp-uglify"); //压缩js
var stripDebug = require("gulp-remove-logging"); //移除console语句
var notify = require('gulp-notify'); //提示信息
var connect = require('gulp-connect');
var gutil = require('gulp-util');

/**
 * 清空目标目录
 */
gulp.task('clean', function() {
	return gulp.src('lib', {
		allowEmpty: true
	}).pipe(clean())
})

gulp.task('watch', function() {
	// 监听js文件变化
	gulp.watch(['examples/**/*.js']);
})

gulp.task('build', gulp.series(function() {
	gutil.log('压缩开始');
	return gulp.src(['examples/*.js', "examples/**/*.js"])
		.pipe(
			uglify({
				mangle: true, //类型：Boolean 默认：true 是否修改变量名
				compress: false, //类型：Boolean 默认：true 是否完全压缩
				//preserveComments: all //保留所有注释
			})
		)
		.pipe(stripDebug({
			methods: ['log']
		}))
		.pipe(gulp.dest('lib'))
}))

// 检测
gulp.task('jshint', function() {
	gulp.src('./examples/*.js')
		.pipe(notify({
			message: '检测开始'
		}))
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(notify({
			message: '检测完成'
		}))
});

// 本地调试环境local
gulp.task('server', function() {
	connect.server({
		port: 8000,
		livereload: true,
	});
});

/**
 * 使用 gulp.task('default') 定义默认任务
 * 在命令行使用 gulp 启动 script 任务和 auto 任务
 */
gulp.task('default', gulp.series('clean', 'build'))