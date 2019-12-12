<template>
    <div>
        <div @click="openConfirm">confirm</div>
        <div @click="openAlert">alert</div>

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
            this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                customClass: 'segma-message',
                type: 'warning'
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
            this.$alert('确定删除该表？', {
                title: '删除',
                confirmButtonText: '确定',
                customClass: 'segma-alert warning',
                center: true,
                closeOnClickModal: true,
            }).then(() => {
                this.$message.success('表删除成功！');
            }).catch(() => {

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
