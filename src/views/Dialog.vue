<template>
    <div>
        <el-button type="text"
                   @click="dialogVisible = true">点击打开 Dialog
        </el-button>

        <el-dialog title="新增商品分类"
                   :visible.sync="dialogVisible"
                   width="550px">
            <el-form ref="ruleForm"
                     :model="ruleForm"
                     :rules="rules"
                     label-width="95px">
                <el-form-item label="商品分类："
                              prop="categoryName">
                    <el-input v-model="ruleForm.categoryName"
                              size="small"></el-input>
                </el-form-item>
                <el-form-item label="商品信息："
                              prop="categoryMsg">
                    <el-input v-model="ruleForm.categoryMsg"
                              size="small"
                              type="textarea"
                              rows="5"></el-input>
                </el-form-item>
                <el-collapse v-model="activeName">
                    <el-collapse-item title="一致性 Consistency"
                                      name="1">
                        <div>与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；</div>
                        <div>在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="反馈 Feedback"
                                      name="2">
                        <div>控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；</div>
                        <div>页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。</div>
                    </el-collapse-item>
                    <el-collapse-item title="效率 Efficiency"
                                      name="3">
                        <div>简化流程：设计简洁直观的操作流程；</div>
                        <div>清晰明确：语言表达清晰且表意明确，让用户快速理解进而作出决策；</div>
                        <div>帮助用户识别：界面简单直白，让用户快速识别而非回忆，减少用户记忆负担。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability"
                                      name="4">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>
                    <el-collapse-item title="可控 Controllability"
                                      name="5">
                        <div>用户决策：根据场景可给予用户操作建议或安全提示，但不能代替用户进行决策；</div>
                        <div>结果可控：用户可以自由的进行操作，包括撤销、回退和终止当前操作等。</div>
                    </el-collapse-item>


                </el-collapse>
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                        <el-button type="info"
                                   size="small"
                                   @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary"
                                   size="small"
                                   @click="dialogVisible=false">确 定</el-button>
                </span>
        </el-dialog>
    </div>

</template>
<script>
export default {
    // Options / Data
    // components: {},
    data() {
        return {
            activeName: ['1', '2', '3', '4', '5'],
            dialogVisible: false,
            ruleForm: {
                categoryName: '',
                categoryMsg: 'body的padding需要项目中自己定义\n' +
                    '/deep/ .segma-dialog .el-dialog .el-dialog__body {\n' +
                    '    padding: 30px 30px 8px 30px;\n' +
                    '}'

            },
            rules: {
                categoryName: [
                    { required: true, message: '请输入商品分类', trigger: 'blur' },
                    { min: 1, max: 10, message: '长度在1 到 10 个字符', trigger: 'blur' }
                ]
            }
        }
    }
    //props: [],
    // propsData: {},
    // computed: {},
    // methods: {},
    // watch: {},
    // Options / DOM
    // el () {},
    // template: '',
    // render () {},
    // Options / Lifecycle Hooks
    // created () {},
    // mounted() {},
    // updated () {},
    // activated () {},
    // deactivated () {},
    // beforeDestroy () {},
    // destroyed () {},
    // Options / Assets
    //directives: {},
    // filters: {},
}
</script>
<style lang="less"
       scoped>
/deep/ .el-dialog .el-dialog__body {
    padding: 20px 20px 0 20px;
}
</style>
