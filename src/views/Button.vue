<template>
    <div>
        <el-button plain
                   size="small">default
        </el-button>
        <el-button :loading="true"
                   plain
                   size="small">loading
        </el-button>
        <el-button disabled
                   size="small">disabled
        </el-button>

        <br>
        <el-button type="primary"
                   size="small">按钮
        </el-button>
        <el-button type="primary"
                   size="small"
                   plain>次要
        </el-button>
        <el-button type="primary"
                   size="small"
                   :loading="true">
        </el-button>
        <el-button type="primary"
                   size="small"
                   :loading="true"
                   plain>
        </el-button>

    </div>
</template>

<script>
export default {
    name: "Button"
}
</script>

<style lang="less"
       scoped>

.el-button {
    margin-bottom: 10px;
}
</style>
