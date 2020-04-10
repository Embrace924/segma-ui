<template>
    <div>
        <el-button type="text"
                   @click="dialogVisible = true">点击打开 Dialog
        </el-button>
        <el-dialog title="新增商品分类"
                   :visible.sync="dialogVisible"
                   width="550px"
                   class="segma-dialog">
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
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                        <el-button plain
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
    padding: 30px 30px 8px 30px;
}
</style>
