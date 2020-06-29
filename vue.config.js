/**
 * Created by cld on 2020/2/7.
 */
    // vue-cli参考教程：https://cli.vuejs.org/zh/config/
const path = require('path');
const resolve = dir => path.join(__dirname, dir);

function addStyleResource(rule) {
    rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
            patterns: [
                resolve('src/assets/css/var.less'),
                resolve('src/assets/css/scroll.less')

            ]
        });
}

module.exports = {
    productionSourceMap: false,
    runtimeCompiler: true,
    // 在htmlWebpackPlugin中增加环境变量，在index.html中使用
    chainWebpack: config => {
        // 添加别名
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@assets', resolve('src/assets'))
            .set('@components', resolve('src/components'));

        // 自动注入less变量、函数等
        const types = [
            'vue-modules',
            'vue',
            'normal-modules',
            'normal'
        ];
        types.forEach(type => addStyleResource(config.module.rule('less').oneOf(type)));
    },
}
