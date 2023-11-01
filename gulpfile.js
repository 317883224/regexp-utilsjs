/*
 * @FileName: gulpfile
 * @Author: FYR
 * @Date: 2022-05-18 09:48:02
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 17:10:51
 * @Description: gulp配置文件
 */

const gulp = require('gulp');
const clean = require('gulp-clean'); // 清理之前文件和文件夹
const jshint = require('gulp-jshint'); // js检测
const uglify = require('gulp-uglify'); // 压缩js
const stripDebug = require('gulp-remove-logging'); // 移除console语句
const notify = require('gulp-notify'); // 提示信息
const connect = require('gulp-connect');
const gutil = require('gulp-util');
const watch = require('gulp-watch');
const replace = require('gulp-replace');
const { exec } = require('child_process');
const ts = require('gulp-typescript');
const { generateUnifiedExport } = require('./config/config.generateUnifiedExport.js');
const { generateReadme } = require('./config/config.readme');

const env = process.argv.includes('serve') ? 'serve' : 'build'; // 当前环境 serve：本地环境 build：打包环境
const convertFolder = env === 'serve' ? 'serve' : 'dist'; // 转换文件夹

/*
 * 本地调试环境local
 */
gulp.task('serve', function (cb) {
    connect.server({
        root: './',
        port: 10000,
        host: '0.0.0.0',
        livereload: true
    });
    cb();
});

/*
 * 监听文件改变
 */
gulp.task('watch', function (cb) {
    watch('./**/*.html', gulp.series('html'));
    watch(['packages/**/*.ts', '!packages/lib/index.ts'], gulp.series('ts', 'js'));
    cb();
});

/**
 * 处理 html 文件
 */
gulp.task('html', function () {
    gutil.log('开始处理 html');

    return gulp.src('./**/*.html').pipe(connect.reload());
});

/*
 * 处理 ts 文件
 */
gulp.task(
    'ts',
    gulp.series(function () {
        gutil.log('开始处理 ts');
        generateUnifiedExport();

        return gulp
            .src(env === 'serve' ? ['packages/**/*.ts'] : ['packages/**/*.ts'])
            .pipe(ts.createProject('./tsconfig.json')())
            .pipe(gulp.dest(convertFolder))
            .pipe(connect.reload());
    })
);

/*
 * 处理 js 文件
 */
gulp.task(
    'js',
    gulp.series(function () {
        gutil.log('开始处理 js');

        return gulp
            .src([`${convertFolder}/**/*.js`])
            .pipe(replace(/(['"]\.{1,2}[/A-z0-9]+\/)(index)(['"]\;)/g, '$1index.js$3'))
            .pipe(
                stripDebug({
                    methods: env === 'serve' ? [] : ['log']
                })
            )
            .pipe(
                uglify({
                    mangle: true, //类型：Boolean 默认：true 是否修改变量名
                    compress: false //类型：Boolean 默认：true 是否完全压缩
                    //preserveComments: all //保留所有注释
                })
            )
            .pipe(gulp.dest(convertFolder))
            .pipe(connect.reload());
    })
);

/**
 * 清空目标目录
 */
gulp.task('clean', function () {
    return gulp
        .src(convertFolder, {
            allowEmpty: true
        })
        .pipe(clean());
});

/*
 * 检测
 */
gulp.task('jshint', function () {
    gutil.log('开始检测');

    return gulp.src('./packages/**/*.ts').pipe(jshint()).pipe(jshint.reporter('default')).pipe(jshint.reporter('fail'));
});

gulp.task('npm', function (cb) {
    gutil.log('开始生成 npm/package.json');
    exec('node ./config/config.npm.js');
    cb();
});

gulp.task('readme', function (cb) {
    gutil.log('开始生成 README');
    generateReadme();
    cb();
});

gulp.task('buildEnd', function (cb) {
    gutil.log('打包完成');
    cb();
});

/**
 * 使用 gulp.task('default') 定义默认任务
 * 在命令行使用 gulp 启动 script 任务和 auto 任务
 */
gulp.task('serve', gulp.series('clean', 'html', 'ts', 'js', 'serve', 'watch'));
gulp.task('build', gulp.series('clean', 'ts', 'js', 'npm', 'readme', 'buildEnd'));
