<template>
    <div>
        <el-button type="primary"
                   size="mini">Button
        </el-button>
        <el-button type="primary"
                   size="small">Button
        </el-button>
        <el-button type="primary"
                   size="medium">Button
        </el-button>
        <el-button type="primary"
                   size="medium"
                   plain>Button
        </el-button>
        <el-button type="primary"
                   disabled>Button
        </el-button>

        <el-button disabled>Button</el-button>
        <el-button type="primary"
                   size="small"
                   :loading="true">
        </el-button>
        <el-button type="primary"
                   size="small"
                   :loading="true"
                   plain>
        </el-button>
        <br>
        <el-button type="danger"
                   size="mini">Button
        </el-button>
        <el-button type="danger"
                   size="small">Button
        </el-button>
        <el-button type="danger"
                   size="medium">Button
        </el-button>
        <el-button type="danger"
                   size="medium"
                   plain>Button
        </el-button>
        <el-button type="danger"
                   disabled>Button
        </el-button>
        <el-button disabled>Button</el-button>
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
                   size="mini">Button
        </el-button>
        <el-button type="success"
                   size="small">Button
        </el-button>
        <el-button type="success"
                   size="medium">Button
        </el-button>
        <el-button type="success"
                   size="medium"
                   plain>Button
        </el-button>
        <el-button type="success"
                   disabled>Button
        </el-button>
        <el-button disabled>Button</el-button>
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
                   size="mini">Button
        </el-button>
        <el-button type="warning"
                   size="small">Button
        </el-button>
        <el-button type="warning"
                   size="medium">Button
        </el-button>
        <el-button type="warning"
                   size="medium"
                   plain>Button
        </el-button>
        <el-button type="warning"
                   disabled>Button
        </el-button>
        <el-button disabled>Button</el-button>
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
@import "../assets/css/segma_btn.less";

.el-button {
    margin-bottom: 10px;
}
</style>