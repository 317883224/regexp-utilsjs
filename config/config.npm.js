/*
 * @FileName: config.npm.js
 * @FilePath: \regexp-utilsjs\config\config.npm.js
 * @Author: FYR
 * @Date: 2023-04-12 15:29:48
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 14:23:44
 * @Description: 生成npm配置文件的配置文件
 */

const fs = require('fs');
const { resolve } = require('path');
const writerStream = fs.createWriteStream(resolve('./dist/package.json'));
let packageData = require('../package.json') || {};

packageData.private = false;
delete packageData.scripts;
delete packageData.devDependencies;
writerStream.write(JSON.stringify(packageData, '', '\t'), 'utf-8');
writerStream.end();