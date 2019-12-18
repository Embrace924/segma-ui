<template>
    <div>
        <el-button>default</el-button>
        <el-button disabled>disabled</el-button>
        <el-button loading="true">loading</el-button>
        <br>
        <el-button type="primary"
                   size="mini">mini
        </el-button>
        <el-button type="primary"
                   size="small">small
        </el-button>

        <el-button type="primary"
                   size="medium">medium
        </el-button>
        <el-button type="primary"
                   size="small"
                   plain>plain
        </el-button>
        <el-button type="primary"
                   loading="true">
        </el-button>
        <el-button type="primary"
                   loading="true"
                   plain>
        </el-button>
        <br>
        <el-button type="danger"
                   size="mini">mini
        </el-button>
        <el-button type="danger"
                   size="small">small
        </el-button>

        <el-button type="danger"
                   size="medium">medium
        </el-button>
        <el-button type="danger"
                   size="small"
                   plain>plain
        </el-button>
        <el-button type="danger"
                   size="small"
                   :loading="true">
        </el-button>
        <el-button type="danger"
                   size="small"
                   :loading="true"
                   plain>
        </el-button>
        <br>
        <el-button type="success"
                   size="mini">mini
        </el-button>
        <el-button type="success"
                   size="small">small
        </el-button>

        <el-button type="success"
                   size="medium">medium
        </el-button>
        <el-button type="success"
                   size="small"
                   plain>plain
        </el-button>
        <el-button type="success"
                   size="small"
                   :loading="true">
        </el-button>
        <el-button type="success"
                   size="small"
                   :loading="true"
                   plain>
        </el-button>
        <br>
        <el-button type="warning"
                   size="mini">mini
        </el-button>
        <el-button type="warning"
                   size="small">small
        </el-button>

        <el-button type="warning"
                   size="medium">medium
        </el-button>
        <el-button type="warning"
                   size="small"
                   plain>plain
        </el-button>
        <el-button type="warning"
                   size="small"
                   :loading="true">
        </el-button>
        <el-button type="warning"
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