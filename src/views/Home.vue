<template>
    <div class="segma-ui">
        <div class="segma-input">
            <div>输入框</div>
            <el-input class="segma-xs"
                      placeholder="请输入内容"
                      v-model="segmaInput.value1">
            </el-input>
            <el-input class="segma-s"
                      placeholder="请输入内容"
                      disabled
                      suffix-icon="el-icon-date"
                      v-model="segmaInput.value1">
            </el-input>
            <el-input class="segma-m"
                      placeholder="请输入内容"
                      prefix-icon="el-icon-date"
                      v-model="segmaInput.value1">
            </el-input>
            <el-input class="segma-l"
                      placeholder="请输入内容"
                      v-model="segmaInput.value1">
            </el-input>
        </div>
        <div class="segma-select">
            <div> 下拉菜单</div>
            <el-select v-model="segmaSelect.value1"
                       class="segma-xs"
                       clearable
                       placeholder="请选择">
                <el-option
                    v-for="item in segmaSelect.value1Options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="segmaSelect.value1"
                       class="segma-s"
                       clearable
                       placeholder="请选择">
                <el-option
                    v-for="item in segmaSelect.value1Options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="segmaSelect.value1"
                       class="segma-m"
                       clearable
                       placeholder="请选择">
                <el-option
                    v-for="item in segmaSelect.value1Options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="segmaSelect.value1"
                       class="segma-l"
                       clearable
                       placeholder="请选择">
                <el-option
                    v-for="item in segmaSelect.value1Options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
            <el-select v-model="segmaSelect.value2"
                       class="segma-m"
                       multiple
                       placeholder="请选择">
                <el-option
                    v-for="item in segmaSelect.value2Options"
                    class="segma-m-option"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                    :disabled="item.value==='选项2'">
                </el-option>
            </el-select>
        </div>
        <div class="segma-input-number">
            <div>计数器</div>
            <el-input-number v-model="segmaInputNumber.num"
                             :min="1"
                             :max="10"
                             label="描述文字"></el-input-number>
        </div>
    </div>
</template>

<script>
export default {
    name: 'test',
    data() {
        return {
            segmaInput: {
                value1: ''
            },
            segmaSelect: {
                value1: '',
                value1Options: [
                    {
                        value: '1',
                        label: '测试1'
                    },
                    {
                        value: '2',
                        label: '测试2'
                    }
                ],
                value2: '',
                value2Options: [
                    {
                        value: '选项1',
                        label: '黄金糕'
                    }, {
                        value: '选项2',
                        label: '双皮奶'
                    }, {
                        value: '选项3',
                        label: '蚵仔煎'
                    }, {
                        value: '选项4',
                        label: '龙须面'
                    }, {
                        value: '选项5',
                        label: '北京烤鸭'
                    }
                ],
            },
            segmaInputNumber: {
                num: 0
            }
        };
    }
};
</script>

<style lang="less">
.segma-ui {
    .segma-input {
        width: 230px;
        margin-left: 20px;
    }
    .segma-input, .segma-select {
        width: 300px;
        padding: 20px 0;
        box-sizing: border-box;
        /*input size  开始*/
        .segma-xs {
            margin-bottom: 8px;
            .el-input__inner {
                height: 24px;
                line-height: 24px;
                font-size: 14px;
            }
            .el-input__icon {
                line-height: 24px;
            }
        }
        .segma-s {
            margin-bottom: 12px;
            .el-input__inner {
                height: 32px;
                line-height: 32px;
                font-size: 14px;
            }
            .el-input__icon {
                line-height: 32px;
            }
        }
        .segma-m {
            margin-bottom: 16px;
            .el-input__inner {
                height: 40px;
                line-height: 40px;
                font-size: 16px;
            }
            .el-input__icon {
                line-height: 40px;
            }
        }
        .segma-l {
            margin-bottom: 20px;
            .el-input__inner {
                height: 52px;
                line-height: 52px;
                font-size: 16px;
            }
            .el-input__icon {
                line-height: 52px;
            }
        }
        /*input size  结束*/

        /*disabled样式   开始*/
        .el-input.is-disabled {
            .el-input__inner {
                color: rgba(0, 0, 0, 0.5);
                border: rgba(0, 0, 0, 0.1);
                background-color: rgba(0, 0, 0, 0.2);
            }
        }
        /*disabled样式   结束*/

        /*默认提示语颜色  开始*/
        :-moz-placeholder { /* Mozilla Firefox 4 to 18 */
            color: rgba(0, 0, 0, 0.5);
            opacity: 1;
        }
        ::-moz-placeholder { /* Mozilla Firefox 19+ */
            color: rgba(0, 0, 0, 0.5);
            opacity: 1;
        }
        input:-ms-input-placeholder {
            color: rgba(0, 0, 0, 0.5);
            opacity: 1;
        }
        input::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.5);
            opacity: 1;
        }
        /*默认提示语颜色  结束*/
    }

    .segma-input-number {
        width: 300px;
        padding: 20px 0;
        box-sizing: border-box;
        .el-input-number__increase, .el-input-number__decrease {
            .el-icon-plus {
                font-weight: bold;
            }
        }

        .el-input-number__increase:hover, .el-input-number__decrease:hover {
            background-color: #e7f0fe;
        }
    }

    /*input 内边距  开始*/
    .el-input__inner {
        padding: 0 12px;
    }
    .el-input--prefix {
        .el-input__inner {
            padding-left: 30px;
        }
    }
    /*input 内边距  结束*/

    /**/

}

/* 下拉菜单的尺寸设置
   悬浮框 放在最外层
   开始 */
.el-select-dropdown {
    .segma-xs-option {
        height: 24px;
        line-height: 24px;
    }
    .segma-s-option {
        height: 32px;
        line-height: 32px;
    }
    .segma-m-option {
        height: 40px;
        line-height: 40px;
    }
    .segma-l-option {
        height: 52px;
        line-height: 52px;
    }
}

/*下拉菜单的尺寸设置  结束*/
</style>