<template>
    <div>
        <el-button type="text"
                   @click="dialogVisible = true">点击打开 Dialog
        </el-button>
        <div class="segma-dialog">
            <el-dialog title="新增商品分类"
                       :visible.sync="dialogVisible"
                       class="segma-xl">
                <el-form ref="ruleForm"
                         :model="ruleForm"
                         :rules="rules"
                         label-width="80px"
                         class="demo-ruleForm">
                    <el-form-item label="商品分类"
                                  prop="categoryName">
                        <el-input v-model="ruleForm.categoryName"></el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer"
                      class="dialog-footer">
                    <div class="segma-button">
                        <div class="b50-btn">
                            <el-button class="segma-s"
                                       @click="dialogVisible = false">取 消</el-button>
                            <el-button class="segma-s primary"
                                       @click="dialogVisible=false">确 定</el-button>
                        </div>
                    </div>
                </span>
            </el-dialog>
        </div>
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
