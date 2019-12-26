<template>
    <div class="confirm">
        <el-button type="primary"
                   @click="openConfirm">confirm
        </el-button>
        <el-button type="danger"
                   @click="openAlert">alert
        </el-button>
    </div>
</template>
<script>
export default {
    // Options / Data
    // components: {},
    //data() {},
    //props: [],
    // propsData: {},
    // computed: {},
    methods: {
        async openConfirm() {
            let result = await this.$confirm('此操作将永久Confirm, 是否继续?', 'Confirm提示', {})
            console.log(result)//true/false
        },
        async openAlert() {
            let result = await this.$alert('确定删除Alert？', '删除', {
                confirmButtonClass: 'el-button--warning',
            })
            console.log(result)//true/false
        }
    },
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
