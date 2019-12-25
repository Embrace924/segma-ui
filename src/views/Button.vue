<template>
    <div>
        <el-button>default</el-button>
        <el-button disabled>disabled</el-button>
        <el-button :loading="true">loading</el-button>
        <br>
        <el-button type="primary"
                   size="mini">mini
        </el-button>
        <el-button type="primary">small
        </el-button>
        <el-button type="primary"
                   size="medium">medium
        </el-button>
        <el-button type="primary"
                   plain>plain
        </el-button>
        <el-button type="primary"
                   :loading="true">
        </el-button>
        <el-button type="primary"
                   :loading="true"
                   plain>
        </el-button>
        <br>
        <el-button type="danger"
                   size="mini">mini
        </el-button>
        <el-button type="danger">small
        </el-button>

        <el-button type="danger"
                   size="medium">medium
        </el-button>
        <el-button type="danger"
                   plain>plain
        </el-button>
        <el-button type="danger"
                   :loading="true">
        </el-button>
        <el-button type="danger"
                   :loading="true"
                   plain>
        </el-button>
        <br>
        <el-button type="success"
                   size="mini">mini
        </el-button>
        <el-button type="success">small
        </el-button>

        <el-button type="success"
                   size="medium">medium
        </el-button>
        <el-button type="success"
                   plain>plain
        </el-button>
        <el-button type="success"
                   :loading="true">
        </el-button>
        <el-button type="success"
                   :loading="true"
                   plain>
        </el-button>
        <br>
        <el-button type="warning"
                   size="mini">mini
        </el-button>
        <el-button type="warning">small
        </el-button>

        <el-button type="warning"
                   size="medium">medium
        </el-button>
        <el-button type="warning"
                   plain>plain
        </el-button>
        <el-button type="warning"
                   :loading="true">
        </el-button>
        <el-button type="warning"
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