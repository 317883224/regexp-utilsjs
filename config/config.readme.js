/*
 * @FileName: 请输入该文件的名称
 * @FilePath: \regexp-utilsjs\config\config.readme.js
 * @Author: FYR
 * @Date: 2023-07-27 11:44:46
 * @LastEditors: FYR
 * @LastEditTime: 2023-11-01 15:42:26
 * @Description: 请输入该文件的描述
 */

const fs = require('fs');
const { resolve } = require('path');
const blackList = ['base'];

generateUnifiedExport();

/*
 * @description: 生成统一导出
 */
function generateUnifiedExport() {
    generateFile();
}

/*
 * @description: 生成文件
 */
function generateFile() {
    const writeStream = fs.createWriteStream(resolve('./dist/README.md'));
    let readmeTemplate = fs.readFileSync('./assets/readmeTemplate.md', 'utf-8');
    const updateLog = fs.readFileSync('./assets/changlog.md', 'utf-8');
    const path = './packages/lib';
    const fileList = fs.readdirSync(resolve(path));
    let content = [];

    fileList
        .filter((item) => !blackList.includes(item))
        .forEach((file) => {
            const filePath = resolve(`${path}/${file}/index.js`);

            if (fs.existsSync(filePath)) {
                let fileContent = fs.readFileSync(filePath, 'utf-8');
                const description = fileContent.match(/@Description: (.+)/)[1];

                content.push(
                    `| ${file} | ${description.replace('正则', '')} | <span style="color: #409EFF;">√</span> | ${
                        fileContent.match(/super\(\/.+\/.{0,2}, \/.+\/.{0,2}\)/)
                            ? '<span style="color: #409EFF;">√</span>'
                            : '<span style="color: #F56C6C;">×</span>'
                    } |`
                );
            }
        });

    content = content.sort((x, y) =>
        x.indexOf('√') === x.lastIndexOf('√') ? 0 : y.indexOf('中文') !== -1 && x.indexOf('英文') !== -1 ? 1 : -1
    );
    content.unshift('| :-----------: | :-----------: | :-----------: | :-----------: |');
    content.unshift('| 正则类型 |  说明 | test | replace |');

    readmeTemplate = readmeTemplate.replace(/<!-- 更新日志的标记 -->/, updateLog);
    readmeTemplate = readmeTemplate.replace(/<!-- 通过nodejs生成的文档的标记 -->/, content.join('\n'));
    writeStream.write(readmeTemplate, 'utf-8');
    writeStream.end();
}

module.exports = { generateUnifiedExport };
