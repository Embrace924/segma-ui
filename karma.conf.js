let webpackConfig = require('@vue/cli-service/webpack.config.js')
module.exports = function (config) {
    config.set({
        frameworks: [
            'mocha',
            'chai',
            'sinon-chai'
        ],
        files: [
            'tests/radio.spec.js' //tests目录下，所有.spce.js结尾的测试文件
        ],
        preprocessors: {
            '**/*.spec.js': [
                'webpack',
                'sourcemap'
            ]
        },
        webpack: webpackConfig,
        reporters: [
            'spec',
            'coverage'
        ],
        coverageReporter: {
            // 配置生成的代码覆盖率文件存放位置
            dir: './coverage',
            reporters: [
                // 生成 lcov.info 以及 html 文件，lcov.info 该文件中包含了详细的每个文件，每行，每个函数的执行信息。
                {
                    type: 'lcov',
                    subdir: '.'
                },
                // 在命令行输出简要覆盖率数据
                {
                    type: 'text-summary'
                }
            ]
        },
        browsers: ['ChromeHeadless'],
        singleRun: true,
        captureConsole: true
    })
};
