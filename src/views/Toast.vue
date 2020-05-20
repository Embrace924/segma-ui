<!--Toast-->
<template>
    <div class="Toast">
        <el-button :plain="true"
                   size="small"
                   @click="open2">成功
        </el-button>
        <el-button :plain="true"
                   size="small"
                   @click="open3">警告
        </el-button>

        <el-button :plain="true"
                   size="small"
                   @click="open4">错误
        </el-button>

        <!--<el-button type="primary"-->
        <!--size="small"-->
        <!--@click="openConfirm">confirm-->
        <!--</el-button>-->
        <!--<el-button type="info"-->
        <!--size="small"-->
        <!--@click="openAlert">alert-->
        <!--</el-button>-->
    </div>
</template>

<script>
export default {
    name: 'Toast',
    methods: {

        open2() {
            this.$message({
                message: '这是一条成功消息，会主动消失。',
                type: 'success',
                //关闭时长
                duration: 5000
            });
        },

        open3() {
            this.$message({
                message: '这是一条询问消息，会主动消失。',
                type: 'warning',
            });
        },

        open4() {
            this.$message.error('这是一条异常消息，会主动消失。');
        },
        async openConfirm() {
            let result = await this.$confirm('此操作将永久Confirm, 是否继续?', 'Confirm提示', { cancelButtonClass: ' el-button--info' })
            console.log(result)//true/false
        },
        async openAlert() {
            let result = await this.$alert('确定删除Alert？', '删除', {})
            console.log(result)//true/false
        },
    }
};
</script>

 