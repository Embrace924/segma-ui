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
        openConfirm() {
            this.$confirm('此操作将永久Confirm, 是否继续?', 'Confirm提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                customClass: 'segma-message',
                cancelButtonClass: 'el-button--primary is-plain'
            }).then(() => {
                this.$message({
                    type: 'success',
                    message: '删除成功!'
                });
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
        },
        openAlert() {
            this.$alert('确定删除Alert？', {
                title: '删除',
                confirmButtonText: '确定',
                customClass: 'segma-alert',
                confirmButtonClass: 'el-button--danger',
                center: true,
                closeOnClickModal: true,
            }).then(() => {
                this.$message.success('Alert删除成功！');
            }).catch(() => {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                });
            });
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
