<template>
    <div>


        <el-button plain>default</el-button>
        <el-button :loading="true"
                   plain>loading
        </el-button>
        <el-button disabled>disabled</el-button>

        <br>
        <el-button type="primary">按钮</el-button>
        <el-button type="primary"
                   plain>次要
        </el-button>
        <el-button type="primary"
                   :loading="true">
        </el-button>
        <el-button type="primary"
                   :loading="true"
                   plain>
        </el-button>
        <br>
        <el-button type="danger">按钮
        </el-button>
        <el-button type="danger"
                   plain>次要
        </el-button>
        <el-button type="danger"
                   :loading="true">
        </el-button>
        <el-button type="danger"
                   :loading="true"
                   plain>
        </el-button>
        <br>
        <el-button type="success">按钮
        </el-button>
        <el-button type="success"
                   plain>次要
        </el-button>
        <el-button type="success"
                   :loading="true">
        </el-button>
        <el-button type="success"
                   :loading="true"
                   plain>
        </el-button>
        <br>

        <el-button type="warning">按钮
        </el-button>
        <el-button type="warning"
                   plain>次要
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
