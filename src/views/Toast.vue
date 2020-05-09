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
        }
    }
};
</script>

 