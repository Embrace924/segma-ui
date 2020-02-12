<template>
    <div class="confirm">
        <el-button type="primary"
                   @click="openConfirm">confirm
        </el-button>
        <el-button type="danger"
                   @click="openAlert">alert
        </el-button>
        <el-button :plain="true"
                   @click="open2">成功
        </el-button>
        <el-button :plain="true"
                   @click="open3">警告
        </el-button>
        <el-button :plain="true"
                   @click="open1">消息
        </el-button>
        <el-button :plain="true"
                   @click="open4">错误
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
        },
        open1() {
            this.$message({
                showClose: true,
                message: '这是一条消息提示', duration: 0

            });
        },

        open2() {
            this.$message({
                showClose: true,
                message: '恭喜你，这是一条成功消息',
                type: 'success',
                duration: 0
            });
        },

        open3() {
            this.$message({
                showClose: true,
                message: '警告哦，这是一条警告消息',
                type: 'warning',
                duration: 0

            });
        },

        open4() {
            this.$message({
                showClose: true,
                message: '错了哦，这是一条错误消息',
                type: 'error',
                duration: 0

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
