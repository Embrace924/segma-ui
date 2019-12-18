<template>
    <div>
        <el-button type="text"
                   @click="dialogVisible = true">点击打开 Dialog
        </el-button>
        <el-dialog title="新增商品分类"
                   :visible.sync="dialogVisible"
                   width="500px"
                   class="segma-dialog">
            <el-form ref="ruleForm"
                     :model="ruleForm"
                     :rules="rules"
                     label-width="80px">
                <el-form-item label="商品分类"
                              prop="categoryName">
                    <el-input v-model="ruleForm.categoryName"
                              size="small"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer"
                  class="dialog-footer">
                        <el-button type="primary"
                                   plain
                                   @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary"
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
                categoryName: ''

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
